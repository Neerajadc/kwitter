//YOUR FIREBASE LINKS
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

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4> " + name + "<img class='user_tick'  src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;



                        //End code 
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name.push)({
            name: user_name,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
button_id = message_id
likes = document.getElementById(button_id).value
upadated_likes = Number(likes ) + 1;
console.log(updated_like);
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }


function logout () {
      localStorage      .removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
      }



