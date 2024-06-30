import './header.css'

import { RxHamburgerMenu } from "react-icons/rx";
import { SlCamrecorder } from "react-icons/sl";
import { FaYoutube, FaRegBell } from "react-icons/fa"
import { IoMdMic } from "react-icons/io"
import { CiSearch } from "react-icons/ci"
import { useState } from 'react';


function Header({toggleSidebar}) {

    const [isDark, setIsDark] = useState(true)

    function toggleLightDark() {
        setIsDark(!isDark)
    }

    const root = document.documentElement

    if (!isDark) {
        root.style.setProperty('--background-colour', 'white')
        root.style.setProperty('--text-colour', 'black')
        root.style.setProperty('--chip-nav-forward-button', 'linear-gradient(to right, transparent, white, white, white)')
        root.style.setProperty('--chip-nav-back-button', 'linear-gradient(to left, transparent, white, white, white)')
    }
    else {
        root.style.setProperty('--background-colour', 'rgba(15,15,15,255)')
        root.style.setProperty('--text-colour', 'white')
        root.style.setProperty('--chip-nav-forward-button', 'linear-gradient(to right, transparent, rgba(15,15,15,255), rgba(15,15,15,255), rgba(15,15,15,255))')
        root.style.setProperty('--chip-nav-back-button', 'linear-gradient(to left, transparent, rgba(15,15,15,255), rgba(15,15,15,255), rgba(15,15,15,255))')
    }

    return (
        <div className='header d-flex align-items-center justify-content-between'>
            <div className='header-left-content-wrap d-flex align-items-center justify-content-between'>
                <div className='ham-icon-wrap d-flex justify-content-center align-items-center' onClick={toggleSidebar}>
                    <RxHamburgerMenu />
                </div>
                <div className='logo  d-flex align-items-center'>
                    <div className='logo-icon  d-flex align-items-center'>
                        <FaYoutube />
                    </div>
                    <div className='logo-word  d-flex align-items-center'>
                        YouTube
                    </div>
                    <div className='country-two-letter'>
                        IN
                    </div>
                </div>
            </div>
            <div className='header-search-wrap d-flex'>
                <input type="text" className='search-field' placeholder='Search' />
                <div className='search-icon-wrap d-flex justify-content-center align-items-center'><CiSearch /></div>
                <div className='audio-search-wrap d-flex justify-content-center align-items-center'><IoMdMic /></div>
            </div>
            <div className='header-right-content-wrap d-flex align-items-center justify-content-between'>
                <div className='camcoder-icon-wrap'>
                    <SlCamrecorder />
                    <div className='camcoder-icon-plus-sign'>+</div>
                </div>
                <div className='bell-icon-wrap'>
                    <FaRegBell />
                </div>
                <div className='profile-wrap d-flex justify-content-center align-items-center' onClick={toggleLightDark}>
                    Sa
                </div>
            </div>
        </div>
    )
}

export default Header