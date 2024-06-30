import './chip-suggestions.css'
import ChipData from './chip-data'

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { useState } from 'react'


function ChipSuggestions({iconClicked}) {

    const [state, setState] = useState({
        forwardArrowClick: false,
        backArrowClick: false,
        displayFrom: 0,
        displayTill: 20
    })

    const { forwardArrowClick, backArrowClick, displayFrom, displayTill } = state

    const chipDisplay = ChipData.slice(displayFrom, displayTill)

    function handleForwardArrowClick() {
        if (!forwardArrowClick) {
            setState((prevState) => ({
                ...prevState,
                forwardArrowClick: true,
                backArrowClick: false
            }))
        }
        else {

        }
    }

    function handleBackArrowClick(){
        if(!backArrowClick){
            setState((prevState) => ({
                ...prevState,
                backArrowClick: true,
                forwardArrowClick: false
            }))
        }
    }

    // console.log(iconClicked)

    return (
        <div className='chip-main-wrap d-flex align-items-center'>
            <div className={`chip-suggestion-nav-button-wrap-backward justify-content-center align-items-center`}
                style={{display: state.forwardArrowClick ? 'flex' : 'none', right: iconClicked ? '86%' : '76%'}}>
                <div className={`chip-suggestion-nav-button-icon-wrap d-flex justify-content-center align-items-center
                    `} onClick={handleBackArrowClick}><IoIosArrowBack style={{ fontSize: '1.2rem' }} /></div>
            </div>
            <div className={`${state.forwardArrowClick ? 'chip-wrap-forward-button-click' : ''} chip-wrap d-flex align-items-center`} style={{marginLeft: iconClicked ? '8%' : '17%'}}>
                {chipDisplay.map((item, index) => (
                    <div className='chips' key={index}>
                        {item}
                    </div>
                ))}
            </div>
            <div className='chip-suggestion-nav-button-wrap-forward d-flex justify-content-center align-items-center'>
                <div className={`chip-suggestion-nav-button-icon-wrap d-flex justify-content-center align-items-center
                    `} onClick={handleForwardArrowClick}><IoIosArrowForward style={{ fontSize: '1.2rem' }} /></div>
            </div>
        </div>
    )
}

export default ChipSuggestions