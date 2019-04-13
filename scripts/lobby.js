console.log("okokokok");
var config = {
    apiKey: 'AIzaSyCvnyqJxQ_oEZmESo7JFvYA5OnVLtZIHzE',
    authDomain: 'shake-battle.firebaseapp.com',
    databaseURL: 'https://shake-battle.firebaseio.com',
    projectId: 'shake-battle',
};
firebase.initializeApp(config);
var ref = firebase.database().ref('room');
function creat_room()
{
    ref.push({'dsasd':'deda','dsadwdawd':'dwadwdawd'});
    console.log('creat_room');
}