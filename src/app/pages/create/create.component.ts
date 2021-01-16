import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
  faPlus=faPlus;
  ebene: string = '';
  begehren: string = '';
  createData: createData = {
    text: '',
    title: '',
    type: '',
    published: '',
    author: '',
    ruleValue: '',
    amount: '',
    link: '',
    description: '',
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
      amount: ['', [Validators.required]],
      link: [''],
      description: [''],
      goals1: [''],
      goals2: [''],
      goals3: [''],
      goals4: [''],
    });

    
    
    this.createForm.controls['type'].valueChanges.subscribe(data => {
      if(this.createForm.controls['type'].value == 'initiative'){ 
      this.begehren='initiative';
      this.signatureAmount = 100000;
      this.createForm.controls['author'].setValidators(Validators.required);
      }
      if(this.createForm.controls['type'].value != 'initiative') {
        this.createForm.controls['author'].clearValidators();
      }
      if(this.createForm.controls['type'].value == 'referendum') {
        this.begehren='referendum';
        this.signatureAmount = 50000;
      }
     });
     this.createForm.controls["ruleValue"].valueChanges.subscribe(data => {
      if(this.createForm.controls['ruleValue'].value == 'national'){ 
      this.ebene = 'national';
      }
      if ((this.ebene == 'national' && this.begehren == 'initiative') || (this.ebene == 'national' && this.begehren == 'referendum')) {
        this.createForm.controls['published'].setValidators(Validators.required);
      } else {
        this.createForm.controls['published'].clearValidators();
      }
    });
   }
   
   //Signature Amount placeholder in form
   signatureAmount: Number = 0;
   
   //add goals
   goalAmount = 0;
   addGoal() {
     ++this.goalAmount;
   }

   sendInitiative() {
    this.createData.text = this.createForm.value.text;
    this.createData.title = this.createForm.value.title;
    this.createData.type = this.createForm.value.type;
    this.createData.published = this.createForm.value.published;
    this.createData.author = this.createForm.value.author;
    this.createData.ruleValue = this.createForm.value.ruleValue;
    this.createData.amount = this.createForm.value.amount;
    this.createData.link = this.createForm.value.link;
    this.createData.goals.push(this.createForm.value.goals1);
    this.createData.goals.push(this.createForm.value.goals2);
    this.createData.goals.push(this.createForm.value.goals3);
    this.createData.goals.push(this.createForm.value.goals4);
    console.log(this.createData);
  }


  ngOnInit(): void {
    
  }

}
