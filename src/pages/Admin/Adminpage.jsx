import React, { useState, useEffect } from 'react'
import '../../styles/Global.css';
import axios from 'axios';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import Load from '../../components/Load';
import Swal from 'sweetalert2';

function Adminpage() {
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
            window.location.href = "/home";
        }
    }, [])
    return (
        <div className='admin-panel'>
            <h1 style={{ textAlign: "center" }}> Admin Panel</h1>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab={'Bookings'} key="1">
                    <div className="room-card" style={{marginBottom:'150px'}}>
                        <Bookings />
                    </div>
                </TabPane>
                <TabPane tab={'Rooms'} key="2">
                    <div className="room-card" style={{marginBottom:'150px'}}>
                        <Rooms />
                    </div>
                </TabPane>
                <TabPane tab={'Add Room'} key="3">
                    <div className="room-card" style={{marginBottom:'150px'}}>
                        <Addroom />
                    </div>
                </TabPane>
                <TabPane tab={'Users'} key="4">
                    <div className="room-card" style={{marginBottom:'150px'}}s>
                        <Users />
                    </div>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Adminpage

// Bookings Component
export function Bookings() {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true);
    const [, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get("/api/bookings/getallbookings")).data
                setBookings(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error)
            }
        }
        fetchData();
    }, [])
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Bookings</h1>
                <br />
                {loading && (<Load />)}
                <table className='table table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Booking ID</th>
                            <th>User ID</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='table-secondary'>
                        {bookings.length && (bookings.map(bookings => {
                            return (
                                <tr>
                                    <td>{bookings._id}</td>
                                    <td>{bookings.userid}</td>
                                    <td>{bookings.room}</td>
                                    <td>{bookings.fromdate}</td>
                                    <td>{bookings.todate}</td>
                                    <td>{bookings.status}</td>
                                </tr>
                            )
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// Rooms Component
export function Rooms() {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true);
    const [, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get("/api/rooms/getallrooms")).data
                setRooms(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error)
            }
        }
        fetchData();
    }, [])
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Rooms</h1>
                <br />
                {loading && (<Load />)}
                <table className='table table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Room ID</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone Number</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Rent per day</th>
                        </tr>
                    </thead>
                    <tbody className='table-secondary'>
                        {rooms.length && (rooms.map(room => {
                            return (
                                <tr>
                                    <td>{room._id}</td>
                                    <td>{room.name}</td>
                                    <td>{room.place}</td>
                                    <td>{room.phonenumber}</td>
                                    <td>{room.type}</td>
                                    <td>{room.price}</td>
                                    <td>{room.rentperday}</td>
                                </tr>
                            )
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// User Component
export function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get("/api/users/getallusers")).data
                setUsers(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error)
            }
        }
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="col-md-12">
                <h1>Users</h1>
                <br />
                {loading && (<Load />)}
                <table className='table table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Is Admin</th>
                        </tr>
                    </thead>
                    <tbody className='table-secondary'>
                        {users && (users.map(users => {
                            return (
                                <tr>
                                    <td>{users._id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.isAdmin ? "Yes" : "No"}</td>
                                </tr>
                            )
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// Add Room Component
export function Addroom() {
    const [name, setName] = useState('')
    const [place, setPlace] = useState()
    const [phonenumber, setPhonenumber] = useState()
    const [type, setType] = useState()
    const [price, setPrice] = useState()
    const [rentperday, setRentperday] = useState()
    const [description, setDescription] = useState()
    const [urlimage1, setUrlimage1] = useState()
    const [urlimage2, setUrlimage2] = useState()
    const [urlimage3, setUrlimage3] = useState()
    const [loading, setLoading] = useState(false);

    async function addroom() {
        const newroom = {
            name,
            place,
            phonenumber,
            type,
            price,
            rentperday,
            description,
            imageurls: [urlimage1, urlimage2, urlimage3]
        }
        try {
            setLoading(true);
            const result = await (await axios.post("/api/rooms/addroom", newroom)).data;
            console.log(result)
            setLoading(false);
            Swal.fire('Congratulation', 'Your New Room Added Successfully', 'success').then(result => {
                window.location.reload();
            })
        } catch (error) {
            console.log(error)
            setLoading(false);
            Swal.fire('OOps', 'Something went wrong', 'error')
        }
    }

    return (
        <div className="row">
            <h1>Add Hotel Room</h1>
            <br />
            {loading && (<Load />)}
            <div className="col-md-6">
                <input type="text" className='form-control border-black' placeholder='enter name...'
                    value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="text" className='form-control border-black' placeholder='enter place...'
                    value={place} onChange={(e) => { setPlace(e.target.value) }} />
                <input type="text" className='form-control border-black' placeholder='enter phone numner...'
                    value={phonenumber} onChange={(e) => { setPhonenumber(e.target.value) }} />
                <input type="text" className='form-control border-black' placeholder='enter type room...'
                    value={type} onChange={(e) => { setType(e.target.value) }} />
                <input type="text" className='form-control border-black' placeholder='enter price...'
                    value={price} onChange={(e) => { setPrice(e.target.value) }} />
                <input type="text" className='form-control border-black' placeholder='enter rent per day...'
                    value={rentperday} onChange={(e) => { setRentperday(e.target.value) }} />
                <input type="text" className='form-control border-black' placeholder='enter description...'
                    value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <div className="col-md-6">
                <input type="text" className='form-control border-black' placeholder='URL image 1'
                    value={urlimage1} onChange={(e) => { setUrlimage1(e.target.value) }} />
                <input type="text" className='form-control border-black' placeholder='URL image 2'
                    value={urlimage2} onChange={(e) => { setUrlimage2(e.target.value) }} />
                <input type="text" className='form-control border-black' placeholder='URL image 3'
                    value={urlimage3} onChange={(e) => { setUrlimage3(e.target.value) }} />
                <div>
                    <button className='btn btn-primary mt-3' onClick={addroom}>Add Room</button>
                </div>
            </div>
        </div>
    )
}