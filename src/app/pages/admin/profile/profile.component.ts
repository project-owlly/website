import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {ProfileService} from 'src/app/services/profile.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  animations: [
    trigger('fadeInRight', [
      state('hidden', style({
        transform: 'translateX(20%)',
        opacity: 0,
      })),
      state('shown', style({
        transform: 'translateX(0%)',
        opacity: 1,
      })),
      transition('hidden => shown', [
        animate('1s ease-out')
      ]),
      transition('shown => hidden', [
        animate('0.3s ease-out')
      ]),
    ]),
  ],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userProfile: any;

  faEdit=faEdit;

  constructor(public fb: FormBuilder, private profileService: ProfileService) {
    this.profileForm = this.fb.group({
      vorname: [this.userProfile?.firstname || '', [Validators.required]],
      nachname: [this.userProfile?.lastname || '', [Validators.required]],
      email: [
        this.userProfile?.email || '',
        [Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      ],
    });
  }

  ngOnInit(): void {
    this.profileService.get().then((profileData) => {
      this.userProfile = profileData?.data();
    });
  }

  saveProfile() {
    console.log(this.profileForm.value);
    this.profileService.save(this.profileForm.value);
  }

  showEdit:boolean = false;
  editProfile() {
    this.showEdit = !this.showEdit;
  }
}
