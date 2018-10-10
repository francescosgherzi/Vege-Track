const express = require('express');
const router = express.Router();
/**
 * METHOD: POST
 * ENDPOINT: /
 * Tries to create a user if the request has all of the `LOGIN_REQUIRED_PARAMS`.
 * Tries to authenticate a user if the request has all of the `REGISTRATION_REQUIRED_PARAMS` 
 * STATUS: 
 *  200: User registration successful || User login successful
 *  401: Wrong username or password
 *  500: An error occurred (eg. Trying to create an already existing user, email already taken...) 
 */
// router.post('/', function (req, res, next) {
//   console.log("[router.post('/')]")
//   if (checkRequiredParamsForRegistration(req)) {
//     console.log("[checkRequiredParamsForRegistration]")
//     User.create(req.body, function (error, user) {
//       if (error) {
//         return next(error);
//       } else {
//         req.session.userId = user._id;
//         // Setting the password to undefined removes the element from the object if that object is stringified and then parsed.
//         user._doc.password = undefined
//         return res.send(JSON.stringify({
//           status: 200,
//           message: "User registration successful",
//           user: user._doc
//         }));
//       }
//     });

//   } else if (checkRequiredParamsForLogin(req)) {
//     console.log("[checkRequiredParamsForLogin]")
//     User.authenticate(req.body.email, req.body.password, function (error, user) {
//       if (error || !user) {
//         let err = new Error('Wrong email or password.');
//         err.status = 401;
//         return next(err);
//       } else {
//         req.session.userId = user._id;
//         // Setting the password to undefined removes the element from the object if that object is stringified and then parsed.
//         user._doc.password = undefined
//         return res.send(JSON.stringify({
//           status: 200,
//           message: "Login successful",
//           user: user._doc
//         }));
//       }
//     });
//   } else {
//     let err = new Error('Missing a required param, required: ' + LOGIN_REQUIRED_PARAMS + " or " + REGISTRATION_REQUIRED_PARAMS);
//     err.status = 400;
//     return next(err);
//   }
// })

// /**
//  * METHOD: POST
//  * ENDPOINT: /user
//  * Retrives a user, by email.
//  * STATUS: 
//  *  200: User retrived
//  *  400: No user with email exists
//  *  500: DB error
//  */

// router.post('/user', (req, res, next) => {
//   User.findOne({ email: req.body.email })
//     .exec(function (error, user) {
//       if (error) {
//         return next(error);
//       } else {
//         if (user === null) {
//           let err = new Error('No user with that email exists');
//           err.status = 400;
//           return next(err);
//         } else {
//           user._doc.password = undefined
//           return res.send(JSON.stringify({
//             status: 200,
//             message: "User with email " + req.body.email + " correctly retrived",
//             user: user._doc
//           }))
//         }
//       }
//     });
// })

// /**
//  * METHOD: POST
//  * ENDPOINT: /logout
//  * Logs out the user by deleting its session
//  * STATUS: 
//  *  200: Log out successful
//  *  500: DB Error
//  */
// router.post('/logout', function (req, res, next) {

//   console.log("[router.post('/logout')]")

//   if (req.session) {
//     req.session.destroy(function (err) {
//       if (err) {
//         return next(err);
//       } else {
//         return res.send({
//           status: 200,
//           message: "Log out successful",
//         });
//       }
//     });
//   }
// });


module.exports = router;