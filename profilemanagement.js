$(document).ready(function() {
    $("button").click(function() {
      const fullName = document.getElementById("inputUsername").value;
      const address1 = document.getElementById("inputAddress1").value;
      const address2 = document.getElementById("inputAddress2").value;
      const city = document.getElementById("inputCity").value;
      const state = $("select[name='State']").val();
      const zipCode = document.getElementById("inputZipCode").value;

      const fullNameLength = 50;
      const addressLength = 100;
      const zipCodeMinLength = 5;
      const zipCodeMaxLength = 9;

      const errors = [];

      function validateFullName(fullName){
        if (fullName.length > fullNameLength || fullName.length == 0) {
          errors.push("Full Name is required and must be no more than 50 characters");
          return false;
        }
        return true;
      }
      
      function validateAddress1(address1){
        if (address1.length > addressLength || address1.length == 0) {
          errors.push("Address 1 is required and must be no more than 100 characters");
          return false;
        }
        return true;
      }

      function validateAddress2(address2){
        if(address2.length > addressLength){    
          errors.push("Address 2 must be no more than 100 characters, if applicable");
          return false;
        }
        return true;
      }

      function validateCity(city){
        if (city.length > addressLength || city.length == 0) {
          errors.push("City is required and must be no more than 100 characters");
          return false;
        }
        return true;
      }
      
      function validateZipCode(zipCode){
        if (zipCode.length < zipCodeMinLength || zipCode.length > zipCodeMaxLength) {
          errors.push("Zip Code is required and must be between 5 and 9 characters");
          return false;
        }
        return true;
      }
      
      validateFullName(fullName);
      validateAddress1(address1);
      validateAddress2(address2);
      validateCity(city);
      validateZipCode(zipCode);

      if (errors.length > 0)
        alert(errors.join('\n'));
      
      else{

        const data = {
          fullName: fullName,
          address1: address1,
          address2: address2,
          city: city,
          state: state,
          zipCode: zipCode
        };

        alert("Profile information saved!");
        window.location = 'menu.html';
    
        $.ajax({
          type: 'POST',
          url:"post.php",
          //url: 'http://localhost:8080/profilemanagement.html',
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

        const sql = 'INSERT INTO clientinformation (Full_Name, Address1, Address2, City, State, Zip_Code) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [fullName, address1, address2, city, state, zipCode];

        connection.query(sql, values, function(error, results, fields) {
          if (error) throw error;
          alert("Profile saved successfully!")
        });

        connection.end();
      }
    });
});

// module.exports = {
//   validateFullName,
//   validateAddress1,
//   validateAddress2,
//   validateCity,
//   validateZipCode,
// };
