const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/;
const nameRegExp = /^[a-zA-Z0-9_\- ]{2,30}$/;

module.exports = { emailRegExp, passwordRegExp, nameRegExp };
