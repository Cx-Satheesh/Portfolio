import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

 /*  @ViewChild('cxCursor') refCursor:any;
  @HostListener('document:mousemove', ['$event']) onMouseMove(event:any){
    this.refCursor.nativeElement.style.left = (event.pageX - 15) + "px";
    this.refCursor.nativeElement.style.top = (event.pageY - 15) + "px"
  }  */


}
