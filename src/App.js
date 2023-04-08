import React, {lazy, Suspense, useEffect} from 'react';
import { BrowserRouter as Router, useRoutes, useLocation } from 'react-router-dom';
import './App.css';
import Nav from './Nav/Nav';
const Landing = lazy(() => import('./Landing/Landing'));
const Plantillas = lazy(() => import('./Plantillas/Plantillas'));
const Articulos = lazy(() => import('./articulos/articulos'));


const routes = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/plantillas',
    element: <Plantillas />
  },
  {
    path: '/articulos/:articulo?',
    element: <Articulos />
  }
]

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  const element = useRoutes(routes);
  return element;
}

function AppWithRouter(){

  return(
    <Router>
      <Nav/>
      <Suspense fallback={<h1>Loading</h1>}>
        <App />
      </Suspense>
    </Router>
  )
}

export default AppWithRouter;
