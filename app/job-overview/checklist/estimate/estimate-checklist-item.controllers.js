(function (ng) {
    'use strict';

    ng.module("mi.repair.web")
        .controller("mi.repair.web.EstimateChecklistItemConfigCtrl", ['$scope', 'mi.repair.web.estimateService', 'mi.repair.web.EventAggregator',
            function($scope, estimateService, eventAggregator) {


                var viewModel = {};
                viewModel.states = getViewModelStates();
                viewModel.currentState = viewModel.states["default"];

                eventAggregator.subscribe("onEstimateAddedEvent", function(event, args) {

                    viewModel.attachedItem = {
                        text: "Estimate-ID: " + args.id + "  Total: " + args.amount
                    }
                    viewModel.currentState = viewModel.states["completed"];
                });

                $scope.checklistItemViewModel = viewModel;

                function getViewModelStates() {
                    return {
                        "default" : {
                            heading: "Estimate",
                            subHeading: "Required: Original estimate with print image.",
                            actions: [
                                {
                                    text: "Add Estimate",
                                    action: function() {
                                        console.log("Add Estimate clicked");

                                        var args = { templateUrl: "app/job-overview/checklist/estimate/add-estimate-box.html" }
                                        eventAggregator.publish("onShowModalEvent", args);
                                    }
                                }
                            ]
                        },
                        "completed" : {
                            heading: "Estimate",
                            subHeading: "Estimate attached but not yet submitted for review."
                        },
                        "approved" : {
                            heading: "Estimate",
                            subHeading: "Your estimate has been reviewed and approved by the carrier."
                        }
                    };
                }
            }]);
}(angular))
