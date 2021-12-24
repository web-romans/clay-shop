/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function showBurger() {
	var burger = document.querySelector('.burger');
	var menu = document.querySelector('.header__nav');
	var userbox = document.querySelector('.userbox ');

	burger.addEventListener('click', function () {
		this.classList.toggle("close");
		menu.classList.toggle("show");
		userbox.classList.toggle("show");
	});
}


export function subMenu() {

	var subLink = document.querySelectorAll('.menu__link--sub');

	for (var i = 0; i <= subLink.length; i++) {
		if (subLink[i]) {
			subLink[i].addEventListener('click', function () {
				var subMenu = this.parentElement.querySelector('.sub-menu');
				var openedSubMenu = this.parentElement.querySelectorAll('.show');

				function closeAllSubMenu() {
					for (var j = 0; j <= openedSubMenu.length; j++) {
						if (openedSubMenu[j]) {
							console.log(openedSubMenu[j]);
							openedSubMenu[j].classList.remove("show");
						}
					}
				}

				subMenu.addEventListener('click', function () {
					console.log("click");
					closeAllSubMenu();
				});

				if (subMenu) {
					this.classList.toggle("show");
					subMenu.classList.toggle("show");
				}

			});
		}
	}
}