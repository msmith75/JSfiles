window.onload = function() {

  var bannerContainer       = document.getElementById('container');
  var closer                = document.getElementById('clickTagLayer');
  var backgroundImg         = document.getElementById('backgroundImg');
  var middleImg             = document.getElementById('middleImg');
  var foregroundImg         = document.getElementById('foregroundImg');
  var headlineWrapper       = document.getElementById('headlineWrapper');
  var headline              = document.getElementById('headline');
  var claimWrapper          = document.getElementById('claimWrapper');
  var claim                 = document.getElementById('claim');
  var pricePoint            = document.getElementById('pricePoint');
  var dividerRev            = document.getElementById('dividerRev');
  var taxesFees             = document.getElementById('taxesFees');
  var productWrapper        = document.getElementById('productWrapper');
  var productCopy           = document.getElementById('productCopy');
  var subheadContainer      = document.getElementById('subheadContainer');
  var subhead               = document.getElementById('subhead');
  var fLogo                 = document.getElementById('fLogo');
  var cta                   = document.getElementById('cta');
  var ctaLabel              = document.getElementById('ctaLabel');
  var legalBg               = document.getElementById('legalBg');
  var legalCopy             = document.getElementById('legalCopy');
  var xMark                 = document.getElementById('xMark');
  var roller                = document.getElementById('rollO');
  var taxesFees             = document.getElementById('taxesFees');



  function init(){

    cta.style.opacity = '1';
    headlineWrapper.style.opacity = '1';
    claimWrapper.style.opacity = '1';
    var pauseOnClaim = 1.5;

        var tl = new TimelineLite({onComplete:animComplete});
//Headline In ImageA Out

        tl.to(backgroundImg, .25, {ease:Quad.easeOut, opacity:0, delay:1.25}, 'bGroundImageOut');
//ImageB In Out
        tl.to(middleImg, .125, {ease:Quad.easeOut, opacity:1, delay:-.35},'middleIn');
        tl.to(middleImg, .25, {ease:Quad.easeOut, opacity:0, delay:.35},'middleIn');
        tl.to(foregroundImg, .125, {ease:Quad.easeOut, opacity:1, delay:-.35},'fGroundImageIn');
//ImageC
        tl.to(headline, .125, {ease:Power4.easeOut, y:'-100%', opacity:0, delay:-.1}, 'headlineOut');
        tl.from(claim, .25, {ease:Power4.easeOut, y:'150%', opacity:0, delay:-.125}, 'claimIn');
//HeadlineB ImageC
        tl.to(claim, .125, {ease:Power2.easeOut, opacity:0, delay:pauseOnClaim},'claimOut');
        //tl.to(foregroundImg, .25, {ease:Quad.easeOut,  opacity:0, delay:-.25}, 'fGroundImageOut');
//endframe
tl.to(productWrapper, .25, {ease:Elastic.easeOut,  opacity:1, delay:-.15}, 'product');
tl.to(pricePoint, .5, {ease:Bounce.easeOut, opacity:1, delay:0},'price');
tl.to(taxesFees, .5, {ease:Power2.easeOut, opacity:1, delay:0},'taxes');
tl.to(dividerRev, .25, {ease:Power2.easeOut,  top:'-12px', opacity:1, delay:-.25});
tl.to(subheadContainer, .5, {ease:Quad.easeInOut,  opacity:1, delay:0},'rtb');
tl.to(fLogo, .25, {ease:Quad.easeInOut,  top:8, delay:0},'logo');
tl.to(rollO, .25, {ease:Quad.easeOut,  top:53, delay:-.325},'rollover');
tl.from(cta, .5, {ease:Bounce.easeOut, opacity:0, scaleX:.1, scaleY:.1,delay:-.25},  'cta');


  }
  //called on main timeline completion
  function animComplete(){}

  function turnOnLegalRoll(){
    roller.addEventListener('mouseover',rollMe,false);
  }
  turnOnLegalRoll();

  closer.onclick = function(){
    jvxAd.openClickThrough(clickTag);
  }
/////////// SHOW HIDE LEGAL ////////////////////////
  function rollMe(){
    var tl = new TimelineLite({onComplete:animComplete});
    tl.to(legalBg, .25, {ease:Linear.easeIn, alpha:.9, delay:0});
    tl.to(legalCopy, .25, {ease:Linear.easeIn, alpha:1, delay:-.25});
    tl.to(xMark, .25, {ease:Linear.easeIn, alpha:1, delay:-.25});
    closer.addEventListener('mouseout',onRollOut,true);
    xMark.addEventListener('click',onRollOut,true);
    roller.style.top = '200px';
    closer.style.zIndex = '3000';
    xMark.style.zIndex = '3001';

  }

  function onRollOut(event) {
    legalBg.style.opacity  = 0;
    legalCopy.style.opacity  = 0;
    xMark.style.opacity  = 0;
    roller.style.top  = '53px';
    closer.style.zIndex = '3000';
    roller.style.zIndex = '3001';
  }
////////////////////////////////////////////
  init();
}
