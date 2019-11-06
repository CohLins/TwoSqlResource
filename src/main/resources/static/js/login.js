$(document).ready(function() {
	
	//获失焦点事件
	$('.login_name').focus(function() {
		$('.login_bb1').css("border-bottom", "#fff solid 1px");
//		$('.login_name').css("border","none")
	});
	$('.login_name').blur(function() {
		$('.login_bb1').css("border-bottom", "#3DD7FD solid 1px");
	});
	$('.login_pwd').focus(function() {
		$('.login_bb2').css("border-bottom", "#fff solid 1px");
	});
	$('.login_pwd').blur(function() {
		$('.login_bb2').css("border-bottom", "#3DD7FD solid 1px");
	});
});

//样式提示语句低版本兼容
$(function() {
	// 如果不支持placeholder，用jQuery来完成
	if(!isSupportPlaceholder()) {
		// 遍历所有input对象
		$('input').each(
			function() {
				var self = $(this);
				var val = self.attr("placeholder");
				input(self, val);
			}
		);
	}
});
// 判断浏览器是否支持placeholder属性
function isSupportPlaceholder() {
	var input = document.createElement('input');
	return 'placeholder' in input;
}

// 用jQuery的input对象替换，获取placeholder属性的使用
function input(obj, val) {
	var $input = obj;
	var val = val;
	$input.attr({
		value: val
	});
	$input.focus(function() {
		if($input.val() == val) {
			$(this).attr({
				value: ""
			});
		}
	}).blur(function() {
		if($input.val() == "") {
			$(this).attr({
				value: val
			});
		}
	});
}