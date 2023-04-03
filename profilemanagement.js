// HAVE TO COMMENT THESE OUT TO TEST THE CODE WITH INPUTS FROM profilemanagement.js
//const $ = require('jquery');
//$(document).ready(function() {
    // When the "Save changes" button is clicked, perform the following actions
    //$("button").click(function() {
      // Get the values of the input fields
      // var fullName = $("#inputUsername").val();
      // var address1 = $("#inputAddress1").val();
      // var address2 = $("#inputAddress2").val();
      // var city = $("#inputCity").val();
      // var state = $("select[name='State']").val();
      // var zipCode = $("#inputZipCode").val();
  
      // TODO: Perform any additional validation or processing of the input values here
      const fullNameLength = 50;
      const addressLength = 100;
      const zipCodeMinLength = 5;
      const zipCodeMaxLength = 9;

      isValid = true;

      function validateFullName(fullName){
        if (fullName.length < fullNameLength) {
          alert("Full Name is required and must be at least 50 characters");
          isValid = false;
          return false;
        }
        return true;
      }
      
      function validateAddress1(address1){
        if (address1.length < addressLength) {
          alert("Address 1 is required and must be at least 100 characters");
          isValid = false;
          return false;
        }
        return true;
      }

      function validateAddress2(address2){
        if(address2.length > 0 && address2.length < addressLength){    
          alert("Address 2 must be at least 100 characters, if applicable");
          isValid = false;
          return false;
        }
        return true;
      }

      function validateCity(city){
        if (city.length < addressLength) {
          alert("City is required and must be at least 100 characters");
          isValid = false;
          return false;
        }
        return true;
      }
      
      function validateZipCode(zipCode){
        if (zipCode.length < zipCodeMinLength || zipCode.length > zipCodeMaxLength) {
          alert("Zip Code is required and must be between 5 and 9 characters");
          isValid = false;
          return false;
        }
        return true;
      }

      const mysql = require('mysql');

      function submit(isValid, fullName, address1, address2, city, state, zipCode){
        if(isValid){
          // Connect to the database
          const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'profile_db'
          });
        
          // Insert the profile information into the database
          const query = `INSERT INTO ClientInformation VALUES ('${fullName}', '${address1}', '${address2}', '${city}', '${state}', '${zipCode}')`;
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
        validateFullName,
        validateAddress1,
        validateAddress2,
        validateCity,
        validateZipCode,
        submit
      };


      // validateFullName(fullName);
      // validateAddress1(address1);
      // validateAddress2(address2);
      // validateCity(city);
      // validateZipCode(zipCode);
      // submit(isValid);

      
    
  //}); 
//});

  
