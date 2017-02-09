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
const FONT_RATIO = 1/24;

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
  document.getElementById('div-info-south').style.fontSize = (w*FONT_RATIO).toString().concat('px');
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
  document.getElementById('div-info-south').style.fontSize = (w*FONT_RATIO).toString().concat('px');
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
  document.getElementById('div-info-south').style.fontSize = (w*FONT_RATIO).toString().concat('px');
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
  document.getElementById('div-info-south').style.fontSize = (w*FONT_RATIO).toString().concat('px');
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
  document.getElementById('div-info-east').style.fontSize = (h*6/7*FONT_RATIO).toString().concat('px');
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
  document.getElementById('div-info-east').style.fontSize = (h*6/7*FONT_RATIO).toString().concat('px');
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
  document.getElementById('div-info-east').style.fontSize = (h*FONT_RATIO).toString().concat('px');
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
  document.getElementById('div-info-east').style.fontSize = (h*FONT_RATIO).toString().concat('px');
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
    this.EMPTY_SQUARE = 0;
    this.PLAYER1_PIECE = 1;
    this.PLAYER2_PIECE = 2;
    this.NEUTRAL_PIECE = 3;
    this.SELECTED_PLAYER1_PIECE = 4;
    this.HIGHLIGHTED_EMPTY_SQUARE = 5;
    
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
    this.is_piece_selected = false;
    this.selected_piece_x = 0;
    this.selected_piece_y = 0;
    this.player_to_move = 0;
    this.game_over = false;
    document.getElementById('instructions-east').innerHTML = 'Learn the rules by playing.';
    document.getElementById('instructions-south').innerHTML = 'Learn the rules by playing.';

    for (y = 0; y <= 11; y++) {
      for (x = 0; x <= 11; x++) {
        this.isolated_squares.push([x, y]);
        this.display_empty_square(x, y);
      }
    }
    
    for (t = 0; t <= 1; t++) {
      square = this.isolated_squares[Math.floor(Math.random() * this.isolated_squares.length)];
      x = square[0];
      y = square[1];
      this.place_player1_piece(x, y);
      square = this.isolated_squares[Math.floor(Math.random() * this.isolated_squares.length)];
      x = square[0];
      y = square[1];
      this.place_player2_piece(x, y);
    }
  }
  
  place_player1_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#player1-piece-image\'></use>';
    this.remove_isolated_squares(x, y);
    this.board[x][y] = this.PLAYER1_PIECE;
    this.player1_pieces.push([x, y]);
  }
  
  place_player2_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#player2-piece-image\'></use>';
    this.remove_isolated_squares(x, y);
    this.board[x][y] = this.PLAYER2_PIECE;
    this.player2_pieces.push([x, y]);
  }
  
  place_grey_player1_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#greyed-player1-piece-image\'></use>';
  }
  
  place_grey_player2_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#greyed-player2-piece-image\'></use>';
  }
  
  place_neutral_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#neutral-piece-image\'></use>';
    this.remove_isolated_squares(x, y);
    this.board[x][y] = this.NEUTRAL_PIECE;
    this.neutral_pieces.push([x, y]);
  }
  
  highlight_player1_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#highlighted-player1-piece-image\'></use>';
    this.board[x][y] = this.SELECTED_PLAYER1_PIECE;
  }
  
  unhighlight_player1_piece(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#player1-piece-image\'></use>';
    this.board[x][y] = this.PLAYER1_PIECE;
  }
  
  highlight_empty_square(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '<use xlink:href=\'images/logo-and-buttons.svg#highlighted-empty-square-image\'></use>';
    this.highlighted_destination_squares.push([x, y]);
    this.board[x][y] = this.HIGHLIGHTED_EMPTY_SQUARE;
  }
  
  display_empty_square(x, y) {
    document.getElementById('div-tile-x' + x + '-y' + y).innerHTML = '';
    this.board[x][y] = this.EMPTY_SQUARE;
  }
  
  make_square_empty(x, y) {
    this.display_empty_square(x, y);
    this.add_isolated_squares(x, y);
  }
    
  remove_isolated_squares(x, y) {
    var location;
    for (let target of [[x, y]].concat(this.neighbours(x, y))) {
      location = this.theIndexOf(this.isolated_squares, target);
      if (location > -1) {
        this.isolated_squares.splice(location, 1);
      }
    }
  }

  add_isolated_squares(x, y) {
    var location;
    for (let target of [[x, y]].concat(this.neighbours(x, y))) {
      if (this.is_isolated(target[0], target[1])) {
        location = this.theIndexOf(this.isolated_squares, target);
        if (location === -1) {
          this.isolated_squares.push(target);
        }
      }
    }
  }
  
  is_isolated(x, y) {
    for (let square of [[x,y]].concat(this.neighbours(x, y))) {
      if (this.board[square[0]][square[1]] !== this.EMPTY_SQUARE) {
        return false;
      }      
    }
    return true;
  }
  
  theIndexOf(array_of_coords, target_coords) {
    var array_of_strings = [];
    for (let coords of array_of_coords) {
      array_of_strings.push(this.stringed(coords));
    }
    var target_string = this.stringed(target_coords);
    return array_of_strings.indexOf(target_string);
  }
  
  stringed(coords) {
    return coords[0] + ',' + coords[1];
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
  
  accept_click(x, y) {
    if (this.player_to_move === 0 && this.game_over === false) {
      var piece_type = this.board[x][y];
      if (this.is_piece_selected) {
        switch (piece_type) {
          case this.PLAYER1_PIECE:
            this.deselect_player1_piece();
            this.select_player1_piece(x, y);
            break;
          case this.SELECTED_PLAYER1_PIECE:
            this.deselect_player1_piece();
            break;
          case this.HIGHLIGHTED_EMPTY_SQUARE:
            this.move_player1_piece(x, y);
            break;
          default:
            this.warning();
        }
      } else {
        switch (piece_type) {
          case this.PLAYER1_PIECE:
            this.select_player1_piece(x, y);
            break;
          default:
            this.warning();
        }
      }
    }
  }
  
  warning() {
    var tiles1 = document.getElementsByClassName('tile1');
    var tiles2 = document.getElementsByClassName('tile2');
    for (let tile of tiles1) {
      tile.style.background = 'red';
    }
    for (let tile of tiles2) {
      tile.style.background = 'red';
    }
    setTimeout(this.remove_warning, 100);
  }
  
  remove_warning() {
    var tiles1 = document.getElementsByClassName('tile1');
    var tiles2 = document.getElementsByClassName('tile2');
    for (let tile of tiles1) {
      tile.style.background = '#301500';
    }
    for (let tile of tiles2) {
      tile.style.background = '#452200';
    }
  }      
  
  select_player1_piece(x, y) {
    this.is_piece_selected = true;
    this.selected_piece_x = x;
    this.selected_piece_y = y;
    this.highlight_player1_piece(x, y);
    
    this.highlight_player1_destination_squares(x, y);
  }
  
  highlight_player1_destination_squares(x, y) {
    this.highlighted_destination_squares = [];
    for (let piece of this.player1_pieces) {
      if (!(piece[0] === x && piece[1] === y)) {
        for (let square of this.neighbours(piece[0], piece[1])) {
          if (this.board[square[0]][square[1]] === this.EMPTY_SQUARE) {
            this.highlight_empty_square(square[0], square[1]);
          }
        }
      }
    }
  }
  
  deselect_player1_piece() {
    this.is_piece_selected = false;
    this.unhighlight_player1_piece(this.selected_piece_x, this.selected_piece_y);
    
    this.remove_highlighting_of_squares()
  }
  
  remove_highlighting_of_squares() {
    for (let square of this.highlighted_destination_squares) {
      this.display_empty_square(square[0], square[1]);
    }
    this.highlighted_destination_squares = [];
  }
  
  move_player1_piece(x, y) {
    this.deselect_player1_piece(this.selected_piece_x, this.selected_piece_y);
    this.make_square_empty(this.selected_piece_x, this.selected_piece_y);
    this.place_player1_piece(x, y);
    this.convert_neutral_pieces(x, y);
    var location = this.theIndexOf(this.player1_pieces, [this.selected_piece_x, this.selected_piece_y]);
    this.player1_pieces.splice(location, 1);
    document.getElementById('instructions-east').innerHTML = 'Thinking...';
    document.getElementById('instructions-south').innerHTML = 'Thinking...';
    this.switch_player_to_move();
    setTimeout(this.make_computer_move(), 50);
  }
  
  switch_player_to_move() {
    this.player_to_move = 1 - this.player_to_move;
    this.maybe_add_neutral_piece();
    this.check_for_game_over();
  }
  
  check_for_game_over() {
    var my_pieces, your_pieces;
    if (this.player_to_move === 0) {
      my_pieces = this.player1_pieces;
      your_pieces = this.player2_pieces;
    } else {
      my_pieces = this.player2_pieces;
      your_pieces = this.player1_pieces;
    }
    if (this.no_empty_neighbours(my_pieces)) {
      this.announce_game_over_due_to_constriction();
    } else if (your_pieces.length >= 48) {
      this.announce_game_over_due_to_numbers();
    }
  }
  
  no_empty_neighbours(pieces) {
    for (let piece of pieces) {
      if (!this.is_boxed_in(piece[0], piece[1])) {
        return false;
      }
    }
    return true;
  }
  
  is_boxed_in(x, y) {
    for (let square of this.neighbours(x, y)) {
      if (this.board[square[0]][square[1]] === this.EMPTY_SQUARE) {
        return false;
      }      
    }
    return true;
  }
  
  announce_game_over_due_to_constriction() {
    if (this.player_to_move === 0) {
      document.getElementById('instructions-east').innerHTML = 'Nowhere to move - you lost.';
      document.getElementById('instructions-south').innerHTML = 'Nowhere to move - you lost.';
      this.grey_out_player1_pieces();
    } else {
      document.getElementById('instructions-east').innerHTML = 'Nowhere to move - you won!!';
      document.getElementById('instructions-south').innerHTML = 'Nowhere to move - you won!!';
      this.grey_out_player2_pieces();
    }    
    this.game_over = true;
  }
  
  announce_game_over_due_to_numbers() {
    if (this.player_to_move === 0) {
      document.getElementById('instructions-east').innerHTML = 'Enemy gained 48 - you lost.';
      document.getElementById('instructions-south').innerHTML = 'Enemy gained 48 - you lost.';
      this.grey_out_player1_pieces();
    } else {
      document.getElementById('instructions-east').innerHTML = 'You gained 48 - you won!!';
      document.getElementById('instructions-south').innerHTML = 'You gained 48 - you won!!';
      this.grey_out_player2_pieces();
    }
    this.game_over = true;
  }
  
  grey_out_player1_pieces() {
    for (let piece of this.player1_pieces) {
      this.place_grey_player1_piece(piece[0], piece[1]);
    }
  }
  
  grey_out_player2_pieces() {
    for (let piece of this.player2_pieces) {
      this.place_grey_player2_piece(piece[0], piece[1]);
    }
  }
  
  maybe_add_neutral_piece() {
    if (this.isolated_squares.length > 0) {
      if (Math.floor(Math.random()*6) === 0) {
        var destination = this.isolated_squares[Math.floor(Math.random() * this.isolated_squares.length)];
        this.place_neutral_piece(destination[0], destination[1]);
      }
    }
  }
    
  make_computer_move() {
    console.log('make_computer_move()');
    if (this.game_over === false) {
      if (this.neutral_pieces.length === 0) {
        this.make_move_that_maximises_controlled_isolated_squares();
      } else {
        this.move_towards_most_contested_neutral_piece();
      }
      document.getElementById('instructions-east').innerHTML = 'Learn the rules by playing.';
      document.getElementById('instructions-south').innerHTML = 'Learn the rules by playing.';            
      this.switch_player_to_move();
    }
  }
  
  make_move_that_maximises_controlled_isolated_squares() {
    console.log('make_move_that_maximises_controlled_isolated_squares');
    var possible_moves = this.find_possible_moves();
    var current_stats = this.isolated_squares_stats(this.isolated_squares);
    var scores = [];    
    for (let move of possible_moves) {
      scores.push(this.score(current_stats, move));
    }      
    var best_score = Math.max.apply(null, scores);
    var best_moves = [];
    for (let i=0; i<possible_moves.length; i++) {
      if (scores[i] === best_score) {
        best_moves.push(possible_moves[i]);
      }
    }    
    var chosen_move = best_moves[Math.floor(Math.random() * best_moves.length)];
    this.selected_piece_x = chosen_move[0][0];
    this.selected_piece_y = chosen_move[0][1];
    var destination = chosen_move[1];
    this.move_player2_piece(destination[0], destination[1]);
  }
  
  find_possible_moves() {
    var possible_moves = [];
    for (let departure_piece of this.player2_pieces) {
      for (let destination_piece of this.player2_pieces) {
        if (!(destination_piece[0] === departure_piece[0] && destination_piece[1] === departure_piece[1])) {
          for (let destination_square of this.neighbours(destination_piece[0], destination_piece[1])) {
            if (this.board[destination_square[0]][destination_square[1]] === this.EMPTY_SQUARE) {
              possible_moves.push([departure_piece, destination_square]);
            }
          }
        }
      }
    }
    return possible_moves;
  }
    
  score(stats, move) {
    var departure_square = move[0];
    var destination_square = move[1];
    var relative_controlled_isolated_squares = 0;
    var destroyed_isolated_squares = [];
    
    for (let square of [destination_square].concat(this.neighbours(destination_square[0], destination_square[1]))) {
      if (this.is_isolated(square[0], square[1])) {
        destroyed_isolated_squares.push(square);
        if (this.is_controlled(stats, square)) {
          relative_controlled_isolated_squares -= 1;
        }
      }
    }
    
    var new_player2_distance;
    for (let i=0; i<this.isolated_squares.length; i++) {
      if (this.theIndexOf(destroyed_isolated_squares, this.isolated_squares[i]) === -1) {  // If not destroyed
        if (stats[2][i] === 1) {  // If player 1 was closest
          if (this.distance(destination_square, this.isolated_squares[i]) < stats[1][i]) {  // If new player 2 distance < current player 1 distance
            relative_controlled_isolated_squares += 1;
          }
        } else {  // If player 2 was closest
          if (this.distance(departure_square, this.isolated_squares[i]) === stats[0][i]) {  // If moved piece was one of the closest
            new_player2_distance = this.distances_to_nearest_piece([this.isolated_squares[i]], this.player2_pieces)[0]
            if (new_player2_distance >= stats[1][i]) {  // If player 2 distance has become further than player 1
              relative_controlled_isolated_squares -= 1;
            }
          }
        }
      }
    }
    
    for (let square of [departure_square].concat(this.neighbours(departure_square[0], departure_square[1]))) {
      if (this.is_isolated_hypothetically(square, departure_square, destination_square) &&
          this.is_controlled_hypothetically(stats, square, departure_square, destination_square)
         ) {
        relative_controlled_isolated_squares += 1;
      }
    }
    return relative_controlled_isolated_squares;
  }
  
  is_isolated_hypothetically(square_in_question, departure_square, destination_square) {
    // Custom check for whether square is isolated as cannot use existing functions for a move that is only hypothetical
    for (let square of [square_in_question].concat(this.neighbours(square_in_question[0], square_in_question[1]))) {
      if (square[0] === destination_square[0] && square[1] === destination_square[1]) {
        return false;
      } else if (!((square[0] === departure_square[0] && square[1] === departure_square[1]) ||
                   this.board[square[0]][square[1]] === this.EMPTY_SQUARE)
                ) {
        return false;
      }
    }
    return true;
  }
  
  is_controlled(stats, square) {
    for (let i=0; i<this.isolated_squares.length; i++) {
      if (this.isolated_squares[i][0] === square[0] && this.isolated_squares[i][1] === square[1]) {
        if (stats[2][i] === 2) {  // stats[2] is the array showing which player is closest for each isolated square
          return true;
        } else {
          return false;
        }
      }
    }
  }  
      
  is_controlled_hypothetically(square, departure_square, destination_square) {
    // Custom check for whether square is controlled as cannot use existing functions for a move that is only hypothetical
    
    var nearest_player1_distance = Math.min.apply(null, this.distances(square, this.player1_pieces));
    
    var hypothetical_player2_pieces = this.player2_pieces;
    var location = this.theIndexOf(hypothetical_player2_pieces, departure_square);
    hypothetical_player2_pieces.splice(location, 1);
    hypothetical_player2_pieces.push(destination_square);

    var nearest_player2_distance = Math.min.apply(null, this.distances(square, hypothetical_player2_pieces));
    
    if (nearest_player2_distance < nearest_player1_distance) {
      return true;
    } else {
      return false;
    }
  }
      
  isolated_squares_stats(array_of_isolated_squares) {
    var player2_distances = this.distances_to_nearest_piece(array_of_isolated_squares, this.player2_pieces);
    var player1_distances = this.distances_to_nearest_piece(array_of_isolated_squares, this.player1_pieces);
    var closest_player_list = [];
    for (let i=0; i<array_of_isolated_squares.length; i++) {
      if (player2_distances[i] < player1_distances[i]) {
        closest_player_list.push(2);
      } else {
        closest_player_list.push(1);
      }
    }
    return [player2_distances, player1_distances, closest_player_list];
  }
  
  distances_to_nearest_piece(array_of_squares, player_pieces) {
    var nearest_distances = [];
    for (let square of array_of_squares) {
      nearest_distances.push(Math.min.apply(null, this.distances(square, player_pieces)));
    }
    return nearest_distances;
  }

  make_random_move() {  // Used for initial easiest setting.
    console.log('make_random_move');
    while (true) {
      var piece = this.player2_pieces[Math.floor(Math.random() * this.player2_pieces.length)];
      this.selected_piece_x = piece[0];
      this.selected_piece_y = piece[1];
      this.select_player2_destination_squares(piece[0], piece[1]);
      if (this.highlighted_destination_squares.length > 0) {
        break;
      }
    }
    var destination = this.highlighted_destination_squares[Math.floor(Math.random() * this.highlighted_destination_squares.length)];
    this.move_player2_piece(destination[0], destination[1]);
  }
  
  move_towards_most_contested_neutral_piece() {
    var player1_closest_distance, player2_closest_distance, difference, differences = [], min_difference, candidates = [];
    for (let neutral_piece of this.neutral_pieces) {
      player1_closest_distance = Math.min.apply(null, this.distances(neutral_piece, this.player1_pieces));
      player2_closest_distance = Math.min.apply(null, this.distances(neutral_piece, this.player2_pieces));
      difference = player1_closest_distance - player2_closest_distance;
      if (difference < 0) {
        difference = 13;  // Larger than max possible distance of 12.
      }
      differences.push(difference);
    }
    min_difference = Math.min.apply(null, differences);
    if (min_difference === 13) {
      this.make_move_that_maximises_controlled_isolated_squares();
    } else {
      for (let i=0; i<differences.length; i++) {
        if (differences[i] === min_difference) {
          candidates.push(this.neutral_pieces[i]);
        }
      }
      this.move_towards(candidates[Math.floor(Math.random() * candidates.length)]);
    }
  }
  
  move_towards(target) {  
    console.log('move_towards(' + target + ')');
    var potential_destination_squares = [], candidates = [], piece_to_move;
    for (let piece of this.player2_pieces) {
      for (let square of this.neighbours(piece[0], piece[1])) {
        if (this.board[square[0]][square[1]] === this.EMPTY_SQUARE) {
          potential_destination_squares.push([square[0], square[1]]);
        }
      }
    }
    var destination_distances = this.distances(target, potential_destination_squares);
    var min_distance = Math.min.apply(null, destination_distances);
    for (let i=0; i<potential_destination_squares.length; i++) {
      if (destination_distances[i] === min_distance) {
        candidates.push(potential_destination_squares[i]);
      }
    }
    var destination = candidates[Math.floor(Math.random() * candidates.length)];
    var receiving_pieces = [];
    for (let square of this.neighbours(destination[0], destination[1])) {
      if (this.board[square[0]][square[1]] === this.PLAYER2_PIECE) {
        receiving_pieces.push(square);
      }      
    }
    if (receiving_pieces.length > 1) {
      piece_to_move = this.player2_pieces[Math.floor(Math.random() * this.player2_pieces.length)];
    } else {
      while (true) {
        piece_to_move = this.player2_pieces[Math.floor(Math.random() * this.player2_pieces.length)];
        if (!(piece_to_move[0] === receiving_pieces[0][0] && piece_to_move[1] === receiving_pieces[0][1])) {
          break;
        }
      }
    }
    this.selected_piece_x = piece_to_move[0];
    this.selected_piece_y = piece_to_move[1];
    this.move_player2_piece(destination[0], destination[1]);
  }
  
  distances(target, pieces) {
    var array_of_distances = [];
    for (let piece of pieces) {
      array_of_distances.push(this.distance(target, piece));
    }
    return array_of_distances;
  }
  
  distance(a, b) {
    var horizontal = Math.abs(a[0] - b[0]);
    var vertical = Math.abs(a[1] - b[1]);
    return Math.min(horizontal, 12 - horizontal) + Math.min(vertical, 12 - vertical);
  }
  
  select_player2_destination_squares(x, y) {
    this.highlighted_destination_squares = [];
    for (let piece of this.player2_pieces) {
      if (!(piece[0] === x && piece[1] === y)) {
        for (let square of this.neighbours(piece[0], piece[1])) {
          if (this.board[square[0]][square[1]] === this.EMPTY_SQUARE) {
            this.highlighted_destination_squares.push([square[0], square[1]]);
          }
        }
      }
    }
  }
        
  move_player2_piece(x, y) {
    console.log('move_player2_piece(' + x + ', ' + y + ')');
    this.make_square_empty(this.selected_piece_x, this.selected_piece_y);
    this.place_player2_piece(x, y);
    this.convert_neutral_pieces(x, y);
    var location = this.theIndexOf(this.player2_pieces, [this.selected_piece_x, this.selected_piece_y]);
    this.player2_pieces.splice(location, 1);
  }
  
  convert_neutral_pieces(x, y) {
    for (let square of this.neighbours(x, y)) {
      if (this.board[square[0]][square[1]] === this.NEUTRAL_PIECE) {
        if (this.player_to_move === 0) {
          this.place_player1_piece(square[0], square[1]);
        } else {
          this.place_player2_piece(square[0], square[1]);
        }
        var location = this.theIndexOf(this.neutral_pieces, [square[0], square[1]]);
        this.neutral_pieces.splice(location, 1);
      }
    }
  }
  
}

function prepare() {
  game = new Game();
  reorganise();
  document.onfullscreenchange = switch_buttons;
  document.onmozfullscreenchange = switch_buttons;
  document.onwebkitfullscreenchange = switch_buttons;
  document.onmsfullscreenchange = switch_buttons;
  window.onresize = reorganise;
}

window.onload = prepare;
