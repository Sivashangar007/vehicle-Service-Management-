// packages import
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

// port allocation
const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());

// database link variable decleartion
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
  //   useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Success !");
});

// JEEW
const supplierRouter = require("./Routes/jeew/suppliers.js");
app.use("/supplier", supplierRouter);

// HIMA

const JobRouter = require("./Routes/hima/job.js");
app.use("/job", JobRouter);

// DULA
const svcPackagesRouter = require("./Routes/dulanka/packages.js");
app.use("/svc-packages", svcPackagesRouter);

const svcRecordsRouter = require("./Routes/dulanka/packages.js");
app.use("/svc-records", svcRecordsRouter);

// TAVI
const bookingRouter = require("./Routes/tavi/bookings.js");
app.use("/bookings", bookingRouter); //loading models file


// CHIYAN
const customerRouter = require("./Routes/chiyaan/customer.js");
app.use("/customer", customerRouter);

// AKEEL
const managepartsRouter=require("./Routes/akeel/manageparts.js");
app.use("/manageparts", managepartsRouter);

const issueditemsRouter=require("./Routes/akeel/issueditems.js");
app.use("/issueditems", issueditemsRouter);

const manageordersRouter=require("./Routes/akeel/manageorders.js");
app.use("/manageorders", manageordersRouter);

// SHAJEEH


// SANJU
const staffRouter = require("./Routes/sanjayan/staffdetails.js");
const employeeRouter = require("./Routes/sanjayan/employeepayroll.js");
const attendanceRouter = require("./Routes/sanjayan/employeeattendance.js");
const leaverequestRouter = require("./Routes/sanjayan/leaverequest.js");
const announcementRouter = require("./Routes/sanjayan/employeeannouncement.js");


app.use("/staffdetails",staffRouter);
app.use("/employeepayroll",employeeRouter);
app.use("/employeeattendance",attendanceRouter);
app.use("/leaverequest",leaverequestRouter);
app.use("/employeeannouncement",announcementRouter);


// server port allocation & server start
app.listen(PORT, () => {
  console.log(`Server is up and running at port: ${PORT}`);
});
