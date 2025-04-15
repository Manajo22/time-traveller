const flashlight = document.querySelector('.flashlight');
		const glowZone = document.querySelector('.glow-zone');


		document.addEventListener('scroll', () => {
			const glowTop = glowZone.offsetTop;
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;


			if (scrollY + windowHeight > glowTop + 100) {
				flashlight.style.display = 'block';
			} else {
				flashlight.style.display = 'none';
			}
		});

		document.addEventListener('mousemove', (event) => {
			flashlight.style.left = event.clientX + 'px';
			flashlight.style.top = event.clientY + 'px';
		});