var require = {
    baseUrl: "/",
    waitSeconds: 5,
    paths: {
        "backbone": "Scripts/lib/backbone/backbone",
        "backbone.stickit": "Scripts/lib/backbone/backbone.stickit",
        "bootstrap": "Scripts/lib/bootstrap/bootstrap",
        "bootstrap-editable": "Scripts/lib/bootstrap-editable/bootstrap-editable",
        "breeze": "Scripts/lib/breeze/breeze.debug",
        "breeze.modelLibrary.backbone": "Scripts/lib/breeze/breeze.modelLibrary.backbone",
        "jquery": "Scripts/lib/jquery/jquery-1.10.2",
        "jQuery": "Scripts/lib/jquery/jquery-1.10.2",
        "jqx-all": "Scripts/lib/jqwidgets/jqx-all",
        "knockout": "Scripts/lib/knockout/knockout-3.2.0",
        "knockout-projections": "Scripts/lib/knockout/knockout-projections.min",
        "knockout-x-editable": "Scripts/lib/knockout-x-editable/knockout.x-editable",
        "knockout-validation": "Scripts/lib/knockout-validation/knockout.validation",
        "koGrid": "Scripts/lib/koGrid/koGrid-2.1.1",
        "mockjax": "Scripts/lib/mockjax/jquery.mockjax",
        "modernizr": "Scripts/lib/modernizr/modernizr-2.6.2",
        "Q": "Scripts/lib/q/q.min",
        "breeze.savequeuing": "Scripts/lib/breeze/breeze.savequeuing",
        "text": "Scripts/lib/require/text",
        "toastr": "Scripts/lib/toastr/toastr.min",
        "underscore": "Scripts/lib/underscore/underscore",
        // Boot
        "router": "Scripts/app/router",
        "app": "Scripts/app/app",
        "logger": "Scripts/app/logger",
        "notifier": "Scripts/app/notifier",
		// Models
        "user": "Scripts/app/models/user",
		// Services
        "dataservice": "Scripts/app/dataservice",
        // Components - register inside "main.js"
        // Utils
        "ko.bindings": "Scripts/lib/utils/ko.bindings",
        "date": "Scripts/lib/utils/date",
        "UUID": "Scripts/lib/utils/UUID"
		},
    shim: {
        "backbone": {
            export: "backbone",
            deps: ["jquery", "underscore"]
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        "breeze": {
            deps: ["Q"]
        },
        "jqx-all": {
            export: "$",
            deps: ["jquery", "knockout", "app"]
        }
    }
}