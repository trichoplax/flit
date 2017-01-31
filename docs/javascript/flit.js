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
  
  document.getElementById('board-canvas').style.width = w.toString().concat('px');
  document.getElementById('board-canvas').style.height = w.toString().concat('px'); 
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
  
  document.getElementById('board-canvas').style.width = w.toString().concat('px');
  document.getElementById('board-canvas').style.height = w.toString().concat('px');
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
  
  document.getElementById('board-canvas').style.width = (w*6/7).toString().concat('px');
  document.getElementById('board-canvas').style.height = (w*6/7).toString().concat('px');
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
  
  document.getElementById('board-canvas').style.width = (w*6/7).toString().concat('px');
  document.getElementById('board-canvas').style.height = (w*6/7).toString().concat('px');
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
  document.getElementById('div-info-east').style.height = h.toString().concat('px');
  
  document.getElementById('board-canvas').style.width = (h*6/7).toString().concat('px');
  document.getElementById('board-canvas').style.height = (h*6/7).toString().concat('px');
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
  document.getElementById('div-info-east').style.height = h.toString().concat('px');
  
  document.getElementById('board-canvas').style.width = (h*6/7).toString().concat('px');
  document.getElementById('board-canvas').style.height = (h*6/7).toString().concat('px');
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
  
  document.getElementById('board-canvas').style.width = h.toString().concat('px');
  document.getElementById('board-canvas').style.height = h.toString().concat('px');
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
  
  document.getElementById('board-canvas').style.width = h.toString().concat('px');
  document.getElementById('board-canvas').style.height = h.toString().concat('px');
}

window.onresize = reorganise;
window.onload = reorganise;
