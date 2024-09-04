/*         Send legal entity input 1          */
function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');

});

/*         Send legal entity input 2          */
function readURL2(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap2').hide();

            $('.file-upload-image2').attr('src', e.target.result);
            $('.file-upload-content2').show();

            $('.image-title2').html(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$('.image-upload-wrap2').bind('dragover', function () {
    $('.image-upload-wrap2').addClass('image-dropping');
});
$('.image-upload-wrap2').bind('dragleave', function () {
    $('.image-upload-wrap2').removeClass('image-dropping');
});

/*         Send legal entity input 3          */
function readURL3(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap3').hide();

            $('.file-upload-image3').attr('src', e.target.result);
            $('.file-upload-content3').show();

            $('.image-title3').html(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$('.image-upload-wrap3').bind('dragover', function () {
    $('.image-upload-wrap3').addClass('image-dropping');
});
$('.image-upload-wrap3').bind('dragleave', function () {
    $('.image-upload-wrap3').removeClass('image-dropping');
});
