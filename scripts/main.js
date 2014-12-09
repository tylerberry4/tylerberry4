 $(function() {

     $('.hover').sliphover({
         fontColor: '#D1CA78'
     });
     $('.logo').addClass('animated fadeInDownBig');
     $('.socialLinks').addClass('animated fadeIn');
     
 })

//   (function($) {
//     var $window = $(window),
//         $html = $('html');

//     function resize() {
//         if ($window.width() < 980) {
//             return $html.addClass('hover');
//         }

//         $html.removeClass('hover');
//     }

//     $window
//         .resize(resize)
//         .trigger('resize');
// })(jQuery);