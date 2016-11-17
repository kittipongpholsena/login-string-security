function Index(name) {
	var me = this;
	this.url = null;

	this.mane = name;

	this.maildata = null;
	this.passworddata = null;
	this.btnlogin = null;
	

	this.init = function() {

		
		me.maildata         = $("#maildata")[0];
		me.passworddata     = $("#passworddata")[0];
		me.btnlogin         = $("#btnlogin")[0];

		me.Formlogin        = $("#Formlogin")[0];

		$(me.btnlogin).click(function(){
			
			var data = {
					
					mail:$(me.maildata).val(),
					pass:$(me.passworddata).val()
			
			};

			system.ajax(
					
					"./login",
				
						data
					,
					function(data, textStatus, jqXHR) {
						
						if (data) {
							
							

						}
						
					}, 
					function(jqXHR, textStatus, errorThrown) {

						system.showLabelError(system.Message.ERROR);

					}, 
					function(jqXHR, textStatus) {

						
					});	
			
			console.log(data);
		});


	};}

var index;

$(function() {
	index = new Index("index");
	index.init();
});