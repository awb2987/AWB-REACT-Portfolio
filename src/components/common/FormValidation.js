/**
 * Validates if a field is required.
 * @param {string} value - The value of the input field.
 * @returns {boolean} - Returns true if the value is valid, otherwise false.
 */
export const isRequired = (value) => {
    return value.trim() !== '';
  };
  
  /**
   * Validates if an email is in the correct format.
   * @param {string} email - The email to validate.
   * @returns {boolean} - Returns true if the email is valid, otherwise false.
   */
  export const isValidEmail = (email) => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };
  
  /**
   * Validates the form data.
   * @param {object} formData - The form data to validate.
   * @returns {object} - Returns an object containing errors if any.
   */
  export const validateForm = (formData) => {
    const errors = {};
  
    if (!isRequired(formData.name)) {
      errors.name = 'A name is required';
    }
  
    if (!isRequired(formData.email)) {
      errors.email = 'An email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Email address entered is invalid';
    }
  
    if (!isRequired(formData.message)) {
      errors.message = 'A message is required';
    }
  
    return errors;
  };
  