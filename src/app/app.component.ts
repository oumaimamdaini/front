import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChangDeSerie';

  isSideNavCollapsed=false;
  screenWidth=0;
  onToggleSideNav(data :SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed= data.collapsed;
  }
}
