# Theme Sharing Monorepo

This is a monorepo demonstrating theme sharing between NextJS applications using direct path aliases approach.

## Structure

```
├── apps/
│   ├── web/          # Customer-facing web application
│   └── admin/        # Admin dashboard application
├── shared/
│   └── theme/        # Shared MUI theme configuration
└── package.json      # Root package.json
```

## Theme Sharing Approach

This monorepo uses **Direct Path Alias** approach for theme sharing:
- Shared theme components are located in `/shared/theme/`
- Each app imports the shared theme using path aliases configured in `tsconfig.json`
- No separate workspace package is needed

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install dependencies for both apps:
   ```bash
   cd apps/web && npm install
   cd ../admin && npm install
   ```

3. Start development servers:
   ```bash
   npm run dev
   ```

This will start both applications:
- Web app: http://localhost:3000
- Admin app: http://localhost:3001

## Available Scripts

- `npm run dev` - Start both apps in development mode
- `npm run build` - Build both apps for production
- `npm run start` - Start both apps in production mode
- `npm run lint` - Lint both apps
- `npm run clean` - Clean all node_modules and build artifacts

## Apps

### Web App (Port 3000)
Customer-facing web application with shared theme.

### Admin App (Port 3001)
Admin dashboard application with shared theme and custom overrides.

## Theme Features

- Shared MUI theme configuration
- Custom color palette
- Typography settings
- Component overrides
- Theme variants (light/dark mode support)
- Responsive design tokens