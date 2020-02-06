function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("header").style.marginLeft = "450px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("header").style.marginLeft= "0";
//   }

let optBtn = document.getElementById('headerOptionalBtn');

optBtn.addEventListener('click', openNav);
