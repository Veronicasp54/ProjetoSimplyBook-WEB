import React, { Fragment, Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../../../public/assets/css/cadastro-colaborador.css';
import Logo from '../../../public/assets/images/avatar-colaborador.png';
import {Link} from 'react-router';
import Menu from '../../componentes/menu';
import Footer from '../../componentes/footer';


class CadastroColaborador extends Component {

  render() {
      return(
          <Fragment>     
          <Menu/>
            <Container component="main">
            <CssBaseline />
            <div className='paper'>
              <Avatar src={Logo}></Avatar>
              <Typography component="h1" variant="h5">
                Cadastro para colaboradores
              </Typography>
              <form className='form' noValidate>
              
                <Grid container spacing={2}>

                  <Grid item xs={10} sm={4}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Nome completo (Administrador)"
                      autoFocus
                    />
                  </Grid>
                  
                    <Grid item xs={10} sm={4}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="nome-empresa"
                        label="Nome da Empresa"
                        name="name"
                        autoComplete="nome"
                        />
                    </Grid>

                    {/* <Grid item xs={10} sm={4}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="tipo-empresa"
                            label="Tipo empresa"
                            name="filial ou matriz"
                            autoComplete="tipo"
                            />
                    </Grid> */}
                    </Grid>

                  <Grid container spacing={2}>

                        <Grid item xs={10} sm={4}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            />
                        </Grid>
                        
                        <Grid item xs={10} sm={4}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            />
                        </Grid> 

                        <Grid item xs={10} sm={4}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="confirm-password"
                            label="Confirmar senha"
                            type="password"
                            id="confirm-password"
                            autoComplete="current-password"
                            />
                        </Grid>

                    </Grid>  

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className='submit'
                >
                  Confirmar
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link className='link-login' href="/page-colaborador">
                      Já possui uma conta? 
                      Acesse aqui.
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        <Footer/>
        </Fragment>
    )

          }
        }

        export default CadastroColaborador;