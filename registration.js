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

      function encrypt(password){
        const password = 'my_password';
        const hash = crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));

        hash.then(function(result) {
          const hashed_password = Array.from(new Uint8Array(result)).map(b => b.toString(16).padStart(2, '0')).join('');
        });
        return hashed_password;
      }

      const mysql = require('mysql');

      function submit(isValid, email, password){
        if(isValid){
          // Connect to the database
          const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'db'
          });
        
          // Insert the profile information into the database
          const query = `INSERT INTO UserCredentials VALUES ('${email}', '${encrypt(password)}')`;
          connection.query(query, function (error, results, fields) {
            if (error) {
              console.error(error);
              alert("An error occurred while saving your profile");
              return false;
            }
            // If the query was successful, display a success message
            alert("Profile saved successfully!");
            return true;
          });
          // Close the database connection
          connection.end();
        }
        return false;
      }

      module.exports = {
        valididateEmail,
        validatePassword,
        validateConfirmPassword,
        submit
      };
