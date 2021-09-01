	
/* @1 좌측메뉴 */
var $menu = $("ul.menu li");
$('.sub_menu').addClass("hide");
$($menu).hover(function() {
	$(this).addClass('menu_bg');
	$(this).children('.sub_menu').removeClass('hide');
	$(this).children('i').addClass('hover');
	$(this).children('span').addClass('hover');
}, function() {
	$(this).children('.sub_menu').addClass('hide');
	$(this).removeClass('menu_bg');
	$(this).children().removeClass('hover');
});
	
// @2 2DepthMenuLink
function menuClick(param){
	//alert(param)
	var originUrl = window.location.origin;
	var menuUrl = param;
	var moveUrl = originUrl + menuUrl;
	document.getElementById("contentsFrame").src = moveUrl;
	 
	
}

// @3 Top_icon_menu
  var $button = $("header button");
  $($button).hover(function() {
	  $(this).children('i').addClass('hover');
	  $(this).children('span').css('color','#2dc5f4');
  }, function() {
	  $(this).children('i').removeClass('hover');
	  $(this).children('span').css('color','#000');
  });	

//ifram > body 속성바꾸기
$('iframe').ready(function(){
	$('iframe').contents().find('body').css('overflow', 'auto');
	$('iframe').contents().find('body').css('height', 'calc(100% - 20px)');
});


//@4 Full Screen

let fullscreen;
let fsEnter = document.getElementById("fullscr");
fsEnter.addEventListener("click", function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
   /* fsEnter.innerHTML = "Exit Fullscreen";*/
  } else {
    fullscreen = false;
    document.exitFullscreen();
    /*fsEnter.innerHTML = "Go Fullscreen";*/
  }
});

/* @4 Full Screen 브라우저별

let fullscreen;
let fsEnter = document.getElementById("fullscr");
fsEnter.addEventListener("click", function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    fsEnter.innerHTML = "Exit Fullscreen";
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {  Firefox 
    	 document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {  Chrome, Safari & Opera 
    	  document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {  IE/Edge 
    	  document.documentElement = window.top.document.body; //To break out of frame in IE
    	  document.documentElement.msRequestFullscreen();
      }
  } else {
    fullscreen = false;
    document.exitFullscreen();
    fsEnter.innerHTML = "Go Fullscreen";
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        window.top.document.msExitFullscreen();
      }
  }
});

*/

//@5 tapScript
function myFunction(x) {
	x.classList.toggle("change");
  }

function openCity(evt, cityName) {
var i, tabcontent, tablinks;
	id = cityName
	tabcontent = document.getElementsByClassName("tabcontent");
	
	if (id == "tab1GridArea") {
	  $("#PSBWCDiv").hide();
  } else if (id == "tab2GridArea"){
	  $("#PSBWCDiv").show();
  } 
	
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}


//@6 selectBox
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  console.log(selElmnt.length);
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */  
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


// grid_example




