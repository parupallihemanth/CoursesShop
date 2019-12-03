import React, { Component } from 'react'
import {Link} from 'gatsby'
import Logo from '../../images/logo.png'
import {FaCartArrowDown} from 'react-icons/fa'

export default class Navbar extends Component {
    state={
        navbarState:false,
        navbarClass: "collapse navbar-collapse",
        menus:[
            {
            id:1,
            menuItem: "Home",
            url: '/'
        },{
            id:2,
            menuItem: "Contact",
            url:'/contact'
        },{
            id:3,
            menuItem: "About",
            url:'/about'
        },
            {
                id:4,
                menuItem: "Services",
                url:'/services'
            }
        


        ]
        
    }

    myToggler =() =>{
         this.state.navbarState ? this.setState({
             navbarState: false,
             navbarClass: "collapse navbar-collapse"
         }) : this.setState({
            navbarState: true,
            navbarClass: "collapse navbar-collapse show"
         })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm  bg-theme navbar-dark">
            <Link to="/">
            <img src={Logo} alt="logo" width="40px" /> 
            </Link>
            <button className="navbar-toggler" type="button" onClick={this.myToggler}>
                   <span className="text-white">Menu</span>
            </button>
            <div className={this.state.navbarClass}>
            <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map( menu =>{
                return(
                    <li key={menu.id} className={this.state.menus}>
                    <Link to={menu.url} className="nav-link text-white">{menu.menuItem}</Link>
                 </li>
                )
            })}
               
               
            
                 <li className="nav-item">
                     <Link to= "/" className="nav-link text-white"><FaCartArrowDown className="cart-icon"/></Link>
                     
                    </li> 
    
     
  </ul>
  </div>
</nav>
        )
    }
}
