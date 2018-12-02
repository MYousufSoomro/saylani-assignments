firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById("mainBody").style.display = "block";
    } else {
        // No user is signed in.
        document.getElementById("mainBody").style.display = "none";
        window.location.href = "./login.html";
    }
});

const uid = localStorage.getItem("uid");

function logOut() {
    firebase
        .auth()
        .signOut()
        .then(function () {
            // Sign-out successful.
            swal({
                title: "Logged out!",
                text: "You have successfully logged out!",
                icon: "success"
            });
        })
        .catch(function (error) {
            // An error happened.
            swal({
                title: "Error!",
                text: error.message,
                icon: "success"
            });
        });
}

function createPost() {
    var title = document.querySelector("#title").value;
    var desc = document.querySelector("#desc").value;
    if (title.length <= 5 || desc.length < 5) {
        swal({
            title: "Error!",
            text: "Please Enter Title and Description to continue...",
            icon: "error"
        });
    } else {
        document.querySelector("#loadingBar").style.display = 'block';
        firebase.database().ref("posts/" + uid)
            .push({
                title,
                desc
            })
            .then((success) => {
                document.querySelector("#loadingBar").style.display = 'none';
                swal({
                    title: "Posted!",
                    text: "You have successfully posted new update",
                    icon: "success"
                })
                    .then(() => {
                        window.location.href = "./newsfeed.html"
                    });
            })
            .catch((error) => {
                document.querySelector("#loadingBar").style.display = 'none';
                swal({
                    title: "Error!",
                    text: error.message,
                    icon: "error"
                });
            })


    }
}

function allPosts(){
    
}