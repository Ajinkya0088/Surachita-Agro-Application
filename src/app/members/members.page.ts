import {  OnInit } from '@angular/core';
import { Members } from '../members';
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  flag=false;
  x:any;

  ngOnInit() {
  }
  afterslidesLoad(slides) {
    slides.startAutoplay();
  }
  members: Members[] = [
    new Members('श्री. दिनकर नारायण मोरे.',
    '9421956479',
    '',
    '60',
    'अध्यक्ष'),
    new Members(' श्री. सचिन भाऊसाहेब कवडे.',
    '8411088770',
    'njnjjjj',
    '36',
    ' सचिव '),
    new Members(' श्री.मोहन नारायण मोरे.',
    '',
    '',
    '',
    'सदस्य'),
    new Members('सौ. सरस्वती विष्णू मोरे.',
    '',
    '',
    '',
    'सदस्य'),
    new Members('श्री.भाऊसाहेब शिवाजी कवडे .',
    '',
    '',
    '',
    'सदस्य'),
    new Members('श्री. सुधीर नारायण मोरे.',
    '',
    '',
    '',
    'सदस्य'),
    new Members(' श्री. शीतल भाऊसाहेब कवडे . ',
    '',
    '',
    '',
    'सदस्य'),
    new Members(' श्री. जगन्नाथ नामदेव चव्हाण.',
    '',
    '',
    '',
    'सदस्य'),
    new Members('सौ. शकुंतला विष्णू नाईकनवरे .',
    '',
    '',
    '',
    'सदस्य'),
    new Members(' श्री. अजिंक्य अभिमन्यू पवार. ',
    '90040472686',
    'assets/img/members/ajinkya.jpeg',
    '21',
    'सदस्य'),
  ]

  show(m){
    this.x=m;
   this.flag =true;
  }

  clear(){

    this.flag = false;
  }
}
