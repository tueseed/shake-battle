/////check code ที่ได้จากการ loginผ่าน Line
var code = getUrlVars()["code"];
//console.log("นี่ code นะ" + code);
if(code == null)
{
  window.location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1564476560&redirect_uri=https://shake-battle.herokuapp.com/&state=12345&scope=openid%20profile%20email";
}
else if(code !== "return") 
{
  $.ajax({
            async: true,
            crossDomain: true,
            url: "https://api.line.me/oauth2/v2.1/token",
            method: "POST",
            headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "cache-control": "no-cache"
                      },
            data: {
                    "grant_type": "authorization_code",
                    "code": code,
                    "redirect_uri": "https://shake-battle.herokuapp.com/",
                    "client_id": "1564476560",
                    "client_secret": "1223c4cef0d18aef5762840be1f7bb34"
                  },
            statusCode:{
                        400:function()
                            {
                              window.location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1564476560&redirect_uri=https://shake-battle.herokuapp.com/&state=12345&scope=openid%20profile%20email";
                            }
                       },
            success: function(response) {
                                          var id_token = response.id_token;
                                          var base64 = id_token.split('.')[1];
                                          var profile = JSON.parse(window.atob(base64));
                                          //console.log(profile);
                                          //console.log(profile.picture);
                                          sessionStorage.setItem('player_name',profile.name);
                                          sessionStorage.setItem('image',profile.picture);
                                          sessionStorage.setItem('uid',profile.sub);
                                          sessionStorage.setItem('email',profile.email);
                                          
                                          
                                        }		
            });
}
document.getElementById('image').setAttribute('src',sessionStorage.getItem("image"));
document.getElementById('player_name').innerHTML = sessionStorage.getItem("player_name");
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}
/////////////////////////
var config = {
    apiKey: 'AIzaSyCvnyqJxQ_oEZmESo7JFvYA5OnVLtZIHzE',
    authDomain: 'shake-battle.firebaseapp.com',
    databaseURL: 'https://shake-battle.firebaseio.com',
    projectId: 'shake-battle',
};
firebase.initializeApp(config);

var room = firebase.database().ref('room');
room.on('value',function(snapshot){
                                    document.getElementById("card_area").innerHTML = "";
                                    console.log(snapshot.val());
                                    var data = snapshot.val();
                                    var i = 0;
                                    while(Object.keys(data)[i])
                                    {
                                      console.log(Object.keys(data)[i]);
                                      if(Object.keys(data)[i] !== "status"){
                                      render_card(Object.keys(data)[i],i);
                                      }
                                      i++;
                                    }
                                  }
                                    );

function creat_room()
{
    var room_key =  room.push({'status':'wait'});

    var player = firebase.database().ref('room/'+ room_key.key); 
    var player_key = player.push({'playername':sessionStorage.getItem('player_name'),'score':'0','picture':sessionStorage.getItem('image'),'email':sessionStorage.getItem('email'),'uid':sessionStorage.getItem('uid'),'status':'owner'});
    sessionStorage.setItem('player_key',player_key.key);
    sessionStorage.setItem('room_id',room_key.key);
    sessionStorage.setItem('status','owner');
    window.location.href= "room.php?room_id=" + room_key.key + "&cmd=cr" ;
}
function render_card(room_id,room_num)
{
  console.log('card_render');
  var card = document.getElementById("card_area");
  var href = 'https://shake-battle.herokuapp.com/room.php?room_id=' + room_id + '&cmd=ir';
  card.innerHTML += '<div class="col-lg-3 text-center mt-2"><a href="'+ href +'"><div class="card"><div class="card-header">ห้องที่ ' + room_num + '</div><div class="card-body">รหัสห้อง ' + room_id + '</div></div></a></div>';   
    
}