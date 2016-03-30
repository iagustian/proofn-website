$(document).ready(function(){
	$('#form-request-invitation').validate();

	$('#btn-request-invitation').click(function(){
		if($('#btn-request-invitation').prop('disabled') == true){
			return;
		}
		$('#error-message-wrapper').hide();
		if($('#form-request-invitation').valid()){
			

			$('#btn-request-invitation').prop('disabled',true);
			$('#btn-request-invitation').text('Processing...');
			$.ajax({
				method: "POST",
				url: "https://app.proofn.com:8080/v0/request-invitation",
				dataType: "json",
				data: $('#form-request-invitation').serialize()
			})
			.done(function( msg ) {
				$('#btn-request-invitation').hide();
				$('#btn-invitation-sent').show();
			})
			.fail(function( response) {
				console.log(response.responseJSON.message);
				$('#btn-request-invitation').prop('disabled',false).text('Invite Me');
				if(response.status == 422 || response.status == 428){
					$('#error-message').text(response.responseJSON.message);
				}else if(response.status >= 500){
					$('#error-message').text('Server encountered internal error, please try again later.');
				}else{
					$('#error-message').text('Could not connect to server, please check your internet connection.');
				}
				$('#error-message-wrapper').show();
			})
			.always(function( msg ) {
			});
		}
	});


	
});