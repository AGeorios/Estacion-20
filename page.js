<script>

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
  });


  document.getElementById("btn").addEventListener("click",doStuff);

  function doStuff(){

     var userInfo = {};

     userInfo.firstName = document.getElementById("fn").value;
     userInfo.lastName = document.getElementById("ln").value;
     userInfo.app = document.getElementById("app").value;
        
         google.script.run.userClicked(userInfo);
         document.getElementById("fn").value = "";
         document.getElementById("ln").value = "";
         
         var MyApp =  document.getElementById("app")
         myApp.selectedIndex = 0;
         M.FormSelect.init(elems);
  }

    </script>