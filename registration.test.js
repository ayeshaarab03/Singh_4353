const {
    valididateEmail,
    validatePassword,
    validateConfirmPassword,
    submit
  } = require('./registration.js');
  
  describe('valididateEmail function', () => {
    test('returns true for a valid email address', () => {
      expect(valididateEmail('test@example.com')).toBe(true);
    });
  
    test('returns false for an invalid email address', () => {
      expect(valididateEmail('test@example')).toBe(false);
    });
  });
  
  describe('validatePassword function', () => {
    test('returns true for a non-empty password', () => {
      expect(validatePassword('password')).toBe(true);
    });
  
    test('returns false for an empty password', () => {
      expect(validatePassword('')).toBe(false);
    });
  });
  
  describe('validateConfirmPassword function', () => {
    test('returns true when passwords match', () => {
      expect(validateConfirmPassword('password', 'password')).toBe(true);
    });
  
    test('returns false when passwords do not match', () => {
      expect(validateConfirmPassword('password', 'wrongpassword')).toBe(false);
    });
  });
  
  describe('submit function', () => {
    test('returns true when isValid is true', () => {
      expect(submit(true)).toBe(true);
    });
  
    test('returns false when isValid is false', () => {
      expect(submit(false)).toBe(false);
    });
  });