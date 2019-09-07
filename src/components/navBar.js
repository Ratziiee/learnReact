import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {

    render() {

        const useStyles = makeStyles(theme => ({
            root: {
              flexGrow: 1,
            },
            menuButton: {
              marginRight: theme.spacing(2),
            },
            title: {
              flexGrow: 1,
            },
          }));

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={useStyles.title}>
                            <Link className="menu_link"to='/'>ElevenX</Link>
                        </Typography>
                        <div className="mainmenu">
                            <ul className='navbar_menu'>
                                <li className='menu_li'><Link className="menu_link" to='/'>Home</Link></li>
                                <li className='menu_li'><Link className="menu_link" to='/about'>About</Link></li>
                                <li className='menu_li'><Link className="menu_link" to='/service'>Services</Link></li>
                                <li className='menu_li'><Link className="menu_link" to='/client'>Clients</Link></li>
                                <li className='menu_li'><Link className="menu_link" to='/contact'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </Toolbar>
                    
                </AppBar>
                
            </div>
        )
    }
}
