import {Component, OnInit} from '@angular/core';
import {faQuestionCircle, faEye, faTasks} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-storynav',
  templateUrl: './storynav.component.html',
  styleUrls: ['./storynav.component.scss'],
})
export class StorynavComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;
  faEye = faEye;
  faTasks = faTasks;

  constructor() {}

  ngOnInit(): void {}

  explainedEnter() {
    document.getElementById('explainedText')!.style.opacity = '1';
  }
  explainedLeave() {
    document.getElementById('explainedText')!.style.opacity = '0';
  }
  missionEnter() {
    document.getElementById('missionText')!.style.opacity = '1';
  }
  missionLeave() {
    document.getElementById('missionText')!.style.opacity = '0';
  }
  progressEnter() {
    document.getElementById('progressText')!.style.opacity = '1';
  }
  progressLeave() {
    document.getElementById('progressText')!.style.opacity = '0';
  }
}
