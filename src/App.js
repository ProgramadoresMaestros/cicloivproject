import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import Navigation  from './components/Navigation';
import Createcategoria  from './components/Createcategoria';
import Createproductos from './components/Createproductos';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Navigation/>
      <div className='container p-4'>
      <Route path="/categorias" component={props=><Createcategoria/>}/>
      <Route path="/productos" component={props=><Createproductos/>}/>
      </div>
    </Router>
  );
}

export default App;
