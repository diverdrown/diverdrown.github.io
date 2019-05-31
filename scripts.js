
function completeOrder(){
	var success = false;
	
	// validate all fields
	fields = ['customer-name','customer-email','customer-address','customer-city','customer-state','customer-zip','customer-country','cc-number','cc-cvc','cc-exp-month','cc-exp-year'];
	success = validateForm(fields);
	
	if(success){
		alert('submit');
	}
}

function orderStep(step){
	
	var success = true;
	var fields;
	
	if(step == 2){ // advancing to step two
		fields = ['customer-name','customer-email','customer-address','customer-city','customer-state','customer-zip','customer-country'];
		success = validateForm(fields);
	}
	else {
		// going backwards, don't need to check validation
	}
	
	if(success){
		
		$('#bill-ship-form').data("step", step);
		$('#bill-ship-form').attr("data-step", step);
		
		$('.bill-ship-form-section').removeClass('selected');
		$('.bill-ship-form-section[data-step=' + step + ']').addClass('selected');

	}
}

function validateForm(fields){
	var success = true;
	
	$(".order-form").removeClass('error');
	
	var field, value;
	for(var i in fields){
		if($('#' + fields[i]).is("input")){
			value = $('#' + fields[i]).prop('value');
		}
		if($('#' + fields[i]).is("select")){
			value = $('#' + fields[i]).val();
		}
		console.log(value);
		if(value.length == 0){
			success = false;
			$('#' + fields[i]).addClass('error');
		}
		
	}
	return success;
}

$(document).ready(function(){
	
	$("a.select-link").click(function (){
        $('html, body').animate({
            scrollTop: $("#select-size").offset().top
        }, 1000);
    });
	
	$(".bill-ship-form-radio").click(function(){
		
		var itemName = $(this).data("item");
		var itemPrice = $(this).data("price");
		
		$("#order-cart-item").html(itemName);
		$("#order-cart-price").html(itemPrice);
		
	});
	
	$('#four-times').click();
});