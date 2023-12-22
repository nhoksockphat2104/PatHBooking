import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../styles/Global.css';
import { Link, useParams } from 'react-router-dom';
import Load from '../../components/Load';
import Error from '../../components/Error';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';

function BookingPage({ match }) {
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState([]);
  const user = JSON.parse(localStorage.getItem('currentUser'));
  let { roomid, fromdate, todate } = useParams();

  const fromMoment = moment(fromdate, 'DD-MM-YYYY');
  const toMoment = moment(todate, 'DD-MM-YYYY');
  const totaldays = moment.duration(toMoment.diff(fromMoment)).asDays() + 1;
  const totalamount = totaldays * room.rentperday

  useEffect(() => {
    async function fetchData() {
      if(!localStorage.getItem("currentUser")){
        window.location.reload = "/signin"
      }

      try {
        setLoading(true)
        // You can await here
        const data = (await axios.post('/api/rooms/getroombyid', { roomid: roomid })).data;
        setRoom(data)
        setLoading(false)
        setError(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    fetchData();
  }, [roomid])



  async function onToken(token) {
    console.log(token);
    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem('currentUser'))._id,
      fromdate,
      todate,
      totalamount,
      totaldays,
      token
    };

    try {
      setLoading(true);
      // eslint-disable-next-line no-unused-vars
      const result = await axios.post('/api/bookings/bookroom', bookingDetails)
      setLoading(false);
      Swal.fire('Congratulation' , 'Your Room Book Successfully' , 'success').then(result => {
        window.location.href='/hotelrooms'
      })
    } catch (error) {
      setLoading(false);
      Swal.fire('Oops' , 'Something went wrong' , 'error')
    }
  } 

  return (
    <div className='booking-card mb-5'>
      {loading ? ((<Load />)) : room ? (<div>

        <div className="row justify-content-center room-card">
          <div className="col-md-6 ">
            <h1>{room.name}</h1>
            <img src={room.imageurls[0]} className='model-img' alt="" />
          </div>
          <div className="col-md-6 ">
            <div>
              <h2>Booking Details</h2>
              <hr />
              <b>
                <p>Name:  {user.name}  </p>
                <p>Email:  {user.email}  </p>
                <p>Start Date: {fromdate} </p>
                <p>End Date: {todate}</p>
                <p>Total Days: {totaldays}</p>
                <p>Price per day: {room.rentperday} VND/Day</p>
                <p>Total Amount: {totalamount} VND</p>
              </b>
            </div>
            <div>
              <Link to={`/hotelrooms`}><button className='btn btn-primary mt-3' style={{ float: 'left' }}>Cancel</button></Link>
              <StripeCheckout
                amount={totalamount * 100}
                token={onToken}
                currency='VND'
                // NZSyMEE5qdywpc_
                stripeKey="pk_test_51OIf3lEdlUvSAhlenYmecxmR0hQxNNf99zTAKNWQ1AlViKdiW9DvJ0qvqNBfRCm5jWSER0XVIceOaYMSh61khSas009ygj6uJy"
              >
                <button className='btn btn-primary mt-3' style={{ float: 'left' }}>Pay Now</button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>) : error(<Error />)}
    </div>
  )
}

export default BookingPage