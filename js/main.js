(function ($, root, undefined) {
    
    $(function () {
        
        'use strict';
  

    function resizeelements(){
      //calculate the largest label in the page (example 'place of birth')  
      var maxWidth = Math.max.apply( null, $( '.wrap-label' ).map( function () {
          return $( this ).outerWidth( true );
      }).get() );
      //get width of info-line 
      var infow = $('.info-line').width();

      //assign to all labels the largest width so they can align properly
      $('.wrap-label').css('width',maxWidth);
      //asign the rest of the width to the text value of the label
      $('.text-value').css('width',infow - maxWidth);
    }
    //call resizeelements function
    resizeelements();
     

$( window ).resize(function() {
  //call here the function so eveyrhing recalculates when the window is resized
  resizeelements();
});




 
		 });

    
})(jQuery);