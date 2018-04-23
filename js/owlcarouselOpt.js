$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		margin: 10,
		lazyLoad: true,
		merge: true, 
		nav: true,
		video: true,
		responsive:{	
			480:{
				items:2
			},
			678:{
				items:3
			},
			960:{
				items:5
			}
		}
	});

	// OPTIONS:

	/*	items: 1, // The number of items
		loop: false, // Infinite loop
		center: true, // Center item
		rewind: false, // Go backwards when the boundary has reached.
		mouseDrag: true, // Enable drag events.
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 10, // margin-right(px) on item.
		stagePadding: 0, // Padding left and right on stage (can see neighbours).
		merge: false, // Merge items.
		mergeFit: true, // Fit merged items if screen is smaller than items value.
		autoWidth: false, // Set non <a href="https://www.jqueryscript.net/tags.php?/grid/">grid</a> content. 
		startPosition: 0, // Start position
		rtl: false, // false = ltr
		smartSpeed: 250, // Speed Calculate.
		fluidSpeed: false, // Speed Calculate.
		dragEndSpeed: false, // Drag end speed.
		responsive: { 	// Object containing responsive options. 
						// Can be set to false to remove responsive capabilitie
			480:{
				items:2
			},
			678:{
				items:3
			},
			960:{
				items:5
			}
		}, 
		responsiveRefreshRate: 200, // <a href="https://www.jqueryscript.net/tags.php?/Responsive/">Responsive</a> refresh rate.
		responsiveBaseElement: window,  // Set on any DOM element. 
										// If you care about non responsive browser (like ie8) then use it on main wrapper. 
										// This will prevent from crazy resizing.
		fallbackEasing: 'swing', // Easing for CSS2 $.animate.
		info: false, // Callback to retrieve basic information (current item/pages/widths). 
					 // Info function second parameter is Owl DOM object reference.
		nestedItemSelector: false, // Use it if owl items are deep nested inside some generated content. 
								   // E.g 'youritem'. Dont use dot before class name.
		itemElement: 'div', // Item seletors
		stageElement: 'div', // Stage selectors
		refreshClass: 'owl-refresh', // Default CSS classes
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab' */
});	