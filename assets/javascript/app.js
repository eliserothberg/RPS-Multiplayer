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

var users = new Firebase('https://rpsfirebase.firebaseio.com');

// //not really using this right now
// var totalVisitors = users.child('totalVisitors');
// totalVisitors.transaction(function (currentData) {
//    currentData + 1;
// });
 

function getPlayers() {
  $("#addUser").on("click", function() {

var name = $('#player-input').val().trim(); 
  console.log("inside assignPlayers input name = " + name);

  var userId = name;
  var gameRef = new Firebase("https://rpsfirebase.firebaseio.com/");
  assignPlayerNumber(userId, gameRef);

  var playerOne = new Firebase('https://rpsfirebase.firebaseio.com/playerData/0');
    // var playerName1 = playerOne.val();
    playerOne.once("value", function(snapshot) {
      var nameSnapshot1 = snapshot.child("userId")
      var playerName1 = nameSnapshot1.val();

      console.log("playerName1 =" + playerName1);
    });
var playerTwo =  new Firebase('https://rpsfirebase.firebaseio.com/playerData/1');
       playerTwo.once("value", function(snapshot) {
        var nameSnapshot2 = snapshot.child("userId")
      var playerName2 = nameSnapshot2.val();
      console.log("playerName2 =" + playerName2);
    });
    
    return false;

});
  var PlayerDataLocation = 'playerData';


};
getPlayers();
// The maximum number of players.  If there are already 
// with playerNumber assigned, users won't be able to join the game.
var playerNumber = 2;

// The root of your game data.
var gameLocation = 'https://rpsfirebase.firebaseio.com';

// A location under gameLocation that will store the list of 
// players who have joined the game (up to maxPlayers).
var playersLocation = 'playerList';

// A location under gameLocation that you will use to store data 
// for each player (their game state, etc.)


// Called after player assignment completes.
function setGame(myPlayerNumber, userId, justJoinedGame, gameRef) {
  var playerDataRef = gameRef.child(PlayerDataLocation).child(myPlayerNumber);
  console.log('You are player number ' + (myPlayerNumber + 1) + 
      '.  Your data will be located at ' + playerDataRef.toString());
  $("#updates").html("Waiting for player to join.");

  if (justJoinedGame) {
    console.log(userId + ' just joined game.');
    $("#welcome").html(userId + " just joined the game!");
    $("#userAdd").hide();
    var uA = $('#userAdd').attr('id');
    console.log("user add = " + uA);
     
    $("#updates").html('You are player number ' + (myPlayerNumber + 1));
      if (myPlayerNumber == 0) {
        $("#player1").html(userId + " - Player 1");
        $("#player2").html("waiting for a challenger");
        console.log($("#player1").html(userId + " - Player 1"));
      }
      // if ($("#player2").text() === "waiting for a challenger"); {
      // $("#player2").html(userId[1]);
      if (myPlayerNumber == 1){
        $("#player2").html(userId + " - Player 2");
                // $("#player1").html(playerName1 + " - Player 1");

               // console.log(playerOne + " - Player 1");
               //  console.log(playerTwo + " - Player 2");
// }
        // $("#player2").html(userId);
      };
};
      
    
    playerDataRef.set({
      userId: userId, 
      state: 'game state'
    });
  
  // $("#player1").html(userId[0]);
    // $("#player2").html(userId[1]);
};
 
    // });
    // var oneName = new 
    // console.log(playerOne);
    // console.log(playerTwo.data);
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
      // $("#updates").html("Waiting for players to join.");
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

function setChoice(myPlayerNumber, myUserId, myChoice) {
// Create playerDataRef set to the Firebase location of the input player.
    var playerDataRef = new Firebase('https://rpsfirebase.firebaseio.com').
        child(PlayerDataLocation).child(myPlayerNumber);
// Change game state to 'picked' and set rock, paper, or scissors.
    playerDataRef.set({userId: myUserId, state: 'chose', rps: myRPS});
}
function takeTurns() {

//if player1 status 
for( var i = 0; i < playerNumber; i++) {
//   var turn = new Firebase("https://rpsfirebase.firebaseio.com/assignSpace/playerData/")[i];
    $(document).on('click', '.choiceButton', function() {
      var theChoice = $(this).attr('name')

    //   console.log("this was clicked =" + choiceButton);
      // var moon1 = ("#moon1");
      // var fish1 = ("#fish1");
      // var ocean1 = ("#ocean1")

      if (theChoice === "moon1") {
        var thisMoon = moon1;
             console.log("this is '#moon[i]: " + thisMoon);

      $('#fish1').hide();
      $('#ocean1').hide();
    }
    else if (theChoice === "fish"[i]) {
      $('#moon'[i]).hide();
      $('#ocean'[i]).hide();
    }
    else {
      $('#moon'[i]).hide();
      $('#fish'[i]).hide();
            console.log("this is the choice: " + theChoice);
            // console.log("this is '#moon[i]: " + moon[i]);

    };
  });
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
  };
    //  if $("#fish1").on("click", function() {
    //   $('#moon[i]').hide();
    //   $('#ocean[i]').hide();
    // }
    // else {
    //   $('#fish[i]').hide();
    //   $('#moon[i]').hide();
    // };
    //switch player1game sataus to false??
    };

takeTurns();
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