# Enhanced Folder Structure & Naming Convention Proposal

## Current Issues
- Inconsistent naming conventions (camelCase, kebab-case, unclear abbreviations)
- Flat component structure
- Poor asset organization
- Unclear file names
- Mixed concerns in folders

## Proposed Enhanced Structure

```
alidev/
├── app/
│   ├── (main)/                    # Route group for main pages
│   │   ├── page.tsx              # Home page
│   │   ├── about/
│   │   │   └── page.tsx          # About page (if needed)
│   │   ├── projects/
│   │   │   └── page.tsx          # Projects page (if needed)
│   │   └── contact/
│   │       └── page.tsx          # Contact page (if needed)
│   ├── (tools)/                   # Route group for utility pages
│   │   ├── bitlocker/
│   │   │   └── page.tsx          # BitLocker tools
│   │   ├── key-generator/
│   │   │   └── page.tsx          # TPM Key Generator
│   │   └── certificates/
│   │       └── page.tsx          # Certificates showcase
│   ├── components/
│   │   ├── layout/               # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   ├── Footer/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── SocialLinks.tsx
│   │   │   │   └── ContactInfo.tsx
│   │   │   └── Sidebar/
│   │   │       └── index.tsx
│   │   ├── sections/             # Main page sections
│   │   │   ├── Hero/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── HeroContent.tsx
│   │   │   │   └── SocialLinks.tsx
│   │   │   ├── About/
│   │   │   │   ├── index.tsx
│   │   │   │   └── AboutContent.tsx
│   │   │   ├── Education/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── EducationCard.tsx
│   │   │   │   └── EducationTimeline.tsx
│   │   │   ├── Projects/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── ProjectGrid.tsx
│   │   │   │   └── ProjectActions.tsx
│   │   │   ├── Skills/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── TechSkills.tsx
│   │   │   │   ├── AdditionalSkills.tsx
│   │   │   │   └── SkillCard.tsx
│   │   │   ├── Certificates/
│   │   │   │   ├── index.tsx
│   │   │   │   └── CertificateCard.tsx
│   │   │   └── Contact/
│   │   │       ├── index.tsx
│   │   │       ├── ContactForm.tsx
│   │   │       └── ContactInfo.tsx
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── Button/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── PrimaryButton.tsx
│   │   │   │   └── SecondaryButton.tsx
│   │   │   ├── Card/
│   │   │   │   ├── index.tsx
│   │   │   │   └── GlassCard.tsx
│   │   │   ├── Icon/
│   │   │   │   ├── index.tsx
│   │   │   │   └── TechIcon.tsx
│   │   │   ├── Animation/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── FadeIn.tsx
│   │   │   │   └── SlideIn.tsx
│   │   │   └── Form/
│   │   │       ├── index.tsx
│   │   │       ├── Input.tsx
│   │   │       └── TextArea.tsx
│   │   └── shared/               # Shared utilities
│   │       ├── constants/
│   │       │   ├── index.ts
│   │       │   ├── personal-info.ts
│   │       │   ├── projects.ts
│   │       │   ├── skills.ts
│   │       │   ├── education.ts
│   │       │   └── certificates.ts
│   │       ├── types/
│   │       │   ├── index.ts
│   │       │   ├── components.ts
│   │       │   ├── data.ts
│   │       │   └── api.ts
│   │       ├── utils/
│   │       │   ├── index.ts
│   │       │   ├── animations.ts
│   │       │   ├── validation.ts
│   │       │   └── helpers.ts
│   │       └── hooks/
│   │           ├── index.ts
│   │           ├── useScrollPosition.ts
│   │           ├── useIntersectionObserver.ts
│   │           └── useFormValidation.ts
│   ├── styles/
│   │   ├── globals.css
│   │   ├── components/
│   │   │   ├── buttons.css
│   │   │   ├── cards.css
│   │   │   └── animations.css
│   │   └── utilities/
│   │       ├── typography.css
│   │       └── spacing.css
│   ├── lib/
│   │   ├── emailjs.ts
│   │   ├── animations.ts
│   │   └── validation.ts
│   ├── layout.tsx
│   └── globals.css
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   ├── hero-profile.jpg
│   │   │   ├── about-profile.jpg
│   │   │   └── avatar.jpg
│   │   ├── projects/
│   │   │   ├── alma-villa-portal.jpg
│   │   │   ├── b-dazzle-cafe.jpg
│   │   │   ├── pet-taxi-app.jpg
│   │   │   ├── e-barangay-system.jpg
│   │   │   ├── watch-interface.jpg
│   │   │   ├── portfolio-website.jpg
│   │   │   └── coffee-shop-app.jpg
│   │   ├── education/
│   │   │   ├── university-makati-logo.png
│   │   │   ├── bansud-institute-logo.png
│   │   │   └── elementary-school-logo.png
│   │   ├── certificates/
│   │   │   ├── certificate-1.jpg
│   │   │   ├── certificate-2.jpg
│   │   │   ├── certificate-3.png
│   │   │   ├── certificate-4.jpg
│   │   │   ├── certificate-5.png
│   │   │   ├── certificate-6.jpg
│   │   │   └── certificate-7.png
│   │   ├── skills/
│   │   │   ├── frontend/
│   │   │   │   ├── typescript.svg
│   │   │   │   ├── javascript.svg
│   │   │   │   ├── react.svg
│   │   │   │   ├── nextjs.svg
│   │   │   │   ├── html5.svg
│   │   │   │   ├── css3.svg
│   │   │   │   └── tailwind.svg
│   │   │   ├── backend/
│   │   │   │   ├── nodejs.svg
│   │   │   │   └── laravel.svg
│   │   │   └── design/
│   │   │       └── figma.svg
│   │   └── icons/
│   │       ├── social/
│   │       │   ├── github.svg
│   │       │   ├── linkedin.svg
│   │       │   ├── facebook.svg
│   │       │   └── twitter.svg
│   │       ├── ui/
│   │       │   ├── code.svg
│   │       │   ├── certificate.svg
│   │       │   ├── graduation-cap.svg
│   │       │   └── location.svg
│   │       └── logo/
│   │           ├── logo-primary.svg
│   │           ├── logo-secondary.svg
│   │           └── favicon.ico
│   └── assets/
│       └── documents/
│           └── resume.pdf
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── README.md
```

## Naming Convention Standards

### Files & Folders
- **Components**: PascalCase (e.g., `ProjectCard.tsx`)
- **Pages**: kebab-case (e.g., `key-generator/page.tsx`)
- **Utilities**: camelCase (e.g., `useScrollPosition.ts`)
- **Constants**: kebab-case (e.g., `personal-info.ts`)
- **Images**: kebab-case with descriptive names (e.g., `alma-villa-portal.jpg`)

### Component Structure
```typescript
// Component folder structure
ComponentName/
├── index.tsx          # Main component export
├── ComponentName.tsx  # Main component logic
├── SubComponent.tsx   # Sub-components
├── types.ts          # Component-specific types
├── constants.ts      # Component-specific constants
└── styles.css        # Component-specific styles (if needed)
```

### Import/Export Patterns
```typescript
// Barrel exports for components
// components/sections/Projects/index.tsx
export { default as Projects } from './Projects';
export { default as ProjectCard } from './ProjectCard';
export { default as ProjectGrid } from './ProjectGrid';

// Main import
import { Projects, ProjectCard } from '@/components/sections/Projects';
```

## Migration Strategy

### Phase 1: Create New Structure
1. Create new folder structure
2. Move and rename files systematically
3. Update imports and exports

### Phase 2: Refactor Components
1. Break down large components
2. Extract reusable UI components
3. Implement proper TypeScript interfaces

### Phase 3: Optimize Assets
1. Rename and organize images
2. Implement proper image optimization
3. Add proper alt texts and metadata

### Phase 4: Documentation
1. Update README files
2. Add component documentation
3. Create development guidelines

## Benefits of New Structure

1. **Scalability**: Easy to add new features and components
2. **Maintainability**: Clear separation of concerns
3. **Reusability**: Shared components and utilities
4. **Performance**: Better code splitting and lazy loading
5. **Developer Experience**: Intuitive folder structure
6. **Team Collaboration**: Consistent naming conventions
7. **SEO**: Better organized assets and metadata
