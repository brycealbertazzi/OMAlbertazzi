import React from 'react';
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
import { TimeSlip } from './components/tabbar/TimeSlip';
import { LogNote } from './components/tabbar/LogNote';
import { Task } from './components/tabbar/Task';
import { Details } from './components/tabbar/Details';

const App = () => {
  return (
    <div className="OMAlbertazzi container">
      <Router>
            <div className="flex justify-center text-4xl my-6 uppercase">
                <h1>OM Albertazzi</h1>
            </div>
            <Navbar></Navbar>
            <div>
                <Switch>
                {/* Home, Time Sheet, Task List, News, Admin */}
                    <Route exact path='/' component={Home}></Route>
                    {/* Time Sheet & Task List Routes */}
                    <Route exact path='/time-sheet' component={TimeSheet}></Route>
                    <Route exact path='/task-list' component={TaskList}></Route>
                    <Route exact path='/time-slip' component={TimeSlip}></Route>
                    <Route exact path='/log-note' component={LogNote}></Route>
                    <Route exact path='/task' component={Task}></Route>
                    <Route exact path='/details' component={Details}></Route>
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
            <div className="flex justify-items-start mx-4 my-8">
                <h6 className="text-sm">
                    Copyright 2017 - Albertazzi Law Firm
                </h6>
            </div>
      </Router>
    </div>
  );
}

export default App;
