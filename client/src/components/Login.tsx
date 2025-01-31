import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #4caf50, #81c784)',
  },
  paper: {
    padding: theme.spacing(4),
    borderRadius: '8px',
    boxShadow: theme.shadows[5],
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#4caf50',
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#4caf50',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.title}>
          Farmer's Portal
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" className={classes.button}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;