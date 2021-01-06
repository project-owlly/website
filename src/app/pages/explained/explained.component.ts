import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {QuestionComponent as QuestionComponentType} from '../../modals/question/question.component';

@Component({
  selector: 'app-explained',
  templateUrl: './explained.component.html',
  styleUrls: ['./explained.component.scss'],
})
export class ExplainedComponent {
  constructor(private modalService: ModalService<QuestionComponentType>) {
    
  }
  ngOnInit(): void {
    var acc = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function (this: any) {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }
  async showQuestion(): Promise<void> {
    /*const {FeedbackComponent} = await import('../../modals/feedback/feedback.component');

    await this.modalService.open(FeedbackComponent);
    */
    const {QuestionComponent} = await import('../../modals/question/question.component');
    await this.modalService.open(QuestionComponent);
  }
}
