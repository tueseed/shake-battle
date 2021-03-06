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
                    <h1>Shake Battle </h1>
                    <p>
                        <div class="progress bg-dark">
                            <div class="progress-bar bg-info progress-bar-striped" id="progressbar" style="width:80%"></div>
                        </div>
                    </p> 
                </div>
                <div class="col-lg-1 text-center mt-2">
                    <img src=""  class="img-profile rounded-circle" id="image" width="50" height="50">
                    <p id="player_name"></p> 
                </div>
            </div>
        </div>
        <div class="row" style="margin-top:20px">
            <div class="col-lg-12 text-center">
            <input type = "button" class="btn btn-info" value ="สร้างห้อง" onclick="creat_room()">
            </div>
        </div>
        <div class="container-fluid mt-2">
            <div class="row" id="card_area">
                <!--พื้นที่ห้อง-->
            </div>
        </div>
        <script src="scripts/lobby.js"></script> 
    </body>
</html>