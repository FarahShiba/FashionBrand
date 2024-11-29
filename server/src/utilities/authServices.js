const { db } = require("../config/db");
const config = require("../config/config");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

module.exports = {
  async findUser(email) {
    // stores the document query in a var & retrieves
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    //success: push object properties to array and send to client
    let users = [];
    snapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        username: doc.data().username,
        email: doc.data().email,
        password: doc.data().password,
        isAdmin: doc.data().isAdmin,
      });
    });

    //iii. search the user email agains our user array
    const userMatch = users.filter((user) => email === user.email);
    return userMatch;
  },

  async hashPassword(password) {
    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  },

  async comparePassword(user, password) {
    // (a) Retrieves hashed password
    const hashPassword = user[0].password;

    // (b) Compare password passed in with DB hashed password via Bcrypt for match
    const passwordMatch = await bcrypt.compare(password, hashPassword);

    // (c) Return result
    return passwordMatch;
  },

  async userDetailsToJSON(id) {
    const usersRef = db.collection("users");
    const user = await usersRef.doc(id).get();

    const userJSON = _.omit({ id: id, ...user.data() }, "password");
    console.log(userJSON);

    return userJSON;
  },

  jwtSignUser(user) {
    const payload = user; //(2)
    const secret = config.authentication.jwtSecret; //(4)
    const tokenExpireTime = 60 * 60 * 24; //(3)

    const token = jwt.sign(payload, secret, { expiresIn: tokenExpireTime }); //(1)
    return token;
  },
};
