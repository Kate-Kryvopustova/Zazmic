import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  mockRequest(): Observable<object> {
    const observable = new Observable<object>(subscriber => {
      const mockData = { data: { id: 'id' } };

      setTimeout(() => {
        subscriber.next(mockData);
      }, 1000);
    });

    return observable;
  }
}
