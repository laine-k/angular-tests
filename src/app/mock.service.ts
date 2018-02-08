import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; // you'll simulate getting data from the server with the RxJS of() function.

@Injectable()
export class MockService {

  iconColor = {iconGreen:true}

  constructor() { }

  getMockStatus(){
    return this.iconColor;
  }

  getMockStatusObs():Observable<Object>{
    return of(this.iconColor);
  }

}
