$(document).ready(function() {
  $('#full-page').fullpage({
    navigation:         true,
    navigationPosition: 'right',

    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      if ( index === 1 ) {
        $('header').addClass('simple');
      }
    },

    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      if ( index === 1 ) {
        $('header').removeClass('simple');
      }
    },
  });
});
