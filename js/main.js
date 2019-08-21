var $triangleOverlay =  document.getElementById('triangle-overlay'),
    flipBook = $('.flipbook'),
    movableTriangle,
    colors = ['#b48b4a','#ffffff','#a4d7ef','#403f5b','#508b46','#e6302a','#ec663c','#ef7727','#ffd210'],
    bgcolors = ['#b48b4a','#a4d7ef','#403f5b','#508b46','#e6302a','#ec663c','#ef7727','#ffd210'],
    //imgs = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26'],
    imgs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'],
    tearDiv,
    $angle,
    $isMobile,
    $audio,
    rowArray =[],
    TopRowArray=[],
   // $colorsFiles = ['403f5b', 'a4d7ef', 'b48b4a', 'e6302a', 'ec663c', 'ef7727', 'ffffff', 'ffd210'],
    $fileNames = ['Wrap it and go','Wrappers delight','It is ok to wrip me off','Wrappers paradise','Wrapaliciously designed','Wrap-so-good','Festive wrap with all the trimmings','Wrip to your hearts content','Wripped and wrapped all over','Its a wrap','Fully loaded festive wrap','Wu Tang Wrap','Wrippy Smallz','Wrap me up and throw me to the___','Unwrap on a lap','Mummy unwrap me','Unwrap Or dont','Judge by my cover','Dont keep under wraps','Wrapped up good','Wrapped round your finger','A wriddle wrapped in an enigma','Wriddle me wrappy','You Wrip-n-Wrapper you','Your gifts are so lucky','Yeeeeey _Im gonna hug your gifts','Yeeeeey_I won','Its all about the first impression','Its not the inside that counts_Its the outside','Everyone judges a gift by its cover','I shall protect thy gift with my life','You will have to wrip me off your gift','Who needs a gift when you have me','Wrapping paper rules'];

function downloadCanvas(link, filename) {


    link.href = $('canvas').first()[0].toDataURL();
    //var a = document.createElement('a');
    //if (typeof a.download == "undefined") {
    //    e.preventDefault();
    //    var dataUrl = $('canvas').first()[0].toDataURL(); //attempt to save base64 string to server using this var
    //    var windowContent = '<!DOCTYPE html>';
    //    windowContent += '<html>';
    //    windowContent += '<head><title>'+filename+'</title><style>html,body, img { height: 100% !important; } </style></head>';
    //    windowContent += '<body>';
    //    windowContent += '<img style="height:100%;width:100%" src="' + dataUrl + '">';
    //     windowContent += '<script>alert("Please right-click to save your image file")</script>';
    //    windowContent += '</body>';
    //    windowContent += '</html>';
    //    var printWin = window.open('','','width=340,height=260');
    //    printWin.document.open();
    //    printWin.document.write(windowContent);
    //    printWin.document.close();
    //    printWin.focus();
    //    printWin.print();
    //    printWin.close();
    //}
    if($isMobile)
        $(link).attr('target', '_blank');
    link.download = filename;
}
function mobilecheck() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function drawStuff($canvas) {

    var ctx = $canvas.getContext('2d');
    var $maximages = getRandomInt(0,6);

        shuffle(colors);
    shuffle(bgcolors);
    shuffle(imgs);

    var differentRowColors = bgcolors.slice(0,getRandomInt(1,7));
    rowArray = [];
    for (var rows = 0; rows < getRandomInt(1,10); rows++) {
        rowArray.push(createPatternTile($maximages, differentRowColors));
    }
    var random = $isMobile ? getRandomInt(0,1): getRandomInt(0,3);

    var obj = {pattern: rowArray,patternType:random}
    TopRowArray.push(obj);
paintStuff(rowArray, ctx, random);





    }
function  paintStuff(thisRowArray, ctx, random) {
var currentPosition = 0,
    counter = 0;

switch(random) {
    case 0:
        var prevHeight=0;
        ctx.translate(-75,-75);
        currentPosition=-500;
        while(currentPosition<window.innerHeight)
        {
            var pattObject = thisRowArray[counter%rowArray.length];
            var pat=ctx.createPattern(pattObject.pattern,"repeat-x");
            ctx.fillStyle=pat;

            ctx.translate(0, prevHeight);
            prevHeight = pattObject.patternHeight;
            ctx.fillRect(0,0,window.innerWidth*2,window.innerHeight);
            currentPosition+=pattObject.patternHeight;
            counter++;
        }
        break;
    case 1:
        ctx.translate(-50,-50);
        var prevWidth=0;
        currentPosition=-500;
        while(currentPosition<window.innerWidth)
        {
            var pattObject = thisRowArray[counter%rowArray.length];
            var pat=ctx.createPattern(pattObject.pattern,"repeat-y");
            ctx.fillStyle=pat;

            ctx.translate(prevWidth, 0);
            prevWidth = pattObject.patternWidth;
            ctx.fillRect(0,0,window.innerWidth,window.innerHeight*2);
            currentPosition+=pattObject.patternWidth;
            counter++;
        }
        break;
    case 2:
        ctx.translate(0,-2000);
        ctx.rotate((Math.atan2(window.innerHeight, window.innerWidth)));
        var prevHeight=300;
        currentPosition=-1500;
        while(currentPosition<window.innerHeight)
        {
            var pattObject = thisRowArray[counter%rowArray.length];
            var pat=ctx.createPattern(pattObject.pattern,"repeat");
            ctx.fillStyle=pat;

            ctx.translate(0, prevHeight);
            prevHeight = pattObject.patternHeight-1;
            ctx.fillRect(-300,0,window.innerWidth*6,window.innerHeight);
            currentPosition+=pattObject.patternHeight;
            counter++;
        }
        break;
    case 3:
        ctx.translate(-850,800);
        ctx.rotate((Math.atan2(window.innerHeight, window.innerWidth))*-1);
        var prevWidth=500;
        var currentPosition = -800
        while(currentPosition<window.innerWidth)
        {
            var pattObject = thisRowArray[counter%rowArray.length];
            var pat=ctx.createPattern(pattObject.pattern,"repeat");
            ctx.fillStyle=pat;

            ctx.translate(prevWidth, 0);
            prevWidth = pattObject.patternWidth-1;
            ctx.fillRect(0,-window.innerHeight,window.innerWidth,window.innerHeight*6);
            currentPosition+=pattObject.patternWidth;
            counter++;
        }
        break;
}
}

//Function to create tile pattern on canvas
        function createPatternTile(maxImages, differentRowColors) {
            var width = getRandomInt(10, $(window).width()/10);
            var $pattern = document.createElement('canvas');
                  $pattern.width = width;
                  $pattern.height = width;
                  var ctx = $pattern.getContext('2d'),
                     color = colors[getRandomInt(0,7)],
                      $index = differentRowColors.indexOf(color);
            if($index>-1)
            {
                if(differentRowColors.length==1)
                    differentRowColors[0] = colors[colors[differentRowColors[0]]++];
                else
                    differentRowColors.splice($index, 1);
            }
            ctx.font = (width) +'px "wrip-wrap"';
            ctx.fillStyle = differentRowColors[getRandomInt(0,differentRowColors.length-1)];
           // if(ctx.fillStyle =)
            ctx.fillRect(0, 0,  $pattern.width, $pattern.height);
            ctx.fillStyle = color;
            ctx.textAlign = "center";
            ctx.fillText( imgs[getRandomInt(0,maxImages)], $pattern.width/2, $pattern.height);
            patternObject =  {pattern:$pattern, patternHeight:$pattern.height, patternWidth:$pattern.width};
            differentRowColors.push(color)
            return patternObject;

        }

$(window).load(function() {
    $isMobile = mobilecheck();

    //$( window ).resize(function() {
    //   resize();
    //});
    var canvas = document.getElementById('WrappingPaper1'),
    canvas2 = document.getElementById('WrappingPaper2');
    movableTriangle = true;
    $('#download-button').on('click', function(e) {

        downloadCanvas(this, $fileNames[getRandomInt(0,33)]+'.png');
    });

    $('#info-button').on('click', function(e) {
        e.preventDefault();
        $('.main-pop-up').fadeIn();
    });

    canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas2.width = window.innerWidth;
        canvas2.height = window.innerHeight;
    drawStuff(canvas);
    drawStuff(canvas2);

    flipBook.turn({
        elevation: 50,
        gradients: true,
        autoCenter: true
    });

    flipBook.bind("turned", function(event, pageObject, turned){
        if(pageObject == 2) {
            flipBook.turn("removePage", pageObject-1);
            var element = document.createElement('canvas');
            element.width = window.innerWidth;
            element.height = window.innerHeight;
            drawStuff(element);

            flipBook.turn("addPage", element);
        }

    });
    $('audio').each(function(){
        $(this)[0].volume = 0.4;
    });

    $audio = $('audio').not('#swoosh');
    $swoosh = $('#swoosh');
    });
function muteSounds($muteButton) {

        if($muteButton.text()=='MUTE')
        {
            $muteButton.text('UNMUTE');
            $('audio').each(function(){
                $(this)[0].volume = 0;
            });
        } else {
            $muteButton.text('MUTE');
            $('audio').each(function(){
                $(this)[0].volume = 0.4;
            });
        };
}
function resize() {
    flipBook.turn("destroy");

    $(TopRowArray).each(function( index ) {
        var element = document.createElement('canvas');
        element.width = window.innerWidth;
        element.height = window.innerHeight;

        var context = element.getContext('2d');

        paintStuff(this.pattern,context, this.patternType);
        flipBook.append(element);

    });
    $(document).append(tearDiv);
    flipBook.turn({
        elevation: 50,
        gradients: true,
        autoCenter: true
    });

    flipBook.bind("turned", function(event, pageObject, turned){
        if(pageObject == 2) {
            flipBook.turn("removePage", pageObject-1);
            var element = document.createElement('canvas');
            element.width = window.innerWidth;
            element.height = window.innerHeight;
            drawStuff(element);

            flipBook.turn("addPage", element);
        }

    });

}
function clipTriangle(direction) {
 if(tearDiv == undefined)
 tearDiv = $('.tear-div');
   if(movableTriangle) {
       var ctx = $triangleOverlay.getContext('2d'),
           triangleCoords = [],
           oldCanvas = $('.flipbook canvas').first()[0],
           $width = oldCanvas.width,
           $height = oldCanvas.height;

       $('.page-wrapper').last().after(tearDiv);
       tearDiv.show();
       ctx.lineWidth = .5;
       $triangleOverlay.width = $width;
       $triangleOverlay.height = $height;
       $($triangleOverlay).css({width: $(oldCanvas).css('width'), height: $(oldCanvas).css('height')});


       switch (direction) {
           case 'tlb':
           case 'brb':
               triangleCoords = [[0, 0], [$width, 0], [$width, $height]];
               $angle = (Math.atan2($height, $width) * 180 / Math.PI);
               tearDiv.css({'margin-top': '-6.5px'});
               break;
           case 'tlt':
           case 'brt':
               triangleCoords = [[0, 0], [$width, $height], [0, $height]];
               tearDiv.css({'margin-top': '-6.5px'});
               $angle = Math.atan2($height, $width) * 180 / Math.PI;
               break;
           case 'trt':
           case 'blt':
               triangleCoords = [[$width, 0], [$width, $height], [0, $height]];
               $angle = (Math.atan2($height, $width) * 180 / Math.PI)*-1;
               tearDiv.css({'margin-top': $height-6.5+'px'});
               break;
           case 'trb':
           case 'blb':
               triangleCoords = [[0, 0], [$width, 0], [0, $height]];
               $angle = (Math.atan2($height, $width) * 180 / Math.PI)*-1;
               tearDiv.css({'margin-top': $height-6.5+'px'});
               break;

       }
        var tearCss = $.cssPrefix() =='-webkit-' && !(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) ? {'-webkit-transform':'rotate('+ $angle +'deg)'}:{transform:'rotate('+ $angle +'deg)'};
       tearDiv.css(tearCss);
       ctx.beginPath();
       ctx.moveTo(triangleCoords[0][0], triangleCoords[0][1]);
       ctx.lineTo(triangleCoords[1][0], triangleCoords[1][1]);
       ctx.lineTo(triangleCoords[2][0], triangleCoords[2][1]);
       ctx.clip();
       ctx.drawImage(oldCanvas, 0, 0);

   }
}
function clearTriangle() {
    TopRowArray.splice(0,1);
    var ctx = $triangleOverlay.getContext('2d');
    ctx.clearRect(0, 0, $triangleOverlay.width, $triangleOverlay.height);
    $($triangleOverlay).removeAttr('style');
    $($triangleOverlay).removeAttr('height');
    $($triangleOverlay).removeAttr('width');
    tearDiv.removeAttr('style');
    flipBook.turn("disable", false);
    movableTriangle = true;

}
function changePositionOfTear() {
    $($triangleOverlay).before(tearDiv);
    tearDiv.css({zIndex:'10'});
}
var $swoosh;
function moveTriangle(direction) {
    flipBook.turn("disable", true);
    movableTriangle = false;

  //if( movableTriangle) {
      switch (direction) {
          case 'tlb':
          case 'brb':
              setTimeout(function () {
                  $($triangleOverlay).animate({
                      top: '-1000px',
                      left:'1000px'
                  },  {
                      duration: 600,
                      queue: false

                  });
                  tearDiv.animate({
                      top: '-1000px',
                      left:'1000px'
                  }, { duration: 600, queue: false, complete: function () {
                      clearTriangle();

                  }});
                  $swoosh[0].play();
              }, 200);
              break;
          case 'tlt':
          case 'brt':
              setTimeout(function () {
                  $($triangleOverlay).animate({
                      top: '1000px',
                      left:'-1000px'
                  },  {
                      duration: 600,
                      queue: false

                  });
                  tearDiv.animate({
                      top: '1000px',
                      left:'-1000px'
                  }, { duration: 600, queue: false, complete: function () {
                      clearTriangle();

                  } });
                  $swoosh[0].play();
              }, 200);
              break;
          case 'trt':
          case 'blt':
              setTimeout(function () {
                  $($triangleOverlay).animate({
                      top: '1000px',
                      left:'1000px'
                  },  {
                      duration: 600,
                      queue: false
                  });
                  tearDiv.animate({
                      top: '1000px',
                      left:'1000px',

                  }, { duration: 600, queue: false, complete: function () {
                      clearTriangle();

                  } });
                  $swoosh[0].play();
              }, 200);

              break;
          case 'trb':
          case 'blb':
              setTimeout(function () {
                  $($triangleOverlay).animate({
                      top: '-1000px',
                      left:'-1000px'
                  },
                      {
                          duration: 600,
                          queue: false
                      });
                  tearDiv.animate({
                      top: '-1000px',
                      left:'-1000px'
                  }, { duration: 600, queue: false, complete: function () {
                      clearTriangle();

                  }});
                  $swoosh[0].play();
              }, 200);
              break;
      }

 // }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
