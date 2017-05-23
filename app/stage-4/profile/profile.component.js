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
            transition: {
                /**
                 * http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html#name
                 */
                name: 'flip'
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQU8vRCxJQUFhLGdCQUFnQjtJQUd6QiwwQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEQsQ0FBQztJQUNNLGlDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1lBQzNCLE9BQU87WUFDUDtnQkFDSSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPO2dCQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRO2FBQ2hDO1NBQUMsRUFBQztZQUNILFVBQVUsRUFBRztnQkFDVDs7bUJBRUc7Z0JBQ0gsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtLQUMxQyxDQUFDO3FDQUl3Qyx5QkFBZ0I7R0FIN0MsZ0JBQWdCLENBcUI1QjtBQXJCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHJvZmlsZScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogYC4vcHJvZmlsZS5jb21wb25lbnQuaHRtbGBcbn0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7XG4gICAgcHVibGljIGZOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGxOYW1lOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cbiAgICB9XG4gICAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcbiAgICAgICAgICAgIFwiL2pva2VcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmTmFtZTogdGhpcy5mTmFtZSB8fCAnQ2h1Y2snLFxuICAgICAgICAgICAgICAgIGxOYW1lOiB0aGlzLmxOYW1lIHx8ICdOb3JyaXMnXG4gICAgICAgICAgICB9XSx7XG4gICAgICAgICAgICB0cmFuc2l0aW9uIDoge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9pbnRlcmZhY2VzL191aV9mcmFtZV8ubmF2aWdhdGlvbnRyYW5zaXRpb24uaHRtbCNuYW1lXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZsaXAnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=