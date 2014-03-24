Ext.application({
    name: 'module1',

    extend: 'module1.Application',
    
    autoCreateViewport: true,

    init: function() {
        console.log('init module1');
        console.log(this)
    }
});
