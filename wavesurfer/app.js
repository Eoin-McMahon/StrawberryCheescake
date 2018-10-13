'use strict';

// Create an instance
var wavesurfer;

// Init & load
document.addEventListener('DOMContentLoaded', function() {
  var playButton = document.querySelector('#playButton');

  // Init wavesurfer
  wavesurfer = WaveSurfer.create(
  {
    container: '#waveform',
    waveColor: '#9cb7d8',
		progressColor: '#4f4f4f',
		barHeight: 5,
    interact: false,
    cursorWidth: 0,
    plugins: [WaveSurfer.microphone.create()]
  }
  );

  wavesurfer.microphone.on('deviceReady', function() {
    console.info('Device ready!');
  });
  wavesurfer.microphone.on('deviceError', function(code) {
    console.warn('Device error: ' + code);
    });

    // start/stop mic on button click
    playButton.onclick = function() {
      if (wavesurfer.microphone.active) {
        wavesurfer.microphone.stop();
      } else {
        wavesurfer.microphone.start();
      }
    };
});

$(document).ready(function () {
 $('#playButton').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') }
);
});
