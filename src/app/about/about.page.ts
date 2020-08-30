import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  flag1=false;
  flag2=false;
  flag3=false;
  flag4=false;
  toggle=false;
  constructor() { }

  ngOnInit() {
  }

}
