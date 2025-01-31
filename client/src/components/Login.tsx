import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, MenuItem, Select, InputLabel, FormControl, Grid, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import Flag from 'react-world-flags'; // Importing the country flag component

const Root = styled('div')({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to right, #4caf50, #81c784)',
});

const StyledPaper = styled(Paper)({
  padding: '32px', // Static value instead of theme.spacing(4)
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Static value for box shadow
  backgroundColor: '#fff',
  textAlign: 'center',
});

const Title = styled(Typography)({
  marginBottom: '16px', // Static value instead of theme.spacing(2)
  color: '#4caf50',
});

const StyledButton = styled(Button)({
  marginTop: '16px', // Static value instead of theme.spacing(2)
  backgroundColor: '#4caf50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#388e3c',
  },
});

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { username, password, contactNumber: `${countryCode}${contactNumber}` });
  };

  return (
    <Root>
      <StyledPaper>
        <Title variant="h4">Farmer's Portal</Title>
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

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Country Code</InputLabel>
                <Select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  label="Country Code"
                  startAdornment={
                    countryCode ? (
                      <InputAdornment position="start">
                        <Flag code={countryCode} width={24} />
                      </InputAdornment>
                    ) : null
                  }
                >
                  <MenuItem value="US">+1 (USA)</MenuItem>
                  <MenuItem value="GB">+44 (UK)</MenuItem>
                  <MenuItem value="IN">+91 (India)</MenuItem>
                  <MenuItem value="NP">+977 (Nepal)</MenuItem>
                  <MenuItem value="AU">+61 (Australia)</MenuItem>
                  {/* Add more country codes as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Grid>
          </Grid>

          <StyledButton type="submit" fullWidth variant="contained">
            Login
          </StyledButton>
        </form>
      </StyledPaper>
    </Root>
  );
};

export default LoginPage;
