import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explained',
  templateUrl: './explained.component.html',
  styleUrls: ['./explained.component.scss']
})
export class ExplainedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function (this: any) {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

}
