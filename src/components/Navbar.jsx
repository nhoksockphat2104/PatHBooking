import React from 'react'
import logo from '../assets/imgs/logo/Halogenic-Branding-Logo-512x384.jpg'

function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    function logout() {
        localStorage.removeItem("currentUser");
        window.location.href = "/signin";
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container-fluid">
                    {user ? (<>
                        <img src={logo} alt="Logo" width="40" height="34" class="d-inline-block align-text-top" />
                        <a class="navbar-brand" href="/homepage" >PatH Booking</a>
                    </>) : (<> <img src={logo} alt="Logo" width="40" height="34" class="d-inline-block align-text-top" />
                        <a class="navbar-brand" href="/" >PatH Booking</a>
                    </>)}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            {user ? (<>
                                <li class="nav-item">
                                    <a class="nav-link" href="/hotelrooms">Bookings</a>
                                </li>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-user"></i> {user.name}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/user">Profile User</a></li>
                                        <li><a class="dropdown-item" href="/#" onClick={logout}>Logout</a></li>
                                    </ul>
                                </div>
                            </>) : (<>
                                <li class="nav-item">
                                    <a class="nav-link" href="/signup">Sign Up</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/signin">Sign In</a>
                                </li>
                            </>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar