import {Component, OnInit} from '@angular/core';

import {AuthService} from 'src/app/services/auth.service';
import {ToastService} from 'src/app/services/toast.service';

import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private toastService: ToastService) {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)],
    });
  }

  ngOnInit(): void {}

  async login(authForm: FormGroup) {
    if (!authForm.valid) {
      const {ToastComponent} = await import('../../components/toast/toast.component');
      await this.toastService.open(ToastComponent, {
        msg: 'Form is not valid yet, current value: ' + authForm.value,
        status: 'error',
        position: 'bottom',
      });
    } else {
      //console.log('Username: ' + authForm.value.username);

      this.auth.login(authForm.value.username, authForm.value.password).then(
        (ok) => {
          this.router.navigateByUrl('/admin');
        },
        async (err) => {
          const {ToastComponent} = await import('../../components/toast/toast.component');
          await this.toastService.open(ToastComponent, {
            msg: err.message,
            status: 'error',
            position: 'bottom',
          });
        }
      );
    }
  }
}
