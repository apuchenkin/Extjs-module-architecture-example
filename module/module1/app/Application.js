Ext.define('Module1.Application', {
    name: 'Module1',

    extend: 'Ext.app.Application',

    requires: [
        'Module1.controller.Main'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Module1.controller.Main'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],

    init: function() {
        console.log('init module1');
        console.log(this)
    }
});
