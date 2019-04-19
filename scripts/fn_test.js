var config = {
    apiKey: 'AIzaSyCvnyqJxQ_oEZmESo7JFvYA5OnVLtZIHzE',
    authDomain: 'shake-battle.firebaseapp.com',
    databaseURL: 'https://shake-battle.firebaseio.com',
    projectId: 'shake-battle',
};
firebase.initializeApp(config);
var playersRef = firebase.database().ref("room/*/player");

function query_data()
{
    playersRef.orderByChild("playername").equalTo("Nutthapong").once("value", function(data) {
        /*if(data == "")
        {
            alert("null เว้ยยยยย......");
        }*/
        console.log("Equal to filter: " + data.val());
     });
}

function del_data()
{
    var playersdel = firebase.database().ref("room/-LcWAI8s5jus2zXN0YQx/-LccXzWxesJY1efCn17O");   
    playersdel.remove();
    alert('already del....');
}