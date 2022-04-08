/*===================================
  Countdown Timer
===================================*/
// The End Of The Year Date
let countDownDate = new Date('Dec 31, 2021 23:59:59').getTime(),
	counter = setInterval(() => {
		// Get Date Now
		let dateNow = new Date().getTime(),
			// Find The Date Difference Between Now And Countdown Date
			dateDiff = countDownDate - dateNow,
			// Get Time Units
			// days = Math.floor(dateDiff / 1000 / 60 / 60 / 24),
			days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)),
			hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)),
			seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

		document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;
		document.querySelector('.hours').innerHTML =
			hours < 10 ? `0${hours}` : hours;
		document.querySelector('.minutes').innerHTML =
			minutes < 10 ? `0${minutes}` : minutes;
		document.querySelector('.seconds').innerHTML =
			seconds < 10 ? `0${seconds}` : seconds;

		if (dateDiff < 0) {
			clearInterval(counter);
		}
	}, 1000);

/*===================================
  Increase Numbers On Scrolling
===================================*/
let scrollToTopButton = document.querySelector('.scroll-to-top'),
	progressSpans = document.querySelectorAll('.the-progress span'),
	skillsSection = document.querySelector('.our-skills'),
	statsSection = document.querySelector('.stats'),
	nums = document.querySelectorAll('.stats .number'),
	started = false; // Function Started ? No

scrollToTopButton.onclick = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};
window.onscroll = () => {
	// Display Scroll To Top Button
	window.scrollY >= 300
		? (scrollToTopButton.style.display = 'block')
		: (scrollToTopButton.style.display = 'none');
	// Skills Animation Width
	if (window.scrollY >= skillsSection.offsetTop - 250) {
		progressSpans.forEach((span) => {
			span.style.width = span.dataset.width;
		});
	}
	// Stats Increase Number
	if (window.scrollY >= statsSection.offsetTop - 300) {
		if (!started) {
			nums.forEach((num) => startCount(num));
		}
		started = true;
	}
};
// Start Count Function
function startCount(el) {
	let goal = el.dataset.goal,
		count = setInterval(() => {
			el.textContent++;
			if (el.textContent == goal) {
				clearInterval(count);
			}
		}, 2000 / goal);
}
