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
      var imageData = context.createImageData(canvasSize.w, canvasSize.h);

      // Takes data in the Canvas Pixel Array
      var CanvasPixelArray = imageData.data;

      // Calculate total no of pixels
      var total_pixel = imageData.width*imageData.height;

      // Random RGBa values for each pixel
      for (var i = 0; i < total_pixel; i++) {
        CanvasPixelArray[i*4] = Math.floor(Math.random()*255);
        CanvasPixelArray[i*4+1] = Math.floor(Math.random()*255);
        CanvasPixelArray[i*4+2] = Math.floor(Math.random()*255);
        CanvasPixelArray[i*4+3] = 255;
      };

      // Display the Image
       context.putImageData(imageData, 0, 0);

      return;
    }
  }
});