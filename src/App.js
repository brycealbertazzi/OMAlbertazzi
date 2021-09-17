import './App.css';
import React, { Fragment } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { TimeSheet } from './components/time-sheet/TimeSheet';
import { TaskList } from './components/task-list/TaskList';
import { News } from './components/news/News';
import { Admin } from './components/admin/Admin';
import { DataTracking } from './components/admin/DataTracking';
import { TimeReport } from './components/admin/TimeReport';
import { RecentFinance } from './components/admin/RecentFinance';
import { NewsFeed } from './components/news/NewsFeed';
import { RecentlyModifiedMatters } from './components/news/RecentlyModifiedMatters';

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
                    {/* Time Sheet Routes */}
                    <Route exact path='/time-sheet' component={TimeSheet}></Route>
                    {/* Task List Routes */}
                    <Route exact path='/task-list' component={TaskList}></Route>
                    {/* News Routes */}
                    <Route exact path='/news' component={News}></Route>
                    <Route exact path='/news/news-feed' component={NewsFeed}></Route>
                    <Route exact path='/news/recently-modified-matters' component={RecentlyModifiedMatters}></Route>
                    {/* Admin Routes */}
                    <Route exact path='/admin' component={Admin}></Route>
                    <Route exact path='/admin/data-tracking' component={DataTracking}></Route>
                    <Route exact path='/admin/time-report' component={TimeReport}></Route>
                    <Route exact path='/admin/recent-finance' component={RecentFinance}></Route>
                </Switch>
            </div>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
