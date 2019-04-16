ymaps.ready(init);

function init () {
	myMap = new ymaps.Map('map', {
		center: [56.324499, 43.989961],
		zoom: 14,
		controls: []
	}, {
		yandexMapDisablePoiInteractivity: true,
		/*restrictMapArea: [
		[56.372892, 43.866855],
		[56.283296, 44.098124]
		]*/
	});

	$('.soft_scroll').click( function(){
				var scroll_el = "#general";
				if ($(scroll_el).length != 0) {
					$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
				}
				return false;
			});
			$(".loader_inner").fadeOut();
			$(".loader").delay(400).fadeOut("slow");

	var MyBalloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(
			'<div class="my-layout"><h4>{{properties.h4}}</h4>' + 
			'<p class="descr">{{properties.p}}</p>' + 
			'<img class="popap" src="{{properties.imageHref}}" alt="" onclick="popap(this)" /></div>'
			);

	myPlacemark1 = new ymaps.Placemark([56.330355, 43.992889], {
		
		
		h4: 'ФАБРИКА «МАЯК»',
		p: 'НИЖНЕВОЛЖСКАЯ НАБЕРЕЖНАЯ, 11',
		imageHref: 'img/1.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point1.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark1.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point1-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point1.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point1.png');
	});

	myPlacemark2 = new ymaps.Placemark([56.329524, 43.990075], {
		
		
		h4: 'ФАБРИКА «МАЯК»',
		p: 'НИЖНЕВОЛЖСКАЯ НАБЕРЕЖНАЯ, 11',
		imageHref: 'img/2.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point2.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark2.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point2-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point2.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point2.png');
	});

	myPlacemark3 = new ymaps.Placemark([56.329512, 43.994326], {
		
		
		h4: 'FUTURO',
		p: 'РОЖДЕСТВЕНСКАЯ, 6',
		imageHref: 'img/3.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point3.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark3.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point3-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point3.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point3.png');
	});

	myPlacemark4 = new ymaps.Placemark([56.334934, 43.974961], {
		
		
		h4: 'ПАКГАУЗЫ',
		p: 'СТРЕЛКА',
		imageHref: 'img/4.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point4.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark4.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point4-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point4.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point4.png');
	});

	myPlacemark5 = new ymaps.Placemark([56.318386, 43.971877], {
		
		
		h4: 'МУКОМОЛЬНЫЙ З.',
		p: 'ЧЕРНИГОВСКАЯ, 17В',
		imageHref: 'img/11.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point5.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark5.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point5-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point5.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point5.png');
	});

	myPlacemark6 = new ymaps.Placemark([56.313442, 43.990845], {
		
		
		h4: 'ПАМЯТНИК',
		p: 'ПЛОЩАДЬ ГОРЬКОГО',
		imageHref: 'img/6.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point6.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark6.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point6-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point6.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point6.png');
	});

	myPlacemark7 = new ymaps.Placemark([56.307716, 43.991794], {
		
		
		h4: 'ТЕЛЕБАШНЯ',
		p: 'ПАРК ПУШКИНА',
		imageHref: 'img/7.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point7.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark7.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point7-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point7.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point7.png');
	});

	myPlacemark8 = new ymaps.Placemark([56.317223, 44.016973], {
		
		
		h4: 'ОСТРОГ',
		p: 'ПЛОЩАДЬ СВОБОДЫ, 2А',
		imageHref: 'img/3.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point8.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark8.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point8-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point8.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point8.png');
	});

	myPlacemark9 = new ymaps.Placemark([56.323965, 44.004882], {
		
		
		h4: '«РЕКОРД»',
		p: 'ПИСКУНОВА, 11/7',
		imageHref: 'img/9.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point9.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark9.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point9-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point9.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point9.png');
	});

	myPlacemark10 = new ymaps.Placemark([56.329492, 44.010002], {
		
		
		h4: 'ДОМ АРХИТЕКТОРА',
		p: 'ВЕРХНЕВОЛЖСКАЯ НАБЕРЕЖНАЯ, 2',
		imageHref: 'img/А.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point10.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark10.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point10-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point10.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point10.png');
	});

	myPlacemark11 = new ymaps.Placemark([56.327492, 44.005662], {
		
		
		h4: 'АРСЕНАЛ',
		p: 'КРЕМЛЬ, 6',
		imageHref: 'img/11.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/point11.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark11.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/point11-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/point11.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/point11.png');
	});

	myPlacemark12 = new ymaps.Placemark([56.322070, 44.012194], {
		
		
		h4: 'НИЖПОЛИГРАФ',
		p: 'ВАРВАРСКАЯ, 32',
		imageHref: 'img/4.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/pointH.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark12.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/pointH-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/pointH.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/pointH.png');
	});

	myPlacemark13 = new ymaps.Placemark([56.328800, 44.007259], {
		
		
		h4: 'АРСЕНАЛ',
		p: 'КРЕМЛЬ, 6',
		imageHref: 'img/А.jpg'
	}, {
		balloonContentLayout: MyBalloonContentLayoutClass, hasHint: false,
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'img/pointA.png',
		iconImageSize: [34, 80],
		iconImageOffset: [-17, -80],
	});
	myPlacemark13.events
	.add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', 'img/pointA-w.png');
          })
	.add('mouseleave', function (e) {
		e.get('target').options.set('iconImageHref', 'img/pointA.png');
	})
	.add('click', function(e){
		e.get('target').options.set('iconImageHref', 'img/pointA.png');
	});

	myMap.geoObjects
			.add(myPlacemark1)
			.add(myPlacemark2)
			.add(myPlacemark3)
			.add(myPlacemark4)
			.add(myPlacemark5)
			.add(myPlacemark6)
			.add(myPlacemark7)
			.add(myPlacemark8)
			.add(myPlacemark9)
			.add(myPlacemark10)
			.add(myPlacemark11)
			.add(myPlacemark12)
			.add(myPlacemark13)

	ZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" +
		"<div id='zoom-in' class='cntrl-btn'></div><br>" +
		"<div id='zoom-out' class='cntrl-btn'></div>" +
		"</div>", {

            // Переопределяем методы макета, чтобы выполнять дополнительные действия
            // при построении и очистке макета.
            build: function () {
                // Вызываем родительский метод build.
                ZoomLayout.superclass.build.call(this);

                // Привязываем функции-обработчики к контексту и сохраняем ссылки
                // на них, чтобы потом отписаться от событий.
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                // Начинаем слушать клики на кнопках макета.
                $('#zoom-in').bind('click', this.zoomInCallback);
                $('#zoom-out').bind('click', this.zoomOutCallback);
              },

              clear: function () {
                // Снимаем обработчики кликов.
                $('#zoom-in').unbind('click', this.zoomInCallback);
                $('#zoom-out').unbind('click', this.zoomOutCallback);

                // Вызываем родительский метод clear.
                ZoomLayout.superclass.clear.call(this);
              },

              zoomIn: function () {
              	var map = this.getData().control.getMap();
              	map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
              },

              zoomOut: function () {
              	var map = this.getData().control.getMap();
              	map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
              }
            }),
	zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});

	myMap.controls.add(zoomControl);

		}

		$(function () {

			$("img.popap").click(function () {
				var $src = $(this).attr("src");
				$(".show").fadeIn(0);
				$(".img-show img").attr("src", $src);
			});

			$("span, .overlay").click(function () {
				$(".show").fadeOut(0);
			});

		});

		function popap(obj) {
			var $src = $(obj).attr("src");
				$(".show").fadeIn(0);
				$(".img-show img").attr("src", $src);
		}

    /*document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
      };*/