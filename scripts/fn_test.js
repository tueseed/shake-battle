var config = {
    apiKey: 'AIzaSyCvnyqJxQ_oEZmESo7JFvYA5OnVLtZIHzE',
    authDomain: 'shake-battle.firebaseapp.com',
    databaseURL: 'https://shake-battle.firebaseio.com',
    projectId: 'shake-battle',
};
firebase.initializeApp(config);
function query_data()
{
    var playersRef = firebase.database().ref("room/");
    playersRef.orderByChild("playername").equalTo("Nutthapong").on("child_added", function(data) {
        console.log("Equal to filter: " + data.val().playername);
     });
}