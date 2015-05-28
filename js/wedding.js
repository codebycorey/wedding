$(document).ready(function()
{

  /**
   * Positions the tabs
   */

  function positionTabs()
  {
    var tabs = $('#tab-wrapper');

    if(tabs.length)
    {
      var nav = $('#nav');

      var search = $('#search');

      var content = $('#content');

      var offsetTop = window.pageYOffset || document.documentElement.scrollTop;

      if(offsetTop > (nav.height() + (search.is(':visible') ? search.height() : 0)) && window.innerWidth > 600)
      {
        tabs.addClass('fixed');

        content.css({'padding-top': (tabs.height() + parseInt(tabs.css('margin-bottom'))) + 'px'});
      }
      else
      {
        tabs.removeClass('fixed');

        content.css({'padding-top': 0});
      }
    }
  }

  /**
   * Parallax effetc
   */

   function parallax()
   {
    var slow = $('.slow');

    slow.removeClass('bounceInDown');

    slow.css
    ({
      'padding-top': 100 + ($(window).scrollTop() / 1.888) + "px",
      'opacity': 1 - ($(window).scrollTop() / 350)
    });
   }

  /**
   * Adjust content height
   */

  function adjustContentHeight()
  {
    var leftMenu = $('.left-menu');

    if(leftMenu.length)
    {
      if(leftMenu.is(":visible"))
      {
        $('.page-content').css({'min-height': leftMenu.height() + 'px'});
      }
      else
      {
        $('.page-content').css({'min-height': 0 + 'px'});
      }
    }
  }

  adjustContentHeight();

  // Scroll events

  $(window).scroll(function(e)
  {
    positionTabs();

    parallax();
  });
});
