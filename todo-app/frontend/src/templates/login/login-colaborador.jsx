import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import '../../../public/assets/css/pageColaborador.css'
import Logo from '../../../public/assets/images/logo.png'
import { Link } from 'react-router';

// function Copyright() {
//     return (
//       <Typography variant="body2" color="textSecondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="#/home">
//           Simply Book
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
  
export default props => (
    <Grid container component="main" className='root'>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className='image-colaborador' />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className= 'paper'>
        <Avatar src={Logo}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Login Colaborador
        </Typography>
        <form className='form' noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar-me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <Link className='link-login' to="/cadastro-colaborador">
                  {"Não possui uma conta? Cadastre-se"}
                </Link>
            </Grid>
          </Grid>
          {/* <Box mt={5}>
            <Copyright />
          </Box> */}
        </form>
      </div>
    </Grid>
  </Grid>
)

