import './collapsed-sidebar.css'

import { PiHouseLight } from "react-icons/pi"
import { SiYoutubeshorts } from "react-icons/si"
import { MdOutlineSubscriptions } from "react-icons/md"
import { CgProfile } from "react-icons/cg"


function CollapsedSidebar() {
    return (
        <div className='collapsed-sidebar d-flex flex-column'>
            <div className='mt-2 d-flex flex-column align-items-center'>
                <PiHouseLight className='collapsed-sidebar-icon' />
                <div className='collapsed-sidebar-icon-word'>Home</div>
            </div>
            <div className='mt-2 d-flex flex-column align-items-center'>
                <SiYoutubeshorts className='collapsed-sidebar-icon'  />
                <div className='collapsed-sidebar-icon-word'>Shorts</div>
            </div>
            <div className='mt-2 d-flex flex-column align-items-center'>
                <MdOutlineSubscriptions className='collapsed-sidebar-icon'  />
                <div className='collapsed-sidebar-icon-word'>Subscriptions</div>
            </div>
            <div className='mt-2 d-flex flex-column align-items-center'>
                <CgProfile className='collapsed-sidebar-icon'  />
                <div className='collapsed-sidebar-icon-word'>You</div>
            </div>
        </div>
    )
}

export default CollapsedSidebar