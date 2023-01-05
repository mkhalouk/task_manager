const bcrypt = require("bcrypt")
const saltRounds = 10

function encrypt(password) {
    bcrypt
        .genSalt(saltRounds)
        .then(salt => {
            return bcrypt.hash(password, salt)
        })
        .catch(err => console.error(err.message))
}

function validateUser(password, hash) {
    bcrypt
        .compare(password, hash)
        .then(res => {
            return res;
        })
        .catch(err => console.error(err.message))
}