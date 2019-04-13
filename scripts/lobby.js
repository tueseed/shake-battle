/////check code ที่ได้จากการ loginผ่าน Line
var code = getUrlVars()["code"];
//console.log("นี่ code นะ" + code);
if(code == null)
{
  window.location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1564476560&redirect_uri=https://shake-battle.herokuapp.com/&state=12345&scope=openid%20profile%20email";
}
else 
{
  /*var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.line.me/oauth2/v2.1/token",
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache"
    },
    "data": {
      "grant_type": "authorization_code",
      "code": code,
      "redirect_uri": "https://shake-battle.herokuapp.com/",
      "client_id": "1564476560",
      "client_secret": "1223c4cef0d18aef5762840be1f7bb34"
    }
  }
  
  $.ajax(settings).done(function (response) {
                                              var id_token = response.id_token;
                                              var base64 = id_token.split('.')[1];
                                              var profile = JSON.parse(window.atob(base64));
                                              console.log(profile.name);
                                              console.log(profile.picture);
                                              document.getElementById('image').setAttribute('src',profile.picture);
                                              document.getElementById('player_name').innerHTML = profile.name;
                                            }
                          );*/
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
                                      console.log(profile.name);
                                      console.log(profile.picture);
                                      document.getElementById('image').setAttribute('src',profile.picture);
                                      document.getElementById('player_name').innerHTML = profile.name
                                          }		
                                  });
}
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
                                    console.log(snapshot.val());
                                    render_card(snapshot.val());
                                  }
                                    );

function creat_room()
{
    var room_key =  room.push({'0':'0'});

    var player = firebase.database().ref('room/'+ room_key.key); 
    var player_key = player.push({'playername':'tue','score':'0'});
    console.log('room : ' + room_key.key + '  player' + player_key.key);
}
function render_card(data)
{
    console.log(Object.keys(data)[0]);
    
}