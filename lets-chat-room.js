
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDeXUebLkEEPHTsQH2jqau1opjvXTM-Xpc",
      authDomain: "lets-chat-web-app-e3759.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-e3759-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-e3759",
      storageBucket: "lets-chat-web-app-e3759.appspot.com",
      messagingSenderId: "406657544079",
      appId: "1:406657544079:web:8cc1b49811c4d6045f25fa"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
        document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          console.log("Room Name - " + Room_names);
          row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
          });});}
    getData();
    
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          })
    
          localStorage.setItem("room_name" , room_name);
    
          window.location = "lets-chat-page.html";
    }
    
    function redirectToRoomName(name)
    {
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location = "lets-chat-page.html";
    }
    function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}