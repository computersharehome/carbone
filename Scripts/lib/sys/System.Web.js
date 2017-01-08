<!--//--><%
//=============================================================================
// Jocys.com JavaScript.NET Classes               (In C# Object Oriented Style)
// Created by Evaldas Jocys <evaldas@jocys.com>
//-----------------------------------------------------------------------------
// You can include this script on both sides - server and client:
// Server: <!-- #INCLUDE FILE="ScriptFile.js" -->
// Client: <script type="text/javascript" src="ScriptFile.js"></script>
//-----------------------------------------------------------------------------
// Warning: Be careful about what code you include in such way. Since the  code
// will be passed to the client side as simple text, your code can be  seen  by
// anyone who wants. Never do this with  scripts  which  contain  any  kind  of
// passwords, database connection strings, or SQL queries.
//=============================================================================

/// <reference name="System.Web.js" assembly="System.Web" />

//=============================================================================
// Namespaces
//-----------------------------------------------------------------------------
// <PropertyGroup>
//		<RootNamespace>System.Web</RootNamespace>
// <PropertyGroup>
//-----------------------------------------------------------------------------
System.Type.RegisterNamespace("System.Web.Current");
//=============================================================================

//=============================================================================
// CLASS: Web.Browser
//-----------------------------------------------------------------------------

System.Web.StripTags = function(s){
	s = s ? s : this;
	return s.replace(/<\/?[^>]+>/gi, '');
}

System.Web.HtmlEncode = function(s){
	var html = s ? s : this;
	var div = document.createElement("div");
	var text = document.createTextNode(html);
	div.appendChild(text);
	return div.innerHTML;
}

System.Web.HtmlDecode = function(s){
	var html = s ? s : this;
	var div = document.createElement("div");
	div.innerHTML = System.Web.StripTags(html);
	return div.childNodes[0] ? div.childNodes[0].nodeValue : '';
}

System.Web.Browser = function(){
	this.IsIE = false;
	this.IsNS = false;
	this.IsFX = false;
	this.IsKQ = false;
	this.IsSF = false;
	var Browser = null;
	this.Version = new String;
	this.VersionMajor = null;
	this.OS = new String;

	// Detect DOM Support;
	this.IsDOM1 = (document.getElementById);
	this.IsDOM2 = (document.addEventListener && document.removeEventListener);

	var ua = new String(navigator.userAgent.toLowerCase());

  	// Detect operating system.
	var userAgent = new String(navigator.userAgent.toLowerCase());
	if (userAgent.indexOf("linux") > -1) this.OS = "Linux";
	else if (userAgent.indexOf("x11") > -1) this.OS = "Unix";
	else if (userAgent.indexOf("mac") > -1) this.OS = "Mac";
	else if (userAgent.indexOf("win") > -1) this.OS = "Windows";
	else this.OS = "unknown";

   // Detect Platform
	this.IsWin    = (ua.indexOf('win') != -1);
	this.IsWin32  = (this.isWin && ( ua.indexOf('95') != -1 || ua.indexOf('98') != -1 || ua.indexOf('nt') != -1 || ua.indexOf('win32') != -1 || ua.indexOf('32bit') != -1 || ua.indexOf('xp') != -1) );
	this.IsMac    = (ua.indexOf('mac') != -1);
	this.IsUnix   = (ua.indexOf('unix') != -1 || ua.indexOf('sunos') != -1 || ua.indexOf('bsd') != -1 || ua.indexOf('x11') != -1)
	this.IsLinux  = (ua.indexOf('linux') != -1);

	// Detect Windows Platform.
	this.IsWin95 = (this.IsWin && ua.indexOf("95") > -1);
	this.IsWin98 = (this.IsWin && ua.indexOf("98") > -1);
	this.IsWinNT = (this.IsWin && ua.indexOf("nt") > -1);
	this.IsWin2K = (this.IsWin && ua.indexOf("nt 5.0") > -1);
	this.IsWinXP = (this.IsWin && ua.indexOf("xp") > -1);
	//this.IsWin03 = (this.IsWin && ua.indexOf("03") > -1);
	//this.IsWinLH = (this.IsWin && ua.indexOf("03") > -1);

   //Detect Comaptiblity.
   //this.IsIECompatible = ((ua.indexOf('msie') != -1) && !this.isIE);
   //this.IsNSCompatible = ((ua.indexOf('mozilla') != -1) && !this.isNS && !this.isMozilla);
	this.JavaScriptVersion = new Number;
	document.write('\x3Cscript id="_BrowserJsvTest0" language="javascript"\x3Evar JSVersion;\x3C/script\x3E');
	document.write('\x3Cscript id="_BrowserJsvTest1" language="javascript1.0"\x3EJSVersion = 1.0;\x3C/script\x3E');
	document.write('\x3Cscript id="_BrowserJsvTest2" language="javascript1.1"\x3EJSVersion = 1.1;\x3C/script\x3E');
	document.write('\x3Cscript id="_BrowserJsvTest3" language="javascript1.2"\x3EJSVersion = 1.2;\x3C/script\x3E');
	document.write('\x3Cscript id="_BrowserJsvTest4"  language="javascript1.3"\x3EJSVersion = 1.3;\x3C/script\x3E');
	document.write('\x3Cscript id="_BrowserJsvTest5"  language="javascript1.4"\x3EJSVersion = 1.4;\x3C/script\x3E');
	document.write('\x3Cscript id="_BrowserJsvTest6"  language="javascript1.5"\x3EJSVersion = 1.5;\x3C/script\x3E');
	document.write('\x3Cscript id="_BrowserJsvTest7"  language="javascript1.6"\x3EJSVersion = 1.6;\x3C/script\x3E');
	document.write('\x3Cscript id="_BrowserJsvTest8"  language="javascript2.0"\x3EJSVersion = 2.0;\x3C/script\x3E');
	this.JavaScriptVersion = JSVersion;
	// Remove scripts.
	//for (var i = 0; i <= 8; i++){
	//	var scriptNode = document.getElementById("BrowserTest"+i);
	//	scriptNode.replaceNode(null);
	//	//document.removeChild(scriptNode);
	//}

	// CSS compatibility mode
	this.Mode = document.compatMode ? document.compatMode : 'BackCompat';

	// Detect Macromedia Flash.
	var FlashIsInstalled = new Boolean;
	var FlashVersion = new String;
	var FlashVersionMajor = new String;

	//var plugins = new String;
	//for (var i = 0; i <navigator.plugins.length;i++){
	//	plugins = plugins + navigator.plugins[i].name + "\n";
	//}
	//alert(plugins);

	//var mimes = new String;
	//alert(navigator.mimeTypes.length);
	//for (var i = 0; i < navigator.mimeTypes.length;i++){
	//	mimes = mimes + navigator.mimeTypes[i].Type+ " - " + navigator.mimeTypes[i].description +"\n";
	//}
	//alert(mimes);

	this.FlashIsInstalled = false;
	if (navigator.plugins && navigator.plugins.length){
		var x = navigator.plugins["Shockwave Flash"];
		if (x){
			this.FlashIsInstalled = true;
			if (x.description){
				var y = new String(x.description);
				this.FlashVersion = y.substring(y.indexOf('.')-1,y.length );
				this.FlashVersionMajor = parseFloat(this.FlashVersion);
			}
		}
		if (navigator.plugins["Shockwave Flash 2.0"]){
			this.FlashIsInstalled = true;
			this.FlashVersion = 2;
		}
	}else if (navigator.mimeTypes && navigator.mimeTypes.length){
		x = navigator.mimeTypes["application/x-shockwave-flash"];
		if (x && x.enabledPlugin){
			this.FlashIsInstalled = true;
		}
	}else{
		// Lets try VBScript detection method.
		result = 0;
		// Try to create Shockwave objects from version 20 to 3.
		for(var i = 20; i > 3; i--){
			execScript('on error resume next: result = CreateObject("ShockwaveFlash.ShockwaveFlash.'+i+'").GetVariable("$version")','VBScript');
			if (result) {
				this.FlashIsInstalled = 1;
				var re = new RegExp(",","g");
				this.FlashVersion = result.split(" ")[1].replace(re,".");
				this.FlashVersionMajor = parseFloat(this.FlashVersion);
				break;
			}
		}
	}
	//	if (this.FlashVersion.length > 0) this.FlashIsInstalled = true;

	// Detect Internet Explorer.
	var s = "msie";
	var p;
	if ((p = ua.indexOf(s)) > -1){
		this.IsIE = true;
		this.Name = "Microsoft Internet Explorer";
		this.Version = ua.substring(p+s.length,ua.indexOf(";",p));
		this.VersionMajor = parseFloat(ua.substr(p + s.length));
		return;
	}
	// Detect Mozilla Firefox.
	s = "firefox";
	if ((p = ua.indexOf(s)) > -1){
		this.IsFX = true;
		this.Name = "Mozilla Firefox";
		this.Version = navigator.vendorSub;
		this.VersionMajor = parseFloat(this.Version);
		return;
	}
	// Detect Netscape.
	s = "netscape6";
	if ((p = ua.indexOf(s)) > -1){
		this.IsNS = true;
		this.Name = "Netscape";
		this.Version = ua.substring(p+s.length+1,ua.indexOf(";",p));
		this.VersionMajor = parseFloat(ua.substr(p + s.length + 1));
		return;
	}
	// Detect Safari.
	s = "safari";
	if ((p = ua.indexOf(s)) > -1){
		this.IsSF = true;
		this.Name = "Safari";
		this.Version = parseFloat(ua.substring(ua.lastIndexOf(s+"/") + 7));
		return;
	}
	// Detect Konqueror.
	s = "konqueror";
	if ((p = ua.indexOf(s)) > -1){
		this.IsKQ = true;
		this.Name = "KDE Konqueror";
		this.OS = "Linux";
		this.VersionMajor = parseFloat(ua.substr(p + s.length + 1));
	}
	// Treat any other "Gecko" browser as NS 6.1.
	s = "gecko";
	if ((p = ua.indexOf(s)) > -1) {
		this.IsNS = true;
		this.Name = "Gecko";
		this.Version = 6.1;
		return;
	}
}

//System.Web.Current.Browser = new System.Web.Browser();

// Make sure that public browser object exist.
var browser = browser ? browser : new System.Web.Browser();

//=============================================================================
// CLASS: Cookies
//-----------------------------------------------------------------------------
// Make sure that the IO namespace exists.
System.Web.Cookies = System.Web.Cookies ? System.Web.Cookies : {}
//-----------------------------------------------------------------------------

System.Web.Cookies.Set = function(name, value, days){
	var expires = new String;
	// if days value was submited.
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = ";expires="+date.toGMTString();
	}else{
		expires = "";
	}
	document.cookie = name+"="+value+expires;
	//document.cookie = name+"="+value+expires+";domain=.wired.com;path=/;";
}

// ----------------------------------------------

System.Web.Cookies.Get = function(name, defaultValue){
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0){
		return c.substring(nameEQ.length,c.length);
	}
  }
  return defaultValue;
}

System.Web.Cookies.Remove = function(sName){
  document.cookie = sName + "=" + escape(sValue) + "; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
}

//=============================================================================
// CLASS: HttpContext
//-----------------------------------------------------------------------------
// Make sure that the IO namespace exists.
System.Web.HttpContext = System.Web.HttpContext ? System.Web.HttpContext : {}

System.Web.HttpContext.Request = function(target){
	this.Target;
	this.Href;
	//---------------------------------------------------------
	this.GetValue = function(name, ignoreCase){
		var arrQuery = new Array();
		var strName = new String();
		var results = null;
		var strQuery = new String(this.Href.substring(this.Href.indexOf("?") + 1, this.Href.length));
		arrQuery = strQuery.split("&");
		for(var i = 0;i < arrQuery.length;i++){
			strName = arrQuery[i].substring(0,arrQuery[i].indexOf("="));
			if (ignoreCase == true){
				name = name.toLowerCase();
				strName = strName.toLowerCase();
			}
			if (strName == name){
				results = arrQuery[i].substring(arrQuery[i].indexOf("=")+1,arrQuery[i].length);
				results = unescape(results);
				break;
			}
		}
		return results;
	}
	//--------------------------------------------------------
	this.ShowData = function(){
		var arrData = new Array();
		var sepPosition = this.Href.indexOf("?");
		var sLink = this.Href;
		var sData = "";
		var message = "";
		if (sepPosition == -1){
			message = "Link: "+sLink;
		}else{
			sLink = this.Href.substring(0, sepPosition);
			sData = this.Href.substring(sepPosition+1, this.Href.length);
			arrData = sData.split("&");
			message += "Link: "+sLink+"\r\n";
			message += "Data:\r\n";
			for(var i = 0;i < arrData.length;i++){
				var sName = arrData[i].substring(0,arrData[i].indexOf("="));
				var sValue = arrData[i].substring(arrData[i].indexOf("=")+1,arrData[i].length);
				message = message + sName + "='" + unescape(sValue)+"'\r\n";
			}
		}
		alert(message);
		return arrData;
	}
	//---------------------------------------------------------
	this.InitializeClass = function(){
		// Set submited values or default values.
		this.Target = target ? target : document;
		this.Href = new String(this.Target.location.href);
	}
	this.InitializeClass();
}

System.Web.HttpContext.Current = {};
System.Web.HttpContext.Current.Request = new System.Web.HttpContext.Request();

//=============================================================================
// CLASS: Anchor (STATIC)
//-----------------------------------------------------------------------------

/*
AnchorPosition.js
Author: Matt Kruse
Updated: by Evaldas Jocys

DESCRIPTION: These functions find the position of an <A> tag in a document,
so other elements can be positioned relative to it.

COMPATABILITY: Netscape 4.x,6.x,Mozilla, IE 5.x,6.x on Windows. Some small
positioning errors - usually with Window positioning - occur on the
Macintosh platform.

NOTES:

1) For popping up separate browser windows, use getAnchorWindowPosition.
   Otherwise, use getAnchorPosition

2) Your anchor tag MUST contain both Name and ID attributes which are the
   same. For example:
   <a name="test" id="test"> </a>

3) There must be at least a space between <a> </a> for IE5.5 to see the
   anchor tag correctly. Do not do <a></a> with no space.
*/

//  Returns an Object() having .X and .Y properties of the pixel coordinates
//  of the upper-left corner of the anchor. Position is relative to the PAGE.

System.Web.GetElementPagePoint = function(el){
	/// <summary>
	/// Get coordinates of element.
	/// </summary>
	var p = new System.Drawing.Point();
	el = typeof (el) == "string" ? document.getElementById(el) : el;
	var elx = el;
	var ely = el;
	p.X = elx.offsetLeft;
	while ((elx = elx.offsetParent) != null) p.X += elx.offsetLeft;
	p.Y = ely.offsetTop;
	while ((ely = ely.offsetParent) != null) p.Y += ely.offsetTop;
	return p;
}

System.Web.GetMousePagePoint = function(e) {
	/// <summary>
	/// Get coordinates of mouse pointer.
	/// </summary>
	var p = new System.Drawing.Point();
	if (window.Event) {
		p.X = e.pageX;
		p.Y = e.PageY;
	} else {
		var de = document.documentElement;
		p.X = event.clientX;
		p.X += de.scrollLeft ? de.scrollLeft : document.body.scrollLeft;
		p.Y = event.clientY;
		p.Y += de.scrollTop ? de.scrollTop : document.body.scrollTop;
	}
	return p;
}

// This is deprecated. Used only for compatibility.
System.Web.GetAnchorPosition = System.Web.GetElementPagePoint;


//  Returns an Object() having .x and .y properties of the pixel coordinates
//  of the upper-left corner of the anchor, relative to the WHOLE SCREEN.
System.Web.GetAnchorWindowPosition = function(anchorname) {
	var coordinates = System.Web.GetAnchorPosition(anchorname);
	var x = 0;
	var y = 0;
	if (document.getElementById){
		if (isNaN(window.screenX)){
			x = point.X - document.body.scrollLeft + window.screenLeft;
			y = point.Y - document.body.scrollTop + window.screenTop;
		}else{
			x = point.X + window.screenX + (window.outerWidth - window.innerWidth) - window.pageXOffset;
			y = point.Y + window.screenY + (window.outerHeight - 24 - window.innerHeight) - window.pageYOffset;
		}
	}else if (document.all){
		x = point.X - document.body.scrollLeft + window.screenLeft;
		y = point.Y - document.body.scrollTop + window.screenTop;
	}else if (document.layers){
		x = point.X + window.screenX + (window.outerWidth - window.innerWidth) - window.pageXOffset;
		y = point.Y + window.screenY + (window.outerHeight - 24 - window.innerHeight) - window.pageYOffset;
	}
	point.X = x;
	point.Y = y;
	return point;
}

// Functions for IE to get position of an object
System.Web.GetAnchorPosition._getPageOffsetLeft = function(el) {
	var ol = el.offsetLeft;
	while ((el = el.offsetParent) != null){
		ol += el.offsetLeft;
	}
	return ol;
}

System.Web.GetAnchorPosition._getWindowOffsetLeft = function(el) {
	return System.Web.GetAnchorPosition._getPageOffsetLeft(el) - document.body.scrollLeft;
}

System.Web.GetAnchorPosition._getPageOffsetTop = function(el){
	var ot = el.offsetTop;
	while((el = el.offsetParent) != null){
		ot += el.offsetTop;
	}
	return ot;
}

System.Web.GetAnchorPosition._getWindowOffsetTop = function(el){
	return System.Web.GetAnchorPosition._getPageOffsetTop(el) - document.body.scrollTop;
}

//=============================================================================
// CLASS: Anchor (STATIC)
//-----------------------------------------------------------------------------

System.Type.RegisterNamespace("System.Web.Script.Serialization");

System.Web.Script.Serialization.JavaScriptSerializer = function(){
	// ----------------------------------------------
	this.Serialize = function(o){
		return JSON.stringify(o);
	}
	// ----------------------------------------------
	this.Deserialize = function(s){
		return JSON.parse(s);
	}	
}

//==============================================================================
// END
//------------------------------------------------------------------------------
//%>