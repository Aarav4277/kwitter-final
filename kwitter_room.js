

var firebaseConfig = {
      apiKey: "AIzaSyBL6WmhFiS19w6cDZCxit8cb0NK_39s9Xs",
      authDomain: "kwitter-3249c.firebaseapp.com",
      databaseURL: "https://kwitter-3249c.firebaseio.com",
      projectId: "kwitter-3249c",
      storageBucket: "kwitter-3249c.appspot.com",
      messagingSenderId: "1078658536507",
      appId: "1:1078658536507:web:c32a1ccf68f46b39a0f81e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML= "welcome "+username;

   function addroom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
   }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect_to_room_name(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}