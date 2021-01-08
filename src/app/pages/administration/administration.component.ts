import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {InquiryComponent as InquiryComponentType} from '../../modals/inquiry/inquiry.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  constructor(private modalService: ModalService<InquiryComponentType>) {}

  ngOnInit(): void {}

  async showInquiry(): Promise<void> {
    /*const {FeedbackComponent} = await import('../../modals/feedback/feedback.component');

    await this.modalService.open(FeedbackComponent);
    */
    const {InquiryComponent} = await import('../../modals/inquiry/inquiry.component');
    await this.modalService.open(InquiryComponent);
  }
}
