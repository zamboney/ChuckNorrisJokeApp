"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.drawer.off('drawerClosed');
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    AppComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], AppComponent.prototype, "drawerComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "./stage-8/app.component.html",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUErRTtBQUMvRSxzRUFBb0c7QUFNcEcsSUFBYSxZQUFZO0lBQXpCO0lBZ0JBLENBQUM7SUFiRyxrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFTSxtQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBR0wsbUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBRHNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQWtCLGdDQUFzQjtxREFBQztBQWZsRSxZQUFZO0lBSnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsOEJBQThCO0tBQzlDLENBQUM7R0FDVyxZQUFZLENBZ0J4QjtBQWhCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3RhZ2UtOC9hcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTtcbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIub2ZmKCdkcmF3ZXJDbG9zZWQnKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xufVxuIl19