function inject() {
    function urlDomain(data) {
        var a = document.createElement('a');
        a.href = data;
        return a.hostname;
    }

    window.open = function (open) {
        return function (url, name, features) {
            if(urlDomain(url) === 'hltv.org' || urlDomain(url) === 'www.hltv.org') {
                return open.call(window, url, name, features);
            }
        };
    }(window.open);
}

var scriptTag = document.createElement("script");
scriptTag.textContent = inject.toString() + " inject()";
document.documentElement.appendChild(scriptTag);

var style =
    'html, body { background: white !important; }' +
    '#firstCollumn .boxNoDrag:first-child,' +
    '.topHolder a img,' +
    '#razer,' +
    'iframe[src*="wombo.gg"],' +
    'iframe[src*="gainskins.com"],' +
    'a[href*="skinsanity.gg"],' +
    'a[href*="egbaffiliates.com"],' +
    'a[href*="bitskins.com"] { display: none; }';

var styleTag = document.createElement("style");
styleTag.textContent = style;
document.documentElement.appendChild(styleTag);

$(document).ready(function() {
    $('.topHolder a').each(function(i, v) {
        if(v.hostname !== 'hltv.org' && v.hostname !== 'www.hltv.org') {
            $(v).remove();
        }
    });

    $('img[src*="txt_sponsors.gif"]').parents('li').hide();
    $('a[href*="alphadraft.go2cloud.org"], iframe[src*="wombo.gg"], iframe[src*="gainskins.com"]').remove();
});