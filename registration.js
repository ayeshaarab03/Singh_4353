isValid = true;

      function valididateEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(email);
        return isValid;    
      }
      
      function validatePassword(password){
        if (password.length > 0) {
          isValid = true;
        }
        else
            isValid = false;
        return isValid;
      }

      function validateConfirmPassword(password1, password2){
        if(password1 != password2){    
          isValid = false;
        }
        else
            isValid = true;
        return isValid;
      }

      function submit(isValid){
        if(isValid){
          // If information is valid, display a success message
          alert("Profile saved successfully!");
          return true;
        }
        return false;
      }

      module.exports = {
        valididateEmail,
        validatePassword,
        validateConfirmPassword,
        submit
      };