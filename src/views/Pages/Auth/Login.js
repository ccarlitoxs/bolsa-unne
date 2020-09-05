import React,{ useState, useEffect,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { mostrarAlerta, ocultarAlerta } from '../../../states/ducks/Alertas/actions';
import { iniciarSesion } from '../../../states/ducks/Autenticacion/actions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

// import Logo from '../../assets/images/Logo-840x840.png';


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
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: `url(${Logo})`, TODO: PONER UN LOGO PARA EL INICIO DE SESION
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ffffff',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {
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
    email: '',
    password: ''
  });

  // extraer de usuario
  const { email, password } = usuario;

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
    if(email.trim() === '' || password.trim() === '') {
      dispatch(mostrarAlerta('Todos los campos son obligatorios','error'));
      setTimeout(() => {
        dispatch(ocultarAlerta());
      }, 4000);
      return;
    }

    // Pasarlo al action
    dispatch(iniciarSesion({ email, password }));
  }





  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
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
              value={email}
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar cuenta"
            /> */}
            {(alerta) ? (<Alert severity={`${alerta.categoria}`}>{alerta.msg}</Alert> ): null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Ingresar
            </Button>

            <Grid container >
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidó su contraseña?
                </Link>
              </Grid> */}
              <Grid item>
                <Link component={RouterLink} to="/crearcuenta" variant="body2">
                  {"No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}