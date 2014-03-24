Ext.define('Module2.Application', {
    name: 'Module2',

    extend: 'Ext.app.Application',

    requires: [
        'Module2.controller.Main'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Module2.controller.Main'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],

    init: function() {
        console.log('init module2')
    }
});
