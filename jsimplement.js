// var events = require('events');
// var util = require('util');
// var fs = require('fs');

// disclaimer: I'm not entirely sure this implimentation can be done with js alone!

var Pesin = function(yaname){
  this.yaname = yaname;
}

// util.inherits(Pesin, events.EventEmitter);

var shola = new Pesin('shola');
var peculiar = new Pesin('peculiar');
var eazy = new Pesin('eazy');
var maPipo = [shola, peculiar, eazy];

var dancelog;
maPipo.forEach(function(pesin){
  pesin.on('sekini', function(kinitose){
    // var tolog = pesin.yaname + ' has now' + kinitose + 'ed';
    // console.log(tolog);
    console.log(pesin.yaname + ' has now ' + kinitose + 'ed')
  })
})

shola.emit('sekini', 'soki');

var maDeeds = ['shoki', 'azonto', 'whipp', 'naynay', 'gbefun']

var timeThis;
var countThis = 0;
function oyolowa(){
  console.log(' ');
  var deed;
  var ran1 = randomizer(0, 4);

  switch (randomizer(1, 5)) {
    case 1:
      deed = 'shoki';
      break;
    case 2:
      deed = 'danc';
      break;
    case 3:
      deed = 'yan';
      break;
    case 4:
      deed = 'yab';
      break;
    case 5:
      deed = 'cod';
      break;
    default:
      deed = 'exist';
  }
  var ran2 = randomizer(0, 2);
  maPipo[ran2].emit('sekini', maDeeds[ran1]);
  countThis++;
  // timeThis = setTimeout(oyolowa, 3000);
}

var randomizer = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

setInterval(oyolowa, 1000);

var towrite1 = 'The following are the dances:';
// var towrite2 = dancelog;

// fs.writeFile('danceCount.txt', '')
