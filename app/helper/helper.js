import {
  VALIDATE_WEAK_PASSWORD,
  VALIDATE_WRONG_PASSWORD,
  VALIDATE_USER_NOT_FOUND,
  VALIDATE_EMAIL_IN_USE,
  MSG_WRONG_PASSWORD,
  MSG_VALIDATE_WEAK_PASSWORD,
  MSG_USER_NOT_FOUND,
  MSG_EMAIL_IN_USE,
} from "../helper/constants";

exports.createNameAvatar = (text) => {
  var initials = text.match(/\b\w/g) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  return initials;
};

exports.formatError = (error) => {
  var message = "";
  switch (error) {
    case VALIDATE_WEAK_PASSWORD:
      message = MSG_VALIDATE_WEAK_PASSWORD;
      break;
    case VALIDATE_WRONG_PASSWORD:
      message = MSG_WRONG_PASSWORD;
      break;
    case VALIDATE_USER_NOT_FOUND:
      message = MSG_USER_NOT_FOUND;
      break;
    case VALIDATE_EMAIL_IN_USE:
      message = MSG_EMAIL_IN_USE;
      break;
  }
  return message;
};

exports.formatResponse = (data, message, hasError) => {
    return { data, message, hasError };
}
