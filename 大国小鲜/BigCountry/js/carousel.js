/**
 * Created by wanghan1 on 2016/4/14.
 */

jQuery("p.guestProfile:last").css('border',"none");
function DY_scroll(wraper,prev,next,img,speed,or)
{
    var wraper = jQuery(wraper);
    var prev = jQuery(prev);
    var next = jQuery(next);
    var img = jQuery(img).find('ul');
    var w = img.find('li').outerWidth(true);
    var s = speed;
    next.click(function()
    {
        img.animate({'margin-left':-w},function()
        {
            img.find('li').eq(0).appendTo(img);
            img.css({'margin-left':0});
        });
    });
    prev.click(function()
    {
        img.find('li:last').prependTo(img);
        img.css({'margin-left':-w});
        img.animate({'margin-left':0});
    });
    if (or == true)
    {
        ad = setInterval(function() { next.click();},s*1000);
        wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});

    }
}
DY_scroll('.img-scroll','.prev','.next','.img-list',3,false);
DY_scroll('.img-scroll-2','.prev-2','.next-2','.img-list-2',3,false);
