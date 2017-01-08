define("dataservice", ["backbone", "backbone.stickit", "breeze", "logger", "notifier"], function (backbone, stickit, breeze, logger, notifier) {
    
    backbone.stickit = stickit;
    
    /*** Breeze Configuration ***/

    // configure Breeze for Backbone (config'd for Web API by default)
    breeze.config.initializeAdapterInstances({modelLibrary: "backbone"});

    // Declare the camel case name convention to be the norm
    breeze.NamingConvention.camelCase.setAsDefault();

    // service name is route to the Web API controller
    var serviceName = 'http://localhost:35035/breeze/CarBones';

    /*** dataservice proper ***/
    
    // manager (aka context) is the service gateway and cache holder
    var manager = new breeze.EntityManager(serviceName);
    
    // get all cars from the service
    var getCars = function() {
        return breeze.EntityQuery
            .from("Cars")
            .using(manager)
            .execute()
            .then(querySucceeded)
            .fail(queryFailed);
        
        function querySucceeded(data) {
        	  app.data.cars = data.results;
            logger.success("fetched cars");
            notifier.notify("carsLoaded");
            return data.results;
        }
    };

    var saveChanges = function () {
        var msg = manager.hasChanges() ? "changes saved" : "nothing to save";
        return manager.saveChanges()
            .then(function() { logger.success(msg); })
            .fail(saveFailed);
    };
    
    function queryFailed(error) {
        logger.error("Query failed: " + error.message);
    }

    function loadOptionsFailed(error) {
        logger.error("Load of options failed: " + error.message);
    }

    function saveFailed(error) {
        logger.error("Save failed: " + error.message);
    }
    
    return {
        getCars: getCars,
        saveChanges: saveChanges
    };
    
});