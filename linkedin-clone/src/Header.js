
import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import linkedinlogo from './linkedin.png'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={linkedinlogo} alt="Logo of linkedin" />
                <div className="searchbar">
                    <SearchIcon />
                    <input type="text" name="" id="" />

                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="My jobs" />
                <HeaderOptions Icon={MessageIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsActiveIcon} title="Notifications" />

            </div>
        </div>
    )
}

export default Header