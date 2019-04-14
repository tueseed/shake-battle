//// เซตรูปภาพกับชื่อ
console.log("รูปภาพ" + sessionStorage.getItem('image'));
var picture_url = sessionStorage.getItem("image");
document.getElementById('image').setAttribute('src',picture_url);
document.getElementById('player_name').innerHTML = sessionStorage.getItem('player_name');
var config = {
    apiKey: 'AIzaSyCvnyqJxQ_oEZmESo7JFvYA5OnVLtZIHzE',
    authDomain: 'shake-battle.firebaseapp.com',
    databaseURL: 'https://shake-battle.firebaseio.com',
    projectId: 'shake-battle',
};
firebase.initializeApp(config);

var room_id = getUrlVars()["room_id"];//รับค่า room_id จาก url ที่ส่งมาจากหน้า lobby
var cmd = getUrlVars()["cmd"];//รับค่า cmd จาก url ที่ส่งมาจากหน้า lobby
console.log('room_id' + room_id);
var room_ref = firebase.database().ref('room/'+ room_id); 
room_ref.on('value',function(snapshot){
    var player_inroom = snapshot.val();
    console.log(player_inroom[0][0]);
    /*var i = 0;
    while(Object.keys(player_inroom)[i])
    {
        cunsole.log(Object.keys(player_inroom)[i]);
        i++;
    }*/
});




function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }