$(document).ready(function() {
      $('#moon1').hide();
      $('#fish1').hide();
      $('#ocean1').hide();
      $('#moon2').hide();
      $('#fish2').hide();
      $('#ocean2').hide();

  var config = {
    apiKey: "AIzaSyDUEH5HKaRY_A5IRXsbiaoZKVSkxMGwgMA",
    authDomain: "rpsfirebase.firebaseapp.com",
    databaseURL: "https://rpsfirebase.firebaseio.com",
    storageBucket: "rpsfirebase.appspot.com",
  };
  firebase.initializeApp(config);

var database = firebase.database();

var playerNumbers = 2;
var gameLocation = 'https://rpsfirebase.firebaseio.com/';
var playerLocation = 'playerList';
var PlayerDataLocation = 'playerData';
var firstPlayer;
var secondPlayer;
var userId;
var wins = 0;
var losses = 0;
var win;
var loss;

var users = database.ref();
var userId = name;

  $("#addUser").on("click", function() {

    var name = $('#player-input').val().trim(); 
      console.log("inside assignPlayers input name = " + name);

    userId = name;
    var gameRef = database.ref();
    
    assignPlayerNumber(userId, gameRef);
    
    return false;

    });

    var playerNumber = 2;
    var gameLocation = 'https://rpsfirebase.firebaseio.com';
    var playersLocation = 'playerList';

    function setGame(myPlayerNumber, userId, justJoinedGame, gameRef) {
      var playerDataRef = gameRef.child(PlayerDataLocation).child(myPlayerNumber);
      console.log('You are player number ' + (myPlayerNumber + 1));
      var p1 = database.ref("playerData/0/userId");
      p1.once('value', function(snap) {
        var firstPlayer = snap.val();
      
        console.log(firstPlayer + " is 1st player");

        var p2 = database.ref("playerData/1/userId");
        p2.once('value', function(snap) {
          var secondPlayer = snap.val();
      
          console.log(secondPlayer + " is 2nd player");

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
              $("#player2").html(secondPlayer + " - Player 2");
            }

            if (myPlayerNumber == 1) {
              $("#updates").html('You are player number ' + (myPlayerNumber + 1));
              $("#player2").html(userId + " - Player 2");
              $('#moon2').show();
              $('#fish2').show();
              $('#ocean2').show();
              $("#player1").html(firstPlayer + " - Player 1");
            };
          
            //still can't get Player 1 screen to update and show Player 2 (sigh).
            var playS = database.ref("playerData/1/userId");
             playS.on('child_added', function(snap){
              var secPlay = snap.val();
               $("#player2").html(secPlay + " - Player 2");
               console.log("secPlay = " + secPlay);
              });
          }
        });      
      });

      playerDataRef.set({
        userId: userId, 
        choice: null,
        win: 0,
        loss: 0
      });
    };

      console.log("firstPlayer = " + firstPlayer);

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
            myPlayerNumber = i;
              
            console.log("userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);
            return;
          };
        };

        if (i < playerNumber) {
          playerList[i] = userId; 
          myPlayerNumber = i; 
          return playerList;
          
          console.log("193- userID = " + userId + " and myPlayerNumber = " + myPlayerNumber);
        };
        
        myPlayerNumber = null;

  }, 

  function (error, committed) {
   
    if (committed || alreadyInGame) {
      setGame(myPlayerNumber, userId, !alreadyInGame, gameRef);
    } 
    else {
      $("#userAdd").hide();
      $("#welcome").html("Sorry- the game is full.");
      $("#updates").html("Please try again later.");
      console.log('Game is full.'); 
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
      console.log("this is the (early) choice player 1: " + theChoice);

      var secondP = database.ref("/playerData/1/userId");
        secondP.once('value', function(snap) {
          var play2 = snap.val();
          console.log("play2  = " + play2);
          console.log("this is the (early) choice player 2: " + theChoice);
            var option2 = database.ref()
      
            var theTurn = database.ref("/turn");
              
              theTurn.once('value', function(snap) {
                var turnTime = snap.val();
                
                console.log("turn = " + turnTime);
 
                if (turnTime === 0) {

                  if (theChoice === "moon") {
                    $('#fish1').hide();
                    $('#ocean1').hide();
                    $('#moon1').html(play1 + " chose moon.");
                  }
                  else if (theChoice === "fish") {
                    $('#moon1').hide();
                    $('#ocean1').hide();
                    $('#fish1').html( play1 + " chose fish.");
                  }
                  else {
                    $('#moon1').hide();
                    $('#fish1').hide();
                    $('#ocean1').html( play1 + " chose ocean.");
            
                    console.log("this is the choice1: " + theChoice);
                  }
                    var option1 = database.ref()
                    var choice1 = option1.child("playerData/0")
                    var newChoice = {"choice": theChoice}
                    option1.child("playerData/0").update(newChoice);
                }
                else if (theChoice === "moon") {
                  $('#fish2').hide();
                  $('#ocean2').hide();
                  $('#moon2').html(play2 + " chose moon.");
                }
                else if (theChoice === "fish") {
                  $('#moon2').hide();
                  $('#ocean2').hide();
                  $('#fish2').html( play2 + " chose fish.");
                }
                else {
                  $('#moon2').hide();
                  $('#fish2').hide();
                  $('#ocean2').html( play2 + " chose ocean.");
            
                  console.log("this is the choice2: " + theChoice);
                }
                  var option2 = database.ref()
                  var choice2 = option2.child("playerData/1")
                  var newChoice = {"choice": theChoice}
                  option2.child("playerData/1").update(newChoice);
          
                  var newTurn = database.ref();
                  newTurn.child('turn').set(1);
              });

              var theTurn2 = database.ref("/turn");
              
              theTurn2.once('value', function(snap) {
                var turnTime2 = snap.val();
                
                console.log("turn2 = " + turnTime2);

                  if (turnTime2 === 1) {

                  var opt1 = database.ref("/playerData/0/choice");
                  opt1.once('value', function(snap) {
                    var choice1 = snap.val();
                    console.log("choice1 = " + choice1)

                    var opt2 = database.ref("/playerData/1/choice");
                      opt2.once('value', function(snap) {
                      var choice2 = snap.val();
                      console.log("choice2 = " + choice2)
       
                    if ((choice1 == 'moon') || (choice1 == 'fish') || (choice1 == 'ocean')){
                      var rules = {
                      "moon":"ocean",
                      "ocean":"fish",
                      "fish":"moon"
                      }

                      if (choice1 == choice2) {
                         $('#winner').html("It's a tie!")
                          console.log("It's a tie");
                      } 
                      else if (rules[choice1] == choice2) {
                          var winRef1 = database.ref()
                            var newWin1 = winRef1.child("playerData/0")
                            var win1 = {win: wins + 1}
                            winRef1.child("playerData/0").update(win1);

                            var winA = database.ref("/playerData/0/win");
                            winA.once('value', function(snap) {
                            var aWin1 = snap.val();
                            console.log("win = " + aWin1)

                            var lossRef2 = database.ref()
                            var newloss2 = lossRef2.child("playerData/1")
                            var loss2 = {loss: losses + 1}
                            lossRef2.child("playerData/1").update(loss2);

                            var lossB = database.ref("/playerData/1/loss");
                            lossB.once('value', function(snap) {
                              var aLoss2 = snap.val();
                              console.log("loss = " + aLoss2)
                  
                              $('#winner').html(play1 + " wins!");
                              $('#outcomeWin1').html(aWin1);
                              $('#outcomeloss2').html(aLoss2);
                            });
                          });
                        } 
                        else {
                          var winRef2 = database.ref()
                          var newwin2 = winRef2.child("playerData/1")
                          var win2 = {win: wins + 1}
                          winRef2.child("playerData/1").update(win2);

                          var winB = database.ref("/playerData/1/win");
                            winB.once('value', function(snap) {
                            var aWin2 = snap.val();
                            console.log("win = " + aWin2)

                            var lossRef1 = database.ref()
                            var newloss1 = lossRef1.child("playerData/0")
                            var loss1 = {loss: losses + 1}
                            lossRef1.child("playerData/0").update(loss1);

                            var lossA = database.ref("/playerData/0/loss");
                              lossA.once('value', function(snap) {
                              var aLoss1 = snap.val();
                              console.log("loss = " + aLoss1)
                  
                              $('#winner').html(play2 + " wins!");
                              $('#outcomeWin2').html(aWin2);
                              $('#outcomeloss1').html(aLoss1);
                              });
                            });
                      
                            var newTurn2 = database.ref();
                            newTurn2.child('turn').set(2);
                          };
                        };
                      });  
                    });
                  };
                });
              });
            });
          });
        };
  
  console.log("wins and losses = " + win + " and " + loss);

  takeTurns();

    // This is not working- if I only have one
    //visible, it will disconnect the correct one
    //but if both are active, it takes all.
    //Doesn't seem to matter where I put it- tried nearly everywhere
    var pN2 = database.ref("/playerData/1")
    pN2.onDisconnect("/playerData/1").remove();
    var pNp2 = database.ref("/playerList/1")
    pNp2.onDisconnect().remove();

    // var pN = database.ref("/playerData/0")
    // pN.onDisconnect().remove();
    // var pNp = database.ref("/playerList/0")
    // pNp.onDisconnect().remove();

    //haven't figured out how to show the name with the chat 
    //otherwise it's working.

    var chatRef = database.ref();
    var messagesRef = chatRef.child("messages");
    var chatWindow = $("#chatWindow");
    var messageField = $("#message");
    var messageList = $("#messageList");
    // var nameField = $("#name");

    // $(document).on('click', '#submitChat', function() {
    messageField.on('keypress', function(e) {
      if(e.keyCode === 13) {
      // $("#submitChat").on("click", function() {
  
      var message = {
      message: messageField.val()
      };

      messagesRef.push(message);

      messageField.val('');
      };
    // })
  });

    messagesRef.limitToLast(10).on('child_added', function (snapshot) {
     
      var data = snapshot.val();
      var name = firstPlayer;
      var message = data.message;

      var messageElement = $("<li>");
      var nameElement = $("<label>--</label>");
      nameElement.text(name + ":  ");
      messageElement.text(message).prepend(nameElement);

      messageList.append(messageElement)

      chatWindow[0].scrollTop = chatWindow[0].scrollHeight;
    });


    //Not working at all:

  //   function resetGame() {
  //    var theTurn3 = database.ref("/turn");
  //    console.log("turn = " + theTurn3);
              
  //     theTurn3.once('value', function(snap) {
  //     var turnTime3 = snap.val();
  //       if ( TurnTime3 == 2) {
  //         var n1Choice = database.ref("/playerData/0/choice")
  //         n1Choice = null;
  //         var n2Choice = database.ref("/playerData/1/choice")
  //         n2Choice = null;
  //         $('#moon1').show();
  //         $('#fish1').show();
  //         $('#ocean1').show();
  //         $('#moon2').show();
  //         $('#fish2').show();
  //         $('#ocean2').show();
  //         var turnTime4 = database.ref("turn")
  //         turnTime4 = 0;
  //       }
  //     });
  // };
  // resetGame();
});