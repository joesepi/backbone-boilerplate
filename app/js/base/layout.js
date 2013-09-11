define(function(require, exports, module) {
    var Marionette = require('marionette');

    var Layout = Marionette.Layout.extend({
        initialize: function () {
            console.log('-------initializing base view---------');
        }
    });

    module.exports = Layout;

});
