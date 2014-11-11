console.log('This would be the main JS file.');
$('#enter-website').on('click', function(e) {
	e.preventDefault();
	$('#overlay').removeClass('show');
});

$('#top-right-menu-trigger').on('click', function() {
	$('#quickLinks').addClass('show');
});
$('#top-right-menu-closer').on('click', function() {
	$('#quickLinks').removeClass('show');
});