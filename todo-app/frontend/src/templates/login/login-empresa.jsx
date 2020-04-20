import React, {Component, Fragment}from 'react';
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
import Typography from '@material-ui/core/Typography';
import '../../../public/assets/css/pageEmpresa.css';
import Logo from '../../../public/assets/images/logo.png';
// import CadastroEmp from '../cadastro/cadastro-empresa';
import { Link } from 'react-router';
import Menu from '../../componentes/menu';
import Footer from '../../componentes/footer';

class LoginEmpresa extends Component {

    render() {
      return(
        <Fragment>
            <Menu/>
                <Grid container component="main" className='root'>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className='image' />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                  <div className= 'paper'>
                    <Avatar src={Logo}>
                      {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Login Empresa
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
                        href='#/area-empresa/minhas-reservas'
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
                          <Link className='link-login' to="/cadastro-empresa">
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
          <Footer/>
      </Fragment>
        )
   }
 }

 export default LoginEmpresa;
