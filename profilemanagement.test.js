// Import the functions we want to test
const { validateFullName, validateAddress1, validateAddress2, validateCity, validateZipCode, submit } = require('./profilemanagement.js');

// Describe the test suite
describe('Form Validation', () => {
  // Test the validateFullName function
  describe('validateFullName', () => {
    test('should return true if full name is at least 50 characters', () => {
      const fullName = 'John Doe'.repeat(10); // 50 characters long
      expect(validateFullName(fullName)).toBe(true);
    });
    test('should return false if full name is less than 50 characters', () => {
      const fullName = 'John Doe'; // 8 characters long
      expect(validateFullName(fullName)).toBe(false);
    });
  });

  // Test the validateAddress1 function
  describe('validateAddress1', () => {
    test('should return true if address1 is at least 100 characters', () => {
      const address1 = '123 Main St'.repeat(10); // 100 characters long
      expect(validateAddress1(address1)).toBe(true);
    });
    test('should return false if address1 is less than 100 characters', () => {
      const address1 = '123 Main St'; // 10 characters long
      expect(validateAddress1(address1)).toBe(false);
    });
  });

  // Test the validateAddress2 function
  describe('validateAddress2', () => {
    test('should return true if address2 is at least 100 characters', () => {
      const address2 = 'Apartment 1A, Building B'.repeat(5); // 100 characters long
      expect(validateAddress2(address2)).toBe(true);
    });
    test('should return true if address2 is empty', () => {
      const address2 = '';
      expect(validateAddress2(address2)).toBe(true);
    });
    test('should return false if address2 is less than 100 characters and not empty', () => {
      const address2 = 'Apartment 1A'; // 13 characters long
      expect(validateAddress2(address2)).toBe(false);
    });
  });

  // Test the validateCity function
  describe('validateCity', () => {
    test('should return true if city is at least 100 characters', () => {
        const city = 'Sugar Land'.repeat(10);
        expect(validateCity(city)).toBe(true);
    });
    test('should return false if city is less than 100 characters', () => {
        const city = 'Sugar Land';
        expect(validateCity(city)).toBe(false);
      });
  });

  // Test the validateZipCode function
  describe('validateZipCode', () => {
    test('should return true if zipCode is between 5 and 9 characters', () => {
      const zipCode = '12345';
      expect(validateZipCode(zipCode)).toBe(true);
    });

    test('should return false if zipCode is less than 5 characters', () => {
      const zipCode = '1234';
      expect(validateZipCode(zipCode)).toBe(false);
    });

    test('should return false if zipCode is greater than 9 characters', () => {
      const zipCode = '1234567890';
      expect(validateZipCode(zipCode)).toBe(false);
    });
  });

  describe('submit', () => {
    test('should return true if all information is valid', () => {
      const fullName = 'John Doe'.repeat(10);
      const address1 = '123 Main St'.repeat(10);
      const address2 = 'Apartment 1A, Building B'.repeat(5);
      const city = 'Sugar Land'.repeat(10);
      const zipCode = '12345';
      isValid = validateFullName(fullName) && validateAddress1(address1) && validateAddress2(address2) && validateCity(city) && validateZipCode(zipCode);
      expect(submit(isValid)).toBe(true);
    });
  });

});
