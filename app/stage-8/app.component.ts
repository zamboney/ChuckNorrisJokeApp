import { Component, ViewChild, AfterViewInit, OnDestroy } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "ns-app",
    templateUrl: "./stage-8/app.component.html",
})
export class AppComponent implements AfterViewInit, OnDestroy {

    private drawer: SideDrawerType;
    ngOnDestroy() {
        this.drawer.off('drawerClosed');
    }

    ngAfterViewInit(): void {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    public toggleDrawer() {
        this.drawer.toggleDrawerState();
    }

    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
}
