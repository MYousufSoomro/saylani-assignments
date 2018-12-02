// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // user is signed in.
//     window.location.href = "./home.html";
//   } else {
//     // No user is signed in.
//   }
// });

document.querySelector("#signUp").addEventListener("click", () => {
  let name = document.querySelector("#name").value;
  let address = document.querySelector("#address").value;
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#number").value;
  let dob = document.querySelector("#dob").value;
  let password = document.querySelector("#password").value;
  let facebook = document.querySelector("#facebook").value;
  let twitter = document.querySelector("#twitter").value;
  let whatsapp = document.querySelector("#whatsapp").value;
  let emerName = document.querySelector("#emerName").value;
  let relation = document.querySelector("#relation").value;
  let emer_number = document.querySelector("#emer_number").value;
  document.getElementById("formDiv").style.display = "none";
  document.getElementById("load").style.display = "block";

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("formDiv").style.display = "block";
      document.getElementById("load").style.display = "none";
      var userId = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref("/userData/" + userId)
        .set({
          name: name,
          address: address,
          email: email,
          type: "user",
          number: number,
          dob: dob,
          facebook: facebook,
          twitter: twitter,
          whatsapp: whatsapp,
          emerName: emerName,
          relation: relation,
          emer_number: emer_number
        });
      swal({
        title: "Account Created!",
        text: "You have successfully created your account!",
        icon: "success"
      }).then(() => {
        window.location.href = "./login.html";
      });
    })

    .catch(function(error) {
      document.getElementById("formDiv").style.display = "block";
      document.getElementById("load").style.display = "none";
      // Handle Errors here.
      var errorMessage = error.message;
      // ...
      swal({
        title: "Oh NO!",
        text: errorMessage,
        icon: "error"
      });
    });
});
