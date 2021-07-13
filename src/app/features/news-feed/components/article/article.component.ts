import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list.service';
import { IFeedNews } from '../../interfaces/list';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  topic?: IFeedNews;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
  ) { }

  ngOnInit() {
    const topicId = this.route.snapshot.paramMap.get('id');

    if (topicId) {
      this.topic = this.listService.getOne(topicId)
    }
  }

  scrollToTop(): void {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }
}
