let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/userModelSchema");
let routes = require("../routes/userRoutes");

chai.should();
chai.use(chaiHttp);

// describe("User Login API", () => {
//     //test the get resourceLimits
//     describe("POST /api/users", () => {
//         it("IT should Return login user details:", (done) => {
//             const data = {
//                 userEmail : "patel.rakhi96@gmail.com",
//                 password : "Sapna@2001",
//                 userRole: "user"
//             };
//             chai
//                 .request(server)
//                 .post("/user/loginuser")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Login successfull");
//                 res.body.should.have.property("token");
//                 done();
//             });
//         });
//     });
//     it("It should return error message:", (done) =>{
//         const data={
//             userEmail:"patel.sapnapatel01@gmail.com",
//             password:"Sapna@1607",
//             userRole: "user"
//         };
//         chai
//             .request(server)
//             .post("/user/loginuser")
//             .send(data)
//             .end((err,res)=>{
//                 res.body.should.have.property("success").eq(false);
//                 res.body.should.have.property("message").eq("You are not a register user");
//                 done();
//         });
//     });
//     it("It should return Email or password Error message :",(done)=>{
//         const data={
//             userEmail:"patel.sapnapatel11@gmail.com",
//             password:"Sapna@20",
//             userRole: "user"
//         };
//         chai   
//             .request(server)
//             .post("/user/loginuser")
//             .send(data)
//             .end((err,res)=>{
//                 res.body.should.have.property("success").eq(false)
//                 res.body.should.have.property("message").eq("Email or password is not valid");
//                 done();
//         });
//     });
// });

//signUp API test cases 
// describe ("POST/api/user",()=>{
//     it ("It  should return Account registered successfully :",(done)=>{
//         const data ={
//             userName : "Rakhi Patel",
//             userEmail : "patel.rakhi916@gmail.com",
//             password : "Sapna@2001",
//             city : "dewas",
//             address:"317 E.W.S Mukherji Nagar, Dewas",
//             phone_no : "8269006147",
//             gender:"female"
//     };
//     chai
//         .request(server)
//         .post("/user/registeruser")
//         .set("Content-Type","application/x-www-form-urlencoded")
//         .field(data)
//         .attach("profilePic","/Users/patel/OneDrive/Pictures/sapna pic.jpeg","sapna pic.jpeg")
//         .send(data)
//         .end((err,res) =>{
//             res.should.have.status(201);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq(true);
//             res.body.should.have.property("message").eq("Account registered successfully.");
//             done();
//         });
//     });
// });

// describe ("POST/api/user",()=>{
//     it ("It  should return User with this email is already exist :",(done)=>{
//         const data ={
//             userName : "Rakhi Patel",
//             userEmail : "patel.rakhi96@gmail.com",
//             password : "Sapna@2001",
//             city : "dewas",
//             address:"317 E.W.S Mukherji Nagar, Dewas",
//             phone_no : "8269006147",
//             gender:"female"
//     };
//     chai
//         .request(server)
//         .post("/user/registeruser")
//         .send(data)
//         .end((err,res) =>{
//             res.should.have.status(409);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq(false);
//             res.body.should.have.property("message").eq("User with this email is already exist");
//             done();
//         });
//     });
// });

// //send email test API.........................................................................
// describe("POST/api/user", () => {
//     it("It  should sends mail to us :", (done) => {
//         const data = {
//             userEmail: "patel.sapnapatel11@gmail.com",
//         };
//         chai
//             .request(server)
//             .post("/user/sendemail")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("The reset password link is send to your register email account");
//                 res.body.should.have.property("token");
//                 done();
//             })
//     })
// })

// describe("POST/api/user", () => {
//     it("It  should give error in sending mail to us :", (done) => {
//         const data = {
//             userEmail: "patel.sapnapate11@gmail.com"
//         };
//         chai
//             .request(server)
//             .post("/user/sendemail")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(403);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(false);
//                 res.body.should.have.property("message").eq("User email is not valid");
//                 done();
//             })
//     })
// })

// describe("Update Password API", () => {
//     describe("POST /api/users", () => {
//         it("IT should Return Password update sucessfully :", (done) => {
//             const data = {
//                 newPassword : "Sapna@2001",
//                 confirmPassword  : "Sapna@2001",
//             };
//             chai
//                 .request(server)
//                 .post("/user/updatepassword/640a0e9ace4892e30f27086b/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBhMGU5YWNlNDg5MmUzMGYyNzA4NmIiLCJpYXQiOjE2Nzg3MDM2NTcsImV4cCI6MTY3ODcwNjY1N30.2nYdwKorOCUkA46EsSOWxOcBzax_pioL_tM1K3_PyfQ")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Password update sucessfully");
//                 done();
//             });
//         });
//     });
//     describe("POST /api/users", () => {
//             it("IT should Return Password and confirmPassword are not match :", (done) => {
//                 const data = {
//                     newPassword : "Sapna@1607",
//                     confirmPassword  : "Sapa@1607",
//                 };
//                 chai
//                     .request(server)
//                     .post("/user/updatepassword/640a0e9ace4892e30f27086b/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDBhMGU5YWNlNDg5MmUzMGYyNzA4NmIiLCJpYXQiOjE2Nzg3MDM2NTcsImV4cCI6MTY3ODcwNjY1N30.2nYdwKorOCUkA46EsSOWxOcBzax_pioL_tM1K3_PyfQ")
//                     .send(data)
//                     .end((err, res) => {
//                     res.should.have.status(403);
//                     res.should.be.a("object");
//                     res.body.should.have.property("success").eq(false);
//                     res.body.should.have.property("message").eq("Password and confirmPassword are not match");
//                     done();
//                 });
//             });
//         });
// });
