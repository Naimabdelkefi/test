jQuery(document).ready(function ($) {
    $('.wp-full-overlay-sidebar-content .customize-info').prepend('<div style="border-bottom: 1px solid #ddd;"><div class="lite-box" style="text-align:center"><a style="margin: 20px 10px 0px;"href="' + ink_advert.support_url + '" class="button" target="_blank">' + ink_advert.support_text + '</a><a style="margin: 20px 10px 0px;"href="' + ink_advert.documentation_url + '" class="button" target="_blank">' + ink_advert.documentation_text + '</a></div><a class="button-primary" style="display: table;margin: 20px auto;"href="' + ink_advert.pro_url + '" class="button" target="_blank">' + ink_advert.pro_text + '</a></div>');
});