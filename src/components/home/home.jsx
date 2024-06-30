import './home.css'

import ChipSuggestions from '../chip-suggestions/chip-suggestions';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import VideoContainer from '../video-container/video-container';
import CollapsedSidebar from '../collapsed-sidebar/collapsed-sidebar';
import { useState } from 'react';



function Home() {

    const [isHamIconClicked, setIsHamIconClicked] = useState(false)

    const toggleSidebar = () => {
        setIsHamIconClicked(!isHamIconClicked)
    }

    return (
        <div className='main-wrap'>
            <div className='home-header-wrap'>
                <Header toggleSidebar={toggleSidebar} />
            </div>

            <div className='d-flex '>
                {isHamIconClicked ? (
                    <div className='home-collapsed-sidebar-wrap'>
                        <CollapsedSidebar />
                    </div>

                ) : (
                    <div className='home-sidebar-wrap'>
                        <Sidebar />
                    </div>
                )}
                <div className='home-chip-wrap d-flex align-items-center'>
                    <ChipSuggestions iconClicked={isHamIconClicked}/>
                </div>
            </div>
            <div className='home-video-container-wrap' style={{width: isHamIconClicked ? 'calc(100% - 14%)' : 'calc(100% - 22%)', left: isHamIconClicked ? 'calc(10%)' : 'calc(19%)'}}>
                <VideoContainer />
            </div>
        </div>
    )
}

export default Home