import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeedNews } from './interfaces/list';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  names = ['Data Science', 'Artificial Intelligence'];
  feedNews$?: Observable<IFeedNews[]>;

  constructor(
    private listService: ListService
  ) {}

  ngOnInit() {
    this.feedNews$ = this.listService.getAll();

  }
}
