var config = {
    apiKey: 'AIzaSyCvnyqJxQ_oEZmESo7JFvYA5OnVLtZIHzE',
    authDomain: 'shake-battle.firebaseapp.com',
    databaseURL: 'https://shake-battle.firebaseio.com',
    projectId: 'shake-battle',
};
firebase.initializeApp(config);
var playersRef = firebase.database().ref("room/-LcWAI8s5jus2zXN0YQx");
function query_data()
{
    playersRef.orderByChild("playername").equalTo("Nutthapon").on("child_added", function(data) {
        if(data == null)
        {
            alert("null เว้ยยยยย......");
        }
        console.log("Equal to filter: " + data.val().picture);
     });
}