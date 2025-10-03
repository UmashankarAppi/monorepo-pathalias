'use client';

import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from '@mui/material';
import {
  Dashboard,
  People,
  Settings,
  Analytics,
  Inventory,
  Security,
  Support,
  Notifications,
} from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  width?: number;
}

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/' },
  { text: 'Users', icon: <People />, path: '/users' },
  { text: 'Analytics', icon: <Analytics />, path: '/analytics' },
  { text: 'Inventory', icon: <Inventory />, path: '/inventory' },
];

const settingsItems = [
  { text: 'Settings', icon: <Settings />, path: '/settings' },
  { text: 'Security', icon: <Security />, path: '/security' },
  { text: 'Notifications', icon: <Notifications />, path: '/notifications' },
  { text: 'Support', icon: <Support />, path: '/support' },
];

export const Sidebar: React.FC<SidebarProps> = ({ open, onClose, width = 280 }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          Admin Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Theme Sharing Demo
        </Typography>
      </Box>
      
      <Divider />
      
      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton key={item.text} onClick={onClose}>
            <ListItemIcon sx={{ color: 'primary.main' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ mx: 2 }} />

      <List sx={{ px: 1 }}>
        {settingsItems.map((item) => (
          <ListItemButton key={item.text} onClick={onClose}>
            <ListItemIcon sx={{ color: 'text.secondary' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};