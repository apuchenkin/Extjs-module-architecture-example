Ext.define('app.Application', {
    name: 'app',

    extend: 'Ext.app.Application',

    modules: {},

    getModules : function(){
        return this.modules;
    },

    addModule : function(module) {
        this.modules[module.id] = module;
    },

    getModule : function(id){
        var ms = this.modules;

        if(ms[id]) return ms[id];

        return false;
    },

    constructor: function(config) {
        var me = this;
        this.initModules(function() {
            me.dispatch();
        });

        console.log('constructor');
        console.log(me);

        this.callParent([config]);
    },

    init : Ext.emptyFn,

    initModules : function(callback) {
        var modules = this.modulesConfig,
            me = this;

        console.log(modules);

        Ext.each(modules, function(name) {
            var moduleName = name + '.Application';

            Ext.Loader.syncRequire(moduleName, function() {

                var app = Ext.ClassManager.get(moduleName);

                me.modules[name] = new app();
                me.modules[name].app = me;

                if (me.modules.length == modules.length) {
                    callback();
                }
            });
        });
    },

    dispatch: Ext.emptyFn,

    views: [
        // TODO: add views here
    ],

    controllers: [
        'app.controller.Main'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ]
});
