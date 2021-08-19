import React from 'react';
import './App.css';
import MenuBar from './components/menuBar';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import WeeklyMenuForm from './screens/weeklyMenuForm' 
import LogoutForm from './screens/logoutForm' 
import AccountForm from './screens/accountForm' 

function App() {

  return (
    <div>
     <Router><MenuBar/>
                <Switch>
                    <Route path="/weeklyMenu">
                        <WeeklyMenuForm/>
                    </Route>
                    </Switch> 
                    <Switch>
                    <Route path="/account">
                      <AccountForm/>
                    </Route>
                    </Switch> 
                    <Switch>
                    <Route path="/logout">
                      <LogoutForm/>
                    </Route>
                    </Switch>   
     </Router>
</div>
  );
}

export default App;
