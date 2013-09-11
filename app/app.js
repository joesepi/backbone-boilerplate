define(function(require, exports, module) {

    // External dependencies.
    // var _ = require('underscore');
    // var $ = require('jquery');
    // var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Layout = require('js/base/layout');
    var albums = require('data/albums');

    // console.log(albums);

    // var app = new Marionette.Application();
    // var pvxavLayout = new Layout();

    var Album = Backbone.Model.extend({});
    var Albums = Backbone.Collection.extend({});
    var AlbumsView = Marionette.CollectionView.extend({
        initialize: function () {
            this.collection.bind('reset', this.render, this);
        },
        render: function () {
            _.each(this.collection, function (i) {
                console.log(i);
            });
            console.log('----rendering in view---------');
        }
    });
    var Setup = function(initialModels){
        this.start = function(){
            this.models = new Albums();
            this.myView = new AlbumsView({collection: this.models});
            this.models.reset(initialModels);
        };
    };

    var pvxApp = new Setup(albums);
    pvxApp.start();

    console.dir(pvxApp);








    // Alias the module for easier identification.
    var pvx = module.exports;

    // The root path to run the application through.
    pvx.root = '/';
    // pvx.app = app;

});
