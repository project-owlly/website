import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {ToastService} from 'src/app/services/toast.service';

import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public authForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private toastService: ToastService) {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)],
    });
  }

  ngOnInit(): void {}

  async signup(authForm: FormGroup) {
    if (!authForm.valid) {
      const {ToastComponent} = await import('../../components/toast/toast.component');
      await this.toastService.open(ToastComponent, {
        msg: 'Form is not valid yet, current value: ' + authForm.value,
        status: 'error',
        position: 'bottom',
      });
      //console.log('Form is not valid yet, current value:', authForm.value);
    } else {
      this.auth.signup(authForm.value.username, authForm.value.password).then(
        async (ok) => {
          const {ToastComponent} = await import('../../components/toast/toast.component');

          this.router.navigateByUrl('/admin');

          await this.toastService.open(ToastComponent, {
            msg: 'ok',
            status: 'success',
            position: 'bottom',
          });
        },
        async (err) => {
          const {ToastComponent} = await import('../../components/toast/toast.component');
          await this.toastService.open(ToastComponent, {
            msg: JSON.parse(err.message).error.message,
            status: 'error',
            position: 'bottom',
          });
        }
      );
    }
  }
}
