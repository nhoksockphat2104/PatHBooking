import React, { useState, useEffect } from 'react'
import '../../styles/Global.css';
import axios from 'axios';
import Rooms from '../../components/Rooms';
import Load from '../../components/Load';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function Hotelrooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState([]);
  const [fromdate, setFromdate] = useState();
  const [todate, setTodate] = useState();
  const [duplicaterooms, setDuplicaterooms] = useState([]);
  const [searchkey, setSearchkey] = useState('');
  const [type, setType] = useState('all');


  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = (await axios.get('/api/rooms/getallrooms')).data
        setRooms(data)
        setDuplicaterooms(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }

    fetchData(); // Call the asynchronous function

  }, []); // Dependency array for the useEffect hook

  function fillterByDate(dates) {
    setFromdate(dates[0].format('DD-MM-YYYY'))
    setTodate(dates[1].format('DD-MM-YYYY'))

    var temprooms = []
    for (const room of duplicaterooms) {
      if (room.checkin >= fromdate && room.checkin <= todate) {
        temprooms.push(room)
        setRooms(temprooms)
      } else {
        setRooms(duplicaterooms)
      }
    }
  }

  function filterBySearch() {
    const temprooms = duplicaterooms.filter(room => room.name.toLowerCase().includes(searchkey.toLowerCase()));
    setRooms(temprooms)
  }

  function filterByType(e) {
    setType(e)
    if (e !== 'all') {
      // eslint-disable-next-line eqeqeq
      const temprooms = duplicaterooms.filter(room => room.type.toLowerCase() == e.toLowerCase())
      setRooms(temprooms)
    } else {
      setRooms(duplicaterooms)
    }
  }


  return (
    <div className='container' style={{ marginBottom: '150px' }}>
      <h1 style={{ textAlign: 'center', marginTop: '80px', fontWeight: 'bold' }}>Booking Hotel</h1>
      <div className="row-select-room">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <RangePicker format='DD-MM-YYYY' onChange={fillterByDate} className='form-date' />
            </div>
            <div class="col">
              <input type="text" className='form-control border-dark rounded-pill mt-1 px-3' placeholder='Search room'
                value={searchkey} onChange={(e) => { setSearchkey(e.target.value) }} onKeyUp={filterBySearch} />
            </div>
            <select className="col mx-4 mt-1  form-control border-dark rounded-pill" value={type} onChange={(e) => { filterByType(e.target.value) }}>
              <option value='all' placeholder='Select type'>All</option>
              <option value='king bed' placeholder='Select type'>King Bed</option>
              <option value='double bed' placeholder='Select type'>Double Bed</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? (<Load />) : (rooms.map(room => {
          return <div className='col-md-9 mt-3'>
            <Rooms room={room} fromdate={fromdate} todate={todate} />
          </div>
        }))}
      </div>
    </div>

  )
}

export default Hotelrooms