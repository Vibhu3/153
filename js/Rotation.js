//Terrain Rotation
AFRAME.registerComponent("reef-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 1;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 1;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  //Plane Rotation
  AFRAME.registerComponent("scubaman-rotation-reader",{
    schema : {
      speedOfRotation : {type : "number" , default : 0},
      speedOfAscent : {type : "number" , default : 0}
      
    },
    init : function (){
      window.addEventListener("keydown",(key)=>{
        this.data.speedOfRotation = this.el.getAttribute("rotation");
        this.data.speedOfAscent = this.el.getAttribute("ascent");
        var plane_rotation = this.data.speedOfRotation ; 
        var plane_ascent = this.data.speedOfAscent ; 
        if(key.key === "ArrowDown"){
          if(plane_rotation.x < 10){
            plane_rotation.x += 1;
            this.el.setAttribute("rotation",plane_rotation) ; 
          }
        }
        if(key.key === "ArrowUp"){
          if(plane_rotation.x > -10){
            plane_rotation.x -= 1;
            this.el.setAttribute("rotation",plane_rotation) ; 
          }
        }  
        if(key.key === "ArrowLeft"){
          if(plane_rotation.z < 20){
            plane_rotation.z += 0.5;
            this.el.setAttribute("rotation",plane_rotation) ; 
          }
          if(plane_ascent < 2){
            plane_ascent.y += 0.1;
            this.el.setAttribute("ascent",plane_ascent)
          }
        }    
        if(key.key === "ArrowRight"){
          if(plane_rotation.z > -10){
            plane_rotation.z -= 0.5;
            this.el.setAttribute("rotation",plane_rotation) ; 
          }
          if(plane_ascent > -2){
            plane_ascent.y -= 0.1;
            this.el.setAttribute("ascent",plane_ascent)
          }
        }        
      })
    }
  
  
  
  })
  