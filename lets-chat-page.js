//YOUR FIREBASE LINKS
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

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0    
      });

      document.getElementById("msg").value = "";
}
