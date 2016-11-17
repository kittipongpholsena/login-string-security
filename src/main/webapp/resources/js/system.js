

function System() {

	var me = this;

	// Attribute

	this.isShowWaiting = false;

	this.divLabelId = "system_divLabel";

	this.divLoadingId = "system_divLoading";

	this.divWaitingId = "system_divWaiting";

	this.divMessageId = "system_divMessage";

	this.divConfirmId = "system_divConfirm";

	// Configuration

	this.CssClass = {
		ERRORMESSAGE : "error_message",
		INFOMESSAGE : "info_message",
		LOADINGMESSAGE : "loading_message",
		INFOLABEL : "info_label",
		ERRORLABEL : "error_label"
	};

	this.Image = {
		CALENDAR : "resources/img/icon_calendar.png",
		CONFIRM : "resources/img/icon_confirm.png",
		DELETE : "resources/img/icon_delete.png",
		ERROR : "resources/img/icon_error.png",
		INFO : "resources/img/icon_info.png",
		LOADING : "resources/img/icon_loading.gif",
		SEARCH : "resources/img/icon_search.png",
		SUCCESS : "resources/img/icon_success.png",
		WAITING : "resources/img/icon_waiting.gif",
		AJAX : "resources/img/ajax-loader.gif"
	};

	this.Message = {
		SUCCESS : "ประมวลผลข้อมูลเสร็จเรียบร้อยแล้ว",
		MAIL_SUCCESS : "ส่งรหัสผ่านใหม่ เรียบร้อยแล้ว",
		MAIL_CHANGE_FAIL : "รหัสผ่านเดิมไม่ถูกต้อง",
		ERROR : "เกิดความผิดพลาดขณะประมวลผล",
		NOUSER : "ไม่มีข้อมูลผู้ใช้งานในระบบ"
	};

	this.Word = {
		CONFIRM : "CONFIRM",
		ERROR : "ERROR",
		INFO : "INFO",
		WARNING : "WARNING", 
		LOADING : "LOADING...",
		SUCCESS : "SUCCESS"
	};

	this.MIN_DATE = new Date(1753, 0, 1, 0, 0, 0, 0);

	this.MAX_DATE = new Date(9999, 12, 31, 0, 0, 0, 0);

	this.setRequire = function(o) {
		$(o).each(function() {
			if ($(this).is("input[type='checkbox'],input[type='radio']")) {
				$(this).addClass("REQUIRED required2");
			} else {
				$(this).addClass("REQUIRED required1");
			}
		});
	};

	this.unsetRequire = function(o) {
		$(o).removeClass("REQUIRED required1 required2");
	};

	this.checkRequire = function(o) {
		var ret = null;
		$(o).each(function() {
			if ($(this).is("input[type='checkbox'],input[type='radio']")) {
				if ($("input[name='" + $(this).attr("name") + "']:checked").length == 0) {
					ret = this;
					return false;
				}
			} else {
				if (utility.trim($(this).val()) == "") {
					ret = this;
					return false;
				}
			}
		});
		return ret;
	};

	this.message = function(text, onClose, style, title) {
		
		if (!onClose) {
			onClose = function() {
			};
		}
		if (!style) {
			style = BootstrapDialog.TYPE_INFO;
		}
		if (!title) {
			title = me.Word.INFO;
		}
		
		var dialogMessage = new BootstrapDialog({
            title: title,
            message: "<p class='text-center'>"+text+"</p>",
            type: style,
            closable: true,
            closeByBackdrop: false,
            closeByKeyboard: false,
            buttons: [{
                label: 'Ok',
                action: function(dialogRef){
                	onClose();
                    dialogRef.close();
                }
            }]
        });
		
		dialogMessage.setSize(BootstrapDialog.SIZE_SMALL);
		dialogMessage.open();

	};
	
	this.messageTextAlignCustom = function(text, onClose, style, align, title) {
		
		if (!onClose) {
			onClose = function() {
			};
		}
		if (!style) {
			style = BootstrapDialog.TYPE_INFO;
		}
		if (!title) {
			title = me.Word.INFO;
		}
		
		var dialogMessage = new BootstrapDialog({
            title: title,
            message: "<p class='text-"+align+"'>"+text+"</p>",
            type: style,
            closable: true,
            closeByBackdrop: false,
            closeByKeyboard: false,
            buttons: [{
                label: 'Ok',
                action: function(dialogRef){
                	onClose();
                    dialogRef.close();
                }
            }]
        });
		
		dialogMessage.setSize(BootstrapDialog.SIZE_SMALL);
		dialogMessage.open();
		
	};
	
	this.messageWarn = function(text, onClose, style, title) {
		
		if (!onClose) {
			onClose = function() {
			};
		}
		if (!style) {
			style = BootstrapDialog.TYPE_INFO;
		}
		if (!title) {
			title = me.Word.INFO;
		}
		
		var dialogMessage = new BootstrapDialog({
            title: title,
            message: "<p class='text-center'>"+text+"</p>",
            type: style,
            closable: true,
            closeByBackdrop: false,
            closeByKeyboard: false,
            buttons: [{
                label: 'Ok',
                action: function(dialogRef){
                	onClose();
                    dialogRef.close();
                }
            }]
        });
		
		dialogMessage.setSize(BootstrapDialog.SIZE_SMALL);
		dialogMessage.open();
		
	};

	this.alert = function(text, onClose) {
		me.message(
			text,
			onClose,
			BootstrapDialog.TYPE_INFO,
			"<span class='glyphicon glyphicon-info-sign'></span> " + me.Word.INFO
		);
	};

	this.alertTextAlignCustom = function(text, textAlign, onClose) {
		me.messageTextAlignCustom(
			text,
			onClose,
			BootstrapDialog.TYPE_INFO,
			textAlign,
			"<span class='glyphicon glyphicon-info-sign'></span> " + me.Word.INFO
		);
	};
	
	this.warning = function(text, onClose) {
		me.messageWarn(
			text,
			onClose,
			BootstrapDialog.TYPE_WARNING,
			"<span class='glyphicon glyphicon-warning-sign'></span> " + me.Word.WARNING
		);
	};
	
	this.error = function(text, onClose) {
		me.message(
			text,
			onClose,
			BootstrapDialog.TYPE_DANGER,
			"<span class='glyphicon glyphicon-remove-sign'></span> " + me.Word.ERROR
		);
	};

	this.confirm = function(text, onConfirm, onCancel) {
		if (!onConfirm) {
			onConfirm = function() {
			};
		}
		if (!onCancel) {
			onCancel = function() {
			};
		}
		
		var dialogMessage = new BootstrapDialog({
            title: "<span class='glyphicon glyphicon-question-sign'></span> " + me.Word.CONFIRM,
            message: "<p class='text-center'>"+text+"</p>",
            type: BootstrapDialog.TYPE_WARNING, // <-- Default value is BootstrapDialog.TYPE_WARNING
            closable: true, // <-- Default value is false
            closeByBackdrop: false,
            closeByKeyboard: false,
            draggable: true, // <-- Default value is false
            buttons: [{
                label: 'No',
                action: function(dialogRef){
                	onCancel();
                    dialogRef.close();
                }
            },{
                label: 'Yes',
                cssClass : 'btn btn-warning',
                action: function(dialogRef){
                	onConfirm();
                	dialogRef.close();
                }
            }]
        });
		
		dialogMessage.setSize(BootstrapDialog.SIZE_SMALL);
		dialogMessage.open();
		
	};

	this.ajax = function(url, data, onSuccess, onError, onComplete, isSynchronous) {
		if (!url) {
			return false;
		}
		if (!data) {
			data = {};
		}
		if (!onSuccess) {
			onSuccess = function() {
			};
		}
		if (!onError) {
			onError = function() {
			};
		}
		if (!onComplete) {
			onComplete = function() {
			};
		}
		return $.ajax({
					async: !isSynchronous,
					beforeSend: function (request)
		            {
		                request.setRequestHeader("X-CSRF-TOKEN", $("input[name='_csrf']").attr("value"));
		            },
					complete : onComplete,
					data : data,
					error : function(jqXHR, textStatus, errorThrown) {

						if (jqXHR.status == 403) {

							me.error("เซสชันของผู้ใช้หมดเวลาลงแล้ว กรุณาเข้าระบบใหม่อีกครั้ง", function() {

								// window.location.href = window.location.protocol + "//" + window.location.host + ( window.location.pathname.indexOf("/", 1) != -1 ? window.location.pathname.substring(0, window.location.pathname.indexOf("/", 1)) : window.location.pathname.substring(0, window.location.pathname.length) );

								window.location.href = window.location.href;

							});

						} else {

							onError();

						}

					},
					success : onSuccess,
					traditional : true,
					type : "POST",
					url : url
				});
	};

	this.cancelAjax = function(jqXHR) {
		if (jqXHR) {
			jqXHR.abort();
		}
	};

//	this.showWaiting = function() {
//
//		if ( ! me.isShowWaiting ) {
//
//			$("#" + me.divWaitingId).modal();
//
//			me.isShowWaiting = true;
//
//		}
//
//	};
//
//	this.hideWaiting = function() {
//
//		if ( me.isShowWaiting ) {
//
//			$("#" + me.divWaitingId).modal("hide");
//
//			me.isShowWaiting = false;
//
//		}
//
//	};

	this.showLoading = function() {
		$("#" + me.divLoadingId).show();
	};

	this.hideLoading = function() {
		$("#" + me.divLoadingId).hide();
	};

	this.showLabel = function(text, imageSrc, cssClass) {
		if (!text) {
			text = "";
		}
		if (!imageSrc) {
			imageSrc = me.Image.INFO;
		}
		if (!cssClass) {
			cssClass = me.CssClass.INFOLABEL;
		}
		$("#" + me.divLabelId)
			.removeClass(me.CssClass.INFOLABEL + " " + me.CssClass.ERRORLABEL)
			.addClass(cssClass)
			.html("<img alt='' src='" + imageSrc + "' />" + " " + text)
			.show("fade");
		setTimeout("system.hideLabel()", 3000);
	};

	this.hideLabel = function() {
		$("#" + me.divLabelId)
			.hide("fade");
	};

	this.showLabelError = function(text) {
		me.showLabel(text, me.Image.ERROR, me.CssClass.ERRORLABEL);
	};

	this.showLabelSuccess = function(text) {
		me.showLabel(text, me.Image.SUCCESS, me.CssClass.INFOLABEL);
	};

	this.datepicker = function(parameter) {

		return new me._datepicker(parameter);

	};

	this._datepicker = function(parameter) {

		var _i = this;

		// Attribute -----------------------------------------------------------
		this.hiddenObj = parameter.hiddenObject;
		this.textboxObj = parameter.textboxObject;
		this.settings = parameter.settings;
		this.isStart = parameter.isStart;
		this.pairObj = parameter.pairObject;
		this.onChange = parameter.onChange;
		this.callback = parameter.onComplete;
		this.toDayIsLBDate = parameter.toDayIsLBDate;
		this.toDayIsUBDate = parameter.toDayIsUBDate;
		this.lbDate = parameter.lbDate;
		this.ubDate = parameter.ubDate;

		// Method --------------------------------------------------------------
		this.getTime = function() {

			try {
				
				if($(_i.textboxObj).val() != ""){
				
					return $(_i.textboxObj).data("datepicker").getDate().getTime();
				
				}
				
			} catch (e) {
				
			}

			return null;

		};
		
		

		this.init = function() {

			$(_i.textboxObj, ".input-append.date").datepicker({
				 format		: 'dd/mm/yyyy',
				 locale		: moment.locale('th'),
				 language	: "th",
				 maskInput	: true,
				 autoclose	: true,
				 todayHighlight: true
			}).on("dp.change", function (e) {
				_i.onChange();
			});
			
		};

		_i.init();

		return this;

	};

	this.setReadonly = function(element) {

		if (!element) {

			return;

		}

		var a = [ ];

		var e = $._data(element, "events");

		if (e) {

			var k = e.keydown;

			if (k) {

				for (var i = 0; i < k.length; i++) {

					if ( ! k[i] ) {
						continue;
					}

					if (k[i].namespace != "readonly") {

						a[i] = {

								namespace : k[i].namespace,
								handler : k[i].handler

							};

					}

				}

			}

		}

		$(element)
			.prop("readonly", true)
			.prop("oldtabindex", $(element).prop("tabindex"))
			.prop("tabindex", "-1")
			.addClass("readonly")
			.off("keydown")
			.on("keydown.readonly", function(e) {
				e.stopImmediatePropagation();
				if (utility.chkKey("\t", false, e)) {
					return true;
				}
				if (e.ctrlKey) {
					return true;
				}
				return false;
			});

		for (var i = 0; i < a.length; i++) {

			if ( ! a[i] ) {
				continue;
			}

			$(element).on("keydown" + ( a[i].namespace ? "." + a[i].namespace : "" ), a[i].handler);

		}

	};

	this.unsetReadonly = function(element) {

		if (!element) {

			return;

		}

		$(element)
			.prop("readonly", false)
			.prop("tabindex", $(element).prop("oldtabindex"))
			.prop("oldtabindex", "")
			.removeClass("readonly")
			.off("keydown.readonly");

	};

	this.getString = function(element) {

		if (!element) {
			return "";
		}

		if ($(element).is("input,select,textarea")) {
			
			if (typeof $(element).val() == "undefined") {
				
				return "";
				
			}else
				
				return utility.trim($(element).val());

		} else {

			return utility.trim($(element).html());

		}

	};

	this.getInteger = function(element, radix) {

		if (!element) {
			return 0;
		}

		if (!radix) {
			radix = 10;
		}

		if ($(element).is("input,select,textarea")) {

			return utility.parseInt( utility.remCommas( $(element).val() ), radix );

		} else {

			return utility.parseInt( utility.remCommas( $(element).html() ), radix );

		}

	};

	this.getFloat = function(element) {

		if (!element) {
			return 0;
		}

		if ($(element).is("input,select,textarea")) {

			return utility.parseFloat( utility.remCommas( $(element).val() ) );

		} else {

			return utility.parseFloat( utility.remCommas( $(element).html() ) );

		}

	};

	this.getDate = function(element, format) {

		if (!element) {
			return null;
		}

		if ($(element).is("input,select,textarea")) {

			return system.parseDate($(element).val(), format);

		} else {

			return system.parseDate($(element).html(), format);

		}

	};

	this.getDateAsString = function(element) {

		var a = me.getString(element);

		if (a) {
			return a;
		}

		return null;

	};

	this.getIdentity = function(element) {

		var radix = 10;

		if (!element) {
			return null;
		}

		var s = "";

		if ($(element).is("input,select,textarea")) {

			s = $(element).val();

		} else {

			s = $(element).html();

		}

		var a = parseInt(s, radix);

		if (a) {
			return a;
		}

		return null;

	};

	this.parseDate = function(dateText, format, isBEYear) {

		var date = null;

		var time = null;

		if (!dateText) {

			return null;

		}

		var dateStr = dateText.split(" ")[0];

		var timeStr = dateText.split(" ")[1];

		var dateFormat = format.split(" ")[0];

		var timeFormat = format.split(" ")[1];

		if (isBEYear) {

			try {

				var dateStrParts = dateStr.split("/");

				dateStr = dateStrParts[0]
								+ "/"
								+ dateStrParts[1]
								+ "/"
								+ ( parseInt(dateStrParts[2], 10) - 543 );

			} catch (e) {

				return null;

			}

		}

		try {

			date = $.datetimepicker.parseDate(dateFormat, dateStr);

			try {

				time = $.datetimepicker.parseTime(timeFormat, timeStr);

			} catch(e) {

				time = {
					hour : 0,
					minute : 0,
					second : 0,
					millisec : 0
				};

			}

			date.setHours(time.hour);

			date.setMinutes(time.minute);

			date.setSeconds(time.second);

			date.setMilliseconds(time.millisec);

		} catch (e) {

			date = null;

		}

		return date;

	};

	this.getDifferenceHours = function(d0, d1) {
		if (d0 && d1) {
			return (d1.getTime() - d0.getTime()) / 1000 / 60 / 60;
		}
		return null;
	};

	this.toThaiDateAsString = function(dateText) {

		var date;
		var time;
		try {
			var dateStr = dateText.split(" ")[0];
			var timeStr = dateText.split(" ")[1];
			date = $.datetimepicker.parseDate("dd/mm/yy", dateStr);
			time = $.datetimepicker.parseTime("hh:mm", timeStr);
		} catch (e) {
			date = null;
			time = null;
		}
		if (date && time) {

			var ret =   utility.lpad(date.getDate(), "0", 2)
				+ "/" + utility.lpad((date.getMonth() + 1), "0", 2)
				+ "/" + utility.toBEYear(date.getFullYear())
				+ " "
				+ utility.lpad(time.hour, "0", 2) + ":"
				+ utility.lpad(time.minute, "0", 2);

			return ret;

		}

		return "";

	};

	this.getEnglishDateString = function(date) {

		if (date) {

			if ( isNaN( date.getTime() ) ) {

				return "";

			}

			var ret =   utility.lpad(date.getDate(), "0", 2)
				+ "/" + utility.lpad((date.getMonth() + 1), "0", 2)
				+ "/" + date.getFullYear();

			return ret;

		}

		return "";

	};
	
	
	this.getEnglishDateTimeString = function(date) {

		if (date) {

			if ( isNaN( date.getTime() ) ) {

				return "";

			}

			var ret =   utility.lpad(date.getDate(), "0", 2)
				+ "/" + utility.lpad((date.getMonth() + 1), "0", 2)
				+ "/" + date.getFullYear();

			return ret + " " + me.getDateTimeString(date);

		}

		return "";

	};

	this.getThaiDateString = function(date) {

		if (date) {

			if ( isNaN( date.getTime() ) ) {

				return "";

			}

			var ret =   utility.lpad(date.getDate(), "0", 2)
				+ "/" + utility.lpad((date.getMonth() + 1), "0", 2)
				+ "/" + utility.toBEYear(date.getFullYear());

			return ret;

		}

		return "";

	};
	
	this.getDateTimeString = function(date){
		
		if (date) {

			if ( isNaN( date.getTime() ) ) {

				return "";

			}
			
			var ret = date.toTimeString();
			
			ret = ret.split(' ')[0];
			
			ret = ret.split(":")[0] + ":" +  ret.split(":")[1]
			
			return ret;
		}
	}
	
	this.setNumberOnly = function(obj){
		$(obj).keypress(function(e) {
			if(e.which == 46){
		    	 return true;
			}else if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		        //display error message
		        return false;
			}
		});
	};
	
	this.setNumberCommasOnBlur = function(obj){
		$(obj).blur(function(){	
			this.value = me.formatNumber( system.getFloat(this) );
		});
	};
	
	this.formatNumber = function (number)
	{
		if(number){
		    var number = number.toFixed(2) + '';
		    var x = number.split('.');
		    var x1 = x[0];
		    var x2 = x.length > 1 ? '.' + x[1] : '';
		    var rgx = /(\d+)(\d{3})/;
		    while (rgx.test(x1)) {
		        x1 = x1.replace(rgx, '$1' + ',' + '$2');
		    }
		    return x1 + x2;
		}
		
		return 0;
	};
	
	this.formatMoney = function (number)
	{
		if(number){
		    var number = number.toFixed(2) + '';
		    var x = number.split('.');
		    var x1 = x[0];
		    var x2 = x.length > 1 ? '.' + x[1] : '';
		    var rgx = /(\d+)(\d{3})/;
		    while (rgx.test(x1)) {
		        x1 = x1.replace(rgx, '$1' + ',' + '$2');
		    }
		    return x1 + x2;
		}
		
		return "0.00";
	};
	
	
	// Waiting Dialog
	this.$dialog = $(
		'<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="width: 100%;padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-m" style="width:50%">' +
		'<div class="modal-content">' +
			//'<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
			'<div class="modal-body">' +
				'<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
			'</div>' +
		'</div></div></div>').appendTo('body');

		
	/**
	 * Opens our dialog
	 * @param message Custom message
	 * @param options Custom options:
	 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
	 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
	 */
	this.showWaiting = function (message, options) {
		// Assigning defaults
		if (typeof options === 'undefined') {
			options = {};
		}
		if (typeof message === 'undefined') {
			message = 'Loading';
		}
		var settings = $.extend({
			dialogSize: 'm',
			progressType: '',
			onHide: null // This callback runs after the dialog was hidden
		}, options);

		// Configuring dialog
		me.$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
		me.$dialog.find('.progress-bar').attr('class', 'progress-bar');
		if (settings.progressType) {
			me.$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
		}
		//me.$dialog.find('h3').text(message);
		// Adding callbacks
		if (typeof settings.onHide === 'function') {
			me.$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
				settings.onHide.call($dialog);
			});
		}
		// Opening dialog
		me.$dialog.modal('toggle');
	};


	/**
	 * Closes dialog
	 */
	this.hideWaiting = function () {
		me.$dialog.modal('hide');
	};

	this.setModalsAndBackdropsOrder = function() {  
	  var modalZIndex = 1040;
	  $('.modal.in').each(function(index) {
	    var $modal = $(this);
	    modalZIndex++;
	    $modal.css('zIndex', modalZIndex);
	    $modal.next('.modal-backdrop.in').addClass('hidden').css('zIndex', modalZIndex - 1);
	});
	  $('.modal.in:visible:last').focus().next('.modal-backdrop.in').removeClass('hidden');
	}

	
	this.init = function() {

//		$(document).on('show.bs.modal', '.modal', function(event) {
//		    $(this).appendTo($('body'));
//		}).on('shown.bs.modal', '.modal.in', function(event) {
//		    me.setModalsAndBackdropsOrder();
//		}).on('hidden.bs.modal', '.modal', function(event) {
//		    me.setModalsAndBackdropsOrder();
//		});

	};

	this.encodeHtml = function(value) {
		// create a in-memory div, set it's inner text(which jQuery
		// automatically encodes)
		// then grab the encoded contents back out. The div never exists on the
		// page.

		return $('<div/>').text(value).html();

	};

	this.decodeHtml = function(value) {

		return $('<div/>').html(value).text();

	};

	this.autocomplete = function(settings) {

		return new me._autocomplete(settings);

	};

	this._autocomplete = function(settings) {

		var _i = this;

		this.isClickSearch = null;
		this.selectedItem = null;
		this.isResponse = false;
		this.isDisabled = false;
		this.isClose = false;
		this.oldResponse = null;
		this.isBlur = false;

		this.settings = settings;

		this.element = settings.element;
		this.minLength = settings.minLength;
		this.parameter = settings.parameter;
		this.url = settings.url;

		this.change = settings.change;

		if (!_i.change) {
			_i.change = function() { };
		}

		this.select = settings.select;

		if (!_i.select) {
			_i.select = function() { };
		}

		this.disable = function() {
			$(_i.element).autocomplete("disable");
			me.setReadonly(_i.element);
			$(_i.imageEnabled).hide();
			$(_i.imageDisabled).show();
			_i.isDisabled = true;
		};

		this.enable = function() {
			$(_i.element).autocomplete("enable");
			me.unsetReadonly(_i.element);
			$(_i.imageEnabled).show();
			$(_i.imageDisabled).hide();
			_i.isDisabled = false;
		};

		$(_i.element)
			.autocomplete({
				disabled : true,
				minLength : _i.minLength ? _i.minLength : 2,
				source : function(request, response) {
					if (_i.isClose) {
						response(_i.oldResponse);
						return;
					}
					$.ajax({
						url : _i.url,
						dataType : "json",
						traditional : true,
						type : "POST",
						data : $.extend({
							query : utility.trim( request.term )
						}, _i.parameter),
						success : function(data, textStatus, jqXHR) {
							
							_i.oldResponse = $.map(data, function(item) {
								return {
									label : item.label,
									value : item.value,
									data  : item
								};
							});

							response(_i.oldResponse);

						}
					});
				},
				focus : function(event, ui) {

					return false;

				},
				close : function(event, ui) {

					_i.isResponse = false;

					_i.isClickSearch = false;

					$(_i.element).autocomplete("disable");

					$(_i.element).prop("recent", $(_i.element).val());

					if (_i.isBlur) {

						if (_i.selectedItem) {

							if (_i.selectedItem.value != $(_i.element).val()) {

								_i.selectedItem = null;

								$(_i.element).val("");

								$(_i.element).prop("old", "");

								_i.change(null);

							}

						} else {

							if ( $(_i.element).val() != $(_i.element).prop("old") ) {

								_i.selectedItem = null;

								$(_i.element).val("");

								$(_i.element).prop("old", "");

								_i.change(null);

							}

						}

					}

					_i.oldResponse = null;

				},
				response : function(event, ui) {

					_i.isResponse = true;

				},
				search : function(event, ui) {

					_i.isResponse = false;

				},
				select : function(event, ui) {

					_i.isResponse = false;

					_i.selectedItem = ui.item;

					$(_i.element).prop("old", _i.selectedItem.value);

					$(_i.element).prop("new", "N");

					_i.change(_i.selectedItem);

				}
			})
			.focus(function() {

				_i.isBlur = false;

				if (_i.isDisabled) {
					return;
				}

				if (_i.isClickSearch) {

					$(this)
						.autocomplete("enable")
						.autocomplete("search");

				}

				if ( ! $(_i.element).prop("new") ) {

					$(_i.element).prop("new", "N");

					if ( ! $(_i.element).prop("old") ) {

						$(_i.element).prop("old", $(_i.element).val());

					}

				}

				_i.isClickSearch = false;

			})
			.blur(function() {

				_i.isBlur = true;

				if (_i.isDisabled) {
					return;
				}

				$(_i.element).prop("recent", $(_i.element).val());

				if (_i.selectedItem) {

					if (_i.selectedItem.value != $(_i.element).val()) {

						_i.selectedItem = null;

						$(_i.element).val("");

						$(_i.element).prop("old", "");

						_i.change(null);

					}

				} else {

					if ( $(_i.element).val() != $(_i.element).prop("old") ) {

						_i.selectedItem = null;

						$(_i.element).val("");

						$(_i.element).prop("old", "");

						_i.change(null);

					}

				}

			}).keydown(function(e) {

				_i.isClose = true;

			}).keyup(function(e) {

				_i.isClose = true;

			}).keypress(function(e) {

				if (_i.isDisabled) {
					return;
				}

				_i.isClose = true;

				var keyCode = e.keyCode || e.which;

				if (keyCode == 13) {

					_i.isClose = false;

					_i.isClickSearch = true;

					$(_i.element).prop("recent", $(_i.element).val());

					$(_i.element)
						.autocomplete("enable")
						.focus();

			    }

			});

		this.imageEnabled = $("<img width='16px' height='16px' alt='...' src='" + me.Image.SEARCH + "' style='cursor: pointer; padding-left: 4px; padding-right: 4px;' />")
			.click(function() {

				_i.isClose = false;

				_i.isClickSearch = true;

				var value = $(_i.element).val();

				$(_i.element)
					.val(value ? value : $(_i.element).prop("recent"))
					.autocomplete("enable")
					.focus();

			}).insertAfter(this.element);

		this.imageDisabled = $("<img class='disabled' width='16px' height='16px' alt='...' src='" + me.Image.SEARCH + "' style='cursor: pointer; padding-left: 4px; padding-right: 4px;' />")
			.insertAfter(this.element)
			.hide();

		this.setData = function(data) {

			if (data) {

				_i.selectedItem = data;

				$(_i.element).value(_i.selectedItem.value);

			} else {

				_i.selectedItem = null;

				$(_i.element).value("");

			}

		};

		this.setNew = function() {

			$(_i.element)
				.prop("new", "")
				.prop("old", "")
				.prop("recent", "");

		};

	};

};



/** Custom Autocomplete **/
function RestrictAutoComplete(){
	
	this.autocomplete = function(settings) {
		
		var _i = this;
		
		this.settings = settings;

		this.element = settings.element;
		this.minLength = settings.minLength;
		this.targetHiddenObject = settings.targetHiddenObject;
		this.url = settings.url;
		
		this.isSelected = false;
		this.oldValue = $( this.element ).val();
		this.oldResponse = null;
		
		$( this.element ).autocomplete({
    		minLength: _i.minLength,
    		source : function(request, response) {
				$.ajax({
					url : _i.url,
					dataType : "json",
					traditional : true,
					type : "POST",
					data : { query : utility.trim( request.term ) },
					success : function(data, textStatus, jqXHR) {
						
						_i.oldResponse = $.map(data, function(item) {
							return {
								label : item.label,
								value : item.value,
								data  : item
							};
						});

						response(_i.oldResponse);
					}
				});
			},
    		
    		select: function( event, ui ) {
    			$(_i.targetHiddenObject).val(ui.item.value);
    			$(event.target).val(ui.item.label);
    			//console.log($(valueObjName).val());
    			
    			_i.isSelected = true;
    			_i.oldValue = ui.item.label;
    			//console.log('select : ' + _i.isSelected);
    			
    			return false; // Cancel Default Event for setting custom text
    		},
    		
    		change: function( event, ui ) {
    			//console.log('change : ' + _i.isSelected);
    			if(!_i.isSelected){ // Reset Value
    				$( event.target ).val('');
    				$(_i.targetHiddenObject).val('');
    			}
    		},
    		
    	});
		
		$( this.element ).focus(function() {
			_i.isSelected = false;
			//console.log('focus : ' + _i.isSelected);
		});
		
		$( this.element ).keyup(function( event ) {
			if(_i.oldValue != ""){
				if($( event.target ).val() != _i.oldValue){
					_i.isSelected = false;
				}else{
					_i.isSelected = true;
				}
			}
		});
	}
}


var system;

$(function() {

	// Fix ( jQuery UI v1.10.x )

	/**
	$.widget(

		"ui.dialog",

		$.extend( { } , $.ui.dialog.prototype , {

			_title : function(title) {

				if (!this.options.title) {

					title.html("&#160;");

				} else {

					title.html(this.options.title);

				}

			}

		})

	);
	**/

	system = new System();

	system.init();

});

// https://github.com/nakupanda/bootstrap3-dialog/issues/70#issuecomment-220800929

var oldJqTrigger = jQuery.fn.trigger;
jQuery.fn.trigger = function()
{
    if ( arguments && arguments.length > 0) {
//        if (typeof arguments[0] == "object") {
//            if (typeof arguments[0].type == "string") {
//                if (arguments[0].type == "show.bs.modal") {
//                    var ret = oldJqTrigger.apply(this, arguments);
//                    if ($('.modal:visible').length) {
//                        $('.modal-backdrop.in').first().css('z-index', parseInt($('.modal:visible').last().css('z-index')) + 10);
//                        $(this).css('z-index', parseInt($('.modal-backdrop.in').first().css('z-index')) + 10);
//                    }
//                    return ret;
//                }
//            }
//        }
//        else
        	if (typeof arguments[0] == "string") {
            if (arguments[0] == "hidden.bs.modal") {
                if ($('.modal:visible').length) {
                    $('.modal-backdrop').first().css('z-index', parseInt($('.modal:visible').last().css('z-index')) - 10);
                    $('body').addClass('modal-open');
                }
            }
        }
    }
    return oldJqTrigger.apply(this, arguments);
};
