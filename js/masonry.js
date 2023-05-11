$(document).ready(function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 12,
    horizontalOrder: true,
    percentPosition: true
  });

  // set the clickable button of shortname
  function widgetButtonResize(){
    $('.widget_sized_btn').each(function(){
      $(this).height($(this).siblings('.sn_info').outerHeight() + $(this).siblings('.sn_dom').outerHeight())
    })
  }
  widgetButtonResize();

  $( window ).on( "resize", function() {
    widgetButtonResize();
  });

  // tradingview 
  $('.tradingview-widget-copyright').remove();
});