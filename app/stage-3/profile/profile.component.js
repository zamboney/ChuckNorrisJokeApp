"use strict";
var core_1 = require("@angular/core");
var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.submit = function () {
        alert(this.fName + ', ' + this.lName);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        moduleId: module.id,
        templateUrl: "./profile.component.html"
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBTzFDLElBQWEsZ0JBQWdCO0lBR3pCO0lBRUEsQ0FBQztJQUNNLGlDQUFNLEdBQWI7UUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtLQUMxQyxDQUFDOztHQUNXLGdCQUFnQixDQVM1QjtBQVRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Byb2ZpbGUnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IGAuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWxgXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQge1xuICAgIHB1YmxpYyBmTmFtZSA6IHN0cmluZztcbiAgICBwdWJsaWMgbE5hbWUgOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG4gICAgcHVibGljIHN1Ym1pdCgpe1xuICAgICAgICBhbGVydCh0aGlzLmZOYW1lICsgJywgJyArdGhpcy5sTmFtZSk7XG4gICAgfVxufSJdfQ==