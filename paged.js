$('.paged span').each(function(i){
				$(this).on('click',function(){
					var parent = $(this).parent();
					$('.paged span').eq(i).addClass('current').siblings().removeClass('current');
					if(i == timesRun) return;
					var n = i - timesRun;
					if(parent.attr('data-pre') == undefined){
						parent.attr('data-pre',i+1);
						container.animate({
							marginLeft: '-' + placeHolder*n
						}, speed, function() {
							container.css({
								marginLeft: 0
							}).find(opts.inner + ":lt("+i+")").appendTo(container);
						});
					}else{
						var pre = parent.data('pre'), now = i;
						
						if(now > pre){
							n = now - pre;
							console.log(now);
							console.log(pre);
							console.log(n);
							container.animate({
								marginLeft: '-' + placeHolder*n
							}, speed, function() {
								container.css({
									marginLeft: 0
								}).find(opts.inner + ":first").appendTo(container);
							});
						}
						timesRun = pre;
						parent.attr('data-pre',i);
					}
					
					// timesRun = i+1;
					// if(timesRun > len) timesRun = 0;
					
					
					// console.log('i: '+i);
					// console.log('times: '+timesRun);
					// console.log('n= i-times: '+n);
				})
			})