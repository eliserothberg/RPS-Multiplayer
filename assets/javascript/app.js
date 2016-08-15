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
var win = 0;
var loss = 0;


var users = new Firebase('https://rpsfirebase.firebaseio.com');

// //not really using this right now
// var totalVisitors = users.child('totalVisitors');
// totalVisitors.transaction(function (currentData) {
//    currentData + 1;
// });
// function getPlayers() {
  $("#addUser").on("click", function() {

var name = $('#player-input').val().trim(); 
  console.log("inside assignPlayers input name = " + name);

  var userId = name;
  var gameRef = new Firebase("https://rpsfirebase.firebaseio.com/");
  assignPlayerNumber(userId, gameRef);

  var playerOne = new Firebase('https://rpsfirebase.firebaseio.com/playerData/0');
    // var playerName1 = playerOne.val();
    playerOne.on("value", function(snapshot) {
      var nameSnapshot1 = snapshot.child("userId")
      var playerName1 = nameSnapshot1.val();

      console.log("playerName1 line 74 = " + playerName1);
      console.log("playerOne line 75 = " + playerOne);
    });
var playerTwo =  new Firebase('https://rpsfirebase.firebaseio.com/playerData/1');
       playerTwo.on("value", function(snapshot) {
        var nameSnapshot2 = snapshot.child("userId")
      var playerName2 = nameSnapshot2.val();
      var one = database.ref('/playerData/0/userId/')
      console.log("playerName2 line 79 = " + playerName2);
            console.log("one line 80 = " + one);

    });
    
    return false;

});

console.log("playerName1 line 88= " + playerName1);
console.log("playerName2 line 89= " + playerName2);
      console.log("playerOne line 90 = " + playerOne);

// };
// getPlayers();
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
console.log("playerName1 line 108= " + playerName1);
console.log("playerName2 line 109= " + playerName2);
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
      win: 0,
      loss: 0 
    });

  
  // $("#player1").html(userId[0]);
    // $("#player2").html(userId[1]);
};

 if (playerNumbers >1) {
      // $("#updates").html("Let's play!");
      var turn = database.ref("/turn");
      playerTurn = turn.set(0);
    }
 console.log("turn = " + turn + " and playerTurn = " + playerTurn);
     // });
    // var oneName = new 
    // console.log(playerOne);
    // console.log(playerTwo.data);
// Use transaction() to assign a player number, then call playGame().
function assignPlayerNumber(userId, gameRef) {
  var playerListRef = gameRef.child(playersLocation);
  var myPlayerNumber, alreadyInGame = false;
        console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);

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
        console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);
        return;
      }
    }

    if (i < playerNumber) {
      // Empty seat is available so grab it and attempt to commit modified playerList.
      playerList[i] = userId;  // Reserve our seat.
      myPlayerNumber = i; // Tell completion callback which seat we reserved.
      return playerList;
              console.log("206- userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);

    }
        // console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);

    // if (playerNumber == 1) {
    //   $("#updates").html("Let's play!");
    //   // $("#updates").html("Great!");

    // }
   


    // Abort transaction and tell completion callback we failed to join.
    
    myPlayerNumber = null;

    playerDataRef.on("value", function(snap) {

  // If they are connected..
  if( snap.val() ) {


    // Remove user from the connection list when they disconnect.
    playerDataRef.onDisconnect().remove();

  };

});

    // playerDataRef.removeOnDisconnect();
  }, 
 // console.log("foo = " + foo);
 //       console.log("bar = " + bar);
        // console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);

        // console.log("playerList = " + playerList + " and gamRef = " + gameRef);

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
// for( var i = 0; i < playerNumber; i++) {
  // var turn = new Firebase("https://rpsfirebase.firebaseio.com/assignSpace/playerData/0/state");
//     var boo = database.ref("/playerData/0/state");
// // console.log("boo = " + boo.val());

// boo.on("child_added", function(childSnapshot){
//    var boo = database.ref("/playerData/0/state");
// console.log("boo = " + $(boo).val());
//   var loo = $(boo).val();
  console.log("pd" + playerLocation);
// });
// function choice(){
    
      $(document).on('click', '.choiceButton', function() {
      var theChoice = $(this).attr('name')
       var firstP = database.ref("/playerData/0/userId");
       firstP.once('value', function(snap) {
        var play1 = snap.val();
               console.log("play1  = " + play1);
      var secondP = database.ref("/playerData/1/userId");
       secondP.once('value', function(snap) {
        var play2 = snap.val();
               console.log("play2  = " + play2);

       // });
     
       // var bar = database.ref("/playerData/1/userId");
       //  var bar2 = bar.child("/playerData/1/userId");
       // console.log("foo.child  = " + foo.child);
       // console.log("bar  = " + bar2);
// if (boo == false) {
    //   console.log("this was clicked =" + choiceButton);
      // var moon[i] = ("#moon"[i]);
      // var fish1 = ("#fish1");
      // var ocean1 = ("#ocean1")

      var play = [];

for (i = 1; i < 3; i++) {
    var play[i] = chooser.text();

// for (var i = 1; i <3; i++) {
   
     
        console.log("chooser = " + chooser);
      }
        // var thisMoon = moon1;
        //      console.log("this is '#moon[i]: " + thisMoon);
 if (theChoice === "moon") {
      $('.fish').hide();
      $('.ocean').hide();
       $('.moon').html(chooser + " chose moon!");
        console.log("chooser = " + chooser);
    }
    else if (theChoice === "fish") {
      $('.moon').hide();
      $('.ocean').hide();
      $('.fish').html( chooser + " chose fish!");
    }
    else {
      $('.moon').hide();
      $('.fish').hide();
      $('.ocean').html( chooser + " chose ocean!");
            
            // console.log("this is '#moon[i]: " + moon[i]);
console.log("this is the choice: " + theChoice);
    // };
  };


});
});
});
};
// };


// choice();
  // playerDataRef.push({
  //     choice: theChoice 
  //   });
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
  //   // };
  // });
  //   //  if $("#fish1").on("click", function() {
  //   //   $('#moon[i]').hide();
  //   //   $('#ocean[i]').hide();
  //   // }
  //   // else {
  //   //   $('#fish[i]').hide();
  //   //   $('#moon[i]').hide();
  //   // };
  //   //switch player1game sataus to false??
  //   };

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