const menuBtn = document.getElementById('menuBtn');
const links = document.getElementsByClassName('links');
let toggle = 0;

menuBtn.addEventListener('click',()=>{
  if(toggle === 0){
    Array.from(links).forEach((elem)=>{
      elem.style.display = "block";
      toggle = 1;
  })
  }
  else{
    Array.from(links).forEach((elem)=>{
      elem.style.display = "none";
      toggle = 0;
  })
  }
})


Shery.imageEffect("#back", {
    style: 5, //Select Style
    // debug: true,
    gooey: true, // Debug Panel
    config: {
      a: {value: 1.49, range: [0,30]},
      b: {value: -0.98, range: [-1, 1]},
      aspect: {value:1.88229432231},
      gooey:{value:true},
      infiniteGooey:{value:true},
      durationOut:{value:1,range:[0.1,5]},
      durationIn: {value:1, range: [0.1, 5]},
      displaceAmount: {value: 0.5},
      masker: {value: true},
      maskVal: {value:1.33, range:[1,5]},
      scrollType: {value: 0},
      geoVertex: {range: [1, 64], value: 1},
      noEffectGooey: {value: false},
      onMouse: {value: 1},
      noise_speed: {value: 1.59, range: [0, 10]},
      metaball: {value: 0.21, range: [0,2]},
      discard_threshold: {value: 0.5, range: [0,1]},
      antialias_threshold: {value:0, range: [0, 0.1]},
      noise_height: {value: 0.47, range: [0,2]},
      noise_scale: {value:12.15, range: [0, 100]},
    }
    
  });