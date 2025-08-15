"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionProps } from "../types";
import "../css/home.css";

interface CertificateProps extends SectionProps {
  featuredCertificate?: {
    image: string;
    alt: string;
  };
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  iconSrc?: string;
  iconAlt?: string;
}

/**
 * Certificate section component that displays a featured certificate
 * with description and call-to-action button
 */
const Certificate: React.FC<CertificateProps> = ({
  className = "",
  featuredCertificate = {
    image: "/cert1.jpg",
    alt: "Featured Certificate"
  },
  description = "All certificates were obtained during my college years, reflecting my commitment to learning and personal growth through dedicated effort and perseverance.",
  buttonText = "View Certificates",
  buttonHref = "/certificate",
  iconSrc = "/cert.svg",
  iconAlt = "Certificate Icon",
  title = "Certificates",
  ...props
}) => {
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      className={className}
      aria-label="Certificates section"
      {...props}
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h2 className="heading-lg gradient-text-primary">{title}</h2>
          {iconSrc && (
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <Image
                src={iconSrc}
                alt={iconAlt}
                width={40}
                height={40}
                className="w-10 h-10 text-primary-400"
              />
            </motion.div>
          )}
        </div>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content Section */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="card-modern p-8 space-y-6">
            <p className="text-body leading-relaxed">
              All <span className="font-bold" style={{ color: '#7484dd' }}>certificates</span> {description.replace(/^All certificates?\s*/i, '')}
            </p>
            
            {/* Call to Action Button */}
            <Link href={buttonHref} aria-label={`${buttonText} - View all certificates`}>
              <motion.div
                className="btn-primary inline-flex items-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span>{buttonText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Featured Certificate Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.03, rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-6 shadow-hard">
              <Image
                src={featuredCertificate.image}
                alt={featuredCertificate.alt}
                width={500}
                height={500}
                className="w-full h-auto rounded-xl shadow-medium"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
