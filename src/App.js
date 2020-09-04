import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './views/Layout/theme/theme';

// import Landingpage from './views/Pages/Landingpage/Landingpage';
import Dashboard from './views/Pages/Landingpage/Dashboard';


import { Provider } from 'react-redux';
import store from './states/store';



function App() {
  return (
    <Fragment>
      
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Provider store = { store }>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              {/* <Route exact path="/login" component={Login}/>
              <Route exact path="/crearcuenta" component={SignUp}/>
              <Route exact path="/carrito" component={CarritoPage}/> */}
              {/* <Route exact path="/mp" component={mercadoPagoComp}/> */}
              {/* <RutaPrivadaCheckOut exact path="/checkout" component={Checkout}/>
              <RutaPrivada exact path={`/cuenta/:panel`} component={cuentaPage}/>
              <RutaPrivada exact path={`/transaccion`} component={Transaccion}/> */}
            </Switch>
          </Provider>
        </Router>
      </ThemeProvider>

    </Fragment>
  );
}

export default App;
