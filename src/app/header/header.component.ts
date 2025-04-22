import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class HeaderComponent {

   @Output() open=new EventEmitter<boolean>()

   onOpenSideBar(){
    this.open.emit();
   }
}
