var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $first-p = $('main p:first-child');
var $h2 = $('h2');
var $img = $('img');
var $ul = $('ul');
var $dl = $('dl');
var $dt = $('dt');





$header.addClass('masthead');

$h1.removeClass('big-heading');
$h1.addClass('logo');

$main.addClass('wrapper');

$first-p.addClass('intro');

$h2.addClass('slug-head');

$ul.addClass('slug-list');

$ul.filter(':first-child').addClass('slug-list-first');

$ul.filter(':first-child').addClass('slug-list-last');

$dl.addClass('classification');

$dt.removeClass('big-label');






