import React, { useState, useEffect,useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import { Link as RouterLink } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { mostrarAlerta, ocultarAlerta } from '../../../states/ducks/Alertas/actions';
import { registrarUsuario } from '../../../states/ducks/Autenticacion/actions';
import { useSelector, useDispatch } from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Simulador de Bolsa UNNE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  //REDUX
  const dispatch = useDispatch();
  const alerta = useSelector(state => state.alerta.alerta);
  const { mensaje, autenticado } = useSelector(state => state.auth);
  
  const initFetch = useCallback(() => {

    if(autenticado) {
      props.history.push('/');
    }
    

    if (mensaje) {
      dispatch(mostrarAlerta( mensaje, 'error'));
      setTimeout(() => {
        dispatch(ocultarAlerta());
      }, 8000);
    }

  }, [dispatch,mensaje, autenticado, props.history]);


  useEffect(() => {
    initFetch();
  }, [initFetch, mensaje, autenticado, props.history]);


  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
      nombre: '',
      apellido:'',
      email: '',
      password: '',
      repeatpassword: '',
      domicilio:'',
      indicacion: '',
      localidad: '',
      provincia: '',
      numeroLibreta: ''

  });

  // extraer de usuario
  const { nombre, email, password, apellido, repeatpassword,
    domicilio ,
    indicacion,
    localidad,
    provincia,
    numeroLibreta } = usuario;

  const onChange = e => {
      guardarUsuario({
          ...usuario,
          [e.target.name] : e.target.value
      })
  }

  // Cuando el usuario quiere iniciar sesión
  const onSubmit = e => {
      e.preventDefault();

      // Validar que no haya campos vacios
      if( nombre.trim() === '' || 
          apellido.trim() === '' ||
          email.trim() === '' || 
          password.trim() === '' || 
          repeatpassword.trim() === ''||
          domicilio.trim() === ''  ||
          indicacion.trim() === '' ||
          localidad.trim() === '' ||
          provincia.trim() === '' ||
          numeroLibreta.trim() === '' ) {
              dispatch(mostrarAlerta('Todos los campos son obligatorios', 'error'));
              setTimeout(() => {
                dispatch(ocultarAlerta());
              }, 8000);
              return;
          }

      // Password minimo de 6 caracteres
      if(password.length < 8) {
          dispatch(mostrarAlerta('La Contraseña debe ser de al menos 8 caracteres', 'error'));
          setTimeout(() => {
            dispatch(ocultarAlerta());
          }, 8000);
          return;
      }

      // Los 2 passwords son iguales
      if(password !== repeatpassword) {
          dispatch(mostrarAlerta('Las Contraseñas no coinciden', 'error'));
          setTimeout(() => {
            dispatch(ocultarAlerta());
          }, 8000);
          return;
      }

      const razonSocial = apellido.trim() + ' ' + nombre.trim();

      // Pasarlo al action
      dispatch(registrarUsuario({
          razonSocial, 
          email, 
          password,
          domicilio,
          indicacion,
          localidad,
          provincia,
          numeroLibreta
      }));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear Cuenta
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombres"
                autoFocus
                value={nombre}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="apellido"
                autoComplete="lname"
                value={apellido}
                onChange={onChange}
              />
            </Grid>
          
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                id="domicilio"
                name="domicilio"
                label="Dirección: Calle-Nro-Dpto-Barrio"
                fullWidth 
                value={domicilio}
                onChange={onChange}
                autoComplete="off"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                id="indicacion"
                name="indicacion"
                label="Indica como llegar ó Entre calles"
                fullWidth
                value={indicacion}
                multiline
                rowsMax={2}
                autoComplete="off"
                onChange={onChange}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                variant="outlined"
                id="localidad"
                name="localidad"
                label="Localidad"
                fullWidth 
                value={localidad}
                autoComplete="off"
                onChange={onChange}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              required
              variant="outlined"
              id="provincia" 
              name="provincia" 
              label="Provincia" 
              autoComplete="off"
              fullWidth 
              value={provincia}  
              onChange={onChange}
              
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                variant="outlined"
                id="numeroLibreta"
                name="numeroLibreta"
                label="Número LU"
                fullWidth 
                value={numeroLibreta}
                autoComplete="off"
                onChange={onChange}
                
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="repeatpassword"
                label="Repita la Contraseña"
                type="password"
                id="repeatpassword"
                autoComplete="repeat-password"
                value={repeatpassword}
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Acepto todos los términos y condiciones"
              />
            </Grid>
          </Grid>
          {(alerta) ? (<Alert severity={`${alerta.categoria}`}>{alerta.msg}</Alert> ): null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Crear Cuenta
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link component={RouterLink} to="/login" variant="body2">
                Ya tienes una cuenta? Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}