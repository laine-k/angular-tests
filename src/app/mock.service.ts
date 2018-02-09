import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; // you'll simulate getting data from the server with the RxJS of() function.

@Injectable()
export class MockService {

  timeObj = {"currentTime":new Date()};
  mockData = {
    "name":"John",
    "age":30,
    "cars": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
 }

  constructor() { }

  getMockStatus(){
    
    return this.mockData;
  }

  getMockStatusObs():Observable<Object>{
    let timeObj = {"currentTime":new Date()}
    return of(timeObj);
  }

}
