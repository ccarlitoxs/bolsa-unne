import React from 'react';
// import { useState, useEffect,useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { autenticarUsuario } from '../../../states/ducks/Autenticacion/actions';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import imagenPortada from '../../assets/images/backgroundLanding1.jpg';
import SelectAmbientes from './components/SelectAmbientes';

import CarouselInsta from './components/CarouselInsta';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Fab from '@material-ui/core/Fab';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Ecommerce from './components/Ecommerce';





const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: '0',
    backgroundImage: `url(${imagenPortada})`,
    backgroundPosition: 'center center',
    minHeight:'100vh',
    display: 'flex',
    
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

  mainTitle: {
    fontWeight: 'bold',
    color:'white',
    
  },
  portadaContent: {
    alignSelf: 'center',
    backgroundColor:'rgba(0,0,0,0.4)',
    borderRadius: '30px',
    padding: '15px',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,1)',
    fontWeight:'bold',
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginRight:0,
    marginLeft:0,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    backgroundColor:'black',
    maxWidth:'100%',
    
  },
  fab: {
    position: 'fixed',
    bottom: '5vh',
    right: '5vw',
    backgroundColor:'#25D366',
    '&:hover': {
      color: 'white'
    }
  },
  
}));






export default function Landingpage (props) {
  const classes = useStyles();
  
  //REDUX
  // const dispatch = useDispatch();
  // // const alerta = useSelector(state => state.alerta.alerta);


  // const initFetch = useCallback(() => {

  //   dispatch(autenticarUsuario());

  // }, [dispatch]);


  // useEffect(() => {
  //   initFetch();
  // }, [initFetch]);

  const scrolltoElement = (id) => {

    const element = document.getElementById(id);
        setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop-70 : 0
      });
    }, 300);
  }

  const handleClickComprar = () => {
    scrolltoElement('containerAmbientes');
  }
  
  

  return (
    <React.Fragment>
      <Header props={props} />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          
          <Container className={classes.portadaContent} maxWidth="sm">
            <Typography className={classes.mainTitle} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              CASA CARLITOS
            </Typography>
            {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography> */}
            <div className={classes.heroButtons}>
              <Grid container spacing={3} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleClickComprar}>
                    Comprar
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.secondaryButton} variant="outlined" color="primary">
                    Cómo comprar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          
        </div>
        {/* End hero unit */}
        
          
          
        {/* Selector de ambientes */}
        
        <SelectAmbientes />
          

        {/* End Selector de ambientes */}


        {/* Ecommerce */}

        <Ecommerce/>

        {/* End Ecommerce */}

      </main>
      {/* Instagram Feed */}
      <Container>
        <CarouselInsta/>

      </Container>

      {/* End Instagram Feed */}

      {/* Footer */}
      <Footer/>
      {/* End footer */}
      <Fab href='https://wa.me/5493624374050' component='a' target='_blank' color="primary" aria-label="Whatsapp" className={classes.fab} rel='noopener'>
        <WhatsAppIcon />
      </Fab>
    </React.Fragment>
  );
}