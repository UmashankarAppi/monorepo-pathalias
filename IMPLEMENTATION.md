# Theme Sharing Implementation Guide

## Project Structure

```
theme-sharing-monorepo/
├── apps/
│   ├── web/                    # Customer-facing web app (Port 3000)
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── layout.tsx  # Root layout with ThemeProvider
│   │   │   │   └── page.tsx    # Home page with shared components
│   │   │   └── components/     # App-specific components
│   │   ├── tsconfig.json       # TypeScript config with path aliases
│   │   └── package.json        # App dependencies
│   │
│   └── admin/                  # Admin dashboard app (Port 3001)
│       ├── src/
│       │   ├── app/
│       │   │   ├── layout.tsx  # Root layout with ThemeProvider
│       │   │   └── page.tsx    # Dashboard with admin components
│       │   └── components/
│       │       └── Sidebar.tsx # Admin-specific sidebar
│       ├── tsconfig.json       # TypeScript config with path aliases
│       └── package.json        # App dependencies
│
├── shared/                     # Shared resources
│   └── theme/                  # Simplified theme system
│       ├── theme.ts           # Main theme configuration
│       ├── tokens.ts          # Design tokens
│       ├── theme.css          # CSS custom properties
│       └── ThemeRegistry.tsx  # Theme context provider
│
├── package.json              # Root package.json with workspace scripts
└── README.md                # Project documentation
```

## Key Implementation Details

### 1. Direct Path Alias Approach

Instead of creating a separate workspace package, this implementation uses TypeScript path aliases:

```json
{
  "paths": {
    "@/*": ["./src/*"],
    "@shared/*": ["../../shared/*"]
  }
}
```

This allows importing shared resources:
```typescript
import { ThemeProvider } from '@shared/theme/ThemeProvider';
import { Header, FeatureCard } from '@shared/components';
```

### 2. Simplified Theme Architecture

#### Core Theme Files (`shared/theme/`)
- **`theme.ts`**: Complete MUI theme configuration with design tokens integration
- **`tokens.ts`**: Centralized design tokens (colors, typography, spacing, etc.)
- **`theme.css`**: CSS custom properties for theme values and utility classes
- **`ThemeRegistry.tsx`**: React context provider with theme switching functionality

#### Benefits of This Approach
- ✅ **Minimal file structure** - Only essential theme files
- ✅ **Design tokens** - Centralized token system for consistency
- ✅ **CSS custom properties** - Direct CSS access to theme values
- ✅ **MUI integration** - Full Material-UI theme configuration
- ✅ **Theme switching** - Built-in light/dark mode support

### 3. Import Usage

#### Theme Integration
```typescript
import { ThemeRegistry } from '@shared/theme/ThemeRegistry';
import { useTheme } from '@shared/theme/ThemeRegistry';
import { tokens } from '@shared/theme/tokens';
```

#### CSS Custom Properties
```css
/* Available in any CSS file */
.custom-component {
  background-color: var(--color-primary-700);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-base);
}
```

### 4. App-Specific Implementation

#### Web App Features
- Customer-focused design with inline components
- Feature showcase layout
- Marketing-oriented content
- Simplified component structure

#### Admin App Features
- Dashboard-style layout with inline components
- Sidebar navigation (app-specific)
- Data visualization components
- Admin-specific styling while using shared theme

## Development Workflow

### Starting Development
```bash
# Install all dependencies
npm install

# Start both apps concurrently
npm run dev

# Or start individually
npm run dev:web    # Web app on port 3000
npm run dev:admin  # Admin app on port 3001
```

### Building for Production
```bash
# Build both apps
npm run build

# Or build individually
npm run build:web
npm run build:admin
```

### Adding New Shared Styles

1. Add design tokens to `shared/theme/tokens.ts`
2. Update theme configuration in `shared/theme/theme.ts`
3. Add CSS custom properties to `shared/theme/theme.css`
4. Use tokens across both applications
5. Test theme switching functionality

### Customizing Themes

1. Modify design tokens in `tokens.ts`
2. Update MUI theme configuration in `theme.ts`
3. Add new CSS custom properties as needed
4. Extend component styles in theme configuration
5. Test across both applications

## Benefits of This Approach

### Advantages
- ✅ No separate package.json for shared code
- ✅ Simple import paths with TypeScript aliases
- ✅ Immediate changes across all apps
- ✅ Easier to maintain and debug
- ✅ Good IDE support and autocomplete

### Considerations
- 📋 Path aliases must be configured in each app
- 📋 Shared code lives within the monorepo structure
- 📋 TypeScript configuration needs synchronization

## Testing the Implementation

1. **Web App**: Navigate to http://localhost:3000
   - View shared theme components
   - Test theme switching
   - Observe consistent styling

2. **Admin App**: Navigate to http://localhost:3001
   - Compare shared components
   - Test admin-specific features
   - Verify theme consistency

3. **Theme Switching**: Use the theme toggle button
   - Should work consistently across both apps
   - Verify dark/light mode transitions
   - Check component style consistency

This implementation demonstrates effective theme sharing using direct path aliases, providing a scalable foundation for multiple NextJS applications with consistent design systems.