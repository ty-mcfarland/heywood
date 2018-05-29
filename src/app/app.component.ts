import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { AppAnimations } from './app.animations';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ AppAnimations ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  sections: Array<any> = [
    {
      description: 'Home',
      link: '/home',
      show: false
    },
    {
      description: 'About',
      link: '/about',
      show: false
    },
    {
      description: 'Background',
      link: '/background',
      show: false
    },
    {
      description: 'Services',
      link: '/services',
      show: false,
      disabled: true
    },
    {
      description: 'Location',
      link: '/404',
      show: false,
      disabled: true
    }
  ];

  hasStateLoaded: string = 'hide';
  showRouterOutlet: string = 'hide';

  ngOnInit() {
    setTimeout(() => {
      let indexes: Array<number> = [];
      this.hasStateLoaded = 'show';
      this.sections.forEach((section: any, index: number) => {
        this.sections[index].show = true;
      });
      setTimeout(() => {
        this.showRouterOutlet = 'show';
      }, 500)
    }, 1000)
  }
  public stateLoad() {
    console.log('state load');
  }

}
