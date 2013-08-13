 Banner = function () {
    var Up = function () {
        jQuery("#banner").slideUp(1500);
        jQuery("#close").css("background", "url(http://img.muyingzhijia.com/images/close-open.png) no-repeat");
    };
    //setTimeout(Up, 5000);
    jQuery("#close").click(function () {
        jQuery("#banner").slideToggle(600, function () {
            if (jQuery("#banner").css("display") == "none") {
                jQuery("#close").css("background", "url(http://img.muyingzhijia.com/images/close-open.png) no-repeat");
            }
            else {
                jQuery("#close").css("background", "none");
            }
        });
    });
};
//顶部伸展广告
var BannerTwo = function () {
    if (jQuery("#js_ads_banner_top_slide").length) {
        var jQueryslidebannertop = jQuery("#js_ads_banner_top_slide"), jQuerybannertop = jQuery("#js_ads_banner_top");
        setTimeout(function () {
            jQuerybannertop.slideUp(1000);
            jQueryslidebannertop.slideDown(1000);

        }, 2500);
        setTimeout(function () {
            jQueryslidebannertop.slideUp(1000, function () {
                jQuerybannertop.slideDown(1000);
            });
        }, 6000);
    }
};
var subItem_hover = function () {
    $(".item").hover(function () {
        $(this).children(".subitem").show();
        $(this).addClass("curr");
    }, function () {
        $(this).children(".subitem").hide();
        $(this).removeClass("curr");
    });
    $('#brand-list').bxCarousel({
        display_num: 1,
        move: 1,
        auto: true,
        controls: false,
        margin: 0,
        auto_hover: true
    });
};

var hover_ShopCart = function () {
    var handle = null;
    jQuery("#cartList").mouseover(function () {
        clearTimeout(handle);
        if (jQuery("#cartList").is(":hidden")) {
            jQuery("#cartList").show("");
        }
    }).mouseout(function () {
            jQuery("#cartList").hide("");
        });
    jQuery("#cartInfo").mouseover(function () {
        jQuery("#cartList").show("");
    }).mouseout(function () { handle = setTimeout(function () { jQuery("#cartList").hide(""); }, 2000); });
};

var hover_myContent = function () {
    var handle = null;
    jQuery("#myContent").mouseover(function () {
        clearTimeout(handle);
        if (jQuery("#myContent").is(":hidden")) {
            jQuery("#myContent").show("");
        }
    }).mouseout(function () {
            jQuery("#myContent").hide("");
        });
    jQuery("#myTitle").mouseover(function () {
        jQuery("#myContent").show("");
    }).mouseout(function () { handle = setTimeout(function () { jQuery("#myContent").hide(""); }, 2000); });
};

var hover_search_quick_item_Fun = function () {
    $("#searchTitle").hover(function () {
        $("#searchArea").show();
        $("#searchArea").hover(function () { $(this).show(); }, function () { $(this).hide(); });
    }, function () {
        $("#searchArea").hide();
    });
};

//#region 时间段事件
var time_priod_a_Hover = function () {
    var loadingFix_success = function () {
        $(".Loading").show();
    };
    var loadingFix_Fail = function () {
        $(".Loading").hide();
    };
    $("#time_guide a").hover(function () {
        $("#time_guide a").removeClass("hover");
        $(this).addClass("hover");
        loadingFix_success();
    }, function () {
        $(".Loading").hide();
    });
};
//#endregion

//#region 新闻滚动
var News_scroll = function () {
    var box = document.getElementById("notice"), can = true;
    box.innerHTML += box.innerHTML;
    box.onmouseover = function () { can = false };
    box.onmouseout = function () { can = true };
    new function () {
        var stop = box.scrollTop % 18 == 0 && !can;
        if (!stop) box.scrollTop == parseInt(box.scrollHeight / 2) ? box.scrollTop = 0 : box.scrollTop++;
        setTimeout(arguments.callee, box.scrollTop % 18 ? 10 : 1500);
    };
};
//#endregion

//#region 天天特价时间
var Every_Day_Timer = function () {
    //var SysSecond1 = parseInt(jQuery("#esTimes1").val());
    var SysSecond1 = parseInt(32229);
    var InterValObj1 = window.setInterval(SetRemainTime1, 1000);
    function SetRemainTime1() {
        if (SysSecond1 > 0) {
            SysSecond1 = SysSecond1 - 1;
            var hour1 = Math.floor(SysSecond1 / (60 * 60));
            var minite1 = Math.floor(SysSecond1 / 60) - (hour1 * 60);
            var second1 = Math.floor(SysSecond1) - (hour1 * 60 * 60) - (minite1 * 60);
            jQuery("#TimesHour1").text(hour1 < 10 ? "0" + hour1 : hour1);
            jQuery("#TimesMinte1").text(minite1 < 10 ? "0" + minite1 : minite1);
            jQuery("#TimesSecond1").text(second1 < 10 ? "0" + second1 : second1);
        } else {
            window.clearInterval(InterValObj1);
        }
    }
};
//#endregion

 //png透明插件,支持png背景和png文件
 (function($){
     $.fn.pngfix = function(options) {
         var defualts = {scale:"scale"/*scale拉伸；nocrop不拉伸*/,tranceImg:"images/trance.gif",ie6:($.browser.msie&&($.browser.version=="6.0")&&!$.support.style)},opts = $.extend({}, defualts, options);
         if(!opts.ie6){return}
         $.each($(this),function(){
             var oo = $(this),ow=oo.width(),oh=oo.height(),png=(oo[0].nodeName==="IMG")?oo.attr("src"):oo.css("background-image").split('("')[1].split('")')[0];
             if(oo[0].nodeName==="IMG"){oo.attr("src",opts.tranceImg).width(ow).height(oh).css({background:'none',filter:'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+png+'",sizingMethod="'+opts.scale+'")'});}
             else{oo.css({background:'none',position:'relative',cursor:function(){return (oo[0].nodeName==="A")?'pointer':'default'}});
                 var odiv = $("<span></span>").prependTo(oo).css({background:'none',filter:'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+png+'",sizingMethod="'+opts.scale+'")',width:ow,height:oh,position:'absolute',left:0,top:0})
             }
         })
     }
 })(jQuery);

 //dialog
 function dialog(){
     var dialog = $(".dialog");
     dialog.each(function(){
         var $this = $(this);
         var showclose = $this.attr("showclose");
         var content = $this.find(".content");
         var topcon = $('<div class="top-wrap"><div class="pngfix ctl"></div><div class="pngfix fixwidth ctm"></div><div class="pngfix ctr"></div><div class="close"><a href="#" class="pngfix">关闭</a></div></div>');
         var btncon = $('<div class="btm-wrap"><div class="pngfix cbl"></div><div class="pngfix fixwidth cbm"></div><div class="pngfix cbr"></div></div>');
         content.wrap('div.con-wrap').before(topcon).after(btncon);
         content.before('<div class="pngfix fixheight cml"></div>').after('<div class="pngfix fixheight cmr"></div>');
         if(!showclose){
             $this.find(".close").hide()
         }
         var cw = content.width(),
             ch = content.height(),
             clw = $this.find('.ctl').width(),
             crw = $this.find('.ctr').width(),
             dw = $this.width(clw+cw+crw),
             dh = $this.height();
         $this.find(".fixwidth").width(cw);
         $this.find(".fixheight").height(ch-8);
         $this.find(".pngfix").pngfix();
         $this.css({
             "margin-left":-dw.width()/2
         }).animate({top:0},25,function(){$this.animate({top:($(window).height()-dh)/2-50},600)});
         $this.find(".close").click(function(){
             $this.hide();
             return false
         });
         $("#btn-save").click(function(){
             $this.animate({top:0},250,function(){$this.hide()});
         });

     });

     $("#baby-birthday").datepicker({
         inline: true,
         changeMonth:true,
         changeYear:true,
         dateFormat:"yy-mm-dd",
         yearRange:"c-5:c+2",
         showMonthAfterYear:true
     });

     $("input:radio['name=radval']").change(function(){
         if($(this).val()==0){
             $("#day-type").text("您的宝宝生日是：");
         }
         if($(this).val()==1){
             $("#day-type").text("您的预产期是：");
         }
     })

 }

$(document).ready(function (e) {
    Banner();
    BannerTwo();
    subItem_hover();
    hover_ShopCart();
    hover_myContent();
    hover_search_quick_item_Fun();
    time_priod_a_Hover();
    News_scroll();
    Every_Day_Timer();
    dialog()
});

