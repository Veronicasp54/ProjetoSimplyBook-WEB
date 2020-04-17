import React, {Fragment, Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../../../public/assets/css/cadastro-empresa.css';
import Logo from '../../../public/assets/images/avatar-empresa.png';
import {Link} from 'react-router';
import Menu from '../menu';
import Footer from '../footer';

class CadastroEmpresa extends Component {

  render() {
      return(
          <Fragment>   

            <Menu/>
              <Container component="main">
              <CssBaseline />
              <div className='paper'>
                <Avatar src={Logo}></Avatar>
                <Typography component="h1" variant="h5">
                  Cadastre sua empresa
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

                      <Grid item xs={10} sm={4}>
                              <TextField
                              variant="outlined"
                              required
                              fullWidth
                              id="tipo-empresa"
                              label="Tipo empresa"
                              name="filial ou matriz"
                              autoComplete="tipo"
                              />
                      </Grid>
                      </Grid>
                      <Grid container spacing={2}>

                      <Grid item xs={10} sm={3}>
                          <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="cnpj-empresa"
                          label="CNPJ"
                          name="cnpj"
                          autoComplete="cnpj"
                          />
                      </Grid>
                      
                      <Grid item xs={10} sm={2}>
                          <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="cep-empresa"
                          label="CEP"
                          name="cep"
                          autoComplete="cep"
                          />
                      </Grid>
                  
                      <Grid item xs={10} sm={2}>
                          <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="bairro-empresa"
                          label="Bairro"
                          name="bairro"
                          autoComplete="bairro"
                          />
                      </Grid>
                      <Grid item xs={10} sm={3}>
                          <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="rua-empresa"
                          label="Rua"
                          name="rua"
                          autoComplete="rua"
                          />
                      </Grid>

                      <Grid item xs={10} sm={2}>
                          <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="num-empresa"
                          label="Número"
                          name="numero"
                          autoComplete="numero"
                          />
                      </Grid>
                      </Grid>

                    <Grid container spacing={2}>

                          <Grid item xs={10} sm={4}>
                              <TextField
                              variant="outlined"
                              required
                              fullWidth
                              id="email"
                              label="Email da empresa"
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
                      <Link className='link-login' href="/page-empresa">
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

    export default CadastroEmpresa;