import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
openSidebar=false
openNavBar=true
onOpenSideBar(){
  this.openSidebar=!this.openSidebar
  this.openNavBar=!this.openNavBar
}

onCloseSideBar(){
  this.openSidebar=!this.openSidebar
  this.openNavBar=!this.openNavBar
}
}

