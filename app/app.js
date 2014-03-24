Ext.application({
    name: 'app',
    extend: 'app.Application',
    autoCreateViewport: true,

    modulesConfig: [
        'Module1',
        'Module2'
    ],
    init: function(){
        Ext.QuickTips.init();
        console.log('Application started');
    },

    dispatch: function() {
        console.log('dispatch');
    }
});