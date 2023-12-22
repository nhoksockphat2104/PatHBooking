const express = require("express");
const router = express.Router();
const Booking = require("../models/booking")
const Room = require("../models/room")
const moment = require("moment");
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")('sk_test_51OIf3lEdlUvSAhleU87hBQUR2lJz9lJK7dwsktkj8KbSGH4zixSwrXfCfEkTUuUCjGaSDTj6xZO2xJLMFGJQj55M00kbWOMA3S')

router.post("/bookroom", async (req, res) => {
    const { room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
        token
    } = req.body;

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        // Create a new payment charge.
        const payment = await stripe.charges.create(
            {
                amount: totalamount,
                customer: customer.id,
                currency: 'vnd',
                receipt_email: token.email
            }, {
            idempotencyKey: uuidv4()
        })

        if (payment) {
            const newbooking = new Booking({
                room: room.name,
                roomid: room._id,
                userid,
                fromdate,
                todate,
                totalamount,
                totaldays,
                transactionId: '1234'
            })
            const booking = await newbooking.save()
        }
        res.send('Payment Successfull, Your room is booked')
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/getbookingbyuserid", async (req, res) => {
    const userid = req.body.userid

    try {
        const bookings = await Booking.find({ userid: userid })
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/cancelbooking", async (req, res) => {
    const { bookingsid, roomid } = req.body
    try {
        const bookings = await Booking.findOne({ _id: bookingsid })
        bookings.status = 'cancelled'

        const room = await Room.findOne({ _id: roomid })
        room.status = 'available'
        await bookings.save()
        await room.save()
        res.send('Booking cancelled')
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.get("/getallbookings", async (req, res) => {
    try {
        const bookings = await Booking.find()
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error });
    }
});
module.exports = router