<html>
    <head>
        <title>Shake Battle</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>    
    </head>
    <body class="bg-dark">
        <div class="container-fluid bg-light">
            <div class="row">
                <div class="col-lg-11 text-center">
                    <h1>Battle Room</h1>
                </div>
                <div class="col-lg-1 text-center mt-2">
                    <img src="#"  class="img-profile rounded-circle" id="image" width="50" height="50">
                    <p id="player_name"></p> 
                </div>
            </div>
        </div>
        <div class="container-fluid mt-2" id="player_area">
            <div class="row">                  
                <div class="col-lg-1 text-center">
                    <img src="https://profile.line-scdn.net/0h3CGaBdFLbGx6GEEYmtETO0ZdYgENNmokAnl2Xg8fZ19TIH5vQytzDA0aZwlWLSMzQyohC1cdNQ4E/preview" class="img-profile rounded-circle" id="image" width="50" height="50">
                    <p class="text-primary">dsfsdvds</p>
                </div>
                <div class="col-lg-11 text-center">
                    <div class="progress bg-light" style="height:50px">
                        <div class="progress-bar bg-info progress-bar-striped" id="progressbar" style="width:50%"></div>
                    </div>
                </div>     
            </div>
        </div>
        <!--<script src="scripts/room.js"></script>-->
    </body>
</html>