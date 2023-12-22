import React, { useState } from 'react'
import { Button, Modal, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Rooms({ room, fromdate, todate }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='row room-card'>
            <div className="col-md-4">
                <img src={room.imageurls[0]} alt="" className="image-room" />
            </div>
            <div className="col-md-7">
                <h3>{room.name}</h3>
                <p>Place: {room.place}</p>
                <p>Phone Number: {room.phonenumber}</p>
                <p>{room.type}</p>
                <p>Price: {room.price}</p>
                <p>Description: {room.description}</p>

                {(fromdate && todate) && (
                    <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                )}
                <div>
                    <button className="btn btn-primary" onClick={handleShow}>View Details</button>
                    {/* Modal Popup */}
                    <Modal show={show} onHide={handleClose} size='lg'>
                        <Modal.Header>
                            <Modal.Title>{room.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Carousel data-bs-theme="dark">
                                {room.imageurls.map(url => {
                                    return <Carousel.Item>
                                        <img className="d-block w-100 model-img" src={url} alt="" />
                                    </Carousel.Item>
                                })}
                            </Carousel>
                            <hr />
                            <strong><p>{room.place}</p></strong>
                            <p><strong>Type:</strong> {room.type}</p>
                            <p><strong>Description:</strong> {room.description}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Rooms