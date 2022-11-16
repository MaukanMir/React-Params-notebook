import './App.css'
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom"
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Article from './Pages/Article';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter> 
      <nav>
        <h1>My Articles</h1>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Switch>
      <Route exact path ="/">
        <Home/>
      </Route>
      <Route path ="/contact">
        <Contact/>
      </Route>
      <Route path ="/about">
        <About/>
      </Route>
      <Route path ="/articles/:id">
        <Article/>
      </Route>
      <Route path="*">
      <Redirect to="/"/>
      </Route>
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App
