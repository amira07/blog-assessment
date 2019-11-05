import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated: Date;

  constructor() { }

  ngOnInit() {
  }

  getLoveIts() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    } else {
      return '';
    }
  }

  onLoveIt() {
    this.postLoveIts += 1;
  }

  onDontLoveIt() {
    this.postLoveIts -= 1;
  }
}
