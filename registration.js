$(document).ready(function() {
  $('#registration-form').submit(function(event) {
      
      const email = document.getElementById("email").value;
      const password1 = document.getElementById("password1").value;
      const password2 = document.getElementById("password2").value;

      const errors = [];

      function validatePassword(password1){
        if (password1.length == 0) {
          errors.push("Password is required");
          return false;
        }
        return true;
      }

      function confirmPassword(password1, password2){
        if(password1 != password2){   
          errors.push("Passwords do not match");
          return false;
        }
        return true;
      }

      function encrypt(password){
        const hash = crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
        return hash.then(function(result) {
          return Array.from(new Uint8Array(result)).map(b => b.toString(16).padStart(2, '0')).join('');
        });
      }

      validatePassword(password1);
      confirmPassword(password1, password2);

      encrypt(password1).then(function(encrypted) {
        if (errors.length > 0) {
          alert(errors.join('\n'));
          event.preventDefault();
        } else {
          const data = {
            Email: email,
            Password: encrypted,
            
          };
          alert("Profile created successfully! Please log in.")
          
          $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/registration.html',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: (response) => {
              console.log(response);
            },
            error: (xhr, status, error) => {
              console.log(xhr.responseText);
              alert("Error");
            }
          });
          const mysql = require('mysql');

          const connection = mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'db'
          });

          const sql = 'INSERT INTO clientinformation (Email, Password) VALUES (?, ?)';
          const values = [email, password];

          connection.query(sql, values, function(error, results, fields) {
            if (error) throw error;
            alert("Profile saved successfully!")
          });

          connection.end();
        }
      });
  });
});
