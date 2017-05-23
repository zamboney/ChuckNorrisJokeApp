"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ProfileComponent = (function () {
    function ProfileComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    ProfileComponent.prototype.submit = function () {
        this.routerExtensions.navigate([
            "/joke",
            {
                fName: this.fName || 'Chuck',
                lName: this.lName || 'Norris'
            }
        ], {
            transition: {}
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        moduleId: module.id,
        templateUrl: "./profile.component.html"
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQU8vRCxJQUFhLGdCQUFnQjtJQUd6QiwwQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEQsQ0FBQztJQUNNLGlDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1lBQzNCLE9BQU87WUFDUDtnQkFDSSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPO2dCQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRO2FBQ2hDO1NBQUMsRUFBQztZQUNILFVBQVUsRUFBRyxFQUtaO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7cUNBSXdDLHlCQUFnQjtHQUg3QyxnQkFBZ0IsQ0FxQjVCO0FBckJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwcm9maWxlJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBgLi9wcm9maWxlLmNvbXBvbmVudC5odG1sYFxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgZk5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbE5hbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblxuICAgIH1cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1xuICAgICAgICAgICAgXCIvam9rZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZOYW1lOiB0aGlzLmZOYW1lIHx8ICdDaHVjaycsXG4gICAgICAgICAgICAgICAgbE5hbWU6IHRoaXMubE5hbWUgfHwgJ05vcnJpcydcbiAgICAgICAgICAgIH1dLHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24gOiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2ludGVyZmFjZXMvX3VpX2ZyYW1lXy5uYXZpZ2F0aW9udHJhbnNpdGlvbi5odG1sI25hbWVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAvLyBuYW1lOiAnZmxpcCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==