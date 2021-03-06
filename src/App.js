import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import Portfolios from "./pages/Portfolios";
import Contact from "./pages/Contact";
import Tutorials from './pages/Tutorials'
import Certification from './pages/Certifications'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/certifications" component={Certification} />
        <Route path="/resume" component={Resumes} />
        <Route path="/portfolios" component={Portfolios} />
        <Route path="/contact" component={Contact} />
        <Route path="/tutorials" component={Tutorials} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;