import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
// import Students from './components/Students';
// import Students_state from './components/compWithState';
import NavBar from './components/navBar';
import Home from './components/Home';
import About from './components/About';
import Clients from './components/Clients';
import Services from './components/Services';
import Contact from './components/Contact';
// import test  from './assests/test.jpg'
// import b  from './../assests/b.png'
// import c  from './../assests/c.png'
// import d  from './../assests/d.png'


export default class App_ extends Component {

    constructor()
    {
      super()
      this.state = {
        about_data :"This is the About page of the website",
        data:20
      }
    }

    handleChild = (dataa) =>{
      this.setState({data : dataa});
    }


    render() {
        return (
            <div>

              {/* <Students name="Ratziiee" age={20+5} profession = 'Software Developer' expo={5}>(This is child props{10+2})</Students>
        <Students name="Rajat" age={30-7} profession = 'UX Developer' expo={4}></Students>
        <Students name="Rahul" age={21} profession = 'UI Developer' expo={3}></Students>

        <Students_state name="Ratziiee with State" age={20+5} profession = 'Software Developer' expo={5}>(This is child props{10+2})</Students_state>
        <Students_state name="Rajat with State" age={30-7} profession = 'UX Developer' expo={4}></Students_state> */}
        <h1>{this.state.data}</h1>
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route path='/' exact render = {() => <Home image="This is the Home page of the website"/>}></Route>
            <Route path='/about' render = {() => <About image={(data) => {this.handleChild(data)}}/>}></Route>
            <Route path='/client' render = {() => <Clients image="This is the Client page of the website"/>}></Route>
            <Route path='/service' render = {() => <Services image="This is the Services page of the website"/>}></Route>
            <Route path='/contact' render = {() => <Contact image="This is the Contact page of the website"/>}></Route>
          </Switch>
        </BrowserRouter>
            </div>
        )
    }
}
