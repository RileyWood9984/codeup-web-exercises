"use strict";
$(function () {
    $('h1').click(
        function () {
            $(this).css('background-color', function () {
                let r = Math.floor(Math.random() * 255)
                let g = Math.floor(Math.random() * 255)
                let b = Math.floor(Math.random() * 255)
                let rgb = r.toString() + ', ' + g.toString() + ', ' + b.toString()
                return 'rgb(' + rgb + ')'
            })
        }
    )
    $('h1').hover(
        function () {
            $(this).html('Just keep clicking!')
        }, function () {
            $(this).html('I am the h1').css('background-color', 'white')
        }
    )
    $('p').dblclick(
        function (){
            $(this).css('font-size','18px')
        }
    )
    $('li').hover(
        function (){
            $(this).css('color','red')
        },function (){
            $(this).css('color','black')
        })
})