import $ from 'jquery'




$(function(){
// 1. window -> 함수의 적용
let windowW = $(window).width();
//console.log(windowW);

// resize-> reset
$(window).on('resize',function(e){
  window.location.reload();
})

if(windowW > 1134){
  nav();
  asideTop();
}
else if(windowW <= 1134 && windowW > 980 ){
  nav();
  asideTop();
}
else if(windowW <= 980 && windowW > 580 ){
  tNav()
  gallery()
}
else if( windowW <= 580 ){
  tNav()
  gallery()
  FormData()
}

// 함수
// 1. nav
function nav(){
  $('nav li>a').on('click',function(e){
    const navA = $(this).attr('href');
    const aPos = $(navA).offset().top;
    const headerHeight = $('#header').innerHeight();
    console.log(headerHeight);
    $('html,body').animate({scrollTop: aPos - headerHeight},800);
    return false;
  })
}
// 2. nav-> tabet, mobile
function tNav(){
//  header -> button
$('#header .btn').on('click',function(e){
  $(this).hide()
  $('nav').animate({left:0},500);
})
// nav a -> click -> scrollAnimate
 $('nav li>a').on('click',function(e){
   let aHref = $(this).attr('href');
   let aPos = $(aHref).offset().top;
   let headerH = $('#header').innerHeight();
   let navW = $('nav').innerWidth();
   let windowW = $(window).width();

    if(windowW >= 580){
      navW += 60;
    }

   $('html,body').animate({scrollTop:aPos - headerH},800);
   $('nav').css('left','-'+navW+'px');
   $('#header .btn').show();

  return false;
 }) 
$('nav .close').on('click',function(e){
    let navW = $('nav').innerWidth();
    let windowW = $(window).width();

    if(windowW >= 580){
      navW += 60;
    }
    $('nav').animate({left:'-'+navW+'px'},500)
    $('#header .btn').show();
});

}
// 3. aside

function asideTop(){
  $('aside li>a').on('click',function(e){

    const asideA = $(this).attr('href');
    const asidePos = $(asideA).offset().top;
    const headerTop = $('#header').innerHeight();
    $('html,body').animate({scrollTop:asidePos-headerTop});
    return false;

  });

}
// 4. gallery
// console.log($('#box03 #all figure').width())
// console.log($('#box03 #all figure').outerWidth(true)) -> figure 1개의 크기

function gallery(){

 const figureW =  $('#box03 #all figure').outerWidth(true);
//  준비하기
$('#all figure:last').prependTo('#all');
$('#all').css('margin-left','-'+figureW+'px');

// 이벤트
$('#box03 .prev').on('click',function(e){
$('#all').animate({marginLeft: '+='+figureW+'px'},600,function(){
  $('#all figure:last').prependTo('#all');
  $('#all').css('margin-left','-'+figureW+'px')
})
})

$('#box03 .next').on('click',function(e){
$('#all').animate({marginLeft:'-='+figureW+'px'},600,function(){
  $('#all figure:first').appendTo('#all');
  $('#all').css('margin-left','-'+figureW+'px')
})
})
}

//  form -> mobile
function FormData(){
 let $liForm = $('#box04 li>input,#box04 li>textarea');
$liForm.removeAttr('placeholder');
$liForm.on('focus',function(e){
  $(this).prev('label').fadeOut(400);
});
$liForm.on('blur',function(e){
 let str = $(this).val();
 if(str === ''){
   $(this).prev('label').fadeIn();
 }
});
}

})

//  객체 생성
// 1. 생성자 함수
function Modal(title,pic,year,program,url,text){
this.title = title;
this.pic = pic;
this.year = year;
this.program = program;
this.url = url;
this.text = text;
}

// 2. prototype
 Modal.prototype.action = function(){
 const H5 = document.querySelector('#modal h5');
 const Img = document.querySelector('#modal figure>img')
 const Figcaption = document.querySelector('#modal figure>figcaption')
 const Year = document.querySelector('#modal .year')
 const Program = document.querySelector('#modal .program')
 const Url = document.querySelector('#mdal url>a')
 const Text = document.querySelector('#modal .text')

 H5.innerHTML = this.title;
 Img.setAttribute('src',this.pic)
 Figcaption.innerHTML = this.title;
 Year.innerHTML = this.year;
 Program.innerHTML = this.program;
 Url.setAttribute('href',this.url);
 Url.innerHTML = this.url;
 Text.innerHTML = this.text;
 }
 let modal = [
   new Modal('title01','./images/pic01.png','2001','프로그램1','http://aaa1.com','text01'),
   new Modal('title02','./images/pic02.png','2002','프로그램2','http://aaa2.com','text02'),
   new Modal('title03','./images/pic03.png','2003','프로그램3','http://aaa3.com','text03'),
   new Modal('title04','./images/pic04.png','2004','프로그램4','http://aaa4.com','text014'),
   new Modal('title05','./images/pic01.png','2005','프로그램5','http://aaa5.com','text05'),
   new Modal('title06','./images/pic02.png','2006','프로그램6','http://aaa6.com','text06')
 ]
// 3. 이벤트
// figure,.close
const btn = document.querySelectorAll('#box03 figure')
console.log(btn);
const close = document.querySelector('#modal p.close')

btn.forEach(function(item){
  item.addEventListener('click',play);
})
close.addEventListener('click',stop)

function play(){
// 1.#modal -> display변경
//2.내가 클릭한 figure name값을 가져오기
// modal[2].action();
document.querySelector('#modal').style.display = 'block'
let num = this.getAttribute('name');
console.log(num)
modal[num].action();
}

function stop(){
  document.querySelector('#modal').style.display = 'none'
  // #modla -> none
}
