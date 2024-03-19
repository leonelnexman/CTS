

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.header-button');
  const header = document.querySelector('.header');
  const menu = document.querySelector('.menu');

  let isActive = false;

  button.addEventListener('click', function () {
    if (isActive) {
      button.classList.remove('active');
      header.classList.remove('active');
      menu.classList.remove('active');
      isActive = false;
    } else {
      button.classList.add('active');
      header.classList.add('active');
      menu.classList.add('active');
      isActive = true;
    }
  });
});

new fullpage('#fullPage', {
	autoScrolling: true,
	navigation: true,
	scrollHorizontally: true,
	anchors: ['main-section', 'advantages', 'equipment'],
	menu: '#menu',
	slidesNavigation: true,
	afterLoad: function(origin, destination, direction) {
	  var navv = document.querySelector('.navv');
	  if(destination.index > 0) {
		navv.classList.add('active');
	  } else {
		navv.classList.remove('active');
	  }
	
	  if (destination.anchor == 'equipment') {
		var elements = document.querySelectorAll('.equipment-content-left-one');
		elements.forEach(function(element, index) {
		  setTimeout(function() {
			element.classList.add('animate__animated', 'animate__fadeInUp');
		  }, index * 250); // Adjust the delay as needed (200ms here)
		});
	  }
	}
  })










// After update OptimizedHTML5
let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

const body = document.querySelector('body')

	cx = window.innerWidth / 2
	cy = window.innerHeight / 2

	body.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY

		request = requestAnimationFrame(updateMe)

		mouseCoords(e)
		cursor.classList.remove('hidden')
		follower.classList.remove('hidden')

	})

	function updateMe() {

		dx     = clientX - cx
		dy     = clientY - cy
		tiltx  = dy / cy
		tilty  = dx / cx
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
		degree = radius * 12
		gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })

	}

	const cursor = document.getElementById('cursor');
	const follower = document.getElementById('aura');
	const links = document.querySelectorAll('a, button');

	mouseX = 0, mouseY = 0, posX = 0, posY = 0

	function mouseCoords(e) {

		mouseX = e.pageX
		mouseY = e.pageY

	}

	gsap.to({}, .01, {

		repeat: -1,

		onRepeat: () => {

			posX += (mouseX - posX) / 5
			posY += (mouseY - posY) / 5

			gsap.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY
				}
			})

			gsap.set(follower, {
				css: {
					left: posX - 24,
					top: posY - 24
				}
			})

		}

	})

	for(let i = 0; i < links.length; i++) {

		links[i].addEventListener('mouseover', () => {
			cursor.classList.add('active')
			follower.classList.add('active')
		})

		links[i].addEventListener('mouseout', () => {
			cursor.classList.remove('active')
			follower.classList.remove('active')
		})

	}

	body.addEventListener('mouseout', () => {
		cursor.classList.add('hidden')
		follower.classList.add('hidden')
	})

})
