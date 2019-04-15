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
var cmd = getUrlVars()["cmd"];
var room_id = getUrlVars()["room_id"];//รับค่า room_id จาก url ที่ส่งมาจากหน้า lobby
if(cmd == 'ir')
{
    ent_room(room_id);
}
console.log('room_id' + room_id);
var room_ref = firebase.database().ref('room/'+ room_id); 
room_ref.on('value',function(snapshot){
    document.getElementById("player_area").innerHTML = "";
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

function render_player(name,score,picture)
{
    var card = document.getElementById("player_area");
    card.innerHTML += '<div class="row"><div class="col-lg-1 text-center"><img src="' + picture + '" class="img-profile rounded-circle" id="image" width="50" height="50"><p class="text-primary">' + name + '</p></div><div class="col-lg-11 text-center"><div class="progress bg-light" style="height:50px"><div class="progress-bar bg-info progress-bar-striped" id="progressbar" style="width:50%"><h1>' +score + '</h1></div></div></div></div>';   
  
}

function ent_room(room_id)
{
    var room_ref = firebase.database().ref('room/'+ room_id);
    room_ref.push({'playername':'nuhuhutbgg','score':'0','picture':'https://profile.line-scdn.net/0h3CGaBdFLbGx6GEEYmtETO0ZdYgENNmokAnl2Xg8fZ19TIH5vQytzDA0aZwlWLSMzQyohC1cdNQ4E'});
}




function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }