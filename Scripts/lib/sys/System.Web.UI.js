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

/// <reference name="System.Web.UI.js" assembly="System.Web.UI" />

//=============================================================================
// Namespaces
//-----------------------------------------------------------------------------
// <PropertyGroup>
//		<RootNamespace>System.Web.UI</RootNamespace>
// <PropertyGroup>
//-----------------------------------------------------------------------------
System.Type.RegisterNamespace("System.Web.UI.Css");
//=============================================================================


System.Web.UI.Css.GetRules = function(context){
	/// <summary>
	/// Get CSS rules from all style sheets.
	/// </summary>
	/// <returns>void</returns>
	var rules = {};
	var context = (context) ? context : document;
	for (var s = 0; s < context.styleSheets.length; s++){
		var styleSheet = context.styleSheets.item(s);
		for (var r = 0; r < styleSheet.rules.length; r++){
			var rule = styleSheet.rules.item(r);
			context[rule.selectorText] = rule.style.cssText;
		}
	}
	return rules;
}

System.Web.UI.Css.GetCssText = function(selectorText, context){
	/// <summary>
	/// Get CSS Text by Selector Text (className).
	/// </summary>
	/// <returns>void</returns>
	var text = "";
	var context = (context) ? context : document;
	for (var s = 0; s < context.styleSheets.length; s++){
		var styleSheet = context.styleSheets.item(s);
		for (var r = 0; r < styleSheet.rules.length; r++){
			var rule = styleSheet.rules.item(r);
			if (rule.selectorText == selectorText){
				text = rule.style.cssText;
				break;
			}
		}
	}
	return text;
}

System.Web.UI.Css.AddStyleSheet = function(href, context){
	/// <summary>
	/// Dynamically add CSS StyleSheet.
	/// </summary>
	/// <returns>void</returns>
	var context = (context) ? context : document;
	if (context.createStyleSheet){
		context.createStyleSheet(href);
	}else{
		var el = context.createElement('link');
		//var styles = "@import url('"+href+"');";
		//el.href='data:text/css,'+escape(styles);
		el.href = href;
		el.rel = "stylesheet";
		el.type = "text/css";
		document.getElementsByTagName("head")[0].appendChild(el);
	}
}

//==============================================================================
// END
//------------------------------------------------------------------------------
//%>