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
		constrainSize: true,
		easing:true,
		easingAmount: 12,
		galleryActiveClass:"active",
		lensShape:'round',
		minZoomLevel: 0.5,
		maxZoomLevel: 1.5
	});

	$('#search_frm_input').css('border-radius', '25px');

	$(document).click(function(e) {
		if ( $(e.target).closest('#search_frm_input').length === 0 ) {
			$('.search_res_ajax').css('display' , 'none');
		}
		if ( $(e.target).closest('#dropdownMenuButton').length === 0 ) {
			$('#dropdownMenuButton').find('i').css('transform' , 'rotateZ(0deg)');
		}
	});


	$('#search_frm_input').on('blur', function () {
		$(this).css({
			'border-radius': '25px',
			'box-shadow': '0 0 10px #bdbdbd'
		});
	});


	$('#search_frm_input').on('input',function () {
		let input_txt = $(this).val();
		if (input_txt !== ''){
			$('#clear_btn').css('display', 'block');
			$('.search_res_ajax').css('display' , 'block');
			$(this).css({
				'display': 'block',
				'border-bottom-left-radius': '0',
				'border-bottom-right-radius': '0',
				'box-shadow': '0 -5px 10px #bdbdbd'
			});
		}else {
			$('#clear_btn').css('display', 'none');
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


	$.fn.digits = function () {
		return this.each(function () {
			$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1/"));
		})
	};

	$('.digits').digits();

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

	$('.products_cards').find('img.no-image').attr('src', './assets/images/image_not_found.jpg');
	$('.cards').find('img.no-image').attr('src', './assets/images/image_not_found.jpg');



//  signup form validation
	let is_name_validate = false;
	let is_username_validate = false;
	let is_email_validate = false;
	let is_password_validate = false;
	let is_confirm_password_validate = false;


	$('.signup_frm').find('input#name').on('input', function () {
		let value = $(this).val();
		if (value === ''){
			$(this).siblings('.invalid-feedback').css('display', 'block');
			is_name_validate = false;
		}else {
			$(this).siblings('.invalid-feedback').css('display', 'none');
			is_name_validate = true;
		}
		$('.signup_frm').change();
	});
	$('.signup_frm').find('input#phone').on('input', function () {
		let value = $(this).val();
		if (value === '' || value.length != 11){
			$(this).siblings('.invalid-feedback').css('display', 'block');
			is_username_validate = false;
		}else {
			$(this).siblings('.invalid-feedback').css('display', 'none');
			is_username_validate = true;
		}
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
		$('.signup_frm').change();

	});
	$('.signup_frm').find('input#password').on('input', function () {
		let value = $(this).val();
		if (value === ''){
			$(this).siblings('.invalid-feedback').css('display', 'block');
			is_password_validate =false;
		}else {
			$(this).siblings('.invalid-feedback').css('display', 'none');
			$('.signup_frm').find('input#password-confirm').siblings('.invalid-feedback').css('display', 'none');
			is_password_validate =true;
		}
		$('.signup_frm').find('input#password-confirm').blur();
		$('.signup_frm').change();

	});
	$('.signup_frm').find('input#password-confirm').on('input', function () {
		let value = $(this).val();
		let pass = $('.signup_frm').find('input#password').val();
		if (value === '' || pass!=value){
			$(this).siblings('.invalid-feedback').css('display', 'block');
			is_confirm_password_validate = false;
		}else {
			$(this).siblings('.invalid-feedback').css('display', 'none');
			$('.signup_frm').find('input#password').siblings('.invalid-feedback').css('display', 'none');
			is_confirm_password_validate = true;
		}
		$('.signup_frm').change();
	});


	$('.signup_frm').on('change' , function () {
		if (is_name_validate && is_username_validate && is_password_validate && is_confirm_password_validate && is_email_validate){
			$('#signup_frm_submit').attr('disabled' , false);
		}else {
			$('#signup_frm_submit').attr('disabled' , true);
		}
	});
//  signup form validation


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


	$('#signup_frm_submit').hover(function (e) {
		let is_disabled = $(this).attr('disabled');
		if (! is_disabled){
			$(this).find('i').animate({bottom: '10px'}, 'fast');
		}
	},(function () {
		let is_disabled = $(this).attr('disabled');
		if (! is_disabled){
			$(this).find('i').animate({bottom: '-60px'}, 'fast');
		}
	}));

	$('#contactus_frm_submit').hover(function (e) {
		let is_disabled = $(this).attr('disabled');
		if (! is_disabled){
			$(this).find('i').animate({bottom: '10px'}, 'fast');
		}
	},(function () {
		let is_disabled = $(this).attr('disabled');
		if (! is_disabled){
			$(this).find('i').animate({bottom: '-60px'}, 'fast');
		}
	}));

	
	$('#showPassword').hover(function () {
		$('.signup_frm').find('input#password').attr('type', 'text');
	}, (function () {
		$('.signup_frm').find('input#password').attr('type', 'password');
	}));
	$('#showConfirmPassword').hover(function () {
		$('.signup_frm').find('input#password-confirm').attr('type', 'text');
	}, (function () {
		$('.signup_frm').find('input#password-confirm').attr('type', 'password');
	}));


	$('#add_input').click(function (e) {
		e.preventDefault();
		$('.addAttrib').append('<div class="col-6 mb-4"><label for="Attribute_name">عنوان ویژگی </label><input type="text" class="form-control" id="Attribute_name" required></div><div class="col-6 mb-4"><label for="Attribute_value">مقدار ویژگی </label><input type="text" class="form-control" id="Attribute_value" required></div>');
	})

});





