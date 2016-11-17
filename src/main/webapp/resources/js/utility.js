var utility = {
	me : this,
	addCommas : function(s) {
		s += "";
		x = s.split(".");
		x0 = x[0];
		x1 = x.length > 1 ? "." + x[1] : "";
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x0)) {
			x0 = x0.replace(rgx, "$1" + "," + "$2");
		}
		return x0 + x1;
	},
	remCommas : function(s) {
		return s.replace(/,/g, "");
	},
	trim : function(s) {
		s = s + "";
		var s = s.replace(/^\s\s*/, ""), t = /\s/, i = s.length;
		while (t.test(s.charAt(--i)))
			;
		return s.slice(0, i + 1);
	},
	itou : function(i) {
		return String.fromCharCode(i);
	},
	utoi : function(u) {
		return u.charCodeAt();
	},
	getKey : function(e) {
		return e ? e.which : window.event ? window.event.keyCode : null;
	},
	chkKey : function(allowedChars, caseSensitive, e) {
		var k = this.getKey(e), c;
		if (!k) {
			return true;
		}
		c = this.itou(k);
		if (!caseSensitive) {
			c = c.toLowerCase();
			allowedChars = allowedChars.toLowerCase();
		}
		if (allowedChars.indexOf(c) != -1) {
			return true;
		}
		// if (k == null || k == 0 || k == 8 || k == 9 || k == 13 || k == 27) {
		// return true;
		// }
		return false;
	},
	chkKeyInteger : function(e) {
		var k = this.getKey(e);
		if (k >= 48 && k <= 57) {
			return true;
		} else {
			return false;
		}
	},
	chkKeyDecimal : function(e) {
		var k = this.getKey(e);
		if ((k >= 48 && k <= 57) || k == 46) {
			return true;
		} else {
			return false;
		}
	},
	chkKeySignedInteger : function(e) {
		var k = this.getKey(e);
		if ((k >= 48 && k <= 57) || k == 45) {
			return true;
		} else {
			return false;
		}
	},
	chkKeySignedDecimal : function(e) {
		var k = this.getKey(e);
		if ((k >= 48 && k <= 57) || k == 45 || k == 46) {
			return true;
		} else {
			return false;
		}
	},
	isNumeric : function(x) {
		return !isNaN(parseFloat(x)) && isFinite(x);
	},
	toBEYear : function(ceYear) {
		return ceYear + 543;
	},
	toCEYear : function(beYear) {
		return beYear - 543;
	},
	compareDate : function(d1, d2) {
		var t = d1.getTime() - d2.getTime();
		if (t > 0) {
			return 1;
		} else if (t < 0) {
			return -1;
		} else {
			return 0;
		}
	},
	lpad : function(str, char, length) {
		str = str + "";
		while (str.length < length) {
			str = char + str;
		}
		return str;
	},
	rpad : function(str, char, length) {
		str = str + "";
		while (str.length < length) {
			str = str + char;
		}
		return str;
	},
	parseInt : function(s, radix) {
		if (s) {
			var a = parseInt(s, radix);
			if (a) {
				return a;
			}
		}
		return 0;
	},
	parseFloat : function(s, f) {
		var a = 0;
		if (s) {
			a = parseFloat(s);
			if (!a) {
				a = 0;
			}
		}
		return parseFloat(a.toFixed(f != 0 ? f ? f : 2 : f));
	},
	truncate : function(n) {
		return n | 0;
	},
	endsWith : function(s0, s1) {
		return s0.indexOf(s1, s0.length - s1.length) !== -1;
	},
	isValidEmailAddress : function(emailAddress) {
	    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	    return pattern.test(emailAddress);
	},
	getString : function(o) {
		return o || o == 0 ? "" + o : "";
	},
	getInteger : function(o, radix) {
		var i = parseInt("" + o, radix ? radix : 10);
		return i ? i : 0;
	},
	getFloat : function(o) {
		var f = parseFloat("" + o);
		return f ? f : 0.0;
	},
	getDate : function(o) {
		if ( ! o ) {
			return null;
		}
		var d = new Date(o);
		return ! isNaN( d.getTime() ) ? d : null;
	},
	addDays : function(d, i) {
		if ( ! d ) {
			return null;
		}
		try {
			d.setDate(d.getDate() + i);
		} catch (e) {
		}
		return d;
	},
	addYears : function(d, i) {
		if ( ! d ) {
			return null;
		}
		try {
			d.setFullYear(d.getFullYear() + i);
		} catch (e) {
		}
		return d;
	},
	checkPersonalID : function (id){
		if (id.length != 13) {
			return false;
		}
		for (i = 0, sum = 0; i < 12; i++) {
			sum += parseFloat(id.charAt(i)) * (13 - i);
		}
		if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12))) {
			return false;
		}
		return true;
	}
};
