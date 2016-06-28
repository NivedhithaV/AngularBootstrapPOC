$(document).ready(function () {
	//Offline.options = {checks: {image: {url: 'C:/Users/590471/Documents/AngularSample/images'}, active: 'image'}}
    $('ul.nav > li').click(function (e) {
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');                
    });
});