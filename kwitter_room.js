//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBtAYOgBeUwjuMQ2mU6p0qrg9AnOx_5dt0",
      authDomain: "kwitter-adfb8.firebaseapp.com",
      databaseURL: "https://kwitter-adfb8-default-rtdb.firebaseio.com",
      projectId: "kwitter-adfb8",
      storageBucket: "kwitter-adfb8.appspot.com",
      messagingSenderId: "70217695187",
      appId: "1:70217695187:web:8641ccca2d9465cd78f926"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name)

      window.location = "kwitter_page.html";



}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                 console.log("Room Name - " + Room_names);
                 
                  //End code
            });
      });
}
getData();


function logout () {
localStorage      .removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
        window.location = "kwitter_page.html"}