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
        templateUrl: "./stage-9/app.component.html",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUErRTtBQUMvRSxzRUFBb0c7QUFNcEcsSUFBYSxZQUFZO0lBSnpCO1FBTVcsWUFBTyxHQUFrQixDQUFDLFNBQVMsRUFBQyxNQUFNLENBQUMsQ0FBQTtJQWV0RCxDQUFDO0lBYkcsa0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDO0lBRU0sbUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUdMLG1CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQURzQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUFrQixnQ0FBc0I7cURBQUM7QUFoQmxFLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSw4QkFBOEI7S0FDOUMsQ0FBQztHQUNXLFlBQVksQ0FpQnhCO0FBakJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdGFnZS05L2FwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHVibGljIG15SXRlbXM6IEFycmF5PFN0cmluZz4gPSBbJ3Byb2ZpbGUnLCdsaXN0J11cbiAgICBwcml2YXRlIGRyYXdlcjogU2lkZURyYXdlclR5cGU7XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLm9mZignZHJhd2VyQ2xvc2VkJyk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbn1cbiJdfQ==