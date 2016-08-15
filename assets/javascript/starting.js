snippet with easy assign:

var users = new Firebase('https://rpsfirebase.firebaseio.com');
var assign = database.ref("/playerAssign");

$("#addUser").on("click", function() {

var name = $('#player-input').val().trim(); 
  console.log("inside playerAssign input name = " + name);
  // var state = 0;

 assign.push({
      name: name,
      // state: 0
    });

 return false;

});

var foo = database.ref("/turn");

// var turn = 0;

foo.set({
  turn: 0
})

=======================

reconstructiong JS:

$(document).ready(function() {

//access things nested in data: reread this website:
//https://www.firebase.com/docs/web/guide/understanding-data.html

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUEH5HKaRY_A5IRXsbiaoZKVSkxMGwgMA",
    authDomain: "rpsfirebase.firebaseapp.com",
    databaseURL: "https://rpsfirebase.firebaseio.com",
    storageBucket: "rpsfirebase.appspot.com",
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if( snap.val() ) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();

  };

});

var playerNumbers = 2;
var gameLocation = 'https://rpsfirebase.firebaseio.com/';
var playerLocation = 'playerList';
var PlayerDataLocation = 'playerData';
var playerName1;
var playerName2;
var playerOne;
var playereTwo;
var playState1;
var playState2;

var users = new Firebase('https://rpsfirebase.firebaseio.com');

// //not really using this right now
// var totalVisitors = users.child('totalVisitors');
// totalVisitors.transaction(function (currentData) {
//    currentData + 1;
// });
// function getPlayers() {
  // function assignPlayers() {
  $("#addUser").on("click", function() {

var name = $('#player-input').val().trim(); 
  console.log("input name = " + name);
  //  var userId = name;
  // var gameRef = new Firebase("https://rpsfirebase.firebaseio.com/turn");
  // assignPlayerNumber(userId, gameRef);
    
    // console.log("(userId, gameRef); =" + userId +  gameRef);

// });

  database.ref().push({
    name: name
  });
    return false;
    // state: off
  });
  // return false;
// };

  // var turn = new Firebase('https://rpsfirebase.firebaseio.com/turn');



//   var userId = name;
//   var gameRef = new Firebase("https://rpsfirebase.firebaseio.com/");
//   assignPlayerNumber(userId, gameRef);

//   var playerOne = new Firebase('https://rpsfirebase.firebaseio.com/playerData/0');
//     // var playerName1 = playerOne.val();
//     playerOne.on("value", function(snapshot) {
//       var nameSnapshot1 = snapshot.child("userId")
//       var playerName1 = nameSnapshot1.val();

//       console.log("playerName1 line 74 = " + playerName1);
//       console.log("playerOne line 75 = " + playerOne);
//     });
// var playerTwo =  new Firebase('https://rpsfirebase.firebaseio.com/playerData/1');
//        playerTwo.on("value", function(snapshot) {
//         var nameSnapshot2 = snapshot.child("userId")
//       var playerName2 = nameSnapshot2.val();
//       console.log("playerName2 line 79 = " + playerName2);
//             console.log("playerTwo line 80 = " + playerTwo);

//     });
    
//     return false;

// });

// console.log("playerName1 line 88= " + playerName1);
// console.log("playerName2 line 89= " + playerName2);
//       console.log("playerOne line 90 = " + playerOne);

// // };
// // getPlayers();
// // The maximum number of players.  If there are already 
// // with playerNumber assigned, users won't be able to join the game.
// var playerNumber = 2;

// // The root of your game data.
// var gameLocation = 'https://rpsfirebase.firebaseio.com';

// // A location under gameLocation that will store the list of 
// // players who have joined the game (up to maxPlayers).
// var playersLocation = 'playerList';

// // A location under gameLocation that you will use to store data 
// // for each player (their game state, etc.)


// // Called after player assignment completes.
// function setGame(myPlayerNumber, userId, justJoinedGame, gameRef) {
//   var playerDataRef = gameRef.child(PlayerDataLocation).child(myPlayerNumber);
//   console.log('You are player number ' + (myPlayerNumber + 1) + 
//       '.  Your data will be located at ' + playerDataRef.toString());
//   $("#updates").html("Waiting for player to join.");
// console.log("playerName1 line 108= " + playerName1);
// console.log("playerName2 line 109= " + playerName2);
//   if (justJoinedGame) {
//     console.log(userId + ' just joined game.');
//     $("#welcome").html(userId + " just joined the game!");
//     $("#userAdd").hide();
//     var uA = $('#userAdd').attr('id');
//     console.log("user add = " + uA);
     
//     $("#updates").html('You are player number ' + (myPlayerNumber + 1));
//       if (myPlayerNumber == 0) {
//         $("#player1").html(userId + " - Player 1");
//         $("#player2").html("waiting for a challenger");
//         console.log($("#player1").html(userId + " - Player 1"));
//       }
//       // if ($("#player2").text() === "waiting for a challenger"); {
//       // $("#player2").html(userId[1]);
//       if (myPlayerNumber == 1){
//         $("#player2").html(userId + " - Player 2");
//                 // $("#player1").html(playerName1 + " - Player 1");

//                // console.log(playerOne + " - Player 1");
//                //  console.log(playerTwo + " - Player 2");
// // }
//         // $("#player2").html(userId);
//       };
// };
      
    
//     playerDataRef.set({
//       userId: userId, 
//       state: 'false'
//     });
  
//   // $("#player1").html(userId[0]);
//     // $("#player2").html(userId[1]);
// };
//  console.log("playerOne.state = " + playState1);
//      // });
//     // var oneName = new 
//     // console.log(playerOne);
//     // console.log(playerTwo.data);
// // Use transaction() to assign a player number, then call playGame().
// function assignPlayerNumber(userId, gameRef) {
//   var playerListRef = gameRef.child(playersLocation);
//   var myPlayerNumber, alreadyInGame = false;
//         console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);

//   playerListRef.transaction(function(playerList) {
//     // Attempt to (re)join the given game. Notes:
//     //
//     // 1. Upon very first call, playerList will likely appear null (even if the
//     // list isn't empty), since Firebase runs the update function optimistically
//     // before it receives any data.
//     // 2. The list is assumed not to have any gaps (once a player joins, they 
//     // don't leave).
//     // 3. Our update function sets some external variables but doesn't act on
//     // them until the completion callback, since the update function may be
//     // called multiple times with different data.
//     if (playerList === null) {
//       playerList = [];
//       // $("#updates").html("Waiting for players to join.");
//     }

//     for (var i = 0; i < playerList.length; i++) {
//       if (playerList[i] === userId) {
//         // Already seated so abort transaction to not unnecessarily update playerList.
//         alreadyInGame = true;
//         myPlayerNumber = i; // Tell completion callback which seat we have.
//         console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);
//         return;
//       }
//     }

//     if (i < playerNumber) {
//       // Empty seat is available so grab it and attempt to commit modified playerList.
//       playerList[i] = userId;  // Reserve our seat.
//       myPlayerNumber = i; // Tell completion callback which seat we reserved.
//       return playerList;
//               console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);

//     }
//         // console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);

//     // if (playerNumber == 1) {
//     //   $("#updates").html("Let's play!");
//     //   // $("#updates").html("Great!");

//     // }
//     // if (i === 1) {
//     //   $("#updates").html("Great!");

//     // }

//     // Abort transaction and tell completion callback we failed to join.
//     myPlayerNumber = null;

//     // playerDataRef.removeOnDisconnect();
//   }, 

//         // console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);

//         // console.log("playerList = " + playerList + " and gamRef = " + gameRef);

//   function (error, committed) {
//     // Transaction has completed.  Check if it succeeded or we were already in
//     // the game and so it was aborted.
//     if (committed || alreadyInGame) {
//       setGame(myPlayerNumber, userId, !alreadyInGame, gameRef);
//     } else {
//       console.log('Game is full.');
//        $("#welcome").html("Sorry- the game is full.");
//        $("#updates").html("Please try again later.");
//     }
//   });
// }

// function setChoice(myPlayerNumber, myUserId, myChoice) {
// // Create playerDataRef set to the Firebase location of the input player.
//     var playerDataRef = new Firebase('https://rpsfirebase.firebaseio.com').
//         child(PlayerDataLocation).child(myPlayerNumber);
// // Change game state to 'picked' and set rock, paper, or scissors.
//     playerDataRef.set({userId: myUserId, state: 'chose', rps: myRPS});
// }
// function takeTurns() {

// //if player1 status 
// // for( var i = 0; i < playerNumber; i++) {
//   // var turn = new Firebase("https://rpsfirebase.firebaseio.com/assignSpace/playerData/0/state");
// //     var boo = database.ref("/playerData/0/state");
// // // console.log("boo = " + boo.val());

// // boo.on("child_added", function(childSnapshot){
// //    var boo = database.ref("/playerData/0/state");
// // console.log("boo = " + $(boo).val());
// //   var loo = $(boo).val();
// //   console.log(loo);
// // });

    
      $(document).on('click', '.choiceButton', function() {
      var theChoice = $(this).attr('name')
// if (boo == false) {
    //   console.log("this was clicked =" + choiceButton);
      // var moon[i] = ("#moon"[i]);
      // var fish1 = ("#fish1");
      // var ocean1 = ("#ocean1")

      if (theChoice === "moon") {
        // var thisMoon = moon1;
        //      console.log("this is '#moon[i]: " + thisMoon);

      $('.fish').hide();
      $('.ocean').hide();
       $('.moon').html(playerName1 + " chose moon!");
    }
    else if (theChoice === "fish") {
      $('.moon').hide();
      $('.ocean').hide();
      $('.fish').html("You chose fish!");
    }
    else {
      $('.moon').hide();
      $('.fish').hide();
      $('.ocean').html("You chose ocean!");
            console.log("this is the choice: " + theChoice);
    };
            // console.log("this is '#moon[i]: " + moon[i]);

    // };
  });
  // });
  // });
  //   $(".choiceButton").on("click", function() {

    //  if ($("#moon[i]").data("clicked")) {
    //   $('#fish[i]').hide();
    //   $('#ocean[i]').hide();
    // }
    // else if ($("#fish[i]").data("clicked")) {
    //   $('#moon[i]').hide();
    //   $('#ocean[i]').hide();
    // }
    // else {
    //   $('#moon[i]').hide();
    //   $('#fish[i]').hide();
    // };
  // });
    //  if $("#fish1").on("click", function() {
    //   $('#moon[i]').hide();
    //   $('#ocean[i]').hide();
    // }
    // else {
    //   $('#fish[i]').hide();
    //   $('#moon[i]').hide();
    // };
    //switch player1game sataus to false??
    // };

// takeTurns();
// };

var chatRef = new Firebase('https://rpsfirebase.firebaseio.com');
console.dir(chatRef);

var messagesRef = chatRef.child("messages");
var chatWindow = $("#chatWindow");
var messageField = $("#message");
var messageList = $("#messageList");
var nameField = $("#name");



  $(document).on('click', '#submitChat', function() {
  
    var message = {
      message: messageField.val()
    };

    messagesRef.push(message);

    messageField.val('');
    });
messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  //GET DATA
  var data = snapshot.val();
  var name = data.name;
  var message = data.message;

  //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
  var messageElement = $("<li>");
  var nameElement = $("<label></label>");
  nameElement.text(name);
  messageElement.text(message).prepend(nameElement);

  //ADD MESSAGE
  messageList.append(messageElement)

  //SCROLL TO BOTTOM OF MESSAGE LIST
  chatWindow[0].scrollTop = chatWindow[0].scrollHeight;
});



});


//input for player one, say hello you are player one ditto player two, 
// their names will appear in their respective player box

// show "waiting for [name of player] to choose" on the other player's screen, 
// shows "It's Your turn!" on screen of choosing player
// these away when player has chosen and then they switch 
//show all choices in the choosing player box
// choices go away when player choice is made
//in the middle box, show who won wins and losses increment, ties don't have to
// chat box at bottom to talk to the other player, 
//what's typed shows with the person's name 
//(Name: [text typed]) in colors unique to each player
//when palyer leaves, a disconnect message appears in chat box (in a different color)










also broken but with chat

$(document).ready(function() {

//access things nested in data: reread this website:
//https://www.firebase.com/docs/web/guide/understanding-data.html

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUEH5HKaRY_A5IRXsbiaoZKVSkxMGwgMA",
    authDomain: "rpsfirebase.firebaseapp.com",
    databaseURL: "https://rpsfirebase.firebaseio.com",
    storageBucket: "rpsfirebase.appspot.com",
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if( snap.val() ) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();

  };

});

var playerNumbers = 2;
var gameLocation = 'https://rpsfirebase.firebaseio.com/';
var playerLocation = 'player_list';
var PlayerDataLocation = 'player_data';
var firstPlayer = player1;
var secondPlayer = player2;
var userId = name;

var users = new Firebase('https://rpsfirebase.firebaseio.com');

//not really using this right now
var totalVisitors = users.child('totalVisitors');
totalVisitors.transaction(function (currentData) {
  return currentData + 1;
});
 

function assignPlayers() {
  $("#addUser").on("click", function() {

var name = $('#player-input').val().trim(); 
  console.log("inside assignPlayers input name = " + name);

  // var userId = name;
  var gameRef = new Firebase("https://rpsfirebase.firebaseio.com/assignSpace");
  assignPlayerNumber(userId, gameRef);
    return false;

});
};
// The maximum number of players.  If there are already 
// with playerNumber assigned, users won't be able to join the game.
var playerNumber = 2;

// The root of your game data.
var gameLocation = 'https://rpsfirebase.firebaseio.com';

// A location under gameLocation that will store the list of 
// players who have joined the game (up to maxPlayers).
var playersLocation = 'player_list';

// A location under gameLocation that you will use to store data 
// for each player (their game state, etc.)
var PlayerDataLocation = 'player_data';


// Called after player assignment completes.
function setGame(myPlayerNumber, userId, justJoinedGame, gameRef) {
  var playerDataRef = gameRef.child(PlayerDataLocation).child(myPlayerNumber + 1);
  console.log('You are player number ' + (myPlayerNumber + 1) + 
      '.  Your data will be located at ' + playerDataRef.toString());
  $("#updates").html("Waiting for player to join.");

  if (justJoinedGame) {
    console.log(userId + ' just joined game.');
    $("#welcome").html(userId + " just joined the game!");
    $("#updates").html('You are player number ' + (myPlayerNumber + 1));
    
    playerDataRef.set({
      userId: userId, 
      state: 'game state'
    });
  }
}

// Use transaction() to assign a player number, then call playGame().
function assignPlayerNumber(userId, gameRef) {
  var playerListRef = gameRef.child(playersLocation);
  var myPlayerNumber, alreadyInGame = false;

  playerListRef.transaction(function(playerList) {
    // Attempt to (re)join the given game. Notes:
    //
    // 1. Upon very first call, playerList will likely appear null (even if the
    // list isn't empty), since Firebase runs the update function optimistically
    // before it receives any data.
    // 2. The list is assumed not to have any gaps (once a player joins, they 
    // don't leave).
    // 3. Our update function sets some external variables but doesn't act on
    // them until the completion callback, since the update function may be
    // called multiple times with different data.
    if (playerList === null) {
      playerList = [];
      $("#updates").html("Waiting for players to join.");
    }

    for (var i = 0; i < playerList.length; i++) {
      if (playerList[i] === userId) {
        // Already seated so abort transaction to not unnecessarily update playerList.
        alreadyInGame = true;
        myPlayerNumber = i; // Tell completion callback which seat we have.
        return;
      }
    }

    if (i < playerNumber) {
      // Empty seat is available so grab it and attempt to commit modified playerList.
      playerList[i] = userId;  // Reserve our seat.
      myPlayerNumber = i; // Tell completion callback which seat we reserved.
      return playerList;
    }

    if (playerNumber == 1) {
      $("#updates").html("Let's play!");
      // $("#updates").html("Great!");

    }
    // if (i === 1) {
    //   $("#updates").html("Great!");

    // }

    // Abort transaction and tell completion callback we failed to join.
    myPlayerNumber = null;

    // playerDataRef.removeOnDisconnect();
  }, 

  function (error, committed) {
    // Transaction has completed.  Check if it succeeded or we were already in
    // the game and so it was aborted.
    if (committed || alreadyInGame) {
      setGame(myPlayerNumber, userId, !alreadyInGame, gameRef);
    } else {
      console.log('Game is full.');
       $("#welcome").html("Sorry- the game is full.");
       $("#updates").html("Please try again later.");
    }
  });
}
assignPlayers();

function setChoice(myPlayerNumber, myUserId, myChoice) {
// Create playerDataRef set to the Firebase location of the input player.
    var playerDataRef = new Firebase('https://rpsfirebase.firebaseio.com').
        child(PlayerDataLocation).child(myPlayerNumber);
// Change game state to 'picked' and set rock, paper, or scissors.
    playerDataRef.set({userId: myUserId, state: 'chose', rps: myRPS});
}
// function takeTurns() {

//if player1 status 
for( var i = 0; i < playerNumber; i++) {
//   var turn = new Firebase("https://rpsfirebase.firebaseio.com/assignSpace/player_data/")[i];
    $(document).on('click', '.choiceButton', function() {
      var theChoice = $(this).attr('name')

    //   console.log("this was clicked =" + choiceButton);
      // var moon1 = ("#moon1");
      // var fish1 = ("#fish1");
      // var ocean1 = ("#ocean1")

      if (theChoice === "moon"[i]) {
 
      $("#fish"[i]).hide();
      $("#ocean"[i]).hide();
    }
    else if (theChoice === "fish"[i]) {
      $("#moon"[i]).hide();
      $("#ocean"[i]).hide();
    }
    else {
      $("#moon"[i]).hide();
      $("#fish"[i]).hide();
            console.log("this is the choice: " + theChoice);

    };
    });
  };

  // });
  //   $(".choiceButton").on("click", function() {

    //  if ($("#moon2").data("clicked")) {
    //   $('#fish2').hide();
    //   $('#ocean2').hide();
    // }
    // else if ($("#fish1").data("clicked")) {
    //   $('#moon2').hide();
    //   $('#ocean2').hide();
    // }
    // else {
    //   $('#moon2').hide();
    //   $('#fish2').hide();
    // };
  
    //  if $("#fish1").on("click", function() {
    //   $('#moon1').hide();
    //   $('#ocean1').hide();
    // }
    // else {
    //   $('#fish1').hide();
    //   $('#moon1').hide();
    // };
    //switch player1game sataus to false??
    // });

// takeTurns();
// };

var chatRef = new Firebase('https://rpsfirebase.firebaseio.com');
console.dir(chatRef);

var messagesRef = chatRef.child("messages");
var chatWindow = $("#chatWindow");
var messageField = $("#message");
var messageList = $("#messageList");
var nameField = $("#name");



  $(document).on('keypress click', '#submitChat', function(e) {
  if (e.which === 13 || e.type === 'click') {
    console.log("click!");
    var message = {
      message: messageField.val()
    };

    messagesRef.push(message);

    messageField.val('');
  }
    });

messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  //GET DATA
  var data = snapshot.val();
  var name = data.name;
  var message = data.message;
  console.log("name = " + name)

  //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
  var messageElement = $("<li>");
  var nameElement = $("<label></label>");
  nameElement.text(name);
  messageElement.text(message).prepend(nameElement);

  //ADD MESSAGE
  messageList.append(messageElement)

  //SCROLL TO BOTTOM OF MESSAGE LIST
  chatWindow[0].scrollTop = chatWindow[0].scrollHeight;
});



});


//input for player one, say hello you are player one ditto player two, 
// their names will appear in their respective player box

// show "waiting for [name of player] to choose" on the other player's screen, 
// shows "It's Your turn!" on screen of choosing player
// these away when player has chosen and then they switch 
//show all choices in the choosing player box
// choices go away when player choice is made
//in the middle box, show who won wins and losses increment, ties don't have to
// chat box at bottom to talk to the other player, 
//what's typed shows with the person's name 
//(Name: [text typed]) in colors unique to each player
//when palyer leaves, a disconnect message appears in chat box (in a different color)




broken

$(document).ready(function() {



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUEH5HKaRY_A5IRXsbiaoZKVSkxMGwgMA",
    authDomain: "rpsfirebase.firebaseapp.com",
    databaseURL: "https://rpsfirebase.firebaseio.com",
    storageBucket: "rpsfirebase.appspot.com",
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if( snap.val() ) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();

  };

});

var playerNumbers = 2;
var gameLocation = 'https://rpsfirebase.firebaseio.com/';
var playerLocation = 'player_list';
var PlayerData = 'player_data';
var firstPlayer = player1;
var secondPlayer2 = player2;

// $("#addUser").on("click", function() {

// var name = $('#player-input').val().trim(); 
  
//Creating object to be passed in key is the left, variable value is on the left
//made up key name is on the left, property 

//getting change
// database.ref().set({
//     name: name,
    
//     });
// console.log("input name = " + name);


//   // Don't refresh the page!
//   return false;
// });
database.ref('/playerData').on("value", function(snapshot) {


if (snapshot.child("player1").exists() && snapshot.child("Player2").exists()) {

    // Set the initial variables for highBidder equal to the stored values.
    player1 = snapshot.val().player1;
    player2 = snapshot.val().player1;

    // Change the HTML to reflect the initial value
    $('#player1').html(snapshot.val().player1);
    $('#player2').html(snapshot.val().player2);


    // Print the initial data to the console.
    console.log(snapshot.val().player1);
    console.log(snapshot.val().player2)
  }

  // Keep the initial variables for highBidder equal to the initial values
  // else{

  //   // Change the HTML to reflect the initial value
  //   $('#highestBidder').html(highBidder);
  //   $('#highestPrice').html("$" + highPrice);

  //   // Print the initial data to the console.
  //   console.log("Current High Price")
  //   console.log(highBidder);
  //   console.log(highPrice)
  // }
});

// database.ref().on("value", function(snapshot) {
    
//     $("#player-input").html(snapshot.val().name);
//     // $("#agedisplay").html(snapshot.val().age);
//     // $("#emaildisplay").html(snapshot.val().email);
//     // $("#commentdisplay").html(snapshot.val().comment);
    
//     console.log("post-data ref name = " + name);
//   },

// Create Error Handling

// function (errorObject) {

//     // 
//       console.log("The read failed: " + errorObject.code);
  
//   });

var analytics = new Firebase('https://rpsfirebase.firebaseio.com');
var players = analytics.child('players');
$("#addUser").on("click", function() {

var name = $('#player-input').val().trim(); 
  
//Creating object to be passed in key is the left, variable value is on the left
//made up key name is on the left, property 

//getting change
// database.ref().set({
//     name: name,
    
//     });
console.log("input name = " + name);


  // Don't refresh the page!
  return false;


players.push({
  name: name,
  path: window.location.pathname,
  arrivedAt: Firebase.ServerValue.TIMESTAMP,
  userAgent: navigator.userAgent
});

});

var totalVisitors = analytics.child('totalVisitors');
totalVisitors.transaction(function (currentData) {
  return currentData + 1;
});

// var users = $('#addUser').submit();

// users.on("value", function(snap) {

// var getPlayer = $('#player-input').text();

// database.ref().set({
//     name: getplayer,
//     });
// });
// $("#addUser").on("click", function() {

// var name = $('#nameinput').val().trim(); 
  

// //Creating object to be passed in key is the left, variable value is on the left
// //made up key name is on the left, property 

// //getting change
// database.push().set({
//     name: name,
    
//     });
// console.log("name = " + name);

//   // Don't refresh the page!
//   return false;
// });
var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if( snap.val() ) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();

  };

});

// connectionsRef.on("value", function(snap) {

//   // Display the viewer count in the html.
//   // The number of online users is the number of children in the connections list.
//   console.log("connected visitors: " + ($("#connectedViewers").html(snap.numChildren())));

// });
return false;


//Get objects
// var dataObject = document.getElementByID('object');

// //Create reference

// var dbRefObject = firebase.database().ref().child('object');

// //sync object cahnges
// dbRefObject.on('value', snapshot);
// console.log(snapshot.val());

// Whenever a user clicks the click button
// $("#addPlayer").on("click", function() {

//   // Get the input values
//   var playerName = $('#player-input').val().trim();
//   // var bidderPrice = parseInt($('#bidderPrice').val().trim());

//   // Log the Bidder and Price (Even if not the highest)
//   console.log(playerName);
//   // console.log(bidderPrice);

//   database.ref().set({
//     name: playerName,
//     });

//   // Log the Bidder and Price (Even if not the highest)
//   console.log(highBidderInput);
//   console.log(highBidderPrice);

// });


});

// });


//input for player one, say hello you are player one ditto player two, 
// their names will appear in their respective player box

// show "waiting for [name of player] to choose" on the other player's screen, 
// shows "It's Your turn!" on screen of choosing player
// these away when player has chosen and then they switch 
//show all choices in the choosing player box
// choices go away when player choice is made
//in the middle box, show who won wins and losses increment, ties don't have to
// chat box at bottom to talk to the other player, 
//what's typed shows with the person's name 
//(Name: [text typed]) in colors unique to each player
//when palyer leaves, a disconnect message appears in chat box (in a different color)

========

database.ref('/playerData').on("value", function(snapshot) {


if (snapshot.child("player1").exists() && snapshot.child("Player2").exists()) {

    // Set the initial variables for highBidder equal to the stored values.
    player1 = snapshot.val().player1;
    player2 = snapshot.val().player1;

    // Change the HTML to reflect the initial value
    $('#player1').html(snapshot.val().player1);
    $('#player2').html(snapshot.val().player2);


    // Print the initial data to the console.
    console.log(snapshot.val().player1);
    console.log(snapshot.val().player2)
  }




$(document).ready(function() {



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUEH5HKaRY_A5IRXsbiaoZKVSkxMGwgMA",
    authDomain: "rpsfirebase.firebaseapp.com",
    databaseURL: "https://rpsfirebase.firebaseio.com",
    storageBucket: "rpsfirebase.appspot.com",
  };
  firebase.initializeApp(config);

    

// Create a variable to reference the database
var database = firebase.database();

var connectionsRef = database.ref("/connections");

var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snap) {

  // If they are connected..
  if( snap.val() ) {

    // Add user to the connections list.
    var player = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    player.onDisconnect().remove();

  };

});

// Initial Values
var name = "";
var choice = "";
var comment = "";
var player1 = "";
var player2 = "";
var win = 0;
var lose = 0;
var ties = 0;
var turn = 0;



// database.ref('/playerData').on("value", function(snapshot) {

//   if (snapshot.child("player1").exists() && snapshot.child("player2").exists()) {

//     // Set the initial variables for highBidder equal to the stored values.
//     player1 = snapshot.val().player1;
//     player2 = snapshot.val().player2;

//     // Change the HTML to reflect the initial value
//     $('#player1').html(snapshot.val().player1);
//     $('#player2').html(snapshot.val().player2);


//     // Print the initial data to the console.
//     console.log(snapshot.val().player1);
//     console.log(snapshot.val().player2)
//   }

function prepGame() {
  var userId = $('#player-input').val().trim();

  // Consider adding '/<unique id>' if you have multiple games.
  var gameRef = new Firebase(gameLocation);
  assignPlayerNumberAndPlayGame(userId, gameRef);
};

// The maximum number of players.  If there are already 
// NUM_PLAYERS assigned, users won't be able to join the game.
var numPlayers = 2;

// The root of your game data.
var gameLocation = "https://rpsfirebase.firebaseio.com";

// A location under GAME_LOCATION that will store the list of 
// players who have joined the game (up to MAX_PLAYERS).
var playerLocation = 'playerList';

// A location under GAME_LOCATION that you will use to store data 
// for each player (their game state, etc.)
var playerDataLocation = 'playerData';


// Called after player assignment completes.
function playGame(myPlayerNumber, userId, justJoinedGame, gameRef) {
  var playerDataRef = gameRef.child(playerDataLocation).child(myPlayerNumber);
  $(".name").html('You are player number ' + myPlayerNumber);

  if (justJoinedGame) {
    $("#updates").html('Welcome ' + playerDataRef);('Doing first-time initialization of data.');
    playerDataRef.set({userId: userId, state: 'game state'});
  }
}

// Use transaction() to assign a player number, then call playGame().
function assignPlayerNumberAndPlayGame(userId, gameRef) {
  var playerListRef = gameRef.child(PLAYERS_LOCATION);
  var myPlayerNumber, alreadyInGame = false;

  playerListRef.transaction(function(playerList) {
    // Attempt to (re)join the given game. Notes:
    //
    // 1. Upon very first call, playerList will likely appear null (even if the
    // list isn't empty), since Firebase runs the update function optimistically
    // before it receives any data.
    // 2. The list is assumed not to have any gaps (once a player joins, they 
    // don't leave).
    // 3. Our update function sets some external variables but doesn't act on
    // them until the completion callback, since the update function may be
    // called multiple times with different data.
    if (playerList === null) {
      playerList = [];
    }

    for (var i = 0; i < playerList.length; i++) {
      if (playerList[i] === userId) {
        // Already seated so abort transaction to not unnecessarily update playerList.
        alreadyInGame = true;
        myPlayerNumber = i; // Tell completion callback which seat we have.
        return;
      }
    }

    if (i < numPlayers) {
      // Empty seat is available so grab it and attempt to commit modified playerList.
      playerList[i] = userId;  // Reserve our seat.
      myPlayerNumber = i; // Tell completion callback which seat we reserved.
      return playerList;
    }

    // Abort transaction and tell completion callback we failed to join.
    myPlayerNumber = null;
  }, function (error, committed) {
    // Transaction has completed.  Check if it succeeded or we were already in
    // the game and so it was aborted.
    if (committed || alreadyInGame) {
      playGame(myPlayerNumber, userId, !alreadyInGame, gameRef);
    } else {
      alert('Game is full.  Can\'t join. :-(');
    }
  });
}

  // Keep the initial variables for highBidder equal to the initial values
  // else if (snapshot.child("player1").exists() && !snapshot.child("player2").exists()) {

    // Set the initial variables for highBidder equal to the stored values.
    // player1 = snapshot.val().player1;
    

    // Change the HTML to reflect the initial value
  //   $('#player1').html(snapshot.val().player1);
   
  //  //say waiting for player2
  //  $("#game").html("Waiting for player #2");

  //   // Print the initial data to the console.
  //   console.log(snapshot.val().player1);
  //   console.log(snapshot.val().player2)
  // }
  // else {

  //    $("#game").html("Waiting for players");

    // Change the HTML to reflect the initial value
    // $('#highestBidder').html(highBidder);
    // $('#highestPrice').html("$" + highPrice);

    // // Print the initial data to the console.
    // console.log("Current High Price")
    // console.log(highBidder);
    // console.log(highPrice)

    //waiting for players
//   }
// });

$(".choiceButton").on("click", function() {
console.log("choiceButton = " + choiceButton)

  // Capture User Inputs and store into variables
  // name = $('#nameInput').val().trim(); 
  choice = $('#choiceButton').val().trim(); 
  // lose = $('#loseInput').val().trim(); 
  // win = $('#winInput').val().trim(); 
  // comment = $('#commentInput').val().trim(); 

  database.ref().push({
    choice: choice,
    // lose: lose,
    // win: win,
    // comment: comment
    });

  return false;
});

database.ref().on("value", function(snapshot) {

  // Log everything that's coming out of snapshot

  console.log(snapshot.val());
  // console.log(snapshot.val().name);
  console.log(snapshot.val().choice);
  // console.log(snapshot.val().win);
  // // console.log(snapshot.val()).lose;
  // console.log(snapshot.val().comment);

    // Change the HTML to reflect

      inputChoice = $(this).data('choice');
//turn1 player1 turn 2 palter2 turn3 palyer1

//if turn increases, change player??

    if ((player1 == 'moon') && (player2 == 'ocean')){
      wins++;
    }else if ((player1 == 'moon') && (player2 == 'fish')){
      lose++;
    }else if ((player1 == 'ocean') && (player2 == 'moon')){
      lose++;
    }else if ((player1 == 'ocean') && (player2 == 'fish')){
      wins++;
    }else if ((player1 == 'fish') && (player2 == 'moon')){
      wins++;
    }else if ((player1 == 'fish') && (player2 == 'ocean')){
      lose++;
    }else if (player1 == player2){
      ties++;
    }  
    
    // $("#nameDisplay").html(snapshot.val().name);
    $("#choiceDisplay").html(snapshot.val().choice);
    $("#winDisplay").html(snapshot.val().win);
    // $("#loseDisplay").html(snapshot.val().lose);
    $("#commentdisplay").html(snapshot.val().comment);

  // Handle the errors
}, function(errorObject){

  console.log("Errors handled: " + errorObject.code)

  });

//set up:

//input for player one, say hello you are player one ditto player two, 
// their names will appear in their respective player box

// show "waiting for [name of player] to choose" on the other player's screen, 
// shows "It's Your turn!" on screen of choosing player
// these away when player has chosen and then they switch 
//show all choices in the choosing player box
// choices go away when player choice is made
//in the middle box, show who won wins and losses increment, ties don't have to
// chat box at bottom to talk to the other player, 
//what's typed shows with the person's name 
//(Name: [text typed]) in colors unique to each player
//when palyer leaves, a disconnect message appears in chat box (in a different color)




// When the user presses the key it records the keypress and then sets it to userguess
// (".playerClick").on("click", function() {
//   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // This sets the computer guess equal to the random.
  // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Making sure the user chooses r, p, or s
  // if ((userGuess == 'r') || (userGuess == 'p') || (userGuess == 's')){

$("#addPlayer").on("click", function() {


  // Capture User Inputs and store into variables
  name = $('#nameInput').val().trim(); 
  choice = $('#choiceInput').val().trim(); 
  lose = $('#loseInput').val().trim(); 
  win = $('#winInput').val().trim(); 
  comment = $('#commentInput').val().trim(); 

  database.ref().push({
    name: name,
    choice: choice,
    lose: lose,
    win: win,
    comment: comment
    });

  return false;
});
  //   // It tests to determine if the computer or the user won the round and then increments 
  //   if ((userGuess == 'r') && (computerGuess == 's')){
  //     wins++;
  //   }else if ((userGuess == 'r') && (computerGuess == 'p')){
  //     losses++;
  //   }else if ((userGuess == 's') && (computerGuess == 'r')){
  //     losses++;
  //   }else if ((userGuess == 's') && (computerGuess == 'p')){
  //     wins++;
  //   }else if ((userGuess == 'p') && (computerGuess == 'r')){
  //     wins++;
  //   }else if ((userGuess == 'p') && (computerGuess == 's')){
  //     losses++;
  //   }else if (userGuess == computerGuess){
  //     ties++;
  //   }  

  //   // Taking the tallies and displaying them in HTML
  //   var html = "<p>Press r, p or s to start playing</p>" +
  //   "<p>wins: " + 
  //   wins + 
  //   "</p>" +
  //   "<p>losses: " + 
  //   losses + 
  //   "</p>" +
  //   "<p>ties: " + 
  //   ties + 
  //   "</p>";

  //   // Placing the html into the game ID
  //   document.querySelector('#game').innerHTML = html;

  // //   database.ref().on("value", function(snapshot) {

  // //   // 
  // //   console.log(snapshot.val());

  // //   // access the click count property, reading the value
  // //   $("#clickValue").html(snapshot.val().clickCount);

  // //   //eading variable and stores that in the variable which is used as the counter
  // //   clickCounter = snapshot.val().clickCount;

  // // // in case there's a fail, add this in
  // // });

  //   };
  

  //   function (errorObject) {

  //   // 
  //     console.log("The read failed: " + errorObject.code);
  
  // };

  // };
// to clear data at game's end? Keep win/loss info as long as one player still active??
  // $('#nameInput').val(""); 
  // $('#choiceInput').val(""); 
  // $('#loseInput').val(""); 
  // $('#winInput').val(""); 

});


<!DOCTYPE html>
<html>
<head>
   <title>RPG-Multiplayer</title>

  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="assets/css/reset.css">
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrapYeti.css">
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <!--link to JavaScript-->
  <script src="assets/javascript/jquery-2-2.1.min.js"></script>
  <script type="text/javascript" src="composer.json"></script>
  <script type="text/javascript" src="assets/javascript/app.js"></script>
  <script src="assets/javascript/firebase.js"></script>
  <script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
<!--  <script src="https://cdn.firebase.com/js/client/2.4.2/firebase.js"></script>
 -->

  </head>
<body>

<!-- will be hiding bootstrap navbar-->

 <!--  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div class="nav navbar-nav navbar-right">
                  <a href= "index.html"></a> 
                </div>
            </div>
        </div>
    </nav> -->
<div class="container">
  <div class="row">
    <div class="col-sm-12">
    <!--   <div id="title"> -->
        <h1>Moon, Fish, Ocean</h1>
        <p>"A Zen conversion of Rock, Paper, Scissors"</p>
     <!--  </div> -->
    </div>
  </div>
 </div> 

<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <div id="game">
        <p id= "welcome">Here will be Player info</p>
        <p id= "updates">Here will be turn info that is also waiting for player to join</p>
        <form id="player-form">

    <input type="text" id="player-input">
    
    <!-- Button triggers text input to be added -->
    <button id="addPlayer" type="submit" value="Start">
  </form>
      </div>
    </div>
  </div>
 </div> 

<div class="container">
  <div class="row">
    <div class="col-sm-10">
      
          
          <div class="playBox" class="choice">
          <div id="object"></div>
            <span class = "name"></span>
            <button type="button" class="choiceButton"><p class= "moon">Moon</p></button>
            <button type="button" class="choiceButton"><p class= "fish">Fish</p></button>
            <button type="button" class="choiceButton"><p class= "ocean">Ocean</p></button>
             <h4 class="">Wins: <strong><span id="outcomeWin"></span></strong> Losses: <strong><span id="outcomeLoss"></span></strong></h4>
          </div>
   
          <div class="playBox" id="resultsBox">
            <p id="winner"> wins!</p>
          </div>
        
          <div class="playBox" class="choice">
            <span class = "name"></span>
            <button type="button" class="choiceButton"><p class= "moon">Moon</p></button>
            <button type="button" class="choiceButton"><p class= "fish">Fish</p></button>
            <button type="button" class="choiceButton"><p class= "ocean">Ocean</p></button>
             <h4 class="">Wins: <strong><span id="outcomeWin"></span></strong> Losses: <strong><span id="outcomeLoss"></span></strong></h4>
          </div>
   
      </div>

  </div>


<!-- 
    <div class="col-sm-12">
      <div id=""></div>

    </div> -->
  </div>
</div>

<div class="container">
        <div class="row">
          <div class="col-sm-10">
            <div id="chatArea">
            
              <h4>place for chat box</h4> 
              <p>place to enter text and submit</p>
              <button id="submit">send</button>
            </div>

        </div>
      </div>
    </div>

    <div class="container">
        <div class="row">
          <div class="col-sm-12">
          <p id= "about">Moon * Fish * Ocean is a Zen hand game for one, two, or three players.  In the strictest Zen interpretation, the game is played by only one person, with one hand, as a koan (a paradoxical puzzle to trigger enlightenment).<br>
          Ocean captures Moon’s reflection. Fish rule the Ocean. Moon’s gravitation (tide) irresistibly pulls Fish.</p>

          </div>
        </div>
      </div>

<script>

</script>
</body>
</html>