import { createTheme, ThemeOptions } from '@mui/material/styles';
import { tokens } from './tokens';

// Base theme configuration using design tokens
const baseThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: tokens.colors.primary[700],
      light: tokens.colors.primary[400],
      dark: tokens.colors.primary[800],
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036',
      contrastText: '#ffffff',
    },
    error: {
      main: tokens.colors.error[700],
      light: tokens.colors.error[400],
      dark: tokens.colors.error[800],
      contrastText: '#ffffff',
    },
    warning: {
      main: tokens.colors.warning[700],
      light: tokens.colors.warning[400],
      dark: tokens.colors.warning[800],
      contrastText: '#ffffff',
    },
    info: {
      main: tokens.colors.primary[600],
      light: tokens.colors.primary[400],
      dark: tokens.colors.primary[800],
      contrastText: '#ffffff',
    },
    success: {
      main: tokens.colors.success[700],
      light: tokens.colors.success[400],
      dark: tokens.colors.success[800],
      contrastText: '#ffffff',
    },
    background: {
      default: tokens.colors.grey[50],
      paper: '#ffffff',
    },
    text: {
      primary: tokens.colors.grey[900],
      secondary: tokens.colors.grey[600],
      disabled: tokens.colors.grey[400],
    },
    divider: tokens.colors.grey[200],
    grey: tokens.colors.grey,
  },
  typography: {
    fontFamily: tokens.typography.fontFamily.primary,
    h1: {
      fontSize: tokens.typography.fontSize['5xl'],
      fontWeight: tokens.typography.fontWeight.bold,
      lineHeight: tokens.typography.lineHeight.tight,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: tokens.typography.fontSize['4xl'],
      fontWeight: tokens.typography.fontWeight.bold,
      lineHeight: tokens.typography.lineHeight.tight,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: tokens.typography.fontSize['3xl'],
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.tight,
    },
    h4: {
      fontSize: tokens.typography.fontSize['2xl'],
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    h5: {
      fontSize: tokens.typography.fontSize.xl,
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    h6: {
      fontSize: tokens.typography.fontSize.lg,
      fontWeight: tokens.typography.fontWeight.semibold,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    subtitle1: {
      fontSize: tokens.typography.fontSize.base,
      fontWeight: tokens.typography.fontWeight.medium,
      lineHeight: tokens.typography.lineHeight.relaxed,
    },
    subtitle2: {
      fontSize: tokens.typography.fontSize.sm,
      fontWeight: tokens.typography.fontWeight.medium,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    body1: {
      fontSize: tokens.typography.fontSize.base,
      fontWeight: tokens.typography.fontWeight.normal,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    body2: {
      fontSize: tokens.typography.fontSize.sm,
      fontWeight: tokens.typography.fontWeight.normal,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    button: {
      fontSize: tokens.typography.fontSize.sm,
      fontWeight: tokens.typography.fontWeight.medium,
      lineHeight: tokens.typography.lineHeight.normal,
      textTransform: 'none',
    },
    caption: {
      fontSize: tokens.typography.fontSize.xs,
      fontWeight: tokens.typography.fontWeight.normal,
      lineHeight: tokens.typography.lineHeight.normal,
    },
    overline: {
      fontSize: tokens.typography.fontSize.xs,
      fontWeight: tokens.typography.fontWeight.medium,
      lineHeight: tokens.typography.lineHeight.normal,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.lg,
          textTransform: 'none',
          fontWeight: tokens.typography.fontWeight.medium,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: tokens.shadows.sm,
          },
        },
        containedPrimary: {
          backgroundColor: tokens.colors.primary[700],
          '&:hover': {
            backgroundColor: tokens.colors.primary[800],
          },
        },
        containedSecondary: {
          backgroundColor: '#dc004e',
          '&:hover': {
            backgroundColor: '#9a0036',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius['2xl'],
          boxShadow: tokens.shadows.base,
          '&:hover': {
            boxShadow: tokens.shadows.md,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: tokens.borderRadius.lg,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: tokens.colors.primary[600],
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: tokens.colors.primary[700],
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: tokens.shadows.sm,
          backgroundColor: '#ffffff',
          color: tokens.colors.primary[700],
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: `1px solid ${tokens.colors.grey[200]}`,
          backgroundColor: tokens.colors.grey[50],
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.lg,
          margin: `${tokens.spacing[1]} ${tokens.spacing[2]}`,
          '&:hover': {
            backgroundColor: `rgba(${tokens.colors.primary[700]
              .replace('#', '')
              .match(/.{2}/g)
              ?.map(x => parseInt(x, 16))
              .join(', ')}, 0.08)`,
          },
          '&.Mui-selected': {
            backgroundColor: `rgba(${tokens.colors.primary[700]
              .replace('#', '')
              .match(/.{2}/g)
              ?.map(x => parseInt(x, 16))
              .join(', ')}, 0.12)`,
            '&:hover': {
              backgroundColor: `rgba(${tokens.colors.primary[700]
                .replace('#', '')
                .match(/.{2}/g)
                ?.map(x => parseInt(x, 16))
                .join(', ')}, 0.16)`,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.md,
          fontSize: tokens.typography.fontSize.xs,
          fontWeight: tokens.typography.fontWeight.medium,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: tokens.borderRadius.lg,
        },
        elevation1: {
          boxShadow: tokens.shadows.base,
        },
      },
    },
  },
};

// Create light theme
export const lightTheme = createTheme(baseThemeOptions);

// Create dark theme
export const darkTheme = createTheme({
  ...baseThemeOptions,
  palette: {
    ...baseThemeOptions.palette,
    mode: 'dark',
    background: {
      default: tokens.colors.grey[900],
      paper: tokens.colors.grey[800],
    },
    text: {
      primary: '#ffffff',
      secondary: tokens.colors.grey[300],
      disabled: tokens.colors.grey[500],
    },
    divider: tokens.colors.grey[700],
  },
});

// Default export
export default lightTheme;