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
    if(snapshot.val() == null)
    {
        sessionStorage.removeItem('room_id');
        sessionStorage.removeItem('player_key');
        sessionStorage.removeItem('status');
        window.location.href="index.php?code=XXX";
    }
    var i = 0;
    while(Object.keys(player_inroom)[i])
    {
        var name = Object.values(player_inroom)[i].playername;
        var score = Object.values(player_inroom)[i].score;
        var picture = Object.values(player_inroom)[i].picture
        var player_status = Object.values(player_inroom)[i].status
        if(Object.keys(player_inroom)[i] !== "status"){
        render_player(name,score,picture,Object.keys(player_inroom)[i]);
        console.log(Object.values(player_inroom)[i].playername);
        }
        i++;
    }
});

function render_player(name,score,picture,player_key)
{
    var player_status = sessionStorage.getItem('status');
    var player_key1 = sessionStorage.getItem('player_key');
    var card = document.getElementById("player_area");
    var button = "";
    if(player_status == "owner")
    {
        var button = '<input class="btn btn-danger" type="button" value="Ext.Room" onclick="exit_room('+"'"+player_key+"'"+')">';
    }
    else if (player_status == "guest" && player_key == player_key1 )
    {
        var button = '<input class="btn btn-danger" type="button" value="Ext.Room" onclick="exit_room('+"'"+player_key+"'"+')">';
    }
    card.innerHTML += '<div class="row"><div class="col-lg-1 text-center"><img src="' + picture + '" class="img-profile rounded-circle" id="image" width="50" height="50"><p class="text-primary">' + name + '</p></div><div class="col-lg-10 text-center"><div class="progress bg-light" style="height:50px"><div class="progress-bar bg-info progress-bar-striped" id="progressbar" style="width:50%"><h1>' +score + '</h1></div></div></div><div class="col-lg-1 text-center">'+button+'</div></div>';   
  
}

function ent_room(room_id)
{
    var room_ref = firebase.database().ref('room/'+ room_id);
    var player_key = room_ref.push({'playername':sessionStorage.getItem('player_name'),'score':'0','picture':sessionStorage.getItem('image'),'email':sessionStorage.getItem('email'),'uid':sessionStorage.getItem('uid'),'status':'guest'});
    sessionStorage.setItem('player_key',player_key.key);
    sessionStorage.setItem('room_id',room_id);
    sessionStorage.setItem('status','guest');
}




function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }

function exit_room(player_key)
{
    var room_id = sessionStorage.getItem('room_id');
    var status = sessionStorage.getItem('status');
    if(status == "owner")
    {
        var playersdel = firebase.database().ref("room/"+room_id);
    }
    else if(status == "guest")
    {
        var playersdel = firebase.database().ref("room/"+room_id+"/"+player_key);
    }
    playersdel.remove();
    
}

  