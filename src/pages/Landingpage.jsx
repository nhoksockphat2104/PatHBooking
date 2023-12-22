import React from 'react'
import { Link } from 'react-router-dom';

function Landingpage() {
    return (
        <div className='row-landing'>
            <div className="header-landing" style={{ textAlign: 'center'}}>
                <div className='col-md-12'>
                    <h1 style={{ fontSize:'90px' }}>PatH Booking</h1>
                    <br /><br /><br />
                    <h4>Welcome to the hotel PatH Booking in Nha Trang! Your experience is our mission</h4>
                    <br />
                    <h4>Please <Link to={'/signin'}>Sign In</Link> to enjoy the experience of exploring Nha Trang City</h4>
                </div>
            </div>
        </div>
    )
}

export default Landingpage