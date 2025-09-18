import React from 'react'
import { } from './CompStyles.css'
const FirstUiTask = () => {
    const handleOnChange = (event) => {

    }
    return (
        <div className='container'>
            <div className='item'>
                logo
            </div>
            <div className='item'>
                <input type="text" value="" onChange={(event) => handleOnChange(event)} />
            </div>
            <div cwlassName='item'>User Logo</div>
        </div>
    )
}

export default FirstUiTask