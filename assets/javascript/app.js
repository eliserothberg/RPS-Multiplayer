$(document).ready(function() {
      $('#moon1').hide();
      $('#fish1').hide();
      $('#ocean1').hide();
      $('#moon2').hide();
      $('#fish2').hide();
      $('#ocean2').hide();
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

var connectedRef = database.ref(".info/connected");

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
var playerTwo;
var playState1;
var playState2;
var wins = 0;
var losses = 0;


var users = new Firebase('https://rpsfirebase.firebaseio.com');


  $("#addUser").on("click", function() {

    var name = $('#player-input').val().trim(); 
      console.log("inside assignPlayers input name = " + name);

    var userId = name;
    var gameRef = database.ref();;
    
    assignPlayerNumber(userId, gameRef);

    var playerOne = database.ref('/playerData/0');
      
      playerOne.on("value", function(snapshot) {
        var nameSnapshot1 = snapshot.child("userId")
        var playerName1 = nameSnapshot1.val();

        console.log("playerName1 line 128 = " + playerName1);
        console.log("playerOne line 75 = " + playerOne);
      });

      
      var playerTwo =  database.ref('/playerData/1');
        
        playerTwo.on("value", function(snapshot) {
          var nameSnapshot2 = snapshot.child("userId")
          var playerName2 = nameSnapshot2.val();
          var one = database.ref('/playerData/0/userId/')
          
          console.log("playerName2 line 136 = " + playerName2);
          console.log("one line 80 = " + one);
        });
    
    return false;

    });

        console.log("playerName1 line 145= " + playerName1);
        console.log("playerName2 line 146= " + playerName2);
        console.log("playerOne line 147 = " + playerOne);


    // The maximum number of players.  If there are already 
    // 2 playerNumber assigned, users won't be able to join the game.
    var playerNumber = 2;

    // The root of the game data.
    var gameLocation = 'https://rpsfirebase.firebaseio.com';

    // A location under gameLocation that will store the list of 
    // players who have joined the game.
    var playersLocation = 'playerList';

    // Called after player assignment completes.
    function setGame(myPlayerNumber, userId, justJoinedGame, gameRef) {
      var playerDataRef = gameRef.child(PlayerDataLocation).child(myPlayerNumber);
      console.log('You are player number ' + (myPlayerNumber + 1) + 
      '.  Your data will be located at ' + playerDataRef.toString());
      $("#updates").html("Waiting for player to join.");
      
      console.log("playerName1 line 172= " + playerName1);
      console.log("playerName2 line 109= " + playerName2);
  
      if (justJoinedGame) {
        $("#welcome").html(userId + " just joined the game!");
        $("#userAdd").hide();
        
        console.log(userId + ' just joined game.');
     

        if (myPlayerNumber == 0) {
          $("#updates").html('You are player number ' + (myPlayerNumber + 1));
          $("#player1").html(userId + " - Player 1");
          $('#moon1').show();
          $('#fish1').show();
          $('#ocean1').show();

          console.log($("#player1").html(userId + " - Player 1"));
        }
    
        if (myPlayerNumber == 1) {
          $("#updates").html('You are player number ' + (myPlayerNumber + 1));
          $("#player2").html(userId + " - Player 2");
          $('#moon2').show();
          $('#fish2').show();
          $('#ocean2').show();

          console.log($("#player2").html(userId + " - Player 2"));
        };      
      };

      playerDataRef.set({
        userId: userId, 
        win: 0,
        loss: 0 
      });
    };

      if (playerNumbers >1) {
        var turn = database.ref("/turn");
        playerTurn = turn.set(0);
      }
 
      console.log("turn = " + turn + " and playerTurn = " + playerTurn);
     
    function assignPlayerNumber(userId, gameRef) {
      var playerListRef = gameRef.child(playersLocation);
      var myPlayerNumber, alreadyInGame = false;
      
      console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);

        playerListRef.transaction(function(playerList) {
    
          if (playerList === null) {
          playerList = [];
          };

          for (var i = 0; i < playerList.length; i++) {
            if (playerList[i] === userId) {
            alreadyInGame = true;
            myPlayerNumber = i; //reference seat
              
            console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);
            return;
          };
        };

        if (i < playerNumber) {
          playerList[i] = userId;  // Reserve our seat.
          myPlayerNumber = i; // reference seat
          return playerList;
          
          console.log("206- userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);
        };
        
        // Abort transaction and tell completion callback we failed to join.
        myPlayerNumber = null;

          playerDataRef.on("value", function(snap) {
             // If they are connected..
            if( snap.val() ) {
            // Remove user from the connection list when they disconnect.
            playerDataRef.onDisconnect().remove();
          };
    });
  }, 

  function (error, committed) {
    // Transaction has completed.  Check if it succeeded or we were already in
    // the game and so it was aborted.
    if (committed || alreadyInGame) {
      setGame(myPlayerNumber, userId, !alreadyInGame, gameRef);
    } 
    else {
      console.log('Game is full.');
       $("#welcome").html("Sorry- the game is full.");
       $("#updates").html("Please try again later.");
    };
  });
};

function takeTurns() {
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
          console.log("line 377 this is the choice: " + theChoice);

            var theTurn = database.ref("/turn");
              
              theTurn.once('value', function(snap) {
                var turnTime = snap.val();
                
                console.log("turn = " + turnTime);
 
                if (turnTime === 0) {

                  if (theChoice === "moon") {
                    $('#fish1').hide();
                    $('#ocean1').hide();
                    $('#moon1').html(play1 + " chose moon!");
                  }
                  else if (theChoice === "fish") {
                    $('#moon1').hide();
                    $('#ocean1').hide();
                    $('#fish1').html( play1 + " chose fish!");
                  }
                  else {
                    $('#moon1').hide();
                    $('#fish1').hide();
                    $('#ocean1').html( play1 + " chose ocean!");
            
                    console.log("this is the choice: " + theChoice);
                  }
                }
                else if (theChoice === "moon") {
                  $('#fish2').hide();
                  $('#ocean2').hide();
                  $('#moon2').html(play2 + " chose moon!");
                }
                else if (theChoice === "fish") {
                  $('#moon2').hide();
                  $('#ocean2').hide();
                  $('#fish2').html( play2 + " chose fish!");
                }
                else {
                  $('#moon2').hide();
                  $('#fish2').hide();
                  $('#ocean2').html( play2 + " chose ocean!");
            
                  console.log("this is the choice: " + theChoice);
                };
                
                var newTurn = database.ref();
                newTurn.child('turn').set(1);
              });

              if ((play1 == 'moon1') || (play1 == 'fish1') || (play1 == 'ocean1')){

                if ((play1 == 'moon1') && (play2 == 'ocean2')){
                  var winRef = database.ref("/playerData/0")
                    winRef.update({
                    win: wins++
                    });
 
                    $('#winner').html(play1 + " wins!");

                  var lossRef = database.ref("/playerData/1")
                    lossRef.update({
                    loss: losses++
                    });
                    
                    console.log("win");

              };
              if ((play1 == 'moon1') && (play2 == 'fish2')){
                var winRef = database.ref("/playerData/1")
                  winRef.update({
                  win: wins++
                  });
        
                  $('#winner').html(play2 + " wins!");

                var lossRef = database.ref("/playerData/0")
                  lossRef.update({
                  loss: losses++
                  });   
                  console.log("win");
              };
              if ((play1 == 'ocean1') && (play2 == 'moon2')){
                var winRef = database.ref("/playerData/1")
                  winRef.update({
                  win: wins++
                  });
      
                  $('#winner').html(play2 + " wins!");
                
                var lossRef = database.ref("/playerData/0")
                  lossRef.update({
                  loss: losses++
                  });
                  console.log("win");
              };
              if ((play1 =='ocean1') && (play2 == 'fish2')){
                var winRef = database.ref("/playerData/0")
                  winRef.update({
                  win: wins++
                  });
                  
                  $('#winner').html(play1 + " wins!");

                var lossRef = database.ref("/playerData/1")
                  lossRef.update({
                  loss: losses++
                  });
                console.log("win");
              };
              if ((play1 == 'fish1') && (play2 == 'moon2')){
                var winRef = database.ref("/playerData/0")
                  winRef.update({
                  win: wins++
                  });
    
                  $('#winner').html(play1 + " wins!");
      
                var lossRef = database.ref("/playerData/1")
                  lossRef.update({
                  loss: losses++
                  });
                  console.log("win");

              };
              if ((play1 == 'fish1') && (play2 == 'ocean2')){
                var winRef = database.ref("/playerData/1")
                  winRef.update({
                  win: wins++
                  });

                  $('#winner').html(play2 + " wins!");
                  
                  console.log($('#winner').html(play2 + " wins!"));
      
                var lossRef = database.ref("/playerData/0")
                  lossRef.update({
                  loss: losses++
                  });
                  console.log("win");

              };
              if (play1 == play2){
                ties++
                $('#winner').html("It's a tie!");
                console.log("It's a tie");
              };
            };  
          });
          
          console.log("wins and losses = " + wins + " and " + losses);

      });
    });
  };
  
  console.log("2nd wins and losses = " + wins + " and " + losses);

  takeTurns();

    var chatRef = new Firebase('https://rpsfirebase.firebaseio.com');
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
      var nameElement = $("<label>></label>");
      nameElement.text(name);
      messageElement.text(message).prepend(nameElement);

      //ADD MESSAGE
      messageList.append(messageElement)

      //SCROLL TO BOTTOM OF MESSAGE LIST
      chatWindow[0].scrollTop = chatWindow[0].scrollHeight;
    });
});