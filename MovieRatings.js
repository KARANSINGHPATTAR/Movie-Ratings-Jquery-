<!DOCTYPE html>
<html lang="en">
<head>
  <title>Recommender System</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 <link href='https://fonts.googleapis.com/css?family=Allan' rel='stylesheet'>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>

body {
    background: url(back.jpg);
}

span:hover{
  @include transition(.25s ease-in-out);
  @include boxShadow(inset 0px 0 0 0 #ff401a);
  color:black;
  overflow:hidden;
  &:hover {
    color:white;
    @include boxShadow(inset 500px 0 0 0 #ff401a);
  }


}
img{
  border-radius: 8px;
}
     img:hover{


      box-shadow:
                1px 1px #95967c,
                2px 2px #95967c,
                3px 3px #95967c;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);


     }
     .rating:hover{

      -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
     }
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }

  /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }

  .rating {
    float:left;
}

/* :not(:checked) is a filter, so that browsers that don’t support :checked don’t 
   follow these rules. Every browser that supports :checked also supports :not(), so
   it doesn’t make the test unnecessarily selective */
.rating:not(:checked) > input {
    position:absolute;
    top:-9999px;
    clip:rect(0,0,0,0);
}

.rating:not(:checked) > label {
    float:right;
    width:1em;
    padding:0 .1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:200%;
    line-height:1.2;
    color:#ddd;
    text-shadow:1px 1px #bbb, 2px 2px #666, .1em .1em .2em rgba(0,0,0,.5);
}

.rating:not(:checked) > label:before {
    content: '★ ';
}
/*        Causing the problem where other stars also get selected 
.rating > input:checked ~ label {
    color: #f70;
    text-shadow:1px 1px #c60, 2px 2px #940, .1em .1em .2em rgba(0,0,0,.5);
}

*/

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
    color: gold;
    text-shadow:1px 1px goldenrod, 2px 2px #B57340, .1em .1em .2em rgba(0,0,0,.5);
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
    color: #ea0;
    text-shadow:1px 1px goldenrod, 2px 2px #B57340, .1em .1em .2em rgba(0,0,0,.5);
}

.rating > label:active {
    position:relative;
    top:2px;
    left:2;
}
  </style>
</head>
<body>

<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      
    </div>
    <div class="collapse navbar-collapse" id="myNavbar" >
      
      
    </div>
  </div>
</nav>
  
<div class="container-fluid">    
  <div class="row content">
    <div class="col-sm-1" >
     
    </div>
    <div class="col-sm-10 col-lg-10 text-left"> 
       <div class="col-lg-8 col-md-8 col-sm-6 col-xs-1">&nbsp;</div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-11">
           
           <input type="text" class="form-control" style="height:26px;width:70%;float:left;">
            
         </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          
           
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="height:100px;text-align:center;">

                <!-- Logo or Name of the system -->  
                  <h2 style="font-size:30px;font-family: 'Allan';"> Pick a movie that suits your interest</h2>
                  <h2 style="font-size:18px;font-family: 'Allan';margin-top:-16px;"> Click on the poster to skip a movie</h2>

              </div>
  <!-- -->         
          <div class="col-xs-2 hidden-md hidden-lg hidden-sm"></div> 
          <div class="col-lg-2 col-md-3 col-sm-3 col-xs-10">
            <a href="#"><img src="" style="height:230px;width:150px;" class="imgtag"> </a>
              <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      

                <fieldset class="rating">
                   
                    <input type="radio" id="m1star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
                    <input type="radio" id="m1star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
                    <input type="radio" id="m1star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
                    <input type="radio" id="m1star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
                    <input type="radio" id="m1star1" name="rating" value="1" /><label for="star1" title="Waste of time">1 star</label>
                </fieldset>





                  </div>

              </div>
           </div>
           <div class="col-xs-2 hidden-md hidden-lg hidden-sm"></div> 
          <div class="col-lg-2 col-md-3 col-sm-3 col-xs-10">
           <a href="#"> <img src="" style="height:230px;width:150px;" class="imgtag"> </a>
            <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      

<fieldset class="rating">
   
    <input type="radio" id="m2star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
    <input type="radio" id="m2star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
    <input type="radio" id="m2star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
    <input type="radio" id="m2star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
    <input type="radio" id="m2star1" name="rating" value="1" /><label for="star1" title="Waste of time">1 star</label>
</fieldset>




                      
                  </div>

              </div>
          </div>
          <div class="col-xs-2 hidden-md hidden-lg hidden-sm"></div> 
          <div class="col-lg-2 col-md-3 col-sm-3 col-xs-10"> 
               <a href="#"> <img src="" style="height:230px;width:150px;" class="imgtag"> </a>

                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      

<fieldset class="rating">
   
    <input type="radio" id="m3star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
    <input type="radio" id="m3star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
    <input type="radio" id="m3star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
    <input type="radio" id="m3star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
    <input type="radio" id="m3star1" name="rating" value="1" /><label for="star1" title="Waste of time">1 star</label>
</fieldset>




                      
                  </div>

              </div>

            
          </div>

          <div class="col-xs-2 hidden-md hidden-lg hidden-sm"></div> 
          <div class="col-lg-2 col-md-3 col-sm-3 col-xs-10">
              <a href="#"> <img src="" style="height:230px;width:150px;" class="imgtag"> </a>

               <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      

<fieldset class="rating">
   
    <input type="radio" id="m4star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
    <input type="radio" id="m4star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
    <input type="radio" id="m4star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
    <input type="radio" id="m4star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
    <input type="radio" id="m4star1" name="rating" value="1" /><label for="star1" title="Waste of time">1 star</label>
</fieldset>




                      
                  </div>

              </div>

          </div>

          <div class="col-xs-2 hidden-md hidden-lg hidden-sm"></div> 
          <div class="col-lg-2 col-md-3 col-sm-3 col-xs-10">
             <a href="#"> <img src="" style="height:230px;width:150px;" class="imgtag"> </a>

               <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      

<fieldset class="rating">
   
    <input type="radio" id="m5star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
    <input type="radio" id="m5star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
    <input type="radio" id="m5star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
    <input type="radio" id="m5star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
    <input type="radio" id="m5star1" name="rating" value="1" /><label for="star1" title="Waste of time">1 star</label>
</fieldset>




                      
                  </div>

              </div>

          </div>
          <div class="col-xs-2 hidden-md hidden-lg hidden-sm"></div> 
          <div class="col-lg-2 col-md-3 col-sm-3 col-xs-10">
              <a href="#"> <img src="" style="height:230px;width:150px;" class="imgtag"> </a>

               <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      

<fieldset class="rating">
   
    <input type="radio" id="m6star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
    <input type="radio" id="m6star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
    <input type="radio" id="m6star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
    <input type="radio" id="m6star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
    <input type="radio" id="m6star1" name="rating" value="1" /><label for="star1" title="Waste of time">1 star</label>
</fieldset>




                      
                  </div>

              </div>
          </div>
        </div>
    </div>

   
  </div>
</div>

<footer class="container-fluid text-center" style="opacity:0.4;">
  <input type="submit" class="btn-success" style="opacity:1;"> 
</footer>
<!--  Script tag at the end of body-->
<script>
/* Start writing your code here */
  $('input[type=submit]').prop("disabled",true);
  fetch('https://api.myjson.com/bins/t36df')
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    var count=0;
    $('img').each(function(){
      console.log(count);
      $(this).attr("src",data[count].URL).attr("title",data[count].Name);
      count=count+1;
    })
    $('label').click(function(){
      if(count<data.length){
        $(this).hide("slow").show("slow");
        $(this).siblings().hide("slow").show("slow");
        $(this).parent().parent().parent().siblings().children().hide("slow").attr("src",data[count].URL)
          .attr("title",data[count].Name).show("slow");
      }
      count=count+1;
      if(count>data.length){
        $(this).parent().parent().parent().siblings().children().hide("slow");
        $(this).hide("slow");
        $(this).siblings().hide("slow");
      }
      if(count==data.length+6){
        $('input[type=submit]').prop("disabled",false);
      }
    })
  })

/* ^ code  ends */
</script>
</body>
</html>
