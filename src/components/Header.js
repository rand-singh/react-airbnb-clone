import React from 'react'
import './Header.scss'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" alt="Airbnb Logo"/>
            </Link>

            <div className="header__center">
                <input className="header__input" type="text" placeholder="Search"/>
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />

            </div>
        </div>
    )
}

export default Header
