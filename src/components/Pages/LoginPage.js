import * as React from "react";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Box,
  Snackbar,
} from "@mui/material";
import { motion } from "framer-motion";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { BsUnlockFill } from "react-icons/bs";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        E-Commerce
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openAlert, setOpenALert] = useState(false);
  const [successAlertOpen, setSuccessALertOpen] = useState(false);
  const [islocked, setIslocked] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  
  let navigate = useNavigate();

  const toggleEmoji = () => {
    setIslocked((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail(email) && isValidPassword(password)) {
      setSuccessALertOpen(true);
      toggleEmoji();
      setTimeout(() => {
        navigate("/Main");
      }, 900);
    } else {
      setOpenALert(true);
    }
  };

  const isValidEmail = (email) => {
    return email === "myshop@gmail.com";
  };

  const isValidPassword = (password) => {
    return password === "pass@1234";
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {islocked ? (
              <LockOutlinedIcon style={{ cursor: "pointer" }} />
            ) : (
              <BsUnlockFill style={{ cursor: "pointer" }} />
            )}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Snackbar open={openAlert} onClose={() => setOpenALert(false)}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setOpenALert(false)}
          severity="error"
        >
          You are not a Valid User!
        </MuiAlert>
      </Snackbar>

      <Snackbar
        open={successAlertOpen}
        onClose={() => setSuccessALertOpen(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setSuccessALertOpen(false)}
          severity="success"
        >
          You are logged in!
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default Loginpage;
