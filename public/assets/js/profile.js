$(function() {
	$("#editBtn").click(function() {
		$("#edit-before").hide(200);
		$("#edit-after").show(200);
	});
	$("#saveBtn").click(function() {
		$("#edit-after").hide(200);
		$("#edit-before").show(200);
		$('#fullname').val($("#customerName").val());
		$('#phoneno').val($("#customerPhoneNo").val());
		$('#gender').val($("#customerGender option:selected").val());
		$('#country').val($("#customerCountry option:selected").val());
	});

});

/*$("#customerUserName").(function() {
	var value = $(this).val();
	$("#username").text(value);
});	
$("#customerName").(function() {
	var value = $(this).val();
	$("#fullname").text(value);
});	*/
