import {AfterViewInit, Component, Input, ViewChild, ElementRef} from '@angular/core';
import { NewscardComponent } from "../newscard/newscard.component";
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  arrowRight = faAngleRight;
  arrowLeft = faAngleLeft;

  @ViewChild("horizontalScroll") horizontalScroll!: ElementRef;
  
  scrollRight() {
    this.horizontalScroll.nativeElement.scrollLeft += 400;
  }
  scrollLeft() {
    this.horizontalScroll.nativeElement.scrollLeft -= 400;
  }

}

