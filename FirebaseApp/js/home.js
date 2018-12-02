firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let userId = firebase.auth().currentUser.uid;
        let ref = firebase.database().ref("userData/" + userId);
        ref.on("value", success, error);
        function success(data) {
            let users = data.val();
            localStorage.setItem("uid", userId);
            if (users.type.toLowerCase() === "admin") {
                window.location.href = "./admin.html";
            } else {
                document.getElementById('mainBody').style.display = "block";
            }
        };
        function error(error) {
            console.log(error);
        }

        success();
        error();
    } else {
        // No user is signed in.
        document.getElementById('mainBody').style.display = "none";
        window.location.href = "./login.html"
    }
});

function logOut() {
    firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
            swal({
                title: "Logged out!",
                text: "You have successfully logged out!",
                icon: "success",
            });
        })
        .catch(function (error) {
            // An error happened.
            swal({
                title: "Error!",
                text: error.message,
                icon: "success",
            });
        });
}