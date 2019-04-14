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
    document.getElementById("card_area").innerHTML = "";
    var player_inroom = snapshot.val();
    var i = 0;
    while(Object.keys(player_inroom)[i])
    {
        var name = Object.values(player_inroom)[i].playername;
        var score = Object.values(player_inroom)[i].score;
        var picture = Object.values(player_inroom)[i].picture
        render_player(name,score,picture);
        console.log(Object.values(player_inroom)[i].playername);
        i++;
    }
});

function render_player()
{
    var card = document.getElementById("card_area");
    card.innerHTML += '<div class="col-lg-3 text-center mt-2"><div class="card"><div class="card-header">ห้องที่ ' + room_num + '</div><div class="card-body">รหัสห้อง ' + room_id + '</div></div></div>';   
  
}




function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }