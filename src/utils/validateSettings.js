const validateSettings = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2) {
    errors.name = "Too short name";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 2) {
    errors.password = "Too short password";
  }

  if (!values.newPassword) {
    errors.newPassword = "Required";
  } else if (values.newPassword.length < 2) {
    errors.newPassword = "Too short password";
  }

  if (values.passwordConfirm !== values.newPassword) {
    errors.passwordConfirm = "Passwords doesn't match";
  }

  return errors;
};

export default validateSettings;
