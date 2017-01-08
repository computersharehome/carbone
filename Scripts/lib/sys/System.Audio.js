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

/// <reference name="System.Audio.js" assembly="System.Audio" />

//=============================================================================
// Namespaces
//-----------------------------------------------------------------------------
// <PropertyGroup>
//		<RootNamespace>System.Audio</RootNamespace>
// <PropertyGroup>
//-----------------------------------------------------------------------------
System.Type.RegisterNamespace("System.Audio");
//=============================================================================

//=============================================================================
// CLASS: Player
//-----------------------------------------------------------------------------

// Playing sound from JavaScript has traditionally been difficult, due to
// wildly different behavior among the various audio players. IE7 for Windows
// displays a small warning message and does not play sounds triggered by
// JavaScript unless the user goes out of their way to approve doing that.
// Which most people will not do. So the old-fashioned way of playing sound
// from JavaScript is pretty much dead for those of us who want to design web
// sites the general public can use. It is why this method will use popular
// Flash SoundManager to play audio files. And Flash works in all of the major
// web browsers, on all of the major operating systems
//
// Note: If you try to open SoundManager-based pages as local files, instead
// of via a web site, you will get warnings from your web browser. This does
// not happen when you move them to a real web site.
//
// Download latest version: http://www.schillmania.com/projects/soundmanager2
// Old version: http://www.schillmania.com/projects/soundmanager/

System.Type.RegisterNamespace("System.Audio.SoundManager");
	//---------------------------------------------------------
	// Private properties.
	//---------------------------------------------------------
	var me = this;
	//---------------------------------------------------------
	// METHOD: MethodName
	//---------------------------------------------------------
	this.LoadSheme = function(soundManager,mapName){

	}
	//---------------------------------------------------------
	// INIT: Class
	//---------------------------------------------------------
	this.InitializeClass = function(){
	}
	this.InitializeClass();
}

//	/*
//    Fades in the specified sound.
//    tag:String - The iedntifier for the sound you wish to fade in.
//    callback:Function - An additional parameter. A callback function to be executed once the the sound has faded in completely.
//    */
//    function FadeIn(tag, callBack, param1, param2){
//        var selectedSound = returnSoundObject(tag);
//        selectedSound.soundVolume = selectedSound.getVolume();
//        selectedSound.fade = setInterval(function(){
//			doFadeIn(selectedSound, tag, callBack, param1, param2);
//        }, 50);
//        Trace.Write("Fading in "+tag+".");
//    }
//    private function doFadeIn(sound, tag, _callBack, _param1, _param2) {
//        sound.soundVolume += 2;
//        sound.setVolume(sound.soundVolume);
//        Trace.Write(tag+" volume = "+sound.soundVolume);
//        if (sound.soundVolume>=100) {
//            sound.setVolume(100);
//            clearInterval(sound.fade);
//            Trace.Write(tag+" interval cleared.");
//            _callBack(_param1, _param2);
//        }
//    }
//
//    /*
//    Fades out the specified sound.
//
//    tag:String - The iedntifier for the sound you wish to fade out.
//    callback:Function - An additional parameter. A callback function to be executed once the the sound has faded out completely.
//    */
//    public function fadeOut(tag:String, callBack, param1, param2) {
//        var selectedSound = returnSoundObject(tag);
//        selectedSound.soundVolume = selectedSound.getVolume();
//        selectedSound.fade = setInterval(doFadeOut, 50, selectedSound, tag, callBack, param1, param2);
//    }
//    private function doFadeOut(sound, tag, _callBack, _param1, _param2) {
//        sound.soundVolume -= 2;
//        sound.setVolume(sound.soundVolume);
//        trace(tag+" volume = "+sound.soundVolume);
//        if (sound.soundVolume<=0) {
//            sound.setVolume(0);
//            clearInterval(sound.fade);
//            sound.stop();
//            trace(tag+" interval cleared.");
//            _callBack(_param1, _param2);
//        }
//    }


//=============================================================================
// NameSPACE: SoundKeys
//-----------------------------------------------------------------------------

// Location of Application Sound Shemes
// HKEY_USERS\.DEFAULT\AppEvents\Schemes

System.Type.RegisterNamespace("System.Audio.SoundKeys");

System.Audio.SoundKeys.Communicator = {
	Alert: 0,
	Busy: 1,
	CallForward: 2,
	ContactOffline: 3,
	ContactOnline: 4,
	EndCall: 5,
	Error: 6,
	Invite: 7,
	PhoneRingIn: 8,
	ReceiveIm: 9,
	RingBack: 10,
	RingIn: 11
}

//=============================================================================
// NameSPACE: SoundMaps
//-----------------------------------------------------------------------------

System.Type.RegisterNamespace("System.Audio.SoundMaps");

System.Audio.SoundMaps.Communicator = function(){
	var map = new Array();
	var keys = System.Audio.SoundKeys.Communicator;
	map[keys.Alert] = "Moc/Alert.wav";
	map[keys.Busy] = "Moc/Busy.wav";
	map[keys.CallForward] = "Moc/CallForward.wav";
	map[keys.ContactOffline] = "Moc/ContactOffline.wav";
	map[keys.ContactOnline] = "Moc/ContactOnline.wav";
	map[keys.EndCall] = "Moc/EndCall";
	map[keys.Error] = "Moc/Error.wav";
	map[keys.Invite] = "Moc/Invite.wav";
	map[keys.PhoneRingIn] = "Moc/PhoneRingIn.wav";
	map[keys.ReceiveIm] = "Moc/ReceiveIm.wav";
	map[keys.RingBack] = "Moc/RingBack.wav";
	map[keys.RingIn] = "Moc/RingIn.wav";
}

//==============================================================================
// END
//------------------------------------------------------------------------------
//%>