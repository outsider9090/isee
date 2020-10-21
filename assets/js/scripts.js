jQuery(document).ready(function ($) {

    $('#gi-single').ezPlus({
        zoomWindowFadeIn: 500,
        zoomLensFadeIn: 500,
        gallery: 'p-gallery',
        imageCrossfade: true,
        zoomWindowWidth: 300,
        zoomWindowHeight: 300,
        zoomWindowOffsetX: 10,
        scrollZoom: true,
        cursor: 'default',
        zoomWindowPosition: 10,
        borderColour: '#888',
        borderSize: 4,
        constrainSize: false,
        easing:true,
        easingAmount: 12,
        galleryActiveClass:"active",
        lensShape:'round',
        minZoomLevel: 0.5,
        maxZoomLevel: 1.5
    });

    $(document).click(function(e) {
        if ( $(e.target).closest('#search_frm_input').length === 0 ) {
            $('.search_res_ajax').css('display' , 'none');
            $('#search_frm_input').css({
            'border-radius': '25px',
            'box-shadow': '0 0 10px #bdbdbd'
        });
        }
        if ( $(e.target).closest('#dropdownMenuButton').length === 0 ) {
            $('#dropdownMenuButton').find('i').css('transform' , 'rotateZ(0deg)');
        }
        if ( $(e.target).closest('.share_popover_container').length === 0 ) {
            $('.share_popover_container').removeClass('active').find('.share_popover').css('display' , 'none');
        }
    });


    $('#search_frm_input').on('blur', function () {
        // $(this).css({
        //     'border-radius': '25px',
        //     'box-shadow': '0 0 10px #bdbdbd'
        // });
        //$('.search_res_ajax').css('display' , 'none');
    });
    $('#search_frm_input').on('input',function () {
        let input_txt = $(this).val();
        if (input_txt.length > 0 ){
            $('#clear_btn').css('display', 'block');
        }else {
            $('#clear_btn').css('display', 'none');
        }
        if (input_txt.length > 1 ){
            $('.search_res_ajax').css('display' , 'block');
            $(this).css({
                'display': 'block',
                'border-bottom-left-radius': '0',
                'border-bottom-right-radius': '0',
                'box-shadow': '0 -5px 10px #bdbdbd'
            });
        }else {
            $('#search_frm_input').css({
                'border-radius': '25px',
                'box-shadow': '0 0 10px #bdbdbd'
            });
            $('.search_res_ajax').css('display' , 'none');
        }
    });
    $('#clear_btn').on('click', function () {
        $('#search_frm_input').val('');
        $(this).css('display', 'none');
    });



    $('#gi-single').attr('src' , $('.gallery_image.active').attr('src'));
    $('.gallery_image').on('click' , function (e) {
        e.preventDefault();
        $('#gi-single').css('opacity' , '0');
        $('.gallery_image').removeClass('active');
        $(this).addClass('active');
        let image_src = $(this).attr('src');
        $('#gi-single').attr('src' , image_src).animate({opacity: '1'} , 800);

        $('#gi-single').ezPlus({
            imageCrossfade: true,
            scrollZoom: true,
            cursor: 'default',
            zoomWindowPosition: 10,
            borderColour: '#888',
            borderSize: 4,
            constrainSize: true,
            easing:true,
            easingAmount: 12,
            galleryActiveClass:"active",
            lensShape:'round',
            minZoomLevel: 0.5,
            maxZoomLevel: 1.5
        });

    });

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        autoplay: false,
        responsiveClass:false,
        nav:true,
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1,
            },
            300:{
                items:3,
            },
            400:{
                items:3,
            },
            500:{
                items:3,
            },
            600:{
                items:3,
            },
            800:{
                items:4,
            },
            900:{
                items:5,
            },
            1000:{
                items:5,
            }
        }
    });
    $('.owl-next').html('<i class="material-icons">chevron_right</i>');
    $('.owl-prev').html('<i class="material-icons">chevron_left</i>');


    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        rewind: true,
        autoplay: true,
        margin: 0,
        nav: true
    });



    $('.sell_count').each(function () {
        if ($(this).text() == '0'){
            $(this).css('color', '#dc004e');
        }
    });


    $('#breadcrumb_nav').find('.btn').on('click', function () {
        let status = $(this).attr('aria-expanded');
        if (status == 'false'){
            $(this).find('i').css('transform' , 'rotateZ(180deg)');
        }else {
            $(this).find('i').css('transform' , 'rotateZ(0deg)');
        }
    });


    $('#accordion').find('.btn').on('click', function () {
        let status = $(this).attr('aria-expanded');
        if (status == 'false'){
            //$('#accordion').find('.btn i').text('keyboard_arrow_down');
            $(this).find('i').css('transform' , 'rotateZ(0deg)');
        }else {
            $(this).find('i').css('transform' , 'rotateZ(180deg)');
        }
    });

    $('.close_filter_tag').click(function () {
        let li_element = $(this).parents('li');
        li_element.remove();
    });

    $('.products_cards').find('img.no-image').attr('src', './assets/images/noimage.png');
    $('.cards').find('img.no-image').attr('src', './assets/images/noimage.png');



//  signup form validation
let is_name_validate = false;
let is_shop_name_validate = false;
let is_shop_link_validate = false;
let is_phone_validate = false;
let is_email_validate = false;


$('.signup_frm').find('input#name').on('input', function () {
    let value = $(this).val();
    if (value === ''){
        $(this).siblings('.invalid-feedback').css('display', 'block');
        is_name_validate = false;
    }else {
        $(this).siblings('.invalid-feedback').css('display', 'none');
        is_name_validate = true;
    }
    $(this).siblings('.notValid').css('display', 'none');
    $('.signup_frm').change();
});
$('.signup_frm').find('input#shop_name').on('input', function () {
    let value = $(this).val();
    if (value === ''){
        $(this).siblings('.invalid-feedback').css('display', 'block');
        is_shop_name_validate = false;
    }else {
        $(this).siblings('.invalid-feedback').css('display', 'none');
        is_shop_name_validate = true;
    }
    $(this).siblings('.notValid').css('display', 'none');
    $('.signup_frm').change();
});
$('.signup_frm').find('input#shop_url').on('input', function () {
    let value = $(this).val();
    let urlRejex = /^http:\/\/|(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    let is_url_valid = urlRejex.test(value);
   // console.log(is_url_valid);
   if (value === '' || ! is_url_valid ){
    $(this).siblings('.invalid-feedback').css('display', 'block');
    is_shop_link_validate = false;
}else {
    $(this).siblings('.invalid-feedback').css('display', 'none');
    is_shop_link_validate = true;
}
$(this).siblings('.notValid').css('display', 'none');
$('.signup_frm').change();
});
$('.signup_frm').find('input#phone').on('input', function () {
    let value = $(this).val();
    if (value === '' || value.length != 11){
        $(this).siblings('.invalid-feedback').css('display', 'block');
        is_phone_validate = false;
    }else {
        $(this).siblings('.invalid-feedback').css('display', 'none');
        is_phone_validate = true;
    }
    $(this).siblings('.notValid').css('display', 'none');
    $('.signup_frm').change();
});
$('.signup_frm').find('input#email').on('input', function () {
    let value = $(this).val();
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let is_email_valid = emailReg.test( value );
    if (! is_email_valid || value === ''){
        $(this).siblings('.invalid-feedback').css('display', 'block');
        is_email_validate = false;
    }else {
        $(this).siblings('.invalid-feedback').css('display', 'none');
        is_email_validate = true;
    }
    $(this).siblings('.notValid').css('display', 'none');
    $('.signup_frm').change();

});
$('.signup_frm').on('change' , function () {
    if (is_name_validate && is_shop_name_validate && is_shop_link_validate && is_phone_validate && is_email_validate){
        $('#signup_frm_submit').attr('disabled' , false);
    }else {
        $('#signup_frm_submit').attr('disabled' , true);
    }
});
//  signup form validation

$('#signup_frm_submit').click(function () {
    let name = $('#signup_frm').find('input#name').val();
    let family = $('#signup_frm').find('input#family').val();
    let shop_name = $('#signup_frm').find('input#shop_name').val();
    let shop_url = $('#signup_frm').find('input#shop_url').val();
    let email = $('#signup_frm').find('input#email').val();
    let phone = $('#signup_frm').find('input#phone').val();
    let desc = $('#signup_frm').find('textarea#description').val();

    let emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    let urlPattern = /^http:\/\/|(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    if (name === ''){
        $('#signup_frm').find('input#name').siblings('.invalid-feedback').css('display', 'block');
    }
    if(shop_name === ''){
        $('#signup_frm').find('input#shop_name').siblings('.invalid-feedback').css('display', 'block');
    }
    if(phone === ''){
        $('#signup_frm').find('input#phone').siblings('.invalid-feedback').css('display', 'block');
    }
    if(!urlPattern.test(shop_url)){
        $('#signup_frm').find('input#shop_url').siblings('.invalid-feedback').css('display', 'block');
    }
    if(!emailPattern.test(email)){
        $('#signup_frm').find('input#email').siblings('.invalid-feedback').css('display', 'block');
    }

    if (name !== '' && shop_name !== '' && phone !== '' && emailPattern.test(email) && urlPattern.test(shop_url)  ) {
        $(this).find('i').css('visibility', 'visible').addClass('fa-spin');
        let link_phone_desc = shop_name + '\n' + phone + '\n' +  desc;
        $.ajax({
            url: '/api/v1/users/forms/report',
            type: 'POST',
            data: { 'report_type':'shopSignup' ,'full_name':name+family ,'email':email ,'reason':link_phone_desc ,'shop_name':shop_name  },
            dataType: 'JSON',
            success: function (data , xhr) {
                if (xhr === 'success'){
                    showSnackBar('green' , 'مشخصات شما ارسال شد. به زودی با شما تماس میگیریم');
                    resetSignUpForm();
                } else {
                    showSnackBar('red' , xhr);
                }
            }, error:function (err) {
                    //console.log(err);
                }, complete:function () {
                    $('#signup_frm_submit').find('i').css('visibility', 'hidden').removeClass('fa-spin');
                }
            });
    }else {
        showSnackBar('red' , 'لطفا خطاهای موجود را اصلاح کنید!');
    }

});



//  contact-us form validation
let is_your_name_validate = false;
let is_your_email_validate = false;
let is_your_subject_validate = false;
let is_your_message_body_validate = false;

$('.contact_us_frm').find('input#your_name').on('input', function () {
    let value = $(this).val();
    if (value === ''){
        $(this).siblings('.invalid-feedback').css('display', 'block');
        is_your_name_validate = false;
    }else {
        $(this).siblings('.invalid-feedback').css('display', 'none');
        is_your_name_validate = true;
    }
    $('.contact_us_frm').change();
});
$('.contact_us_frm').find('input#your_email').on('input', function () {
    let value = $(this).val();
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    let is_email_valid = emailReg.test( value );
    if (! is_email_valid || value === ''){
        $(this).siblings('.invalid-feedback').css('display', 'block');
        is_your_email_validate = false;
    }else {
        $(this).siblings('.invalid-feedback').css('display', 'none');
        is_your_email_validate = true;
    }
    $('.contact_us_frm').change();
});
$('.contact_us_frm').find('input#your_subject').on('input', function () {
    let value = $(this).val();
    if (value === ''){
        $(this).siblings('.invalid-feedback').css('display', 'block');
        is_your_subject_validate =false;
    }else {
        $(this).siblings('.invalid-feedback').css('display', 'none');
        is_your_subject_validate =true;
    }
    $('.contact_us_frm').change();
});
$('.contact_us_frm').find('textarea#your_message_body').on('keyup', function () {
    let value = $(this).val();
    if (value.length < 20){
        $(this).siblings('.invalid-feedback').css('display', 'block');
        is_your_message_body_validate = false;
    }else {
        $(this).siblings('.invalid-feedback').css('display', 'none');
        is_your_message_body_validate = true;
    }
    $('.contact_us_frm').change();
});

$('.contact_us_frm').on('change' , function () {
    if (is_your_name_validate && is_your_email_validate && is_your_subject_validate && is_your_message_body_validate){
        $('#contactus_frm_submit').attr('disabled' , false);
    }else {
        $('#contactus_frm_submit').attr('disabled' , true);
    }
});
//  contact-us form validation
$('#contactus_frm_submit').click(function () {
    let your_name = $('#contact_us_frm').find('input#your_name').val();
    let your_email = $('#contact_us_frm').find('input#your_email').val();
    let your_subject = $('#contact_us_frm').find('input#your_subject').val();
    let your_message_body = $('#contact_us_frm').find('textarea#your_message_body').val();

    $(this).find('i').css('visibility', 'visible').addClass('fa-spin');
    $.ajax({
        url: '/contactUs',
        type: 'POST',
        data: { 'your_name':your_name ,'your_email':your_email ,'your_subject':your_subject ,'your_message_body':your_message_body },
        dataType: 'JSON',
        success: function (data) {
            if (data['msg'] === 1){
                alert('پیام شما ارسال شد.');
                resetContactUsForm();
            } else {
                alert(data['msg']);
            }
        }, error:function (err) {
            console.log(err);
        }, complete:function () {
            $('#contactus_frm_submit').find('i').css('visibility', 'hidden').removeClass('fa-spin');
        }
    });
});



$('#signup_frm_submit').click(function () {
    $(this).find('i').addClass('fa-spin').css('visibility' , 'visible');
});
$('#contactus_frm_submit').click(function (e) {
    $(this).find('i').addClass('fa-spin').css('visibility' , 'visible');
});


$('#showPassword').hover(function () {
    $('.signup_frm').find('input#password').attr('type', 'text');
    $(this).find('i').text('visibility');
}, (function () {
    $('.signup_frm').find('input#password').attr('type', 'password');
    $(this).find('i').text('visibility_off');
}));
$('#showConfirmPassword').hover(function () {
    $('.signup_frm').find('input#password-confirm').attr('type', 'text');
    $(this).find('i').text('visibility');
}, (function () {
    $('.signup_frm').find('input#password-confirm').attr('type', 'password');
    $(this).find('i').text('visibility_off');
}));


$('#add_input').click(function (e) {
    e.preventDefault();
    $('.addAttrib').append('<div class="col-6 mb-4"><label for="Attribute_name">عنوان ویژگی </label><input type="text" class="form-control" id="Attribute_name" required></div><div class="col-6 mb-4"><label for="Attribute_value">مقدار ویژگی </label><input type="text" class="form-control" id="Attribute_value" required></div>');
});


$('.share_popover_container').click(function () {
    $(this).addClass('active');
    $(this).find('.share_popover').css('display', 'flex');
});



    // Reporting form validation
    let is_recipient_email_validate = false;
    let is_message_text_validate = false;

    $('#reportingForm').find('#recipient-email').on('input' , function () {
        let email = $('#reportingForm').find('#recipient-email').val();
        let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if (!pattern.test(email)){
            $(this).siblings('.invalid-feedback').css('display', 'block');
            $(this).css('border-color', 'red');
            is_recipient_email_validate = false;
        }else {
            $(this).siblings('.invalid-feedback').css('display', 'none');
            $(this).css('border-color', '#ced4da');
            is_recipient_email_validate = true;
        }
        $('#reportingForm').change();
    });
    $('#reportingForm').find('#message-text').on('input' , function () {
        let message = $('#reportingForm').find('#message-text').val();
        if (message.length <30){
            $('#message-text').siblings('.form-text').css({
                'color': 'red',
                'font-size': '80%'
            });
            $('#message-text').css('border-color', 'red');
            is_message_text_validate = false;
        } else {
            $('#message-text').siblings('.form-text').css({
                'color': 'inherit',
                'font-size': '11px'
            });
            $('#message-text').css('border-color', '#ced4da');
            is_message_text_validate = true;
        }
        $('#reportingForm').change();
    });

    $('#reportingForm').on('change', function () {
        if (is_message_text_validate && is_recipient_email_validate){
            $('#reporting_frm_submit').attr('disabled', false);
        }else {
            $('#reporting_frm_submit').attr('disabled', true);
        }
    });
    $('#reporting_frm_submit').click(function(event) {
        $('#reportingForm').submit();
    });
    // Reporting form validation
    $('.report_modal_trigger').click(function () {
        $('input#shop_name').val( $(this).data('shop'));
    });
    $('button.close').click(function () {
        $('#reportingForm')[0].reset();
        resetReportForm();
    });



    // Filter shops list in products page
    $('#shops_search').on('input' , function () {
        let value = $(this).val().toLowerCase();
        $("#sitesCollapse").find('.form-check').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        if (value !== ''){
            $('#shops_search_icon').html('close').css('cursor' , 'pointer');
        } else {
            $('#shops_search_icon').html('search').css('cursor' , 'default');
        }
    });
    $('#shops_search_icon').click(function () {
        let status = $(this).html();
        if (status === 'close'){
            $('input#shops_search').val('');
            $('#shops_search').trigger('input');
            $(this).css('cursor' , 'default');
        }
    });


    $('#products_sidebar_toggler').click(function (e) {
        e.preventDefault();
        let is_sidebar_open = $('.sidebar').hasClass('open');
        if (! is_sidebar_open){
            $('.sidebar').css('right', '0');
            $('.sidebar').addClass('open');
            $('#back_cover').css('display', 'block');
            $('.close_sidebar').click();
        } else {
            $('.sidebar').css('right', '-700px');
            $('.sidebar').removeClass('open');
            $('#back_cover').css('display', 'none');
        }
    });
    $('#back_cover').click(function () {
        $('.sidebar').css('right', '-700px');
        $('.sidebar').removeClass('open');
        $(this).css('display', 'none');
    });


    // Filter shops list
    $('#shops_list_search').on('input' , function () {
        window.scrollTo(0,document.body.scrollHeight);
        let value = $(this).val().toLowerCase();
        $('.partNameBold').filter(function() {
            $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        if ($('.partNameBold').text().toLowerCase().indexOf(value) < 0) {
            $('#shops_search_alert').css('display','block');
        }else {
            $('#shops_search_alert').css('display','none');
        }
        if (value !== ''){
            $('#shops_list_search_icon').html('close').css('cursor' , 'pointer');
        } else {
            $('#shops_list_search_icon').html('search').css('cursor' , 'default');
        }
    });
    $('#shops_list_search_icon').click(function () {
        let status = $(this).html();
        if (status === 'close'){
            $('input#shops_list_search').val('');
            $('#shops_list_search').trigger('input');
            $(this).css('cursor' , 'default');
        }
    });


    //  Main sidebar
    $('.navbar-toggler-icon').click(function () {
        let is_sidebar_open = $('.main_sidebar').hasClass('open');
        if (! is_sidebar_open){
            $('.main_sidebar').css('left','0').addClass('open');
            $('#nav_back_cover').css('display' , 'block');
        }else {
            $('.main_sidebar').css('left','-1000px').removeClass('open');
            $('#nav_back_cover').css('display' , 'none');
        }
    });
    $('.close_sidebar').click(function () {
        $('.main_sidebar').css('left','-1000px').removeClass('open');
        $('#nav_back_cover').css('display' , 'none');
    });
    $('#nav_back_cover').click(function () {
        $('.main_sidebar').css('left','-1000px').removeClass('open');
        $(this).css('display' , 'none');
    });



    // Snackbar
    $('#snackbar').addClass('show').css('background-color', 'green').html('با موفقیت ارسال شد.');
    setTimeout(function() {
        $('#snackbar').removeClass('show');
    }, 3000);


    // Back to top btn
    $(window).scroll(function(event) {
        if ($(this).scrollTop() > 600) {
            $('#scroll_to_top_btn').css('transform', 'translateX(125px) rotateZ(360deg)');
            // $('.sidebar').css({
            //     'position': 'fixed',
            //     'top': '60px',
            //     'right': '0',
            //     'width' : '25%',
            //     'overflowY' : 'auto'
            // });
        } else {
            $('#scroll_to_top_btn').css('transform', 'translateX(-125px) rotateZ(-360deg)');
            // $('.sidebar').css({
            //     'position': 'relative',
            //     'top': '0',
            //     'right': '0',
            //     'width' : '100%',
            //     'overflowY' : 'hidden'
            // });
        }
    });
    $('#scroll_to_top_btn').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 0);
    });



    $('select#report_type').on('click change', function() {
        $(this).css('border-radius', '50px 50px 0 0');
    });
    $('select#report_type').on('blur', function() {
        $(this).css('border-radius', '50px');
    });


    // Sidebar toggler for Desktop
    $('#desktop_products_sidebar_toggler').click(function (e) {
        e.preventDefault();
        let is_sidebar_open = $('.sidebar').hasClass('desktop_open');
        if (! is_sidebar_open){
            $('.sidebar').css('right', '0');
            $('.sidebar').addClass('desktop_open');
            $('.filter_container').css('width' , '78%');
            $('.products_cards').find('.card').css('min-width' , '20%');
            $('#main_content').addClass('col-lg-9');
            $('.close_sidebar').click();
        } else {
            $('.sidebar').css('right', '-700px');
            $('.sidebar').removeClass('desktop_open');
            $('.filter_container').css('width' , '100%');
            $('.products_cards').find('.card').css({
                'min-width': '20%',
                'width': '20%'
            });
            $('#main_content').removeClass('col-lg-9');
        }
    });


    $('#notif_close').on('click' , function () {
        $('.notif_banner').animate({
            'bottom': '-200px',
            'display': 'none'
        },
        1000, function() {
        });
    });


    $('.prevent_default').click(function (e) {
        e.preventDefault();
    });


    $.fn.digits = function () {
        return this.each(function () {
            $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        })
    };
    $('.digits').digits();
    $('.unavailable_digits').digits();


    //set_sidebar_height();
    $('button.btn-link').click(function(event) {
        set_sidebar_height();
    });
});



function set_sidebar_height(){
    //alert('ssss');
    let overalHeight = 0;
    $('.sidebar_collapse').each(function(){
        overalHeight += $(this).height();
    });
    $('#sitesCollapse').find('.card-body').css({
        'height': overalHeight+'px',
        'maxHeight': '450px'
    });
    $('#sitesCollapse').css('height', $(window).height()+overalHeight-100+'px');
}
function resetContactUsForm(){
    $('#contact_us_frm').find('input#your_name').val('');
    $('#contact_us_frm').find('input#your_email').val('');
    $('#contact_us_frm').find('input#your_subject').val('');
    $('#contact_us_frm').find('textarea#your_message_body').val('');
    $('#contactus_frm_submit').attr('disabled','true');
}
function resetSignUpForm(){
    $('#signup_frm').find('input#name').val('');
    $('#signup_frm').find('input#family').val('');
    $('#signup_frm').find('input#shop_name').val('');
    $('#signup_frm').find('input#shop_url').val('');
    $('#signup_frm').find('input#email').val('');
    $('#signup_frm').find('input#phone').val('');
    $('#signup_frm').find('textarea#description').val('');
    $('#signup_frm_submit').attr('disabled','true');
}
function resetReportForm(){
    $('#reportingForm').find('#recipient-email').css('border-color', '#ced4da');
    $('#reportingForm').find('#recipient-email').siblings('.invalid-feedback').css('display', 'none');
    $('#reportingForm').find('#message-text').siblings('.form-text').css({
        'color': 'inherit',
        'font-size': '11px'
    });
    $('#reportingForm').find('#message-text').css('border-color', '#ced4da');
    $('#reporting_frm_submit').attr('disabled','true');
}
function getShopName(shop_name) {
    $('input#shop_name').val(shop_name);
}
function showSnackBar(bg , msg) {
    $('#snackbar').addClass('show').css('background-color', bg).html(msg);
    setTimeout(function() {
        $('#snackbar').removeClass('show');
    }, 4000);
}


