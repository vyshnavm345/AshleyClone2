// /**
// * PHP Email Form Validation - v3.6
// * URL: https://bootstrapmade.com/php-email-form/
// * Author: BootstrapMade.com
// */
// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach( function(e) {
//     e.addEventListener('submit', function(event) {
//       event.preventDefault();

//       let thisForm = this;

//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
//       if( ! action ) {
//         displayError(thisForm, 'The form action property is not set!');
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//       let formData = new FormData( thisForm );

//       if ( recaptcha ) {
//         if(typeof grecaptcha !== "undefined" ) {
//           grecaptcha.ready(function() {
//             try {
//               grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//               .then(token => {
//                 formData.set('recaptcha-response', token);
//                 php_email_form_submit(thisForm, action, formData);
//               })
//             } catch(error) {
//               displayError(thisForm, error);
//             }
//           });
//         } else {
//           displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });
//   });

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: {'X-Requested-With': 'XMLHttpRequest'}
//     })
//     .then(response => {
//       if( response.ok ) {
//         return response.text();
//       } else {
//         throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
//       }
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.trim() == 'OK') {
//         thisForm.querySelector('.sent-message').classList.add('d-block');
//         thisForm.reset(); 
//       } else {
//         throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//       }
//     })
//     .catch((error) => {
//       displayError(thisForm, error);
//     });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
//     thisForm.querySelector('.error-message').innerHTML = error;
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

// })();



 // JavaScript code for form validation
//  document.getElementById('gform').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from submitting

//   // Validate the form fields
//   var nameInput = document.getElementById('name');
//   var emailInput = document.getElementById('email');
//   var subjectInput = document.getElementById('subject');
//   var messageInput = document.querySelector('textarea[name="message"]');

//   var isValid = true; // Flag to track form validity

//   // Check if name field is empty
//   if (nameInput.value.trim() === '') {
//     isValid = false;
//     nameInput.classList.add('is-invalid');
//   } else {
//     nameInput.classList.remove('is-invalid');
//   }

//   // Check if email field is empty or invalid
//   if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
//     isValid = false;
//     emailInput.classList.add('is-invalid');
//   } else {
//     emailInput.classList.remove('is-invalid');
//   }

//   // Check if subject field is empty
//   if (subjectInput.value.trim() === '') {
//     isValid = false;
//     subjectInput.classList.add('is-invalid');
//   } else {
//     subjectInput.classList.remove('is-invalid');
//   }

//   // Check if message field is empty
//   if (messageInput.value.trim() === '') {
//     isValid = false;
//     messageInput.classList.add('is-invalid');
//   } else {
//     messageInput.classList.remove('is-invalid');
//   }

//   // If the form is valid, submit it
//   if (isValid) {
//     // Display the loading message while the form is being submitted
//     var loadingMessage = document.querySelector('.loading');
//     loadingMessage.style.display = 'block';

//     // Submit the form
//     this.submit();
//   }
// });

// // Helper function to validate email format
// function isValidEmail(email) {
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }
