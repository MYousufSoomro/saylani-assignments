firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("mainBody").style.display = "block";
  } else {
    // No user is signed in.
    document.getElementById("mainBody").style.display = "none";
    window.location.href = "./login.html";
  }
});

function logOut() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
      swal({
        title: "Logged out!",
        text: "You have successfully logged out!",
        icon: "success"
      });
    })
    .catch(function(error) {
      // An error happened.
      swal({
        title: "Error!",
        text: error.message,
        icon: "success"
      });
    });
}

const uid = localStorage.getItem("uid");
const ref = firebase.database().ref("userData/" + uid);
ref.on("value", success, error);

function success(data) {
  var users = data.val();
  document.getElementById("address").innerHTML = "";
  document.getElementById("email").innerHTML = "";
  document.getElementById("name").innerHTML = "";
  document.getElementById("emerName").innerHTML = "";
  document.getElementById("type").innerHTML = "";
  document.getElementById("dob").innerHTML = "";
  document.getElementById("relation").innerHTML = "";
  document.getElementById("emer_number").innerHTML = "";
  document.getElementById("profile").innerHTML = "";

  document.getElementById("address").innerHTML = `${users.address}    
        <div class="hello text-right">
            <a href="#" class="badge badge-primary">Edit</a>
            <a href="#" class="badge badge-danger">Delete</a>
        </div>`;
  document.getElementById("email").innerHTML = users.email;
  document.getElementById("name").innerHTML = `${users.name}
    <div class="hello text-right">
    <a href="#" class="badge badge-primary">Edit</a>
    <a href="#" class="badge badge-danger">Delete</a>
    </div>`;
  document.getElementById("emerName").innerHTML = `${users.emerName}
    <div class="hello text-right">
    <a href="#" class="badge badge-primary">Edit</a>
    <a href="#" class="badge badge-danger">Delete</a>
    </div>`;
  document.getElementById("type").innerHTML = users.type.toUpperCase();
  document.getElementById("dob").innerHTML = `${users.dob}    
    <div class="hello text-right">
        <a href="#" class="badge badge-primary">Edit</a>
        <a href="#" class="badge badge-danger">Delete</a>
    </div>`;
  document.getElementById("relation").innerHTML = `${users.relation}    
    <div class="hello text-right">
    <button class="btn btn-primary"><i class="fas fa-edit"></i></button>
    <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
    </div>`;
  document.getElementById("emer_number").innerHTML = `${users.emer_number}    
    <div class="hello text-right">
        <a href="#" class="badge badge-primary">Edit</a>
        <a href="#" class="badge badge-danger">Delete</a>
    </div>`;
  document.getElementById("profile").innerHTML = `    
  <span><a href="https://www.facebook.com/${users.facebook}" target="_blank"><i class="fab fa-facebook-square fa-10x" style="color:#4267B2;"></i></a></span>
  <span><a href="https://wa.me/${users.whatsapp}" target="_blank"><i class="fab fa-whatsapp-square fa-10x" style="color:#4FCE5D;" ></i></a></span>
  <span><a href="https://www.twitter.com/${users.twitter}" target="_blank"><i  class="fab fa-twitter-square fa-10x" style="color:#38A1F3;" ></i></a></span>`;
}

function error(error) {
  console.log(error);
  swal({
    title: "Oh NO!",
    text: "Unknown error occured. See Console for more details...",
    icon: "error"
  });
}

success();
error();
