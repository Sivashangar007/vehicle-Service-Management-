const router = require("express").Router();
let Employeeattendance = require("../../Models/Employeeattendance");

//http://localhost:8090/staff/add

router.route("/addattendance").post((req,res)=>{

    const nic = req.body.nic;
    const name = req.body.name;
    const date = req.body.date;
    const attendance = Number(req.body.attendance);
    
    const newAttendance = new Employeeattendance({

        nic,
        name,
        date,
        attendance
    })

    newAttendance.save().then(()=>{
        res.json("Attendance Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//http://Localhost:8090/staff/
//Get all staff details

router.route("/").get((req,res)=>{

    Employeeattendance.find().then((employeeattendance)=>{
        res.json(employeeattendance)
    }).catch((err)=>{
        console.log(err)
    })

})

//http//Localhost:8090/staff/update/..id

router.route("/editattendance/:id").put(async(req,res) => {

    let id = req.params.id;
    const {nic,name,date,attendance} = req.body;

    const updateAttendance = {
      nic,
      name,
      date,
      attendance,
    }

    const update = await Employeeattendance.findByIdAndUpdate(id, updateAttendance)  //updateAttendance means update panna vendiya data oda object
    .then(() => {

        res.status(200).send({status: "Attendance updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating attendance", error: err.message});
    }) 
})


//http//Localhost:8090/staff/delete/33huihfudf88

router.route("/delete/:_id").delete(async (req, res) => {
    let userId = req.params._id;

    await Employeeattendance.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Attendance deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete attendance", error: err.message});
    })
})

//http://localhost:8090/staff/get/65e4bcc5440bc24613ae7a76
//How to get one staff details
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const attendance = await Employeeattendance.findById(userId)
    .then((attendance) => {
        res.status(200).send({status: "Attendance fetched", attendance})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get attendance", error: err.message});
    })
})

module.exports = router;