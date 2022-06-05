import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})



export class PortfolioComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  id:any = "mobile";

  tabChange(ids:any){
    this.id = ids;
  }








}
