const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');


const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const userSchema = new Schema(
    {
      password: {
        type: String,
        minlength: 6,
        required: [true, "Set password for user"],
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: emailRegexp,
      },
      subscription: {
        type: String,
        enum: subscriptionList,
        default: "starter",
      },
      token: {
        type: String,
        default: "",
      },
    },
    { versionKey: false, timestamps: true }
  );
  
  userSchema.post("save", handleMongooseError);

  const registerSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    subscription: Joi.string().valid(...subList),
  });

  const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
  });

  const shemas = {
    registerSchema,
    loginSchema,
  }


  const User = model("user", userSchema);


module.exports = {
    User,
    shemas,
}