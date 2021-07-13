import { Injectable } from '@angular/core';
import { IFeedNews } from '../interfaces/list';
import { feednews } from './mockData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getAll(): Observable<Array<IFeedNews>> {
    return of(feednews);
  }

  getOne(id: string): IFeedNews | undefined {
    return feednews.find(topic => topic.id === id);
  }
}
