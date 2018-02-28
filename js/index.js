$(document).on('click', '#msg_collapse', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapse')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapse');
        $('#fa-plus').removeClass('fa-plus').addClass('fa-minus'); 
 
    } else { 
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapse');
        $('#fa-plus').removeClass('fa-minus').addClass('fa-plus');

}
});

 



