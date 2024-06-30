
import './video-container.css'
import VideoUrl from './video-url'

import { FaCircleCheck } from "react-icons/fa6"


function VideoContainer() {

    const video = VideoUrl

    const rows = []

    for (let i = 0; i < video.length; i += 3) {
        rows.push(video.slice(i, i + 3))
    }

    return (
        <div className='main-video-container-wrap d-flex align-items-center flex-column'>
            {rows.map((row, rowindex) => (
                <div className='video-row mt-2 d-flex justify-content-between' key={rowindex}>
                    {row.map((vidUrl, index) => (
                        < div className='video-wrap d-flex flex-column' key={index}>
                            <video controls autoPlay muted src={vidUrl.url} type='video/mp4' className='video'></video>
                            <div className='video-details-wrap'>
                                <div className='video-title mt-1'>NATURE | Depicted as a cartoon</div>
                                <div className='creator-name'>Everyday Toons <FaCircleCheck style={{color:'gray', marginLeft:'0.4rem', fontSize:'0.8rem'}}/></div>
                                <div className='views'>14.3K views . 4 hours</div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div >
    )
}

export default VideoContainer