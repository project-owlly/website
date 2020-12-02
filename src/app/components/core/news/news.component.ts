import {AfterViewInit, Component, Input, ViewChild, ElementRef} from '@angular/core';
import { NewscardComponent } from "../newscard/newscard.component";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  @ViewChild("horizontalScroll") horizontalScroll!: ElementRef;
  
  scrollRight() {
    this.horizontalScroll.nativeElement.scrollLeft += 384;
  }
  scrollLeft() {
    this.horizontalScroll.nativeElement.scrollLeft -= 384;
  }

}

