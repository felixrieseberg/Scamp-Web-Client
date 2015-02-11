import Ember from 'ember';

export default Ember.View.extend({

    sugarChart: function () {
        var $ = Ember.$,
            $chart = $('.ct-chart');

        var $toolTip = $chart
            .append('<div class="tooltip top"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>')
            .find('.tooltip')
            .hide();

        $chart.on('mouseenter', '.ct-point', function () {
            let $point = $(this),
                value = $point.attr('ct:value'),
                seriesName = $point.parent().attr('ct:series-name');

            $toolTip.find('.tooltip-inner').html(`${seriesName}: ${value}%`);
            $toolTip.show().css('opacity', 100);
        });

        $chart.on('mouseleave', '.ct-point', function () {
            $toolTip.hide();
        });

        $chart.on('mousemove', function (event) {
            $toolTip.css({
                left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2,
                top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 20
            });
        });

    }.on('didInsertElement')

});