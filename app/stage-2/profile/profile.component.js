"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var ProfileComponent = (function () {
    function ProfileComponent(page) {
        this.page = page;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.page.className = "page";
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        moduleId: module.id,
        templateUrl: "./profile.component.html"
    }),
    __metadata("design:paramtypes", [page_1.Page])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQU8vQixJQUFhLGdCQUFnQjtJQUM3QiwwQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBQ2hDLG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7cUNBRXdCLFdBQUk7R0FEakIsZ0JBQWdCLENBSzVCO0FBTFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Byb2ZpbGUnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IGAuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWxgXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgIGltcGxlbWVudHMgT25Jbml0e1xuY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7fVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuY2xhc3NOYW1lID0gXCJwYWdlXCI7XG4gIH1cbn0iXX0=