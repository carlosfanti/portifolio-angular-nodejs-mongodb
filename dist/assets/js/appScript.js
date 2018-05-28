$(document).ready(function () {

    $('#pageSidebarCollapse').on('click', function () {
        changeSidebar();
    });

    // if dismiss or overlay was clicked
    $('.overlay').on('click', function () {
        // hide the sidebar
        changeSidebar();
    });


    $('.langImg').on('click', function() {
        $('.langImg').removeClass('active');
        $(this).addClass('active');
    });


    function changeSidebar() {
        $('#pageSidebar').toggleClass('active');
        $('#pageContent').toggleClass('active');
        $('#sidebarProfile').toggleClass('active');
        $('#sidebarList').toggleClass('active');
        $('#sidebarFooter').toggleClass('active');
        $('#sidebarFooter').children('div').toggleClass('flex-column');
        $('#pageSidebarCollapse').toggleClass('active');
        if($('#pageSidebar').hasClass('active')){
            $('.overlay').fadeIn( "slow" );
        }else{
            $('.overlay').fadeOut( "slow" );
        }
        $('#langImages').toggleClass('d-none');
    }
});

