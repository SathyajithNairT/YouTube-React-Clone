import './sidebar.css'
import SubscriptionData from "./subscriptionData"


import { FaYoutube } from "react-icons/fa"
import { PiHouseLight } from "react-icons/pi"
import { SiYoutubeshorts, SiYoutubegaming, SiYoutubestudio, SiYoutubemusic } from "react-icons/si"
import { MdOutlineSubscriptions, MdOutlinePodcasts } from "react-icons/md"
import { IoIosArrowForward, IoIosHelpCircleOutline, IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { CgProfile, CgPlayList } from "react-icons/cg"
import { RiHistoryLine, RiVideoLine, RiFeedbackLine } from "react-icons/ri"
import { FaRegClock, FaFire } from "react-icons/fa6"
import { BiLike, BiSolidMoviePlay } from "react-icons/bi"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { IoMusicalNoteOutline, IoNewspaperOutline, IoSettingsOutline, IoFlagOutline } from "react-icons/io5"
import { LuSatelliteDish } from "react-icons/lu"
import { AiOutlineTrophy } from "react-icons/ai"
import { GoLightBulb } from "react-icons/go"
import { GiClothes } from "react-icons/gi"
import { TbBrandYoutubeKids } from "react-icons/tb"
import { useState } from 'react'



function Sidebar() {

    const [subList, setSubList] = useState({
        subSliceFrom: 0,
        subSliceTill: 7
    })

    const contractSubList = () => {
        setSubList((prevList) => ({
            ...prevList,
            subSliceTill: 7
        }))
    }

    const expandSubscribeList = () => {
        setSubList((prevList) => ({
            ...prevList,
            subSliceTill: SubscriptionData.length
        }))
    }

    const subData = SubscriptionData.slice(subList.subSliceFrom, subList.subSliceTill)

    // console.log(prop[0])

    return (
        <div className='sidebar d-flex align-items-center flex-column'>
            <div className='main-nav d-flex align-items-center flex-column'>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <PiHouseLight className='sidebar-icon' />
                    <span className='sidebar-icon-word'> Home</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <SiYoutubeshorts className='sidebar-icon' />
                    <span className='sidebar-icon-word'> Shorts</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <MdOutlineSubscriptions className='sidebar-icon' />
                    <span className='sidebar-icon-word'> Subscriptions</span>
                </div>
            </div>
            <div className='main-nav d-flex align-items-center flex-column'>
                <div className='nav-heading d-flex align-items-center'>You <IoIosArrowForward className='d-flex align-items-center' style={{ marginTop: '0.3rem', marginLeft: '0.5rem' }} /></div>
                <div className='sidebar-icon-wrap d-flex align-items-center mt-1'>
                    <CgProfile className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Your Channel</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <RiHistoryLine className='sidebar-icon' />
                    <span className='sidebar-icon-word'>History</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <CgPlayList className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Playlists</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <RiVideoLine className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Your videos</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <FaRegClock className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Watch later</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <BiLike className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Liked videos</span>
                </div>
            </div>
            <div className='subscriptions d-flex align-items-center flex-column'>
                <div className='nav-heading d-flex align-items-center mb-1'>Subscriptions</div>
                {subData.map((item, index) => (
                    <div className='sidebar-icon-wrap d-flex align-items-center' key={index}>
                        <div className='subscription-profile-icon sidebar-icon'></div>
                        <div className='sidebar-icon-word'>{item.channel}</div>
                    </div>
                ))}
                <div className='sidebar-icon-wrap align-items-center' onClick={expandSubscribeList} style={{display: subList.subSliceTill === SubscriptionData.length ? 'none' : 'flex'}}>
                    <IoIosArrowDown className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Show More</span>
                </div>
                <div className='sidebar-icon-wrap align-items-center' onClick={contractSubList} style={{display: subList.subSliceTill === 7 ? 'none' : 'flex'}}>
                    <IoIosArrowUp className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Show Less</span>
                </div>
            </div>
            <div className='main-nav d-flex align-items-center flex-column'>
                <div className='nav-heading d-flex align-items-center mb-1'>Explore</div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <FaFire className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Trending</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <LiaShoppingBagSolid className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Shopping</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <IoMusicalNoteOutline className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Music</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <BiSolidMoviePlay className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Movies</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <LuSatelliteDish className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Live</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <SiYoutubegaming className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Gaming</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <IoNewspaperOutline className='sidebar-icon' />
                    <span className='sidebar-icon-word'>News</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <AiOutlineTrophy className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Sports</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <GoLightBulb className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Courses</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <GiClothes className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Fashion and Beauty</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <MdOutlinePodcasts className='sidebar-icon' />
                    <span className='sidebar-icon-word'>Podcasts</span>
                </div>
            </div>
            <div className='main-nav d-flex align-items-center flex-column'>
                <div className='nav-heading d-flex align-items-center mb-1'>More from YouTube</div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <div className='sidebar-icon more-from-youtube-icon'><FaYoutube /></div>
                    <span className='sidebar-icon-word'>YouTube Premium</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <div className='sidebar-icon more-from-youtube-icon'><SiYoutubestudio /></div>
                    <span className='sidebar-icon-word'>YouTube Studio</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <div className='sidebar-icon more-from-youtube-icon'><SiYoutubemusic /></div>
                    <span className='sidebar-icon-word'>YouTube Music</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <div className='sidebar-icon yt-kids-icon'><TbBrandYoutubeKids /></div>
                    <span className='sidebar-icon-word'>YouTube Kids</span>
                </div>
            </div>
            <div className='main-nav d-flex align-items-center flex-column'>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <div className='sidebar-icon'><IoSettingsOutline /></div>
                    <span className='sidebar-icon-word'>Settings</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <div className='sidebar-icon'><IoFlagOutline /></div>
                    <span className='sidebar-icon-word'>Report history</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <div className='sidebar-icon'><IoIosHelpCircleOutline /></div>
                    <span className='sidebar-icon-word'>Help</span>
                </div>
                <div className='sidebar-icon-wrap d-flex align-items-center'>
                    <div className='sidebar-icon'><RiFeedbackLine /></div>
                    <span className='sidebar-icon-word'>Send feedback</span>
                </div>
            </div>
            <div className='main-nav d-flex align-items-center flex-column'>
                <div className='copyright-content mb-1'>
                    About Press Copyright Contact us Creators Advertise Developers
                </div>
                <div className='copyright-content mb-1'>
                    Terms Privacy Policy & SafetyHow YouTube works Test new features
                </div>
                <div className='copyright-content mb-1' style={{ fontWeight: '200' }}>
                    © 2024 Google LLC
                </div>
            </div>
        </div>
    )
}

export default Sidebar