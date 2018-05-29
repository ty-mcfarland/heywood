import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVICES } from './services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AppService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getServices() {
    return Observable.of(SERVICES);
  }
}
