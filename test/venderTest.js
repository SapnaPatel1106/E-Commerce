let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/venderModelSchema");
let routes = require("../routes/venderRoutes");

chai.should();
chai.use(chaiHttp);

// describe("Vender Login API", () => {
//     //test the get resourceLimits
//     describe("POST /api/vender", () => {
//         it("IT should Return login vender details:", (done) => {
//             const data = {
//                 venderEmail : "patel.rakhi96@gmail.com",
//                 password : "Sapna@2001",
//                 venderRole: "vender"
//             };
//             chai
//                 .request(server)
//                 .post("/vender/loginvender")
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
//             venderEmail:"patel.sapnapatel01@gmail.com",
//             password:"Sapna@1607",
//             venderRole: "vender"
//         };
//         chai
//             .request(server)
//             .post("/vender/loginvender")
//             .send(data)
//             .end((err,res)=>{
//                 res.body.should.have.property("success").eq(false);
//                 res.body.should.have.property("message").eq("You are not a register vender");
//                 done();
//         });
//     });
//     it("It should return Email or password Error message :",(done)=>{
//         const data={
//             venderEmail:"patel.sapnapatel11@gmail.com",
//             password:"Sapna@20",
//             venderRole: "vender"
//         };
//         chai   
//             .request(server)
//             .post("/vender/loginvender")
//             .send(data)
//             .end((err,res)=>{
//                 res.body.should.have.property("success").eq(false)
//                 res.body.should.have.property("message").eq("Email or password is not valid");
//                 done();
//         });
//     });
// });

//signUp API test cases 
// describe ("POST/api/vender",()=>{
//     it ("It  should return Account registered successfully :",(done)=>{
//         const data ={
//             venderName : "Rakhi Patel",
//             venderEmail : "patel.rakhi9116@gmail.com",
//             password : "Sapna@2001",
//             city : "dewas",
//             address:"317 E.W.S Mukherji Nagar, Dewas",
//             phone_no : "8269006147",
//             state:"M.P",
//             venderAbout:"I'm a Node.js Developer"
//     };
//     chai
//         .request(server)
//         .post("/vender/registervender")
//         .set("Content-Type","application/x-www-form-urlencoded")
//         .field(data)
//         .attach("logo","/Users/patel/OneDrive/Pictures/sapna pic.jpeg","sapna pic.jpeg")
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

// describe ("POST/api/vender",()=>{
//     it ("It  should return Vender with this email is already exist :",(done)=>{
//         const data ={
//             venderName : "Rakhi Patel",
//             venderEmail : "patel.rakhi96@gmail.com",
//             password : "Sapna@2001",
//             city : "dewas",
//             address:"317 E.W.S Mukherji Nagar, Dewas",
//             phone_no : "8269006147",
//             state:"M.P",
//             venderAbout:"I'm a Node.js Developer"
//     };
//     chai
//         .request(server)
//         .post("/vender/registervender")
//         .send(data)
//         .end((err,res) =>{
//             res.should.have.status(409);
//             res.should.be.a("object");
//             res.body.should.have.property("success").eq(false);
//             res.body.should.have.property("message").eq("Vender with this email is already exist");
//             done();
//         });
//     });
// });

// describe("Reset Password SendEmail API", () => {
//     //test the get resourceLimits
//     describe("POST/api/vender", () => {
//         it("IT should Return The reset password link is send to your register email account :", (done) => {
//             const data = {
//                 venderEmail:"patel.sapnapatel11@gmail.com",
//             };
//             chai
//                 .request(server)
//                 .post("/vender/sendemail")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("The reset password link is send to your register email account");
//                 res.body.should.have.property("token");
//                 done();
//             });
//         });
//     });
// describe("POST/api/vender", () => {
//     it("IT should Return Vender email is not valid :", (done) => {
//         const data = {
//             venderEmail: "patel.apnapatel11@gmail.com",
//         };
//         chai
//             .request(server)
//             .post("/vender/sendemail")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(403);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(false);
//                 res.body.should.have.property("message").eq("Vender email is not valid");
//                 done();
//             });
//     });
// });
// });

// describe("Update Password API", () => {
//     describe("POST /api/vender", () => {
//         it("IT should Return Password update sucessfully :", (done) => {
//             const data = {
//                 newPassword : "Sapna@2001",
//                 confirmPassword  : "Sapna@2001",
//             };
//             chai
//                 .request(server)
//                 .post("/vender/updatepassword/640b16cd17490a8e050496d3/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kZXJJZCI6IjY0MGIxNmNkMTc0OTBhOGUwNTA0OTZkMyIsImlhdCI6MTY3ODc3MTYwOSwiZXhwIjoxNjc4ODU4MDA5fQ.z0fdpXIyhLK1YWl2VzsSwcbqok_pfS7VNZdvjsRGeUA")
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
//     describe("POST /api/vender", () => {
//             it("IT should Return Password and confirmPassword are not match :", (done) => {
//                 const data = {
//                     newPassword : "Sapna@2001",
//                     confirmPassword  : "Sapn@2001",
//                 };
//                 chai
//                     .request(server)
//                     .post("/vender/updatepassword/640b16cd17490a8e050496d3/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kZXJJZCI6IjY0MGIxNmNkMTc0OTBhOGUwNTA0OTZkMyIsImlhdCI6MTY3ODc3MTYwOSwiZXhwIjoxNjc4ODU4MDA5fQ.z0fdpXIyhLK1YWl2VzsSwcbqok_pfS7VNZdvjsRGeUA")
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
