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

function addScript(template) {
    var s = document.createElement("script");
    if (template.src) {
        s.src = template.src;
    }
    if (template.textContent) {
        s.textContent = template.textContent;
    }
    document.documentElement.appendChild(s);
}

    addScript({
        textContent: inject.toString() + " inject()"
    });

$(document).ready(function() {
    $('body, html').attr('style', 'background-image: none;');

    $('.topHolder a').each(function(i, v) {
        if(v.hostname !== 'hltv.org' && v.hostname !== 'www.hltv.org') {
            $(v).remove();
        }
    });

    $('#firstCollumn').find('.boxNoDrag:eq(0)').remove();
    $('a[href*="alphadraft.go2cloud.org"]').remove();
});