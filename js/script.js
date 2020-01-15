//alert("AYEEEEEEEE!!!!"); 

$(function () {
    // Handler for .ready() called.



    function showNav() {
        $('#topnav').html(
            `
	<ul>
		<a href="resources.html">resources</a>
	    <a href="favorite-foods.html">Favorite Foods</a>
		<a href="#">Apple</a>
	</ul>
	`
        );

    }


    function addActiveClass() {
        if ($('body.favorite-foods')) {

            $('.favorite-foods-link').addClass('active');
        } else if ($('body.resources')) {
            $('.resources-link').addClass('active');
        }
    }



    function initialize() {
        showNav();
        addActiveClass();
    }

    $(initialize());


});