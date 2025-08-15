"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { SectionProps, ContactFormData } from "../types";
import "../css/home.css";

interface ContactProps extends SectionProps {
  title?: string;
  emailJsConfig?: {
    serviceId: string;
    templateId: string;
    publicKey: string;
    recipientName?: string;
  };
  onSubmitSuccess?: (data: ContactFormData) => void;
  onSubmitError?: (error: Error) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

interface FormState {
  data: ContactFormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

/**
 * Contact form component with validation and EmailJS integration
 */
const Contact: React.FC<ContactProps> = ({
  className = "",
  title = "Contact Me",
  emailJsConfig = {
    serviceId: "service_04g4vib",
    templateId: "template_4g87k1n",
    publicKey: "OSA-4KXYSqHWlOiW9",
    recipientName: "Alejandro"
  },
  onSubmitSuccess,
  onSubmitError,
  ...props
}) => {
  const [formState, setFormState] = useState<FormState>({
    data: {
      name: "",
      email: "",
      message: "",
    },
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
  });

  // Form validation
  const validateForm = useCallback((data: ContactFormData): FormErrors => {
    const errors: FormErrors = {};

    // Name validation
    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!data.message.trim()) {
      errors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  }, []);

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [name]: value },
      // Clear field-specific error when user starts typing
      errors: { ...prev.errors, [name]: undefined, submit: undefined }
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm(formState.data);
    
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({ ...prev, errors }));
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, errors: {} }));

    try {
      const response = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          to_name: emailJsConfig.recipientName,
          from_name: formState.data.name,
          from_email: formState.data.email,
          message: formState.data.message,
        },
        emailJsConfig.publicKey
      );

      console.log("Email sent successfully!", response.status, response.text);
      
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
        data: { name: "", email: "", message: "" }
      }));

      onSubmitSuccess?.(formState.data);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);

    } catch (error) {
      console.error("Failed to send email:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to send email. Please try again later.";
      
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        errors: { submit: errorMessage }
      }));

      onSubmitError?.(error instanceof Error ? error : new Error(errorMessage));
    }
  }, [formState.data, validateForm, emailJsConfig, onSubmitSuccess, onSubmitError]);

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      className={`section-padding ${className}`}
      aria-label="Contact form section"
      {...props}
    >
      <div className="container-modern">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg gradient-text-primary mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h2>
          <div className="w-20 h-1 bg-[#7484dd] mx-auto rounded-full mb-6" />
          <motion.p 
            className="text-body text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's work together! Send me a message and I'll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="card-modern p-8 space-y-8">
              <h3 className="heading-md text-[#7484dd] mb-6">Get in Touch</h3>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#7484dd]/20 rounded-full flex items-center justify-center group-hover:bg-[#7484dd]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#7484dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-300 text-sm">Email</p>
                    <p className="text-white font-medium">ceraficaalejandrojr@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#7484dd]/20 rounded-full flex items-center justify-center group-hover:bg-[#7484dd]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#7484dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-300 text-sm">Location</p>
                    <p className="text-white font-medium">Buting Pasig City Metro Manila</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-[#7484dd]/20 rounded-full flex items-center justify-center group-hover:bg-[#7484dd]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#7484dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-300 text-sm">Response Time</p>
                    <p className="text-white font-medium">Usually within 24 hours</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-neutral-700">
                <p className="text-neutral-300 text-sm mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/aliriocerafica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-[#7484dd]/20 transition-colors group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 fill-white group-hover:fill-[#7484dd]" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/aliriocerafica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-[#7484dd]/20 transition-colors group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 fill-white group-hover:fill-[#7484dd]" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://facebook.com/aliriocerafica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-[#7484dd]/20 transition-colors group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 fill-white group-hover:fill-[#7484dd]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="card-modern p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name <span className="text-[#7484dd]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.data.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 ${
                      formState.errors.name 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-neutral-600 focus:border-[#7484dd] focus:ring-[#7484dd]/20'
                    }`}
                    placeholder="Your full name"
                    aria-invalid={!!formState.errors.name}
                    aria-describedby={formState.errors.name ? "name-error" : undefined}
                    disabled={formState.isSubmitting}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                {formState.errors.name && (
                  <motion.p 
                    id="name-error" 
                    className="text-red-400 text-sm mt-2 flex items-center gap-2" 
                    role="alert"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formState.errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email <span className="text-[#7484dd]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.data.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 ${
                      formState.errors.email 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-neutral-600 focus:border-[#7484dd] focus:ring-[#7484dd]/20'
                    }`}
                    placeholder="your.email@example.com"
                    aria-invalid={!!formState.errors.email}
                    aria-describedby={formState.errors.email ? "email-error" : undefined}
                    disabled={formState.isSubmitting}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                {formState.errors.email && (
                  <motion.p 
                    id="email-error" 
                    className="text-red-400 text-sm mt-2 flex items-center gap-2" 
                    role="alert"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formState.errors.email}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message <span className="text-[#7484dd]">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.data.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-400 transition-all duration-200 focus:outline-none focus:ring-2 resize-vertical ${
                      formState.errors.message 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-neutral-600 focus:border-[#7484dd] focus:ring-[#7484dd]/20'
                    }`}
                    placeholder="Tell me about your project or just say hello! I'd love to hear from you."
                    aria-invalid={!!formState.errors.message}
                    aria-describedby={formState.errors.message ? "message-error" : undefined}
                    disabled={formState.isSubmitting}
                  />
                  <div className="absolute right-3 top-3">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                {formState.errors.message && (
                  <motion.p 
                    id="message-error" 
                    className="text-red-400 text-sm mt-2 flex items-center gap-2" 
                    role="alert"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formState.errors.message}
                  </motion.p>
                )}
              </div>

              {/* Status Messages */}
              {formState.isSubmitted && (
                <motion.div 
                  className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-center gap-3" 
                  role="alert"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm text-green-300">I'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {formState.errors.submit && (
                <motion.div 
                  className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3" 
                  role="alert"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Failed to send message</p>
                    <p className="text-sm text-red-300">{formState.errors.submit}</p>
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                className={`w-full bg-[#7484dd] hover:bg-[#6366f1] text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 ${
                  formState.isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-lg hover:shadow-[#7484dd]/25'
                }`}
                variants={buttonVariants}
                whileHover={formState.isSubmitting ? {} : "hover"}
                whileTap={formState.isSubmitting ? {} : "tap"}
                disabled={formState.isSubmitting}
                aria-describedby="submit-status"
              >
                {formState.isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </motion.button>
              
              <p id="submit-status" className="sr-only">
                {formState.isSubmitting ? "Sending your message..." : "Ready to send message"}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
