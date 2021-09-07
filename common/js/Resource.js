$(document).ready(function(event){  
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


  // @7 레이어 팝업 브라우저 중앙에 띄우기
  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
  }
  showPopup = function() {
  $("#popWarp").show();
  $("#popWarp").center();
  $("#popup_mask").css("display","block"); //팝업 뒷배경 display block
    $("body").css("overflow","hidden");//body 스크롤바 없애기
  }

  $("#popCloseBtn, #popCloseBtn1").click(function(event){
    $("#popup_mask").css("display","none"); //팝업창 뒷배경 display none
    $("#popWarp").css("display","none"); //팝업창 display none
    $("body").css("overflow","auto");//body 스크롤바 생성
    $("#popWarp").draggable();
    });

    

  // @8 접기_펼치기
   $(".folding_close").click(function() {  
    $(".folding_wrap_txt").removeClass("show");  
    $(".folding_close").removeClass("show");    
    $(".folding_open").removeClass("hide"); 
     $(".folding_wrap_txt").addClass("hide");    
     $(".folding_close").addClass("hide");          
     $(".folding_open").addClass("show");
   });

   $(".folding_open").click(function() { 
    $(".folding_wrap_txt").removeClass("hide");    
    $(".folding_close").removeClass("hide");   
    $(".folding_open").removeClass("show"); 
    $(".folding_wrap_txt").addClass("show");     
    $(".folding_close").addClass("show");      
    $(".folding_open").addClass("hide");
  });

  // @8 토글 사용
  // $(".folding_close").click(function(){
  //   $(".folding_open").addClass("hide");
  //   $(".folding_close").addClass("show");
  //   $(".folding_wrap_txt").toggle();
  //   if($(".folding_wrap_txt").css("display") == "none"){
  //     $(this).parents(".folding_wrap").removeClass("open");         
  //     $(".folding_close").removeClass("show");   
  //     $(".folding_open").removeClass("hide");           
  //     $(".folding_close").addClass("hide");       
  //     $(".folding_open").addClass("show");
  //   } else{
  //     $(this).parents(".folding_wrap").addClass("open");
  //     $(".folding_close").removeClass("hide");   
  //     $(".folding_open").removeClass("show");           
  //     $(".folding_close").addClass("show");       
  //     $(".folding_open").addClass("hide");
  //   }
  // });

  // $(".folding_open").click(function(){
  //   $(".folding_wrap_txt").toggle();
  //   if($(".folding_wrap_txt").css("display") == "block"){
  //     $(this).parents(".folding_wrap").addClass("open");
  //     $(".folding_close").removeClass("hide");   
  //     $(".folding_open").removeClass("show");           
  //     $(".folding_close").addClass("show");       
  //     $(".folding_open").addClass("hide");
  //   } else{
  //     $(this).parents(".folding_wrap").removeClass("open");         
  //     $(".folding_close").removeClass("show");   
  //     $(".folding_open").removeClass("hide");           
  //     $(".folding_close").addClass("hide");       
  //     $(".folding_open").addClass("show");
  //   }
  // });


  // @9 아코디언
     // 첫 번재 항목이 펼쳐져 있도록 처리
     //$(".collapsible:eq(0) a").addClass("selected"); //첫번째 항목만 selected 클래스를 적용
     //$(".collapsible").not(":eq(0)").find(".content").hide(); //첫번째 항목 이외의 content를 숨김
     
     $(".collapsible").find(".content").hide(); //모든 content숨김
     
     /** 링크에 대한 클릭 이벤트 처리 */
     $(".collapsible h6").click(function() {            
         $(this).toggleClass("selected");
         //클릭된 나 자신을 제외한 나머리 링크들은 slected 클래스를 무조건 제거
         $(".collapsible h6").not(this).removeClass("selected"); 

         // 펼칠 내용 영역 선택
         var target = $(this).parents(".collapsible").find(".content");

         // 나머지 내용 영역을 선택
         var other = $(".collapsible h6").not(this).parents(".collapsible").find(".content");

         // 애니메이션으로 열고 닫기 처리
         target.slideToggle(300);
         other.slideUp(300);
         
         // 링크 페이지 이동 중지
         return false;
     });


     $(function () {
      jQuery.datetimepicker.setLocale('kr');

      jQuery('#datetime_picker').datetimepicker({
      i18n:{
      de:{
      months:[
        '1월','2월','3월','4월',
        '5월','6월','7월','8월',
        '9월','10월','11월','12월',
      ],
      dayOfWeek:[
        "일", "월", "화", "수", 
        "목", "금", "토.",
      ]
      }
      },
      timepicker:false,
      format:'d.m.Y'
      });
    });
    
  });
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("mouseover", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
    }

  //@ lading images
  $("body").load(function (){
		//var body = $("#contentsFrame").contents().find("body");
		var chk = $("body").find("#loadingBar").length;
		if(chk == 0){
			body.append("<img id='loadingGif' style='border:1px solid #00DEFF; width: 436px; height: 187px; position: absolute; top: 50%; left: 50%; margin:-98px 0px 0px -218px; z-index: 99999; display:none;' src='../../images/loading.gif'>");
		}
	});
  

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



