import {Component, OnInit} from '@angular/core';
import {faUserCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from 'src/app/services/auth.service';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {OwllyAdministrationService} from 'src/app/services/owlly-administration.service';
import {Observable} from 'rxjs';
import {OwllyService} from 'src/app/services/owlly.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-administration',
  templateUrl: './dashboard-administration.component.html',
  styleUrls: ['./dashboard-administration.component.scss'],
})
export class DashboardAdministrationComponent implements OnInit {
  faUserCircle = faUserCircle;

  faTimesCircle = faTimesCircle;

  owllyList: any[] = [];

  constructor(private owllyService: OwllyAdministrationService, private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    let owllyListRef = await this.owllyService.getAllActiveOwlly();
    //owllyListRef.docChanges().map(first(),)

    owllyListRef.docChanges().forEach((data) => {
      //console.log(data.doc.data());
      this.owllyList.push(data.doc.data());
    });
  }

  openMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(0%)';
  }
  closeMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(-100%)';
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('logout');
  }
}
