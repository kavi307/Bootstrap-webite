$('.testmonals-slide').owlCarousel({
	autoplay:true,
	center:true,
	items:1,
	loop:true,
	margin:20,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:3
			}
	}
})

$('.brand-carousel').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:20,
    responsive:{
		0:{
			items:1
		},
        600:{
            items:5
        }
    }
});

$('.test-slide').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:20,
    responsive:{
		0:{
		    itmes:1
		},
		600:{
            items:3
        }
        
    }
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});