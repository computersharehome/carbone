require(["logger", "notifier", "dataservice", "UUID", "linq", "jQuery", "jqx-all"], function(logger, notifier, dataservice, UUID) {

    var getCars = function() {
        dataservice.getCars()
            .then(gotCars);

        function gotCars(cars) {
        	  app.data.cars = cars;
            cars.forEach(// show cars
                function(car) {
                });
            //enableSave();
        } 
    };

    var getOptions = function() {
        dataservice.getOptions()
            .then(gotOptions);

        function gotOptions(options) {
        	  app.data.options = options;
            options.forEach(// show options
                function(option) {
                });
            enableSave();
        } 
    };

    var enableSave = function() {
        var saveElements = $(".save");
        saveElements.removeClass("hidden");
        // only add the click handler once
        if (enableSave.initialized) { return; }
        saveElements.click(function() {
            dataservice.saveChanges();
        });
        enableSave.initialized = true;
    };

		var jsonArray;
		
		function handleCarsLoadedEvent(event){
		    logger.logToPage(JSON.stringify(app.data.cars));
		    jsonArray = app.data.cars;
				var queryResult = Enumerable.From(jsonArray)
		    .Where(function (x) { return x.attributes.make !== 'Toyota' })
		    .OrderBy(function (x) { return x.attributes.make })
		    .Select(function (x) { return x.attributes })
		    .ToArray();
		    
				logger.log(queryResult);
		};
	
		notifier.addListener("carsLoaded", handleCarsLoadedEvent);
		
		function handleOptionsLoadedEvent(event){
		    //logger.logToPage(JSON.stringify(app.data.options));
		};
	
		notifier.addListener("optionsLoaded", handleOptionsLoadedEvent);
		
    getCars(); 
    getOptions(); 
		
});
