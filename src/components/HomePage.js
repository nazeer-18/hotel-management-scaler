import React, { useContext } from 'react'
import BodyImage from './BodyImage'
import Benifits from './Benifits'
import Functionalities from './Functionalities'
import { DarkModeContext } from '../context/DarkModeContext';

export default function HomePage() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className='app' >
            <div className={`p-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <BodyImage></BodyImage>
                <Benifits></Benifits>
            </div>
            <div className={`p-3 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <Functionalities></Functionalities>
            </div>
        </div>

    )
}
