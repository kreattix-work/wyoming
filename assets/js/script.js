function RemoveSmallClass() {
	$('.dataTables_filter input').each(function () {
		$(this).removeClass('form-control-sm')
	})
}
const bodyClass = localStorage.getItem('bodyClass')
if (bodyClass === 'open') {
	if (window.innerWidth < 992) {
		$('body').addClass('sidebar-open')
	}
}
if (bodyClass === 'close') {
	if (window.innerWidth >= 992) {
		$('body').addClass('sidebar-mini')
	}
}
$(function () {
	$(document).on('click', '.navbar-toggler', function () {
		if (window.innerWidth >= 992) {
			$('body').removeClass('sidebar-open')
			$('body').toggleClass('sidebar-mini')
			if ($('body').hasClass('sidebar-mini')) {
				localStorage.setItem('bodyClass', 'close')
			} else {
				localStorage.setItem('bodyClass', 'open')
			}
		} else {
			$('body').removeClass('sidebar-mini')
			$('body').toggleClass('sidebar-open')
			if ($('body').hasClass('sidebar-open')) {
				localStorage.setItem('bodyClass', 'open')
			} else {
				localStorage.setItem('bodyClass', 'close')
			}
		}
	})
	$(window).on('resize', function () {
		if (window.innerWidth >= 992) {
			$('body').removeClass('sidebar-open')
		} else {
			$('body').removeClass('sidebar-mini')
		}
	})
	$('body,html').on('click', function (e) {
		var container = $('.layout-sidebar, .navbar-toggler')
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			$('body').removeClass('sidebar-open')
		}
	})
})

$(document).on('mouseenter', '.sidebar-mini .nav-item', function () {
	const element = $(this).find('.navbar-sub-menu')

	if (element.length > 0) {
		if ($(this).offset().top + element.height() >= window.innerHeight) {
			element.css({
				bottom: '5px'
			})
		} else {
			element.css({
				top: $(this).offset().top + 'px'
			})
		}
	}
})

$(document).on('mouseleave', '.nav-item', function () {
	const element = $(this).find('.navbar-sub-menu')
	if (element.length > 0) {
		element.css({
			top: '',
			bottom: ''
		})
	}
})
