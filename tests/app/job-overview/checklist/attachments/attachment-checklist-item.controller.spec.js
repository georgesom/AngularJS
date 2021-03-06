describe("mi.repair.web.AttachmentChecklistItemCtrl Tests", function() {
    beforeEach(module("mi.repair.web"));

    var _scope;
    var _sut;
    var mockEventAggregator = {
        subscribe: jasmine.createSpy()
    };

    beforeEach(inject(function($rootScope, $controller) {
        _scope = $rootScope.$new();
        _sut = $controller('mi.repair.web.AttachmentChecklistItemCtrl',
            {
                $scope: _scope,
                "mi.repair.web.EventAggregator": mockEventAggregator
            });
    }));

    describe("When constructing AttachmentChecklistItemCtrl", function() {
        describe("States Tests", function() {

            var states;
            beforeEach(function() {
                states = _scope.checklistItemViewModel.states;
            })

            describe("Default State Tests", function() {

                var defaultState;
                beforeEach(function(){
                    defaultState = states["default"];
                })
                it("should have default state defined", function() {
                    expect(defaultState).toBeDefined();
                });

                it("should set heading", function() {
                    expect(defaultState.heading).toBe("Photos & Attachments");
                });

                it("should set subHeading", function() {
                    expect(defaultState.subHeading).toBe("Required: Minimum of 1 photo of the damage area.");
                });
            })
        });
    });
});
