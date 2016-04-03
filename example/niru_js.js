// JavaScript Document
$("document").ready(function() {
//alert("hello");
$('.nav-side .nav-toggle').on('click', function(e) {
e.preventDefault();
$(this).parent().toggleClass('nav-open');
});




});<!--end of Jquary-->
