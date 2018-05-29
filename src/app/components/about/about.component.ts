import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private readonly appService: AppService
  ) { }

  services: Array<any>;
  
  ngOnInit() {
    this.appService.getServices()
      .subscribe((data: any) => {
        this.services = data;
        console.log(this.services);
      })
  }

}
