$(function() {
  $('#mainvisual').slick({
    autoplay: true, // 自動再生
    fade: true, // スライドをフェードイン・フェードアウト
    cssEase: 'linear',// アニメーション
    arrows: false,
    autoplaySpeed: 5000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    speed: 600, // フェードアニメーションの速度設定
  });
});

$(function(){
   
  $(".toggle_btn").on("click",function(){
     $("#header").addClass("open");
  });
});


$(function(){
  $("#mask").on("click",function(){
     $("#header").removeClass("open");
  });
});