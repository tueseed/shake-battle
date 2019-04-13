/////check code ที่ได้จากการ loginผ่าน Line
var code = getUrlVars()["code"];
console.log("นี่ code นะ" + code);
if(code == null)
{
  window.location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1564476560&redirect_uri=https://shake-battle.herokuapp.com/&state=12345&scope=openid%20profile%20email";
}
else 
{
  var formData = new FormData();
	formData.append('grant_type','authorization_code');
	formData.append('code',code);
  formData.append('redirect_uri','https://shake-battle.herokuapp.com');
  formData.append('client_id','1564476560');
  formData.append('client_secret','1223c4cef0d18aef5762840be1f7bb34');
	$.ajax({
      url: 'https://api.line.me/oauth2/v2.1/token',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			method: 'POST',
			data: formData,
			async: true,
			cache: false,
			processData: false,
			success: function(response) {
                        alert('Yes...');
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