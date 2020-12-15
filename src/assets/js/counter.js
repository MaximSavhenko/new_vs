$(document).ready(function() {
    $('.product__info-quantity-min').click(function () {
        var $input = $(this).parent().find('.product__info-quantity-input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.product__info-quantity-max').click(function () {
        var $input = $(this).parent().find('.product__info-quantity-input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

});