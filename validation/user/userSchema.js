const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = joi.extend(joiPasswordExtendCore);

const schema = {
  registerUser: joi
    .object({
      userName: joi.string().max(20).messages({
        "string.min": "{#label} should contains at least {#limit} characters",
      })
      .required(),
      userEmail: joi
      .string()
      .email()
      .message("Invalid email address")
      .required(),
      phone_no: joi
        .number()
        .integer()
        .min(100000000)
        .max(9999999999)
        .message("Invalid mobile Number")
        .required(),
      city: joi.string().max(30).required(),
      address:joi.string().max(50).required(),
      password: joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .messages({
          "userPassword.minOfSpecialCharacter":
            "{label} should contain at least {#min} special character",
          "userPassword.minOfLowercase":
            "{label} should contain at least {#min} Lowercase character",
          "userPassword.minOfUppercase":
            "{label} should contain at least {#min} uppercase character",
          "userPassword.minOfNumeric":
            "{label} should contain at least {#min} numeric character",
          "userPassword.noWhiteSpaces":
            "{label} should not contain white spaces",
        })
        .required(),
    })
    .unknown(true),


    loginUser: joi
    .object({
      userEmail: joi
      .string()
      .email()
      .message("Invalid email address")
      .required(),
      password: joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .messages({
          "userPassword.minOfSpecialCharacter":
            "{label} should contain at least {#min} special character",
          "userPassword.minOfLowercase":
            "{label} should contain at least {#min} Lowercase character",
          "userPassword.minOfUppercase":
            "{label} should contain at least {#min} uppercase character",
          "userPassword.minOfNumeric":
            "{label} should contain at least {#min} numeric character",
          "userPassword.noWhiteSpaces":
            "{label} should not contain white spaces",
        })
        .required(),
    })
    .unknown(true),
};

module.exports = schema;
