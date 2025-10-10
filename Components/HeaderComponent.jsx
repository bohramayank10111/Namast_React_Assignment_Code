import React from 'react'

const HeaderComponent = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src="https://i.pinimg.com/474x/84/4d/85/844d8535fb36b860d3a16635ef20fbab.jpg" alt="food app" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent