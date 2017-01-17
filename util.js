function bindClass(){
$('.projectObj').bind('click', function (e) {
	
    e.preventDefault();

    var me = this;
    var width = $(me).width() / 1.5;
    $(me).find('.wrap').width($(me).find('.wrap').width());

    $(me).animate({
        opacity: 0,
        marginLeft: -width
    }, 1000);

    var delayN = 150;
    var delayP = 150;

    var nextEl = $(me).nextAll('.projectObj');
    var prevEl = $(me).prevAll('.projectObj');

    nextEl.each(function (index, elem) {
        setTimeout(function () {
            
            $(elem).find('.wrap').width($(elem).find('.wrap').width());

            $(elem).animate({
                opacity: 0,
                marginLeft: -width
              }, 500, function () {
            });
        }, delayN);
        delayN += 100;
    });

    prevEl.each(function (index, elem) {
        setTimeout(function () {
            $(elem).find('.wrap').width($(elem).find('.wrap').width());

            $(elem).animate({
                opacity: 0,
                marginLeft: -width
              }, 500, function () {
            });
        }, delayP);
        delayP += 100;
    });

    setTimeout(function () {
        document.location = $(me).attr('href');
    },1000)

    return false;
});
}
