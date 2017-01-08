require(["logger", "notifier", "dataservice", "jQuery", "jqx-all"], function(logger, notifier, dataservice) {

	window.app = {
		data: {}
	};
	
	// Initialize the model
	var filterModel = new Backbone.Model();
	filterModel.set({
	    'actions': ['Sell'],
	    'orderType': 'Limit',
		'title': 'Balnk'
	});

	// Define views
	var FilterView = Backbone.View.extend({
	    bindings: {
	        '.action': 'actions',
	        '.order-type': 'orderType',
			'#text-value': 'title'
	    },
	    render: function () {
	        this.stickit();
	    }
	});

	var OutputView = Backbone.View.extend({
	    initialize: function () {
	        this.model.on('change', this.render);
	    },
	    render: function () {
	        var obj = this.model || this; // investigat: why in IE and old Chrome, *this* is model itself but not view in event handling
	        var data = obj.toJSON();
	        $('#actions-value').html(JSON.stringify(data.actions));
	        $('#order-type-value').html(JSON.stringify(data.orderType));
	        $('#title-value').html(JSON.stringify(data.title));
	    }
	});

	// Instantiate and render views
	var filterView = new FilterView({
	    model: filterModel,
	    el: '#filter'
	});
	
	
	var outputView = new OutputView({
	    model: filterModel,
	    el: '#output'
	});
		
	filterView.render();
	outputView.render();

	function handleCarsLoadedEvent(event){
	    alert(app.data.cars.length);
		//alert(cars.toJSON());
	};

	notifier.addListener("carsLoaded", handleCarsLoadedEvent);
	
    // Get templates
    var content = $("#content");
    var carTemplateSource = $("#car-template").html();
	
    // Car BB View (extended by stickit)
    var CarView = Backbone.View.extend({
        bindings: {
            '#make-input': 'make',
            '#model-input': 'model',
            '#make-desc': 'make',
            '#model-desc': 'model',
        },
        events: {
            //"click #options": "showOptions"
        },
        render: function() {
            this.$el.html(carTemplateSource);
            this.stickit();
            return this;
        },
        renderOptions: function() {
        },
        // A toggle to hide/show options
        // will load options from db if not already loaded
        showOptions: function () {
            var self = this;
        }
    });

    var getCars = function() {
        content.empty();
        dataservice.getCars()
            .then(gotCars);

        function gotCars(cars) {
        	  app.data.cars = cars;
            cars.forEach(// show cars
                function(car) {
                    var view = new CarView({ model: car });
                    content.append(view.render().el);
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

    getCars(); 
    
});
