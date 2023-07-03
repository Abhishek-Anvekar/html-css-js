function validatePasswordStrength(password) {
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /[0-9]/;
    var minLengthRegex = /.{8,}/;
    var hasUppercase = uppercaseRegex.test(password);
    var hasLowercase = lowercaseRegex.test(password);
    var hasDigit = digitRegex.test(password);
    var hasMinLength = minLengthRegex.test(password);
    return hasUppercase && hasLowercase && hasDigit && hasMinLength;
}
var password1 = "Password123";
var isStrong1 = validatePasswordStrength(password1);
//console.log("Password 1 is strong:", isStrong1);
console.log("password is stong ".concat(isStrong1));
var password2 = "password";
var isStrong2 = validatePasswordStrength(password2);
//console.log("Password 2 is strong:", isStrong2);
console.log("password is stong ".concat(isStrong2));
