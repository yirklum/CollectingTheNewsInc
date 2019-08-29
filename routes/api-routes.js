// var db = require("../models");


// module.exports = function (app) {

  // Add a contact entry
  // app.post("/api/contact", function (req, res) {
  //   console.log("Contact Data:");
  //   console.log(req.body);
  //   db.Contacts.create({

  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //     location: req.body.location,
  //     comment: req.body.comment,
  //   })
    //   .then(function () {
    //     res.json("/members");
    //   });
  // });

  // Add new user
//   app.post("/api/newuser", function (req, res) {
//     console.log("newUser Data:");
//     console.log(req.body);
//     db.User.create({

//       email: req.body.email,
//       password: req.body.password

//     })
//       .then(function () {
//         res.json("/signin");
//       });
//   });

  // // Logout
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

//   app.get("/api/user_data", function (req, res) {
//     if (!req.user) {
//       res.json({});
//     }
//     else {
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });

  // Get all dogs
//   app.get("/api/all", function(req, res) {
//     db.Dogs.findAll({}).then(function(results) {
//       res.json(results);
//       console.log(results);
//     });
//   });

// };