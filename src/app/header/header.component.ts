import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cxActive:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('menu') cxDoc:any;

  onClick(){
    this.cxActive = !this.cxActive;
  }

  

  @HostListener('document:click') onMouseClick(){
    if(this.cxDoc.classList.contains('cxHamActive')){
      this.cxDoc.nativeElement.style.right = -250 + "px";
    }
  } 

}
