import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/chile.svg'
import '../components/styles/NavBar.css'

class NavBar extends React.Component{
    render(){
        return(
            <div className="Navbar"> 
                <div className="container-fluid"> 
                    <Link  className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="logo"/>
                        <span className="font-weight-light" >Chile</span>
                        <span className="font-weight-bold" >Conf</span>

                    </Link>
                </div>
                    
            </div>
        )
    }


}

export default NavBar;