function validateForm() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirm-email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var acceptCGU = document.getElementById("accept-cgu").checked;
  
    var isValid = true;
  
    // Vérification du champ "nom"
    if (nom === "") {
      document.getElementById("error-nom").textContent = "Le champ nom est requis.";
      isValid = false;
    } else {
      document.getElementById("error-nom").textContent = "";
    }
  
    // Vérification du champ "prénom"
    if (prenom === "") {
      document.getElementById("error-prenom").textContent = "Le champ prénom est requis.";
      isValid = false;
    } else if (prenom.length < 3) {
      document.getElementById("error-prenom").textContent = "Le prénom doit contenir au moins 3 lettres.";
      isValid = false;
    } else {
      document.getElementById("error-prenom").textContent = "";
    }
  
    // Vérification du champ "âge"
    if (age === "" || age < 18) {
      document.getElementById("error-age").textContent = "L'âge doit être supérieur à 18.";
      isValid = false;
    } else {
      document.getElementById("error-age").textContent = "";
    }
  
    // Vérification du champ "email"
    if (email === "") {
      document.getElementById("error-email").textContent = "Le champ email est requis.";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("error-email").textContent = "L'email n'est pas valide.";
      isValid = false;
    } else {
      document.getElementById("error-email").textContent = "";
    }
  
    // Vérification du champ "confirm-email"
    if (confirmEmail === "") {
      document.getElementById("error-confirm-email").textContent = "Le champ de confirmation de l'email est requis.";
      isValid = false;
    } else if (email !== confirmEmail) {
      document.getElementById("error-confirm-email").textContent = "L'email de confirmation ne correspond pas.";
      isValid = false;
    } else {
      document.getElementById("error-confirm-email").textContent = "";
    }
  
    // Vérification du champ "password"
    if (password === "") {
      document.getElementById("error-password").textContent = "Le champ mot de passe est requis.";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("error-password").textContent = "Le mot de passe doit contenir au moins 6 caractères.";
      isValid = false;
    } else {
      document.getElementById("error-password").textContent = "";
    }
  
    // Vérification du champ "confirm-password"
    if (confirmPassword === "") {
      document.getElementById("error-confirm-password").textContent = "Le champ de confirmation du mot de passe est requis.";
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById("error-confirm-password").textContent = "Le mot de passe de confirmation ne correspond pas.";
      isValid = false;
    } else {
      document.getElementById("error-confirm-password").textContent = "";
    }
  
    // Vérification du champ "accept-cgu"
    if (!acceptCGU) {
      document.getElementById("error-accept-cgu").textContent = "Veuillez accepter les CGU.";
      isValid = false;
    } else {
      document.getElementById("error-accept-cgu").textContent = "";
    }

    if (isValid) {
        // Redirection vers la page de confirmation
        window.location.href = "confirmation.html";
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


// Version GPT
//   function validateForm() {
//     var fields = [
//       { id: "nom", message: "Le champ nom est requis." },
//       { id: "prenom", message: "Le champ prénom est requis.", minLength: 3 },
//       { id: "age", message: "L'âge doit être supérieur à 18.", minAge: 18 },
//       { id: "email", message: "Le champ email est requis.", isValid: isValidEmail },
//       { id: "confirm-email", message: "Le champ de confirmation de l'email est requis.", isEqualTo: "email" },
//       { id: "password", message: "Le champ mot de passe est requis.", minLength: 6 },
//       { id: "confirm-password", message: "Le champ de confirmation du mot de passe est requis.", isEqualTo: "password" },
//       { id: "accept-cgu", message: "Veuillez accepter les CGU.", isChecked: true }
//     ];
  
//     var isValid = true;
  
//     fields.forEach(function(field) {
//       var input = document.getElementById(field.id);
//       var value = input.value.trim();
//       var error = document.getElementById("error-" + field.id);
  
//       if (field.minLength && value.length < field.minLength) {
//         error.textContent = "Le " + field.id + " doit contenir au moins " + field.minLength + " caractères.";
//         isValid = false;
//       } else if (field.minAge && (value === "" || parseInt(value) < field.minAge)) {
//         error.textContent = field.message;
//         isValid = false;
//       } else if (field.isValid && !field.isValid(value)) {
//         error.textContent = field.message;
//         isValid = false;
//       } else if (field.isEqualTo && value !== document.getElementById(field.isEqualTo).value) {
//         error.textContent = field.message;
//         isValid = false;
//       } else if (field.isChecked && !input.checked) {
//         error.textContent = field.message;
//         isValid = false;
//       } else {
//         error.textContent = "";
//       }
//     });
  
//     return isValid;
//   }