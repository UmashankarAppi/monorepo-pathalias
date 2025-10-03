'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import {
  Web,
  Palette,
  Share,
  Code,
  Rocket,
  Settings,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { useTheme } from '@shared/theme/ThemeRegistry';

// Simple Header component
const Header: React.FC<{ title: string }> = ({ title }) => {
  const { mode, toggleTheme } = useTheme();

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button
          color="inherit"
          onClick={toggleTheme}
          startIcon={mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        >
          {mode === 'dark' ? 'Light' : 'Dark'} Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
};

// Simple FeatureCard component
const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
}> = ({ title, description, icon, actionText = 'Learn More', onAction }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        {icon && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
              color: 'primary.main',
            }}
          >
            {icon}
          </Box>
        )}
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {description}
        </Typography>
      </CardContent>
      {onAction && (
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button size="small" variant="contained" onClick={onAction}>
            {actionText}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default function Home() {
  const features = [
    {
      title: 'Shared Theme System',
      description: 'Consistent design system across all applications using direct path aliases.',
      icon: <Palette sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Component Library',
      description: 'Reusable UI components that maintain design consistency.',
      icon: <Share sx={{ fontSize: 40 }} />,
    },
    {
      title: 'TypeScript Support',
      description: 'Full TypeScript support with type safety across shared components.',
      icon: <Code sx={{ fontSize: 40 }} />,
    },
    {
      title: 'NextJS App Router',
      description: 'Modern NextJS architecture with app router and server components.',
      icon: <Rocket sx={{ fontSize: 40 }} />,
    },
    {
      title: 'MUI Integration',
      description: 'Material-UI components with custom theme configuration.',
      icon: <Settings sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first responsive design that works across all devices.',
      icon: <Web sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <>
      <Header title="Web Application" />
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>


        {/* Features Grid */}
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Features
        </Typography>
        
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
            mb: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box key={index}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                onAction={() => {/* Feature action placeholder */}}
              />
            </Box>
          ))}
        </Box>

        {/* Call to Action */}
        <Paper sx={{ p: 4, textAlign: 'center', mt: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Ready to explore?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Check out the admin application to see how the same theme is shared across different apps.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="http://localhost:3001"
            target="_blank"
            sx={{ mr: 2 }}
          >
            Visit Admin App
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://github.com"
            target="_blank"
          >
            View Source Code
          </Button>
        </Paper>
      </Container>
    </>
  );
}
