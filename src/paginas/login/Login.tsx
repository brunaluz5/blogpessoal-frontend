import { Grid } from "@material-ui/core";
import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid xs={6} alignItems="center">
        <Box paddingX={20}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Entrar
            </Typography>
            <TextField
              id="usuario"
              label="usuário"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/home" className="text-decorator-none">
                <Button type="submit" variant="contained" color="primary">
                  Logar
                </Button>
              </Link>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1' gutterBottom align='center'> Não tem uma conta?</Typography>
            </Box>
            <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}> Cadastre-se </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} style={{
        backgroundImage: `url(https://i.imgur.com/cFksSW5.jpeg)`,
        backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>

      </Grid>
    </Grid>
  );
}

export default Login;