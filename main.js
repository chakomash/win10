 var firebaseConfig = {
    apiKey: "AIzaSyBoYMFbbcaaIMErRc4cUGbctBgrlEEvrlM",
    authDomain: "site-ec937.firebaseapp.com",
    databaseURL: "https://site-ec937.firebaseio.com",
    projectId: "site-ec937",
    storageBucket: "site-ec937.appspot.com",
    messagingSenderId: "733412568056",
    appId: "1:733412568056:web:bc00405770682033ed440d",
    measurementId: "G-K3T0B8GM5R"
  };
  
firebase.initializeApp(firebaseConfig);

var mess = firebase.database().ref('users');

$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMess = mess.push();
    newMess.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});
