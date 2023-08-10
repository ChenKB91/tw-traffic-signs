
$(document).ready(function () {
  $("input, select, textarea").on('input', update);
  $('#sign').css('font-size', '100px');
  resize_to_fit();
  // $("#content").on('input', resize_to_fit);
});

function resize_to_fit() {
  var fontsize = $('#sign').css('font-size');
  $('#sign').css('font-size', parseFloat(fontsize) - 1);
  if ($('#sign').height() >= $('#outer').height()) {
    resize_to_fit();
  }
}
function update() {
	var color = $("#color").val();
	var width = $("#out-width").val();
	var height = $("#out-height").val();
	$("label[for='out-width']").text("寬: " + width.toString() + 'px');
	$("label[for='out-height']").text("高: " + height.toString() + 'px');
	$("#outer").css('width', width);
	$("#outer").css('height', height);

	$("#sign").css('background-color', color);
	$("#sign").css('outline', '10px solid ' + color);
	$("#sign").text($("#content").val());
	$('#sign').css('font-size', '100px');
	resize_to_fit();
}