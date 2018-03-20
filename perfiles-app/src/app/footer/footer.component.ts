import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: ['#footer { width: 100%; height: 40px; background: #343a40;  position: absolute; bottom: 0px; }']
})
export class FooterComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
