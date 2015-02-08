Class('App').inherits(Widget)({

  HTML : '<div>\
              <canvas class="body"></canvas>\
          </div>',

  ELEMENT_CLASS : 'app',

  prototype : {

    canvas: null,
    ctx : null,

    setup : function setup(config){

      var canvasSize = {
        w : this.element.width(),
        h : this.element.height()
      };

      this.canvas = this.element.find('canvas');
      this.canvas.attr('width', canvasSize.w);
      this.canvas.attr('height', canvasSize.h);

      this.canvas = this.canvas[0];
      this.ctx = this.canvas.getContext('2d');

      var canvas = this.canvas;
      var context = this.ctx;

      // Creates an Image Object of size 500*200
      this.imageData = context.createImageData(canvasSize.w, canvasSize.h);

      // Takes data in the Canvas Pixel Array
      this.CanvasPixelArray = this.imageData.data;

      // Calculate total no of pixels
      this.total_pixel = this.imageData.width*this.imageData.height;

      window.requestAnimationFrame(this.update.bind(this));

      return;
    },

    update : function update(){
      // Random RGBa values for each pixel
      for (var i = 0; i < this.total_pixel; i++) {
        this.CanvasPixelArray[i*4] = Math.floor(Math.random()*255);
        this.CanvasPixelArray[i*4+1] = Math.floor(Math.random()*255);
        this.CanvasPixelArray[i*4+2] = Math.floor(Math.random()*255);
        this.CanvasPixelArray[i*4+3] = 255;
      };

      // Display the Image
       this.ctx.putImageData(this.imageData, 0, 0);
       window.requestAnimationFrame(this.update.bind(this));
    }
  }
});