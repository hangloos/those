(function() {

    'use strict';

    var tabs = {
        transclude: true,
        controller: TabsController,
        templateUrl: 'components/tab-component/tabs.html'
    }

    function TabsController() {
        console.log("tabs")
        var panes = this.panes = []

        this.addPane = function(pane) {
            if (panes.length === 0) {
                this.select(pane)
            }
            panes.push(pane)
        }

        this.select = function(pane) {
            angular.forEach(panes, function(pane) {
                pane.selected = false
            });
            console.log(pane)
            pane.selected = true
            console.log(pane)
        }
    }

    angular
        .module('those-movie-guys')
        .component('tabs', tabs)

}());
