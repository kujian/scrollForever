(function($) {
	//plugin name: scrollForever
	//plugin author: caibaojian
	//plugin url: http://caibaojian.com/scrollForever
	//plugin demo: http://caibaojian.com/demo/scrollForever/
	//license: MIT
	$.fn.scrollForever = function(options) {
		var defaults = {
			placeholder: 0,//非连续滚动时每次的滑动距离，可以自定义，如果没有自定义则根
			dir: 'left',//滚动方向，left & top
			container: 'ul',//外层对象
			inner: 'li',//内部元素
			speed: 1000,//非连续滚动速度
			delayTime: 0,//滚动间隔
			continuous: true,//是否连续
			num: 1//非连续一次滚动的数量
		};
		var opts = $.extend({}, defaults, options);
		var placeHolder = opts.placeholder;
		var dir = opts.dir;
		var speed = opts.speed;
		var Time = opts.Time;
		var num = opts.num;
		var delayTime = opts.delayTime;
		return this.each(function() {
			var obj = $(this);
			var container = obj.find(opts.container);
			var inner = container.find(opts.inner);
			var len = inner.length;
			var timesRun = 0;//滚动次数
			var distance, scrollDistance, scrollTime;
			//滚动前的准备工作
			function setScroll() {
				if (opts.continuous) {
					if (dir == 'left') {
						distance = inner.outerWidth() * len;
						container.css('width', 2 * distance);
						inner.clone().appendTo(container);
					} else if (dir == 'top') {
						distance = inner.outerHeight() * len;
						container.css('height', 2 * distance);
						inner.clone().appendTo(container);
					}
				} else {
					if (dir == 'left') {
						placeHolder = placeHolder != 0 ? placeHolder : inner.outerWidth() * num;
						distance = inner.outerWidth() * (len + 1);
						container.css('width', distance);
					} else if (dir == 'top') {
						placeHolder = placeHolder != 0 ? placeHolder : inner.outerHeight() * num;
						distance = inner.outerHeight() * (len + 1);
						container.css('height', distance);
					}
				}
			}
			setScroll();
			$('.paged span').each(function(i){
				$(this).on('click',function(){
					var self = $(this);
					var parent = self.parent('.paged');
					var n = i;
					timesRun = i;
					self.addClass('current').siblings().removeClass('current');
					if(parent.attr('data-pre') == undefined){
						parent.attr('data-pre',n);
					}else{
						var pre = parent.attr('data-pre'), now = i;
						if (i = pre) return ;
						if(i > pre){
							container.animate({
								marginLeft: '-' + placeholder* (i-pre)
							},speed,function(){
								container.css({
									marginLeft:0
								}).find(opts.inner + ':lt('+ pre +')')
							})
						}


					}
				})
			})
			$('.paged span').eq(0).addClass('current');
			function autoScroll() {
				
				timesRun += 1;
				if(timesRun >= len) timesRun = 0;
				$('.paged span').eq(timesRun).addClass('current').siblings().removeClass('current');
				if (opts.continuous) {
					//无缝不间歇滚动
					if (dir == 'left') {
						scrollDistance = obj.scrollLeft();
						if (scrollDistance >= distance) {
							obj.scrollLeft(0);
						} else {
							obj.scrollLeft(scrollDistance + 1);
						}
					} else if (dir == 'top') {
						scrollDistance = obj.scrollTop();
						if (scrollDistance >= distance) {
							obj.scrollTop(0);
						} else {
							obj.scrollTop(scrollDistance + 1);
						}
					}
				} else {	
					//非连续滚动，间断无缝滚动
					if (dir == 'left') {
						container.animate({
							marginLeft: '-' + placeHolder
						}, speed, function() {
							container.css({
								marginLeft: 0
							}).find(opts.inner + ":lt(" + num + ")").appendTo(container);
						});
					} else if (dir == 'top') {
						container.animate({
							marginTop: "-" + placeHolder
						}, speed, function() {
							container.css({
								marginTop: 0
							}).find(opts.inner + ":lt(" + num + ")").appendTo(container);
						});
					}
				}

			}
			
			//滚动函数
			var aTime = opts.continuous == true ? 20 : 2000;
			delayTime = delayTime == 0 ? aTime : delayTime;
			scrollTime = setInterval(autoScroll, delayTime);
			obj.hover(function() {
				clearInterval(scrollTime);
			}, function() {
				scrollTime = setInterval(autoScroll, delayTime);
			});
		})
	}
})(jQuery);