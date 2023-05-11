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

  // Tradingview copyright hidden 
  $('.tradingview-widget-copyright').remove();

  // To Group
  $("a.scrollLink").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 70
      }, 500);
  });
});