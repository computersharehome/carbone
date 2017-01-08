define('router', ["jquery", "knockout"], function ($, ko) {

    var routes = [{hash:'#/Home/', controller:'homeController', action: ''},
                  {hash:'#/Portfolio/',  controller:'portfolioController', action: ''},
                  {hash:'#/Settings/',  controller:'settingsController', action: ''}];
				  
    var defaultRoute = '#/Home/';
	
    var currentHash = '';
    var currentRoute;
    
    function startRouting(){
        window.location.hash = window.location.hash || defaultRoute;
        setInterval(hashCheck, 100);
    }
	
    function hashCheck(){
        if (window.location.hash != currentHash){
            for (var i = 0; currentRoute = routes[i++];){
                if (window.location.hash.startsWith(currentRoute.hash))
                    loadController(currentRoute.controller, currentRoute.action);
            }
			if (defaultRoute === '#/Home/') {
            }
            currentHash = window.location.hash;
        }
    }
    
    function loadController(controllerName, actionName){
        require([controllerName], function(controller){
            window.app = window.app || {};
            window.app.models = {};
            window.app.data = {};
            window.app.viewModels = {};
            var element = $('#app')[0];
            //call clean node, kind of unbind
            ko.cleanNode(element);

            controller.start(actionName);
        });
    }
    
    return {
        startRouting:startRouting
    };
});