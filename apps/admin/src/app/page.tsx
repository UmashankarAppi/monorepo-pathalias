'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  People,
  ShoppingCart,
  AttachMoney,
  Notifications,
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { useTheme } from '@shared/theme/ThemeRegistry';
import { Sidebar } from '../components/Sidebar';

// Simple Header component for admin
const Header: React.FC<{ 
  title: string; 
  showMenuButton?: boolean;
  onMenuClick?: () => void;
}> = ({ title, showMenuButton = false, onMenuClick }) => {
  const { mode, toggleTheme } = useTheme();

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        {showMenuButton && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            color="inherit"
            onClick={toggleTheme}
            startIcon={mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          >
            {mode === 'dark' ? 'Light' : 'Dark'} Mode
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12%',
      trend: 'up',
      icon: <People sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Revenue',
      value: '$98,765',
      change: '+8%',
      trend: 'up',
      icon: <AttachMoney sx={{ fontSize: 40, color: 'success.main' }} />,
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '-3%',
      trend: 'down',
      icon: <ShoppingCart sx={{ fontSize: 40, color: 'warning.main' }} />,
    },
    {
      title: 'Notifications',
      value: '45',
      change: '+15%',
      trend: 'up',
      icon: <Notifications sx={{ fontSize: 40, color: 'info.main' }} />,
    },
  ];

  const recentActivity = [
    { id: 1, action: 'New user registration', user: 'John Doe', time: '2 min ago', status: 'success' },
    { id: 2, action: 'Order completed', user: 'Jane Smith', time: '5 min ago', status: 'success' },
    { id: 3, action: 'Payment failed', user: 'Mike Johnson', time: '10 min ago', status: 'error' },
    { id: 4, action: 'Product updated', user: 'Admin', time: '15 min ago', status: 'info' },
    { id: 5, action: 'User login', user: 'Sarah Wilson', time: '20 min ago', status: 'success' },
  ];

  return (
    <>
      <Header 
        title="Admin Dashboard" 
        showMenuButton 
        onMenuClick={() => setSidebarOpen(true)} 
      />
      
      <Sidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>

        {/* Stats Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 3,
            mb: 4,
          }}
        >
          {stats.map((stat, index) => (
            <Box key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography color="text.secondary" gutterBottom variant="body2">
                        {stat.title}
                      </Typography>
                      <Typography variant="h4" component="div">
                        {stat.value}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        {stat.trend === 'up' ? (
                          <TrendingUp sx={{ color: 'success.main', mr: 0.5 }} />
                        ) : (
                          <TrendingDown sx={{ color: 'error.main', mr: 0.5 }} />
                        )}
                        <Typography
                          variant="body2"
                          sx={{
                            color: stat.trend === 'up' ? 'success.main' : 'error.main',
                          }}
                        >
                          {stat.change}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>{stat.icon}</Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Recent Activity */}
        <Card>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              Recent Activity
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Action</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentActivity.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.action}</TableCell>
                      <TableCell>{row.user}</TableCell>
                      <TableCell>{row.time}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          size="small"
                          color={
                            row.status === 'success'
                              ? 'success'
                              : row.status === 'error'
                              ? 'error'
                              : 'info'
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              System Status
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">CPU Usage</Typography>
                <Typography variant="body2">45%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={45} sx={{ mb: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Memory Usage</Typography>
                <Typography variant="body2">72%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={72} color="warning" sx={{ mb: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Storage Usage</Typography>
                <Typography variant="body2">28%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={28} color="success" />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
