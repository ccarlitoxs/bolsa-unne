import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './views/Layout/theme/theme';

// import Landingpage from './views/Pages/Landingpage/Landingpage';
import Dashboard from './views/Pages/Landingpage/Dashboard';
import Login from './views/Pages/Auth/Login';
import SignUp from './views/Pages/Auth/SignUp';

import { Provider } from 'react-redux';
import store from './states/store';
import RutaPrivada from './components/RutaPrivada';



function App() {
  return (
    <Fragment>
      
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Provider store = { store }>
            <Switch>
              {/* <RutaPrivada exact path="/" component={Dashboard} /> */}
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/crearcuenta" component={SignUp}/>
              
              {/* <RutaPrivada exact path={`/cuenta/:panel`} component={cuentaPage}/> */}

            </Switch>
          </Provider>
        </Router>
      </ThemeProvider>

    </Fragment>
  );
}

export default App;
