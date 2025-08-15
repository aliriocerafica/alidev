# Components Documentation

This directory contains all reusable UI components for the portfolio application. Each component follows modern React patterns with TypeScript interfaces, proper accessibility, and clean separation of concerns.

## Component Architecture

### Design Principles
- **Props-based configuration**: All components accept props for customization
- **TypeScript interfaces**: Strict typing for better developer experience
- **Accessibility first**: ARIA labels, semantic HTML, and keyboard navigation
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Animation ready**: Framer Motion integration for smooth interactions

### Common Props Pattern
All components extend `SectionProps` which includes:
```typescript
interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  showDivider?: boolean;
}
```

## Component Library

### 📜 Certificate Component
**File**: `certificate.tsx`

Displays a featured certificate with description and call-to-action.

```typescript
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
```

**Features**:
- Featured certificate display
- Customizable description and CTA
- Image optimization with Next.js Image
- Hover animations with Framer Motion

**Usage**:
```jsx
<Certificate 
  title="My Certifications"
  featuredCertificate={{ image: "/cert1.jpg", alt: "AWS Certification" }}
  description="Professional certifications in cloud computing"
  buttonText="View All"
  buttonHref="/certificates"
/>
```

### 🎓 Education Component
**File**: `education.tsx`

Showcases educational background with institution details.

```typescript
interface EducationProps extends SectionProps {
  education?: Education;
  buttonText?: string;
  buttonHref?: string;
  showDivider?: boolean;
}
```

**Features**:
- Institution logo with hover effects
- Degree and major information
- Academic year display
- Customizable call-to-action

**Usage**:
```jsx
<Education 
  title="Education"
  education={educationData}
  buttonText="View Transcript"
  showDivider={true}
/>
```

### 💼 Works Component
**File**: `works.tsx`

Portfolio projects grid with project cards and action buttons.

```typescript
interface WorksProps extends SectionProps {
  projects?: Project[];
  gridColumns?: {
    default: number;
    sm: number;
    lg: number;
  };
  showDivider?: boolean;
}
```

**Features**:
- Responsive project grid
- Individual project cards with hover effects
- Multiple action buttons (Figma, GitHub, Live Demo)
- Empty state handling
- Lazy loading for images

**Usage**:
```jsx
<Works 
  title="My Projects"
  projects={projectsData}
  gridColumns={{ default: 1, sm: 2, lg: 3 }}
  showDivider={true}
/>
```

### 🛠️ Tech Component
**File**: `tech.tsx`

Technical skills showcase with categorization support.

```typescript
interface TechProps extends SectionProps {
  skills?: TechSkill[];
  categories?: ('frontend' | 'backend' | 'design' | 'other')[];
  showCategories?: boolean;
  onSkillHover?: (skill: TechSkill) => void;
  onSkillHoverExit?: () => void;
}
```

**Features**:
- Skill categorization
- Interactive hover effects
- Category filtering
- Animation with intersection observer
- Accessibility with proper ARIA labels

**Usage**:
```jsx
<Tech 
  skills={techSkillsData}
  categories={['frontend', 'design']}
  showCategories={true}
  onSkillHover={(skill) => console.log(skill.name)}
/>
```

### 📧 Contact Component
**File**: `contact.tsx`

Contact form with validation and EmailJS integration.

```typescript
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
```

**Features**:
- Client-side form validation
- EmailJS integration
- Loading states and error handling
- Accessibility with proper form labels
- Success/error notifications

**Usage**:
```jsx
<Contact 
  title="Get In Touch"
  emailJsConfig={{
    serviceId: "service_id",
    templateId: "template_id", 
    publicKey: "public_key"
  }}
  onSubmitSuccess={(data) => analytics.track('contact_form_success')}
/>
```

### 🔧 TechIcon Component
**File**: `techIcon.tsx`

Reusable tech skill icon with hover overlay.

```typescript
interface TechIconProps {
  src: string;
  alt: string;
  name: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
```

**Features**:
- Icon with name overlay on hover
- Framer Motion animations
- Accessible interaction states

### 🗣️ Navigation Components

#### Navbar Component
**File**: `navbar.tsx`

Main site navigation with responsive mobile menu.

**Features**:
- Smooth scroll navigation
- Mobile-responsive hamburger menu
- Dynamic styling based on scroll position
- Logo and contact CTA

#### Nav Component (Sidebar)
**File**: `nav.tsx`

Sidebar navigation for special sections.

**Features**:
- Collapsible sidebar
- Icon-based navigation
- Auto-close on small screens

### 🦶 Footer Component
**File**: `footer.tsx`

Site footer with contact information and social links.

**Features**:
- Contact details display
- Social media links
- Gradient background styling

## Data Integration

### Constants File
**File**: `../data/constants.ts`

Centralized data store for:
- Personal information
- Social links
- Education data
- Certificates
- Projects
- Tech skills
- Animation variants

### Types File
**File**: `../types/index.ts`

TypeScript interfaces for:
- Component props
- Data structures
- Animation variants
- Form data

## Styling Approach

### Tailwind CSS
- Utility-first CSS framework
- Responsive design classes
- Custom gradient classes
- Dark theme support

### Custom CSS
**File**: `../css/home.css`

Custom styles for:
- Gradient text effects
- Animations and keyframes
- Component-specific styling

## Animation System

### Framer Motion Integration
- Smooth page transitions
- Hover and click animations
- Intersection observer animations
- Accessible motion preferences

### Animation Variants
Predefined animation variants in constants:
- `fadeInUp` - Bottom to top entrance
- `fadeInLeft` - Left to right entrance  
- `fadeInRight` - Right to left entrance
- `scaleIn` - Scale entrance effect

## Accessibility Features

### ARIA Support
- Proper semantic HTML
- ARIA labels and descriptions
- Screen reader support
- Keyboard navigation

### Form Accessibility
- Required field indicators
- Error message associations
- Focus management
- Loading state announcements

## Performance Optimizations

### Image Optimization
- Next.js Image component
- Lazy loading for non-critical images
- Priority loading for above-fold content
- Responsive image sizing

### Code Splitting
- Component-level imports
- Dynamic imports where applicable
- Tree shaking optimization

## Best Practices

### Component Structure
```
Component/
├── ComponentName.tsx     # Main component
├── types.ts             # Component-specific types (if needed)
├── constants.ts         # Component-specific constants
└── hooks/               # Custom hooks (if needed)
```

### Props Design
- Sensible defaults for all optional props
- Extend base interfaces where applicable
- Use union types for controlled options
- Provide callback props for customization

### Error Handling
- Graceful fallbacks for missing data
- Error boundaries where appropriate
- User-friendly error messages
- Development-time warnings

### Testing Considerations
- Components accept test IDs via props
- Accessible selectors available
- Mockable external dependencies
- Isolated component state

## Usage Examples

### Basic Section
```jsx
import { Certificate, Education, Works, Tech, Contact } from './components';

export default function HomePage() {
  return (
    <main>
      <Education />
      <Works />
      <Tech />
      <Certificate />
      <Contact />
    </main>
  );
}
```

### Custom Configuration
```jsx
import { Works, Tech } from './components';
import { MY_PROJECTS, FRONTEND_SKILLS } from './data/constants';

export default function PortfolioPage() {
  return (
    <main>
      <Works 
        title="Featured Projects"
        projects={MY_PROJECTS.filter(p => p.featured)}
        gridColumns={{ default: 1, sm: 1, lg: 2 }}
      />
      <Tech 
        skills={FRONTEND_SKILLS}
        categories={['frontend']}
        showCategories={false}
      />
    </main>
  );
}
```

## Migration Guide

### From Old Components
1. Import new component interfaces
2. Update props to use new structure
3. Replace hardcoded data with constants
4. Add TypeScript types
5. Test accessibility features

### Breaking Changes
- All components now require proper TypeScript props
- Hardcoded strings moved to configurable props
- Class names may have changed for better consistency
- Some props renamed for clarity

## Contributing

### Adding New Components
1. Create component file with proper TypeScript interface
2. Add component documentation to this README
3. Include accessibility features
4. Add animation support where appropriate
5. Create usage examples
6. Update type definitions

### Component Guidelines
- Follow established naming conventions
- Include JSDoc comments
- Implement proper error handling
- Support responsive design
- Consider performance implications
- Write accessible markup
