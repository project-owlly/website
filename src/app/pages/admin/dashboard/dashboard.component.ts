import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {OwllyService} from 'src/app/services/owlly.service';

@Component({
  selector: 'app-dashboardPage',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private owllyService: OwllyService, private authService: AuthService, private router: Router) {}

  @Input() type?: 'administration' | 'campaigner' = 'administration';

  async ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('logout');
  }
}
