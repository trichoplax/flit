// Arbitrary numbers chosen to ensure Long Portrait mode fits into Chrome on Android.
// Firefox uses less vertical space for the URL bar so Long Portrait will be available in both.
// 270 is six times 45, as board is twelve squares and logo is two.
// 73 is the remaining 3.24444 squares that can fit into the Chrome window.
// Scaled up until all values are integers for ease of reading.
const THRESHOLD_LongPortraitFitToWidth = 270/(45+270+73);
const THRESHOLD_LongPortraitFitToHeight = (45+270)/(45+270+73);
const THRESHOLD_ShortPortraitFitToWidth = (45+270)/(270+73);
const THRESHOLD_ShortPortraitFitToHeight = 1;
const THRESHOLD_ShortLandscapeFitToWidth = (270+73)/(45+270);
const THRESHOLD_ShortLandscapeFitToHeight = (45+270+73)/(45+270);
const THRESHOLD_LongLandscapeFitToWidth = (45+270+73)/270;

function reorganise() {
  ratio = window.innerWidth / window.innerHeight;
  if (ratio < THRESHOLD_LongPortraitFitToWidth) {arrange_LongPortraitFitToWidth();
  } else if (ratio < THRESHOLD_LongPortraitFitToHeight) {arrange_LongPortraitFitToHeight();
  } else if (ratio < THRESHOLD_ShortPortraitFitToWidth) {arrange_ShortPortraitFitToWidth();
  } else if (ratio < THRESHOLD_ShortPortraitFitToHeight) {arrange_ShortPortraitFitToHeight();
  } else if (ratio < THRESHOLD_ShortLandscapeFitToWidth) {arrange_ShortLandscapeFitToWidth();
  } else if (ratio < THRESHOLD_ShortLandscapeFitToHeight) {arrange_ShortLandscapeFitToHeight();
  } else if (ratio < THRESHOLD_LongLandscapeFitToWidth) {arrange_LongLandscapeFitToWidth();
  } else {arrange_LongLandscapeFitToHeight();
  }
}

function arrange_LongPortraitFitToWidth() {
  document.getElementById('div-title-west').style.display = 'none';
  document.getElementById('div-title-north').style.display = 'flex';
  document.getElementById('div-info-east').style.display = 'none';
  document.getElementById('div-info-south').style.display = 'inline';
  
  var w = window.innerWidth;
  document.getElementById('div-title-north').style.width = w.toString().concat('px');
  document.getElementById('div-title-north').style.height = (w/6).toString().concat('px');
  document.getElementById('div-board-area').style.width = w.toString().concat('px');
  document.getElementById('div-board-area').style.height = w.toString().concat('px');
  document.getElementById('div-info-south').style.width = w.toString().concat('px');
  document.getElementById('div-info-south').style.height = (window.innerHeight-w*7/6).toString().concat('px');
}

function arrange_LongPortraitFitToHeight() {
  document.getElementById('div-title-west').style.display = 'none';
  document.getElementById('div-title-north').style.display = 'flex';
  document.getElementById('div-info-east').style.display = 'none';
  document.getElementById('div-info-south').style.display = 'inline';
  
  var w = window.innerHeight * THRESHOLD_LongPortraitFitToWidth;
  document.getElementById('div-title-north').style.width = w.toString().concat('px');
  document.getElementById('div-title-north').style.height = (w/6).toString().concat('px');
  document.getElementById('div-board-area').style.width = w.toString().concat('px');
  document.getElementById('div-board-area').style.height = w.toString().concat('px');
  document.getElementById('div-info-south').style.width = w.toString().concat('px');
  document.getElementById('div-info-south').style.height = (window.innerHeight-w*7/6).toString().concat('px');
}

function arrange_ShortPortraitFitToWidth() {
  document.getElementById('div-title-north').style.display = 'none';
  document.getElementById('div-title-west').style.display = 'flex';
  document.getElementById('div-info-east').style.display = 'none';
  document.getElementById('div-info-south').style.display = 'inline';
  
  var w = window.innerWidth;
  document.getElementById('div-title-west').style.width = (w/7).toString().concat('px');
  document.getElementById('div-title-west').style.height = (w*6/7).toString().concat('px');
  document.getElementById('div-board-area').style.width = (w*6/7).toString().concat('px');
  document.getElementById('div-board-area').style.height = (w*6/7).toString().concat('px');
  document.getElementById('div-info-south').style.width = w.toString().concat('px');
  document.getElementById('div-info-south').style.height = (window.innerHeight-w*6/7).toString().concat('px');
}

function arrange_ShortPortraitFitToHeight() {
  document.getElementById('div-title-north').style.display = 'none';
  document.getElementById('div-title-west').style.display = 'flex';
  document.getElementById('div-info-east').style.display = 'none';
  document.getElementById('div-info-south').style.display = 'inline';
  
  var w = window.innerHeight * THRESHOLD_ShortPortraitFitToWidth;
  document.getElementById('div-title-west').style.width = (w/7).toString().concat('px');
  document.getElementById('div-title-west').style.height = (w*6/7).toString().concat('px');
  document.getElementById('div-board-area').style.width = (w*6/7).toString().concat('px');
  document.getElementById('div-board-area').style.height = (w*6/7).toString().concat('px');
  document.getElementById('div-info-south').style.width = w.toString().concat('px');
  document.getElementById('div-info-south').style.height = (window.innerHeight-w*6/7).toString().concat('px');
}

function arrange_ShortLandscapeFitToWidth() {
  document.getElementById('div-title-west').style.display = 'none';
  document.getElementById('div-title-north').style.display = 'flex';
  document.getElementById('div-info-south').style.display = 'none';
  document.getElementById('div-info-east').style.display = 'inline';
  
  var h = window.innerWidth * THRESHOLD_ShortPortraitFitToWidth;
  document.getElementById('div-title-north').style.width = (h*6/7).toString().concat('px');
  document.getElementById('div-title-north').style.height = (h/7).toString().concat('px');
  document.getElementById('div-board-area').style.width = (h*6/7).toString().concat('px');
  document.getElementById('div-board-area').style.height = (h*6/7).toString().concat('px');
  document.getElementById('div-info-east').style.width = (window.innerWidth-h*6/7).toString().concat('px');
  document.getElementById('div-info-east').style.height = (h*6/7).toString().concat('px');
}

function arrange_ShortLandscapeFitToHeight() {
  document.getElementById('div-title-west').style.display = 'none';
  document.getElementById('div-title-north').style.display = 'flex';
  document.getElementById('div-info-south').style.display = 'none';
  document.getElementById('div-info-east').style.display = 'inline';
  
  var h = window.innerHeight;
  document.getElementById('div-title-north').style.width = (h*6/7).toString().concat('px');
  document.getElementById('div-title-north').style.height = (h/7).toString().concat('px');
  document.getElementById('div-board-area').style.width = (h*6/7).toString().concat('px');
  document.getElementById('div-board-area').style.height = (h*6/7).toString().concat('px');
  document.getElementById('div-info-east').style.width = (window.innerWidth-h*6/7).toString().concat('px');
  document.getElementById('div-info-east').style.height = (h*6/7).toString().concat('px');
}

function arrange_LongLandscapeFitToWidth() {
  document.getElementById('div-title-north').style.display = 'none';
  document.getElementById('div-title-west').style.display = 'flex';
  document.getElementById('div-info-south').style.display = 'none';
  document.getElementById('div-info-east').style.display = 'inline';
  
  var h  = window.innerWidth * THRESHOLD_LongPortraitFitToWidth;
  document.getElementById('div-title-west').style.width = (h/6).toString().concat('px');
  document.getElementById('div-title-west').style.height = h.toString().concat('px');
  document.getElementById('div-board-area').style.width = h.toString().concat('px');
  document.getElementById('div-board-area').style.height = h.toString().concat('px');
  document.getElementById('div-info-east').style.width = (window.innerWidth-h*7/6).toString().concat('px');
  document.getElementById('div-info-east').style.height = h.toString().concat('px');
}

function arrange_LongLandscapeFitToHeight() {
  document.getElementById('div-title-north').style.display = 'none';
  document.getElementById('div-title-west').style.display = 'flex';
  document.getElementById('div-info-south').style.display = 'none';
  document.getElementById('div-info-east').style.display = 'inline';
  
  var h  = window.innerHeight;
  document.getElementById('div-title-west').style.width = (h/6).toString().concat('px');
  document.getElementById('div-title-west').style.height = h.toString().concat('px');
  document.getElementById('div-board-area').style.width = h.toString().concat('px');
  document.getElementById('div-board-area').style.height = h.toString().concat('px');
  document.getElementById('div-info-east').style.width = (window.innerWidth-h*7/6).toString().concat('px');
  document.getElementById('div-info-east').style.height = h.toString().concat('px');
}

function expand_to_full_screen() {
  try {
    document.getElementById('div-outer-vertical-flexbox').requestFullscreen();
  }
  catch (e) {
    try {
      document.getElementById('div-outer-vertical-flexbox').mozRequestFullScreen();
    }
    catch (e) {
      try {
        document.getElementById('div-outer-vertical-flexbox').webkitRequestFullscreen();
      }
      catch (e) {
        document.getElementById('div-outer-vertical-flexbox').msRequestFullscreen();
      }
    }
  }
}

function contract_from_full_screen() {
  try {
    document.exitFullscreen();
  }
  catch (e) {
    try {
      document.mozCancelFullScreen();
    }
    catch (e) {
      try {
        document.webkitExitFullscreen();
      }
      catch (e) {
        document.msExitFullscreen();
      }
    }
  }
}

function switch_buttons() {
  if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    document.getElementById('button-full-screen-expand-north').style.display= 'none';
    document.getElementById('button-full-screen-expand-west').style.display= 'none';
    document.getElementById('button-full-screen-contract-north').style.display= 'inline';
    document.getElementById('button-full-screen-contract-west').style.display= 'inline';
  } else {
    document.getElementById('button-full-screen-contract-north').style.display= 'none';
    document.getElementById('button-full-screen-contract-west').style.display= 'none';
    document.getElementById('button-full-screen-expand-north').style.display= 'inline';
    document.getElementById('button-full-screen-expand-west').style.display= 'inline';
  }
}

class Game {
  
  constructor() {
    this.restart();
  }
  
  restart() {    
    var square, x, y, t;
    this.board = [[0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0]
                 ];
    this.player1_pieces = [];
    this.player2_pieces = [];
    this.neutral_pieces = [];
    this.isolated_squares = [];
    this.player1_adjacent_squares = [];
    this.player2_adjacent_squares = [];
    this.highlighted_destination_squares = [];

    for (y = 0; y <= 11; y++) {
      for (x = 0; x <= 11; x++) {
        this.isolated_squares.push([x, y]);
        this.display_empty_square(x, y)
      }
    }
     
    for (t = 0; t <= 1; t++) {
      square = this.isolated_squares[Math.floor(Math.random() * this.isolated_squares.length)];
      x = square[0];
      y = square[1];
      this.place_player1_piece(x, y);
      console.log('Placing at ' + x + ', ' + y)
      square = this.isolated_squares[Math.floor(Math.random() * this.isolated_squares.length)];
      x = square[0];
      y = square[1];
      this.place_player2_piece(x, y);
    }
    this.player_to_move = 0;
  }
  
  place_player1_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#player1-piece-image\'></use>';
    this.remove_isolated_squares(x, y);
  }
  
  place_player2_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#player2-piece-image\'></use>';
    this.remove_isolated_squares(x, y);
  }
  
  place_neutral_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#neutral-piece-image\'></use>';
    this.remove_isolated_squares(x, y);
  }
  
  highlight_player1_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#highlighted-player1-piece-image\'></use>';
  }
  
  unhighlight_player1_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#player1-piece-image\'></use>';
  }
  
  highlight_empty_square(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#highlighted-empty-square-image\'></use>';
  }
  
  display_empty_square(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '';
  }
  
  make_square_empty(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '';
    this.add_isolated_squares(x, y);
  }
    
  remove_isolated_squares(x, y) {
    console.log('remove_isolated_squares called with ' + x + ', ' + y);
    var location;
    for (let target of [[x, y]].concat(this.neighbours(x, y))) {
      console.log('Checking ' + target);
      location = this.isolated_squares.indexOf(target);
      if (location > -1) {
        this.isolated_squares.splice(location, 1);
        console.log('Removing ' + target);
      }
    }
  }

  add_isolated_squares(x, y) {
    var location;
    for (let target of [[x, y]].concat(this.neighbours(x, y))) {
      location = this.isolated_squares.indexOf(target);
      if (location === -1) {
        this.isolated_squares.push(target);
      }
    }
  }

  neighbours(x, y) {   // Javascript % currently takes the sign of the dividend rather than the divisor, hence the +12s
    return [[x, (y - 1 + 12) % 12],
            [(x - 1 + 12) % 12, y],
            [(x + 1) % 12, y],
            [x, (y + 1) % 12]
           ];
  }

  confirm_new_game() {
    if (confirm('Abandon game and start a new one?')) {
      this.restart();
    }
  }
}

function prepare() {
  console.log('About to prepare');
  game = new Game();
  console.log('New game made');
  reorganise();
  console.log('Reorganised');
  document.onfullscreenchange = switch_buttons;
  document.onmozfullscreenchange = switch_buttons;
  document.onwebkitfullscreenchange = switch_buttons;
  document.onmsfullscreenchange = switch_buttons;
  window.onresize = reorganise;
}

console.log('Javascript reached end');
window.onload = prepare;
console.log('onload event assigned');
