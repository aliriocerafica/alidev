#!/bin/bash

# Enhanced Folder Structure Migration Script
# This script creates the new folder structure and moves files

echo "🚀 Starting Enhanced Folder Structure Migration..."

# Create backup
echo "📦 Creating backup..."
git add .
git commit -m "Backup before folder structure migration"

# Phase 1: Create new component structure
echo "📁 Creating new component directories..."

# Layout components
mkdir -p app/components/layout/Header
mkdir -p app/components/layout/Footer
mkdir -p app/components/layout/Sidebar

# Section components
mkdir -p app/components/sections/Hero
mkdir -p app/components/sections/About
mkdir -p app/components/sections/Education
mkdir -p app/components/sections/Projects
mkdir -p app/components/sections/Skills
mkdir -p app/components/sections/Certificates
mkdir -p app/components/sections/Contact

# UI components
mkdir -p app/components/ui/Button
mkdir -p app/components/ui/Card
mkdir -p app/components/ui/Icon
mkdir -p app/components/ui/Animation
mkdir -p app/components/ui/Form

# Shared utilities
mkdir -p app/components/shared/constants
mkdir -p app/components/shared/types
mkdir -p app/components/shared/utils
mkdir -p app/components/shared/hooks

# Styles
mkdir -p app/styles/components
mkdir -p app/styles/utilities

# Lib
mkdir -p app/lib

# Route groups
mkdir -p app/\(main\)
mkdir -p app/\(tools\)

# Public images structure
mkdir -p public/images/profile
mkdir -p public/images/projects
mkdir -p public/images/education
mkdir -p public/images/certificates
mkdir -p public/images/skills/frontend
mkdir -p public/images/skills/backend
mkdir -p public/images/skills/design
mkdir -p public/images/icons/social
mkdir -p public/images/icons/ui
mkdir -p public/images/icons/logo
mkdir -p public/assets/documents

echo "✅ Directory structure created!"

# Phase 2: Move components (with backup)
echo "📋 Moving components..."

# Backup original components
cp -r app/components app/components.backup

# Move layout components
if [ -f "app/components/navbar.tsx" ]; then
    cp app/components/navbar.tsx app/components/layout/Header/Header.tsx
    echo "✅ Moved navbar.tsx → Header/Header.tsx"
fi

if [ -f "app/components/footer.tsx" ]; then
    cp app/components/footer.tsx app/components/layout/Footer/Footer.tsx
    echo "✅ Moved footer.tsx → Footer/Footer.tsx"
fi

if [ -f "app/components/nav.tsx" ]; then
    cp app/components/nav.tsx app/components/layout/Sidebar/Sidebar.tsx
    echo "✅ Moved nav.tsx → Sidebar/Sidebar.tsx"
fi

# Move section components
if [ -f "app/components/works.tsx" ]; then
    cp app/components/works.tsx app/components/sections/Projects/Projects.tsx
    echo "✅ Moved works.tsx → Projects/Projects.tsx"
fi

if [ -f "app/components/tech.tsx" ]; then
    cp app/components/tech.tsx app/components/sections/Skills/TechSkills.tsx
    echo "✅ Moved tech.tsx → Skills/TechSkills.tsx"
fi

if [ -f "app/components/additionalSkills.tsx" ]; then
    cp app/components/additionalSkills.tsx app/components/sections/Skills/AdditionalSkills.tsx
    echo "✅ Moved additionalSkills.tsx → Skills/AdditionalSkills.tsx"
fi

if [ -f "app/components/contact.tsx" ]; then
    cp app/components/contact.tsx app/components/sections/Contact/Contact.tsx
    echo "✅ Moved contact.tsx → Contact/Contact.tsx"
fi

if [ -f "app/components/education.tsx" ]; then
    cp app/components/education.tsx app/components/sections/Education/Education.tsx
    echo "✅ Moved education.tsx → Education/Education.tsx"
fi

if [ -f "app/components/certificate.tsx" ]; then
    cp app/components/certificate.tsx app/components/sections/Certificates/Certificates.tsx
    echo "✅ Moved certificate.tsx → Certificates/Certificates.tsx"
fi

if [ -f "app/components/techIcon.tsx" ]; then
    cp app/components/techIcon.tsx app/components/ui/Icon/TechIcon.tsx
    echo "✅ Moved techIcon.tsx → ui/Icon/TechIcon.tsx"
fi

# Move data and types
if [ -f "app/data/constants.ts" ]; then
    cp app/data/constants.ts app/components/shared/constants/index.ts
    echo "✅ Moved constants.ts → shared/constants/index.ts"
fi

if [ -f "app/types/index.ts" ]; then
    cp app/types/index.ts app/components/shared/types/index.ts
    echo "✅ Moved types/index.ts → shared/types/index.ts"
fi

# Move CSS files
if [ -f "app/css/home.css" ]; then
    cp app/css/home.css app/styles/components/home.css
    echo "✅ Moved home.css → styles/components/home.css"
fi

# Move pages to route groups
if [ -f "app/page.tsx" ]; then
    cp app/page.tsx app/\(main\)/page.tsx
    echo "✅ Moved page.tsx → (main)/page.tsx"
fi

if [ -d "app/bitlock" ]; then
    cp -r app/bitlock app/\(tools\)/bitlocker
    echo "✅ Moved bitlock → (tools)/bitlocker"
fi

if [ -d "app/form" ]; then
    cp -r app/form app/\(tools\)/key-generator
    echo "✅ Moved form → (tools)/key-generator"
fi

if [ -d "app/certificate" ]; then
    cp -r app/certificate app/\(tools\)/certificates
    echo "✅ Moved certificate → (tools)/certificates"
fi

echo "✅ Component migration completed!"

# Phase 3: Create barrel exports
echo "📦 Creating barrel exports..."

# Create index files for components
cat > app/components/layout/Header/index.tsx << 'EOF'
export { default as Header } from './Header';
export { default as Navigation } from './Navigation';
export { default as MobileMenu } from './MobileMenu';
EOF

cat > app/components/layout/Footer/index.tsx << 'EOF'
export { default as Footer } from './Footer';
export { default as SocialLinks } from './SocialLinks';
export { default as ContactInfo } from './ContactInfo';
EOF

cat > app/components/sections/Projects/index.tsx << 'EOF'
export { default as Projects } from './Projects';
export { default as ProjectCard } from './ProjectCard';
export { default as ProjectGrid } from './ProjectGrid';
EOF

cat > app/components/sections/Skills/index.tsx << 'EOF'
export { default as TechSkills } from './TechSkills';
export { default as AdditionalSkills } from './AdditionalSkills';
export { default as SkillCard } from './SkillCard';
EOF

cat > app/components/sections/Contact/index.tsx << 'EOF'
export { default as Contact } from './Contact';
export { default as ContactForm } from './ContactForm';
export { default as ContactInfo } from './ContactInfo';
EOF

echo "✅ Barrel exports created!"

# Phase 4: Create README files
echo "📝 Creating documentation..."

cat > app/components/README.md << 'EOF'
# Components Directory

This directory contains all React components organized by their purpose:

## Structure

- **layout/**: Layout components (Header, Footer, Sidebar)
- **sections/**: Main page sections (Hero, About, Projects, etc.)
- **ui/**: Reusable UI components (Button, Card, Icon, etc.)
- **shared/**: Shared utilities, types, constants, and hooks

## Naming Conventions

- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Files: PascalCase for components, camelCase for utilities
- Folders: PascalCase for component folders, kebab-case for others

## Usage

Import components using barrel exports:

```typescript
import { Projects, ProjectCard } from '@/components/sections/Projects';
import { Header, Navigation } from '@/components/layout/Header';
```
EOF

cat > app/components/shared/README.md << 'EOF'
# Shared Utilities

This directory contains shared utilities, types, constants, and hooks used across the application.

## Structure

- **constants/**: Application constants and data
- **types/**: TypeScript type definitions
- **utils/**: Utility functions
- **hooks/**: Custom React hooks

## Usage

```typescript
import { PROJECTS, PERSONAL_INFO } from '@/components/shared/constants';
import { Project, TechSkill } from '@/components/shared/types';
import { validateEmail } from '@/components/shared/utils/validation';
import { useScrollPosition } from '@/components/shared/hooks/useScrollPosition';
```
EOF

echo "✅ Documentation created!"

# Phase 5: Create .gitkeep files for empty directories
echo "🔧 Creating .gitkeep files..."

find app/components -type d -empty -exec touch {}/.gitkeep \;
find app/styles -type d -empty -exec touch {}/.gitkeep \;
find app/lib -type d -empty -exec touch {}/.gitkeep \;
find public/images -type d -empty -exec touch {}/.gitkeep \;

echo "✅ .gitkeep files created!"

# Phase 6: Summary
echo ""
echo "🎉 Migration completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Update import statements in all components"
echo "2. Rename and organize image files"
echo "3. Update navigation links"
echo "4. Test all functionality"
echo "5. Remove old files after testing"
echo ""
echo "📁 New structure created:"
echo "- app/components/layout/"
echo "- app/components/sections/"
echo "- app/components/ui/"
echo "- app/components/shared/"
echo "- app/(main)/"
echo "- app/(tools)/"
echo "- public/images/"
echo ""
echo "⚠️  Original files are backed up in app/components.backup/"
echo "⚠️  Test thoroughly before removing original files"
