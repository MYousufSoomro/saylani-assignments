// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     // user is signed in.
//     window.location.href = "./home.html";
//   } else {
//     // No user is signed in.
//   }
// });

document.querySelector("#login").addEventListener("click", () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  // document.getElementById("loading").style.display = "block";
  document.getElementById("load").style.display = "block";
  document.getElementById("mainDiv").style.display = "none";

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      var userId = firebase.auth().currentUser.uid;
      const ref = firebase.database().ref("userData/" + userId);
      ref.on("value", success, error);
      function success(data) {
        var users = data.val();
        localStorage.setItem("uid", userId);
        document.getElementById("load").style.display = "none";
        document.getElementById("mainDiv").style.display = "block";
        if (users.type.toLowerCase() === "user") {
          window.location.href = "./home.html";
        } else if (users.type.toLowerCase() === "admin") {
          window.location.href = "./admin.html";
        }
      };
      function error(error) {
        console.log(error);
      }

      success();
      error();
    })

    .catch(function (error) {
      // document.getElementById("loading").style.display = "none";
      document.getElementById("load").style.display = "none";
      document.getElementById("mainDiv").style.display = "block";
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage, error);
    });
});
