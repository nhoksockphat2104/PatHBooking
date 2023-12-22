import React, { useEffect, useState } from 'react'
import '../../styles/Global.css';
import axios from 'axios';
import { Tabs, Tag } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import Load from '../../components/Load';
import Swal from 'sweetalert2';

function User() {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  useEffect(() => {
    if (!user) {
      window.location.href = '/signin'
    }

  }, [user])

  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={'My Profile'} key='1'>
          <h2>My Profile</h2>
          <br />
          <div className='room-card' style={{marginBottom:'272px'}}>
            <h4><b>Name:</b> {user.name}</h4>
            <h4><b>Email:</b> {user.email}</h4>
            <h4><b>isAdmin:</b> {user.isAdmin ? 'Yes' : 'No'}</h4>
          </div>
        </TabPane>
        <TabPane tab={'Booking History'} key='2'>
          <BookingHistory />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default User


export function BookingHistory() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(false);
  const [, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await (await axios.post('/api/bookings/getbookingbyuserid', { userid: user._id })).data;
        console.log(data);
        setBookings(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
        setError(error)
      }
    }
    fetchData()
  }, [user._id])
  async function cancelBooking(bookingsid, roomid) {
    try {
      setLoading(true);
      const result = await axios.post("/api/bookings/cancelbooking", { bookingsid, roomid }).data
      console.log(result)
      setLoading(false);
      Swal.fire('Congratulation', 'Your booking has benn cancelled', 'success').then(result => {
        window.location.reload()
      })
    } catch (error) {
      console.log(error)
      setLoading(false);
      Swal.fire('OOps', 'Something went wrong', 'error')
    }
  }

  return (
    <div>
      <h2>History Booking Room</h2>
      <div className="col-md-6" style={{marginBottom:'150px'}}>
        {loading && (<Load />)}
        {bookings && (bookings.map(bookings => {
          return (
            <div className='room-card'>
              <h3>{bookings.room}</h3>
              <p><b>Booking ID:</b> {bookings._id}</p>
              <p><b>Check In:</b> {bookings.fromdate}</p>
              <p><b>Check Out:</b> {bookings.todate}</p>
              <p><b>Amount:</b> {bookings.totalamount}</p>
              <p><b>Status:</b> :{" "}
                {bookings.status === 'cancelled' ? (<Tag color="red">Cancelled</Tag>) : (<Tag color="green">Confirmed</Tag>)}
              </p>

              {bookings.status !== 'cancelled' && (
                <div>
                  <button className='btn-cancel btn-primary' onClick={() => { cancelBooking(bookings._id, bookings.roomid) }}>Cancel Booking</button>
                </div>
              )}
            </div>
          )
        }))}
      </div>
    </div>
  )
}