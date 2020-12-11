import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import {promise} from 'selenium-webdriver';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {createData} from './createInterface';

//import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  faAngleRight=faAngleRight;
  faAngleLeft=faAngleLeft;

  @ViewChild("horizontalScroll") horizontalScroll!: ElementRef;

  scrollRight() {
    this.horizontalScroll.nativeElement.scrollLeft += document.getElementById('horizontalDiv')!.offsetWidth;
  }
  scrollLeft() {
    this.horizontalScroll.nativeElement.scrollLeft -= document.getElementById('horizontalDiv')!.offsetWidth;;
  }

  createData: createData = {
    text: '',
    title: '',
    type: '',
    published: '',
    author: '',
    ruleValue: '',
    goals: [],
  };

  createForm: FormGroup;

  constructor(public fb: FormBuilder, /*private toastService: ToastService*/) {
    //TODO: send every goal, not only last one
    this.createForm = this.fb.group({
      text: ['', [Validators.required]],
      title: ['', [Validators.required]],
      type: ['', [Validators.required]],
      published: [''],
      author: [''],
      ruleValue: ['', [Validators.required]],
      goals1: [''],
      goals2: [''],
      goals3: [''],
      goals4: [''],
    });
   }


   sendInitiative() {
    this.createData.text = this.createForm.value.text;
    this.createData.title = this.createForm.value.title;
    this.createData.type = this.createForm.value.type;
    this.createData.published = this.createForm.value.published;
    this.createData.author = this.createForm.value.author;
    this.createData.ruleValue = this.createForm.value.ruleValue;
    this.createData.goals.push(this.createForm.value.goals1);
    this.createData.goals.push(this.createForm.value.goals2);
    this.createData.goals.push(this.createForm.value.goals3);
    this.createData.goals.push(this.createForm.value.goals4);
    console.log(this.createData);
  }


  ngOnInit(): void {
    
  }

}
