/*
 * Demo of https://github.com/isuttell/sine-waves
 */

var waves = new SineWaves({
  el: document.getElementById('waves'),
  
  speed: 4,
  
  width: function() {
    return $(window).width();
  },
  
  height: function() {
	 var tmpH = $(window).height();
    return tmpH+tmpH/10*3;
  },
  
  ease: 'SineInOut',
  
  wavesWidth: '50%',
  
  waves: [
    {
      timeModifier: 4,
      lineWidth: 1,
      amplitude: -15,
      wavelength: 15
    },
    {
      timeModifier: 2,
      lineWidth: 2,
      amplitude: -30,
      wavelength: 30
    },
    {
      timeModifier: 1,
      lineWidth: 1,
      amplitude: -45,
      wavelength: 45
    },
    {
      timeModifier: 0.5,
      lineWidth: 1,
      amplitude: -70,
      wavelength: 70
    },
    {
      timeModifier: 0.25,
      lineWidth: 2,
      amplitude: -80,
      wavelength: 80
    }
  ],
 
  // Called on window resize
  resizeEvent: function() {
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(23, 210, 168, 0.2)");
    gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");
    gradient.addColorStop(1,"rgba(23, 210, 168, 0.2)");
    
    var index = -1;
    var length = this.waves.length;
	  while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
    
    // Clean Up
    index = void 0;
    length = void 0;
    gradient = void 0;
  }
});


