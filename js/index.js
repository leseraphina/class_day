import $ from 'jquery'

$(function(){
// 1. window -> 함수의 적용
let windowW = $(window).width();
//console.log(windowW);

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
}
else if( windowW <= 580 ){
  tNav()
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

// 5. modal

})
