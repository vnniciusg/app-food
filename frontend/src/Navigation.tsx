import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import MealHistory from './pages/MealHistory';
import Progresso from './pages/Progresso';

// import Footer from './components/Footer';


const Navigation: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/historico" component={MealHistory} />
          <Route exact path="/progresso" component={Progresso}/>
        </Router>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Navigation;