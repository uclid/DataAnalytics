/**
 * Created by user on 3/15/2015.
 */
$(function () {


    $('.subnavbar').find ('li').each (function (i) {

        var mod = i % 3;

        if (mod === 2) {
            $(this).addClass ('subnavbar-open-right');
        }

    });



});
