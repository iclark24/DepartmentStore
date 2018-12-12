import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Departments from './components/Departments';
import Navbar from "./components/Navbar"
import DepartmentForm from "./components/DepartmentForm"
import Items from "./components/Items"
import ItemForm from "./components/ItemForm"
import {Container} from "semantic-ui-react"
// import Products from './components/Products';


const App = () => (
  <Fragment>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm}/>
        <Route exact path="/departments/:id" component={Items}/>
        <Route exact path="/departments/:id/items/new" component={ItemForm}/>
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;