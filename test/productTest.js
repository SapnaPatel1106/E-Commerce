let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/productModelSchema");
let routes = require("../routes/productRoutes");

chai.should();
chai.use(chaiHttp);

describe("Add Product API", () => {
    describe("POST/api/product", () => {
        it("IT should return product added successfully" , (done)=>{
            const data={
                productName:"Ear buds",
                productDescription:"Boult Audio Maverick Truly Wireless in Ear Earbuds with 35H Playtime, Quad Mic ENC, 45ms Xtreme Low Latency, Gaming LEDs, Made in India, 10mm Bass Drivers, Type-C Fast Charging Bluetooth 5.3 Ear Buds",
                price:"1500",
                offerPrice:"1000",
                features:"Brand	Boult Audio Model Name	AirBass Colour	Black Headphones form factor	In Ear Connector Type	Wireless",
                specification:"Combat Mode for gaming: Switch on the Combat mode and enjoy seamless gameplay with 45m/s latency.",
                venderID:"640ac0d0c8164d9bd328d0d8",
                productRating:"0"
            };
            chai
                .request(server)
                .post("/product/addproduct/640ac0d0c8164d9bd328d0d8")
                .set("Content-Type","application/x-www-form-urlencoded")
                .field(data)
                .attach("productPic","/Users/patel/OneDrive/Pictures/sapna pic.jpeg","sapna pic.jpeg")
                //.send(data)
                .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq(true);
                res.body.should.have.property("message").eq("Product added successfully");
                done();
            })
        })

    })
});

// describe("Product list API", () => {
//     describe("GET/api/product", () => {
//         it("IT should return product list are displayed" , (done)=>{
//             const data ={

//             };
//             chai
//                 .request(server)
//                 .get("/product/productlist")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Product list are displayed");
//                 done();
//             })
//         })

//     })
// });

// describe("Product detail API", () => {
//     describe("GET/api/product", () => {
//         it("IT should return product detail are displayed" , (done)=>{
//             const data ={

//             };
//             chai
//                 .request(server)
//                 .get("/product/productdetails/640f03fd2c88bca881f8ec42")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Here is the product");
//                 done();
//             })
//         })

//     })
// });

// describe("Delete Product API", () => {
//     describe("DELETE/api/product", () => {
//         it("IT should return product delete successfully" , (done)=>{
//             const data ={

//             };
//             chai
//                 .request(server)
//                 .delete("/product/deleteproduct/640f150623acbf26367a811c")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Your product successfully deleted");
//                 done();
//             })
//         })

//     })
// });


// describe("Update Product API", () => {
//     describe("PATCH/api/product", () => {
//         it("IT should update product details" , (done)=>{
//             const data ={
//                 productName:"Boult Ear buds"
//             };
//             chai
//                 .request(server)
//                 .patch("/product/updateproduct/640f03fd2c88bca881f8ec42")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Product edited successfully");
//                 done();
//             })
//         })

//     })
// });
