const express = require("express");
const router = express.Router();
const User = require("../models/usermodel")
const Otp = require("../models/otpmodel")
const Feedback = require("../models/feedbackmodel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mailerfun = require('../utilities/mail')

const fs = require('fs')



// ye frontend se information le raha h form ki 
router.post('/register', async (req, res) => {
    try {
        const newpassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newpassword,
            mobileno: req.body.mobileno,

        });
        res.json({ status: 'ok' })
    } catch (error) {
        res.json({ status: 'error' })
    }

})



//login api 
router.post('/login', async (req, res) => {


    const user = await User.findOne({
        email: req.body.email,

    })
    if (!user) {
        return res.json({ status: 'error', error: 'Invalid user' })
    }
    const ispasswordvalid = await bcrypt.compare(req.body.password, user.password)

    if (ispasswordvalid) {
        const token = jwt.sign({
            name: user.name,
            email: user.email,
            isadmin: user.isadmin,
            isapproved: user.isapproved,
        }, 'secret12346676r545654')
        return res.json({ status: 'ok', user: token })
    }
    else {
        return res.json({ status: 'error', user: false })
    }
})



//user dashboard api 
router.get('/profile', async (req, res) => {
    const token = req.headers['x-access-token']
    try {
        const decoded = jwt.verify(token, 'secret12346676r545654')
        const email = decoded.email
        const user = await User.findOne({ email: email })
        return res.json({ status: 'ok', data: user })
    }
    catch (error) {
        console.log(error);
        res.json({ status: 'error', error: 'invalid token' })
    }

})


router.post('/edituser', async (req, res) => {
    try {
        const { _id, name, email, domain } = req.body;
        const password = await bcrypt.hash(req.body.password, 10)
        const doc = await User.findOneAndUpdate(
            { _id: _id },
            { _id, name, email, domain, password },
            // If `new` isn't true, `findOneAndUpdate()` will return the
            // document as it was before it was updated.
            { new: true }
        );

        return res.json({ status: 'ok' })
    } catch (error) {
        console.log(error);
        return res.json({ status: 'error', error: 'invalid token' })
    }
})



//forgot password 
router.post('/forgotpswd', async (req, res) => {


    const user = await User.findOne({
        email: req.body.email,

    })
    if (!user) {
        res.json({ status: 'error', error: 'Invalid email' })
    }

    if (user) {
        const mailid = req.body.email;

        const genratedOTP = Math.floor(100000 + Math.random() * 900000)
        

        const text = `Your OTP is ${genratedOTP}`;
        mailerfun(mailid, 'OTP', text);

        try {

            const otpdata = await Otp.findOne({
                email: req.body.email,

            })

            /* if email found in otp table */
            if (otpdata) {

                /* update the otp and expiry time */
                let update = {
                    otp: genratedOTP,
                    exipiresOn: new Date().getTime() + 5*60 * 1000,
                }
                let doc = await Otp.findOneAndUpdate({ email: req.body.email }, update, {
                    returnOriginal: false
                });

            } else {

                const otp = await Otp.create({

                    email: req.body.email,
                    otp: genratedOTP,
                    exipiresOn: new Date().getTime() + 5*60 * 1000, /* expires in 5 min */

                })
            }

            console.log("")

        } catch (error) {
            console.log(error);
        }
        console.log(text)
        res.json({ status: 'success', message: 'mail sent enter otp', mailmessage: text })
    }
})


router.post('/otp', async (req, res) => {


    const otpdata = await Otp.findOne({
        email: req.body.email,

    })
    if (!otpdata) {
        return res.json({ status: 'error', error: 'Invalid email' })
    }

    if (otpdata) {

        /* check if the otp present in the table is expired or not */

        /* remaining time = expiry time - current time */
        let remainingtime = otpdata.exipiresOn - new Date().getTime();
        if (remainingtime > 0) {

            const enteredOtp = `${req.body.otpnumber}`;
            console.log("database otp =" + otpdata.otp);
            console.log("entered otp =" + enteredOtp);

            if (otpdata.otp == enteredOtp) {
                console.log("database otp =" + otpdata.otp);

                res.json({ status: 'success', message: 'Verified' })

            }
            else {
                console.log("nahi hua");
                res.json({ status: 'failed', message: 'OTP didnt match' })
            }
        }
        else {
            res.json({ status: 'failed', message: 'OTP Expired' })
        }

    }
})
router.post('/changepassword', async (req, res) => {


    const user = await User.findOne({
        email: req.body.email,

    })


    if (!user) {
        return res.json({ status: 'error', error: 'Invalid email' })
    }

    /* check if the email present in the table or not */

    if (user) {

        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        let update = {
            password: hashedPassword,
        }
        let doc = await User.findOneAndUpdate({email:req.body.email},update , {
            returnOriginal: false
        });
        if (doc) {
            console.log(doc)
            res.json({ status: 'success', message: 'Password Changed' })
        }
        else{
            console.log("failed",doc)

            res.json({ status: 'failed', message: 'Couldnt change the password' })

        }

    }
    else {
        res.json({ status: 'failed', message: 'User Not Found' })
    }

}
)



router.get('/fetchdata', (req, res) => {

    fs.readFile('./data/moneycontrol.json', "utf-8", (err, data) => {
        return res.send(data)
    })


})
router.post('/submitfeedback', async (req, res) => {

    try {

        const feedback = await Feedback.create({


            email:req.body.email,
            name:req.body.name,
            rating:req.body.rating,
            message:req.body.message,

        });
        res.json({ status: 'ok' })
    } catch (error) {
        res.json({ status: 'error' })
    }



})

router.get('/fetchfeedbackdata', async (req, res) => {

    try {

       const feedbacks=await Feedback.find();
        
        res.json({ status: 'success', data:feedbacks })
    } catch (error) {
        res.json({ status: 'error' })
    }

})
router.get('/fetchfeedbackdatauser', async (req, res) => {

    try {

       const feedbacks=await Feedback.find({approved:"true"});
        
        res.json({ status: 'success', data:feedbacks })
    } catch (error) {
        res.json({ status: 'error' })
    }

})
router.post('/approvefeedback', async (req, res) => {

    let id = req.body.id;
  
    let filter = {
        _id:id
    } 
    let update = {
        approved:"true"
    }
    try{
        let doc = await Feedback.findOneAndUpdate(filter, update,{new:true});

        if (doc) {
            res.json({success:true})
        }
        else{
            res.json({success:false})
        }
    }
    catch(err){
        console.log(err);
    }



})
router.post('/disapprovefeedback', async (req, res) => {

    let id = req.body.id;
  
    let filter = {
        _id:id
    } 
    let update = {
        approved:"false"
    }
    try{
        let doc = await Feedback.findOneAndUpdate(filter, update,{new:true});

        if (doc) {
            res.json({success:true})
        }
        else{
            res.json({success:false})
        }
    }
    catch(err){
        console.log(err);
    }



})

/* to fetch all the sectors available */
router.get('/sectors/', (req, res) => {

    fs.readFile('./data/moneycontrol.json', "utf-8", (err, data) => {
        return res.send(data)
    })


})

/* to fetch data of agrochemical sector */

router.get('/sectors/agrochemicals', (req, res) => {

    fs.readFile('./data/moneycontrol.json', "utf-8", (err, data) => {
        return res.send(data)
    })


})
/* to fetch data of agrochemical sector */

router.get('/sectors/agrochemicals', (req, res) => {

    fs.readFile('./data/moneycontrol.json', "utf-8", (err, data) => {
        return res.send(data)
    })


})



module.exports = router;