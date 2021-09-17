import './App.css';
import React, { Fragment } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { TimeSheet } from './components/time-sheet/TimeSheet';
import { TaskList } from './components/task-list/TaskList';
import { News } from './components/news/News';
import { Admin } from './components/admin/Admin';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Fragment>
            <Navbar></Navbar>
            <div>
                <Switch>
                {/* Home, Time Sheet, Task List, News, Admin */}
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/time-sheet' component={TimeSheet}></Route>
                    <Route exact path='/task-list' component={TaskList}></Route>
                    <Route exact path='/news' component={News}></Route>
                    <Route exact path='/admin' component={Admin}></Route>
                </Switch>
            </div>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
