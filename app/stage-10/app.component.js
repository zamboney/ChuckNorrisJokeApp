"use strict";
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var AppComponent = (function () {
    function AppComponent() {
        this.myItems = ['profile', 'list'];
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
        templateUrl: "./stage-10/app.component.html",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUErRTtBQUMvRSxzRUFBb0c7QUFNcEcsSUFBYSxZQUFZO0lBSnpCO1FBTVcsWUFBTyxHQUFrQixDQUFDLFNBQVMsRUFBQyxNQUFNLENBQUMsQ0FBQTtJQWV0RCxDQUFDO0lBYkcsa0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRU0sbUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUdMLG1CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQURzQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUFrQixnQ0FBc0I7cURBQUM7QUFoQmxFLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSwrQkFBK0I7S0FDL0MsQ0FBQztHQUNXLFlBQVksQ0FpQnhCO0FBakJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdGFnZS0xMC9hcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICAgIHB1YmxpYyBteUl0ZW1zOiBBcnJheTxTdHJpbmc+ID0gWydwcm9maWxlJywnbGlzdCddXG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRyYXdlci5vZmYoJ2RyYXdlckNsb3NlZCcpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG59XG4iXX0=