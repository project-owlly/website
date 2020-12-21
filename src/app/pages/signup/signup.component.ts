import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {ToastService} from 'src/app/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private auth: AuthService, private toastService: ToastService) {}

  ngOnInit(): void {}

  signup() {
    this.auth.signup(this.username, this.password).then(
      async (ok) => {
        const {ToastComponent} = await import('../../components/toast/toast.component');
        await this.toastService.open(ToastComponent, {
          msg: 'ok',
          status: 'error',
          position: 'bottom',
        });
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
