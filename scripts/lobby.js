console.log("okokokok");
var config = {
    apiKey: 'AIzaSyCvnyqJxQ_oEZmESo7JFvYA5OnVLtZIHzE',
    authDomain: 'shake-battle.firebaseapp.com',
    databaseURL: 'https://shake-battle.firebaseio.com',
    projectId: 'shake-battle',
};
firebase.initializeApp(config);
var room = firebase.database().ref('room');

//room.on('value',function(snapshot){});

function creat_room()
{
    var room_key =  room.push({'0':'0'});

    var player = firebase.database().ref('room/'+ room_key.key + '/player'); 
    var player_key = player.push({'playername':'tue','score':'0'});
    console.log('room : ' + room_key.key + '  player' + player_key.key);
}