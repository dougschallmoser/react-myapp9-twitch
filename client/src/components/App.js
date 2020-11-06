import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Navbar />  
        <Route path="/" exact>
          <StreamList />
        </Route>
        <Route path="/streams/new" exact>
          <StreamCreate />
        </Route>
        <Route path="/streams/edit" exact>
          <StreamEdit />
        </Route>
        <Route path="/streams/delete" exact>
          <StreamDelete />
        </Route>
        <Route path="/streams/show" exact>
          <StreamShow />
        </Route>
      </Router>
    </div>
  )
}

export default App;