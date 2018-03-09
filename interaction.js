
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.canvas = canvas;
    this.interactor = interactor;
    this.Xstr = 0;
    this.Ystr = 0;
    this.Xend = 0;
    this.Yend = 0;
    this.pressed = false;
    // Developper les 3 fonctions gérant les événements
    this.mousedown = function(evt) {
        this.Xstr = getMousePosition(canvas, evt).x;
        this.Ystr  = getMousePosition(canvas, evt).y;
        console.log(evt);
    }.bind(this) ;

    this.mousemove = function(evt) {
        this.Xstr = getMousePosition(canvas, evt).x;
        this.Ystr  = getMousePosition(canvas, evt).y;
        console.log(evt);
    }.bind(this) ;

    this.mouseup = function(evt) {
        this.Xstr = getMousePosition(canvas, evt).x;
        this.Ystr  = getMousePosition(canvas, evt).y;
        console.log(evt);
    }.bind(this) ;

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown',this.mousedown)
    canvas.addEventListener('mousemove',this.mousemove)
    canvas.addEventListener('mouseup',this.mousemove)



};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



