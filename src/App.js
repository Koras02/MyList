import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import './App.css';
import './lib/font-awesome/css/all.min.css';
import { Watchlist } from './components/Watchlist';
import { Add } from './components/Add';
import { Watched } from './components/Watched';
// import { Watched } from './components/Watched';

function App() {
  return (
    <>
        <GlobalProvider>
            <Router>
              <Header />
              
              <Switch>
                 <Route exact path="/">
                   <Watchlist />
                 </Route>

                 <Route path="/add">
                   <Add /> 
                 </Route>

                 <Route path="/watched">
                   <Watched />
                 </Route>
              </Switch>
            </Router>
        </GlobalProvider>
    </>
  );
}

export default App;
