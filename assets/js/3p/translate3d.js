/*
   Original source: http://cameronspear.com/blog/animating-translate3d-with-jquery/
 */
;(function($) {
    var delay = 0;
    $.fn.translate3d = function(translations, speed, easing, complete) {
        var opt = $.speed(speed, easing, complete);
        opt.easing = opt.easing || 'ease';
        translations = $.extend({x: 0, y: 0, z: 0, xRotate: 0, yRotate: 0, zRotate : 0}, translations);

        return this.each(function() {
            var $this = $(this);
            var transform = 'translate3d(' + translations.x + 'px, ' + translations.y + 'px, ' + translations.z + 'px) ' +
                            'rotateX(' + translations.xRotate + 'deg) rotateY(' + translations.yRotate + 'deg) rotateZ(' +
                            translations.zRotate + 'deg)';

            $this.css({ 
                transitionDuration: opt.duration + 'ms',
                transitionTimingFunction: opt.easing,
                transform: transform
            });

            setTimeout(function() { 
                $this.css({ 
                    transitionDuration: '0s', 
                    transitionTimingFunction: 'ease'
                });

                opt.complete();
            }, opt.duration + (delay || 0));
        });
    };
})(jQuery);
