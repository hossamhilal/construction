$(window).on('load', function () {
    $('.loader').fadeOut(500, function () {
        $(this).remove();
    });      
});

/*global $ */
$(document).ready(function ($) {
    'use strict';
    
    new WOW().init();

    $('.select-box').niceSelect();

    $('.chat-box .insider').niceScroll();

    if ($(window).width() > 768) {
        $('body').niceScroll({
            cursorcolor: "#96c93c",
            cursorwidth: "5",
            cursorminheight:'40',
            background: "transparent",
            cursorborder: "1px solid #96c93c",
            cursorborderradius: 5
        });
    }
    
    $('.header .toggle-btn').on('click', function () {
        $('.nav-menue').addClass('show-sidenav');
        $('.header .over-lay').show();
    });

    $('.header .over-lay').on('click', function () {
        $('.nav-menue').removeClass('show-sidenav');
        $('.header .over-lay').hide();
    });

    $('.header .nav-item').click(function(){
        $('.header .nav-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.adress-box').click(function() {
        $( "#map" ).slideToggle( "slow");
    });

    $(window).resize(function() {
        if ($(window).width() < 768) {
            $(".collapse-content" ).slideUp("slow");
        }
    });

    

    if ($(window).width() < 992) {
        $('.footer .box').click('.collapse-btn',function() {
            $('.collapse-btn i').removeClass('icofont-minus');
            $('.collapse-btn i').addClass('icofont-plus');
            $(this).find('i').toggleClass('icofont-plus icofont-minus');
            $(this).find('.collapse-content').slideToggle();
        });
    }
    
    $('.login-form .btn-collapse').click(function(){
        $(this).toggleClass('rottate');
    });

    $('.input-collpse-box .btn').click(function(e){
        e.preventDefault();
        $(this).parent('.input-collpse-box').find('.collapse-box').toggle();
    });

    $('.search-btn , .search-btn-box i').click( function(){
        $('body').addClass('search-active');
        $('.search-box').focus();
    });
      
    $('.icon-close').click( function(){
        $('body').removeClass('search-active');
    });

    $('.grid').click(function(){
        $('.list').removeClass('active');
        $(this).addClass('active');
        $('.works-content .col-12').addClass('col-sm-6 col-md-6 col-lg-4');
        $('.works-content .work-box').addClass('grid-box');
    });

    $('.list').click(function(){
        $('.grid').removeClass('active');
        $(this).addClass('active');
        $('.works-content .col-12').removeClass('col-sm-6 col-md-6 col-lg-4');
        $('.works-content .work-box').removeClass('grid-box');
    });

    $(".profile-input-file").change(function () {
        var input = (this);
        var image = $(this).siblings('.profile-input-image');
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                image.attr('src', e.target.result);
                console.log(this);
            }
            reader.readAsDataURL(input.files[0]);
        }
    });

    $('.profile-field .btn').click(function()
    {
        $(this).parent('.profile-field').find('input').removeAttr("readonly");  
    });

    $(document).click(function(e){
        $('.more-popup').hide();
    });

    $('.send-box .more-btn').click(function(e){
        e.stopPropagation();
        $('.more-popup').toggle();
    });

    $(document).click(function(e){
        $('.input-collpse-box .collapse-box').hide();
    });

    $('.input-collpse-box .btn , .input-collpse-box .collapse-box').click(function(e){
        e.stopPropagation();
    });

    $('.input-collpse-box input').on('change' ,function(){
        $(this).closest('.input-collpse-box').find('.btn-collapse span').text($(this).val());
        $('.input-collpse-box .collapse-box').hide();
        $(this).closest('.input-collpse-box').find('.btn-collapse').toggleClass('rottate');
    });


    $('.project-owl').owlCarousel({
        rtl: true,
        items:10,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.btn-append').click(function(){
        $('.order-table tr:last').after('<tr><td><label><input class="form-control" type="text" placeholder="اسم الصف"></label><input class="form-control" placeholder="بيانات الصف"></td></tr>');
    });


    $('.question-box .btn').on('click' ,function(){
        $('.question-box .btn i').removeClass('i-rotate');
        $(this).find('i').toggleClass('i-rotate');
        
    });

    $('.home-content .side-menue li').click(function(){
        $(this).find('i').toggleClass('rotate');
    });

    $('.delete-ico').click(function(){
        $(this).parent('.work-photo').closest('.col-6').remove();
    });

    $('.add-service-modal .checkbox-container').click(function(){
        if($(this).find('input').is(':checked'))
        {
            $(this).css('color','#96c93c');
        }else{
            $(this).css('color','rgb(204, 204, 204)');
        }
    });

});


$(document).on('click','.counter .btn',function (event) {
    var count = $(this).parent(),
    num = $(this).siblings(".num"),
    i = parseInt(num.text(), 10);
    
    if ($(this).hasClass("plus")) {
        if (i === 0) {
            i = i + 1;
            count.removeClass("shrink");
            num.fadeIn();
            num.text(i);
            $('.product_num').val(1);
        } else {
            i = i + 1;
            num.text(i);
            $('.product_num').val(i);
        }
    } else {
        if (i === 1) {
            i = i - 1;
            count.addClass("shrink");
            num.fadeOut();
            num.text(i);
            $('.product_num').val(0);
        } else if (i > 1) {
            i = i - 1;
            num.text(i);
            $('.product_num').val(i);
        }
    }
});



document.addEventListener("DOMContentLoaded", init, false);
var AttachmentArray = [];
var arrCounter = 0;
var filesCounterAlertStatus = false;
var ul = document.createElement('ul');
ul.className = ("thumb-Images");
ul.id = "imgList";

function init() {
    document.querySelector('#files').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(e) {
    if (!e.target.files) return;
    var files = e.target.files;
    for (var i = 0, f; f = files[i]; i++) {
        var fileReader = new FileReader();
        fileReader.onload = (function (readerEvt) {
            return function (e) {
                RenderThumbnail(e, readerEvt);
                FillAttachmentArray(e, readerEvt)
            };
        })(f);

        fileReader.readAsDataURL(f);
    }
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
}

jQuery(function ($) {
    $('div').on('click', '.img-wrap .close', function () {
        var id = $(this).closest('.img-wrap').find('img').data('id');
        var elementPos = AttachmentArray.map(function (x) { return x.FileName; }).indexOf(id);
        if (elementPos !== -1) {
            AttachmentArray.splice(elementPos, 1);
        }
        $(this).parent().find('img').not().remove();
        $(this).parent().find('div').not().remove();
        $(this).parent().parent().find('div').not().remove();
        var lis = document.querySelectorAll('#imgList li');
        for (var i = 0; li = lis[i]; i++) {
            if (li.innerHTML == "") {
                li.parentNode.removeChild(li);
            }
        }

    });
})

function RenderThumbnail(e, readerEvt)
{
    var li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = ['<div class="img-wrap"> <span class="close">&times;</span>' +
        '<img class="thumb" src="', e.target.result, '" title="', escape(readerEvt.name), '" data-id="',
        readerEvt.name, '"/>' + '</div>'].join('');

    var div = document.createElement('div');
    div.className = "FileNameCaptionStyle";
    li.appendChild(div);
    div.innerHTML = [readerEvt.name].join('');
    document.getElementById('Filelist').insertBefore(ul, null);
}

function FillAttachmentArray(e, readerEvt)
{
    AttachmentArray[arrCounter] =
    {
        AttachmentType: 1,
        ObjectType: 1,
        FileName: readerEvt.name,
        FileDescription: "Attachment",
        NoteText: "",
        MimeType: readerEvt.type,
        Content: e.target.result.split("base64,")[1],
        FileSizeInBytes: readerEvt.size,
    };
    arrCounter = arrCounter + 1;
}