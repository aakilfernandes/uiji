$('form.subscribe .input.email input').click(function(){
				$('form.subscribe .expandable').slideDown();
			})
			
			$('form.subscribe .input.email input').bind('keypress click keyup keydown change',function(){
				var val = $(this).val();
				var isValid = true;
				
				if(val.indexOf('@')<2 || val.indexOf('.')<2){
					isValid = false;
				}
				
				if(val.indexOf('.')>val.length-2){
					isValid = false;
				}
				
				if(isValid){
					$('form.subscribe').data('isValid',true);
					$(this).removeClass('error')
					$('form.subscribe input[type=submit]').removeAttr('disabled');
				}else{
					$('form.subscribe').data('isValid',false);
					$('form.subscribe input[type=submit]').attr('disabled','disabled');
				}
			})
			
			$('form.subscribe').submit(function(){
				var isValid = $(this).data('isValid');
				if(isValid){
					submitForm($(this));
				}else{
					$(this).find('.email input').addClass('error').focus()
				}
				return false;
			})
			
			$('form.contact input,form.contact textarea').keypress(function(){
				var isValid = true;
				$('form.contact input,form.contact textarea').each(function(){
					if($(this).val().length<1){
						isValid = false;
					}else{
						$(this).removeClass('error')
					}
				})
				$('form.contact').data('isValid',isValid);
				if(isValid){
					$('form.contact .button input').removeAttr('disabled')
				}else{
					$('form.contact .button input').attr('disabled','disabled')
				}
			})
			
			$('form.contact').submit(function(){
				console.log('x')	;
				var isValid = true;
				$('form.contact input,form.contact textarea').each(function(){
					console.log('y');
					if($(this).val().length<1){
						console.log('invalid');
						isValid = false;
						$(this).addClass('error')
					}else{
						console.log('valid');
						$(this).removeClass('error')
					}
				});
				if(isValid){
					submitForm($(this));
				}
				return false;
			})
			
function submitForm($element){
	$.post($element.attr('action'),$element.serialize());
	
	$element.find('.input input, textarea').removeClass('error').val('')
	
	$element.find('.expandable').slideUp();
	
	$element
		.find('.button input')
		.css('background-color','white')
		.animate({backgroundColor:'#ccc'},'slow');
}
