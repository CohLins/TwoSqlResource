layui.use('form', function() {
				var form = layui.form;
				form.render();
			});
			layui.use('form', function() {
						var form = layui.form;
						form.on('select(area-select)', function(data) {

							console.log(data);
							$("#imageFullScreenimg").attr("src", data.value);
							console.log($("#imageFullScreenimg").attr("src"));
						})
						var layer = layui.layer;
						$("#imageFullScreenimg").click(function() {
							layer.open({
								title: ["查看", "background-color:#fff;border:1px solid #3dd7fd;color:#000"],
								area: ["900px", "700px"],
								type: 2,
								maxmin: true,
								content: ['/DrugsTerrace/image-viewer.html?url=' + $(this).attr('src'), 'no']
							});
						})
			})
			//			var info = {
			//				"2": [{
			//					top: "57",
			//					left: "375"
			//				}, {
			//					top: "57",
			//					left: "200"
			//				}, {
			//					top: "57",
			//					left: "580"
			//				}],
			//				"3": [{
			//					top: "57",
			//					left: "500"
			//				}, {
			//					top: "57",
			//					left: "234"
			//				}]
			//			}
			//			layui.use(['element', 'form'], function() {
			//				var form = layui.form;
			//				form.on('select(area-select)', function(data) {
			//					var src = data.value;
			//					var index = src.charAt(src.lastIndexOf(".") - 1) + "";
			//					console.log(index);
			//					console.log(info[index]);
			//					var str = '<div style="position: relative;"  id="imageFullScreen">'
			//					if(info[index]) {
			//
			//						var classInfo = info[index];
			//						console.log(classInfo)
			//						for(var i = 0; i < classInfo.length; i++) {
			//							str += '<span style="top: ' + classInfo[i].top + 'px;left: ' + classInfo[i]
			//								.left + 'px;"></span>'
			//						}
			//					}
			//					console.log(str);
			//					str += '<img  id="imageFullScreen" height="100%" width="100%" src="' + data.value +
			//						'" /></div>';
			//					$("#imgContainer").empty();
			//					$("#imgContainer").html(str);
			//					setTimeout(function() {
			//						setImageZoom();
			//					}, 1000)
			//				})
			//			})

			//			$(document).ready(function() {
			//				setImageZoom()
			//			});
			//
			//			function setImageZoom() {
			//				$('#imageFullScreen').smartZoom({
			//					'containerClass': 'zoomableContainer'
			//				});
			//				$('#zoomInButton,#zoomOutButton').bind("click", zoomButtonClickHandler);
			//
			//				function zoomButtonClickHandler(e) {
			//					var scaleToAdd = 0.8;
			//					if(e.target.id == 'zoomOutButton')
			//						scaleToAdd = -scaleToAdd;
			//					$('#imageFullScreen').smartZoom('zoom', scaleToAdd);
			//				}
			//			}
			$(".select_c").click(function() {
				if($(".select_ch").css("display") == "none") {
					$(".select_c i").css("border-top-color", "#102d51");
					$(".select_c i").css("border-bottom-color", "rgb(61, 215, 253)");
					$(".select_ch").css("display", "block");

				} else {
					$(".select_ch").css("display", "none");
					$(".select_c i").css("border-bottom-color", "#102d51");
					$(".select_c i").css("border-top-color", "rgb(61, 215, 253)");
				}
			});
			$(".select_ch dd").click(function() {
				var ddval = $(".select_ch dd").html();
				var ddlval = $(".select_ch dd").attr("lay-value");
				$(".select_ch dd").addClass("layui-this");

			})