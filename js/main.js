"use strict";$(document).ready(function(){function i(t,e){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),l.any()?setTimeout(function(){$("body").addClass("lock")},300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+t),""!=e&&null!=e&&$(".popup-"+t+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+e+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+t).fadeIn(300).delay(300).addClass("active"),0<$(".popup-"+t).find(".slick-slider").length&&$(".popup-"+t).find(".slick-slider").slick("setPosition")}function a(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(l.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout(function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})},200),setTimeout(function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))},200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}function r(t){if(t.addClass("err"),t.parent().addClass("err"),t.parent().find(".form__error").remove(),t.hasClass("email")){var e="";null!=(e=(""==t.val()||(t.val(),t.attr("data-value")),t.data("error")))&&t.parent().append('<div class="form__error">'+e+"</div>")}else null!=t.data("error")&&0==t.parent().find(".form__error").length&&t.parent().append('<div class="form__error">'+t.data("error")+"</div>");0<t.parents(".select-block").length&&(t.parents(".select-block").parent().addClass("err"),t.parents(".select-block").find(".select").addClass("err"))}function o(t){t.removeClass("err"),t.parent().removeClass("err"),t.parent().find(".form__error").remove(),0<t.parents(".select-block").length&&(t.parents(".select-block").parent().removeClass("err"),t.parents(".select-block").find(".select").removeClass("err").removeClass("active"))}function s(t){""==t.val()&&(t.inputmask("remove"),t.val(t.attr("data-value")),t.removeClass("focus"),t.parent().removeClass("focus"))}$(window).outerWidth(),$(window).outerHeight();var t,e,n=window.navigator.userAgent,l=(n.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return l.Android()||l.BlackBerry()||l.iOS()||l.Opera()||l.Windows()}});(-1<(n=navigator.userAgent).indexOf("MSIE ")||-1<n.indexOf("Trident/"))&&$("body").addClass("ie"),l.any()&&$("body").addClass("touch"),$(".pl").click(function(t){return i($(this).attr("href").replace("#",""),$(this).data("vid")),!1}),$(".popup-close,.popup__close").click(function(t){return a(),!1}),$(".popup").click(function(t){if(!$(t.target).is(".popup>.popup-table>.cell *")||$(t.target).is(".popup-close")||$(t.target).is(".popup__close"))return a(),!1}),$(document).on("keydown",function(t){27==t.which&&a()}),$("input,textarea").focus(function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),o($(this))}),$("input[data-value], textarea[data-value]").each(function(){""!=this.value&&this.value!=$(this).attr("data-value")||(this.value=$(this).attr("data-value"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click(function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")}),$(this).blur(function(){""==this.value&&(this.value=$(this).attr("data-value"),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text"))})}),$(".form-input__viewpass").click(function(t){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")}),$.each($("input.phone"),function(t,e){$(this).attr("type","tel"),$(this).focus(function(){$(this).inputmask("+38(999) 999 9999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){s($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")})}),$("input.phone").focusout(function(t){s($(this))}),$.each($("input.num"),function(t,e){$(this).focus(function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){s($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")})}),$("input.num").focusout(function(t){s($(this))}),$(".form-addfile__input").change(function(a){if(""!=$(this).val()){var s=$(this);s.parents(".form-addfile").find("ul.form-addfile-list").html(""),$.each(a.target.files,function(t,e){0==s.parents(".form-addfile").find('ul.form-addfile-list>li:contains("'+a.target.files[t].name+'")').length&&s.parents(".form-addfile").find("ul.form-addfile-list").append("<li>"+a.target.files[t].name+"</li>")})}}),$("form button[type=submit]").click(function(){var t,a=0,e=$(this).parents("form"),s=e.data("ms");return $.each(e.find(".req"),function(t,e){a+=function(t){var e=0,a=t.parents("form");if("email"==t.attr("name")||t.hasClass("email")){if(t.val()!=t.attr("data-value")){var s=t.val().replace(" ","");t.val(s)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(t.val())&&t.val()!=t.attr("data-value")?o(t):(e++,r(t))}else""==t.val()||t.val()==t.attr("data-value")?(e++,r(t)):o(t);return"checkbox"==t.attr("type")&&(1==t.prop("checked")?t.removeClass("err").parent().removeClass("err"):(e++,t.addClass("err").parent().addClass("err"))),t.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(t.val())||(e++,r(t))),t.hasClass("pass-2")&&(a.find(".pass-1").val()!=a.find(".pass-2").val()?r(t):o(t)),e}($(this))}),0==a&&(e.find(".form__generalerror").hide().html(""),null!=s&&""!=s?(t=s,$(".popup").hide(),i("message."+t,""),!1):void 0)}),$(window).scroll(function(t){$(this).scrollTop();$(window).outerWidth(),$(window).outerHeight()}),$(window).scroll(function(){$(window).width();50<$(window).scrollTop()?$("#up").fadeIn(300):$("#up").fadeOut(300)}),$("#up").click(function(t){$("body,html").animate({scrollTop:0},300)}),t=function(t){1==t?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")},(e=new Image).onload=e.onerror=function(){t(2==e.height)},e.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";var d=window.matchMedia("(orientation: portrait)");d.matches?document.querySelector("body").classList.remove("horizon"):document.querySelector("body").classList.add("horizon"),d.addListener(function(t){t.matches?document.querySelector("body").classList.remove("horizon"):document.querySelector("body").classList.add("horizon")}),$(".teacher-play-btn").click(function(){var t=$(this).closest(".teacher__body").find(".video").attr("data-video");$(this).closest(".teacher__body").find(".close-video").css("opacity","1"),$(this).fadeOut(),$(this).parent().parent().find(".teacher__video-overlay").fadeOut(),$(this).closest(".teacher__body").find(".video").html('<iframe src="https://www.youtube.com/embed/'+t+'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')}),$(".close-video").click(function(){$(this).closest(".teacher__body").find(".video").html(""),$(this).parent().parent().find(".teacher__video-overlay, .teacher-play-btn").fadeIn(),$(this).css("opacity","0")}),$("form").submit(function(t){t.preventDefault();var e=$(this);$.ajax({type:"POST",url:"mail.php",data:e.serialize(),success:function(t){"Cообщение Передано!"==t&&(e.trigger("reset"),window.location.href="http://thanks.html",a())}})}),$(".slider-reviews").slick({slidesToShow:3,slidesToScroll:1,arrows:!0,variableWidth:!0,nextArrow:".reviews__slider-btn-next",prevArrow:".reviews__slider-btn-prev",responsive:[{breakpoint:1700,settings:{slidesToShow:3,variableWidth:!0}},{breakpoint:986,settings:{slidesToShow:3,variableWidth:!1}},{breakpoint:600,settings:{slidesToShow:2,variableWidth:!1}},{breakpoint:480,settings:{slidesToShow:1,variableWidth:!1}}]})});