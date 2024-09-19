import {Component, OnInit} from '@angular/core';
import {faUserCircle, faTimesCircle, faCheckCircle, faEdit, faAngleLeft, faLink, faFilePdf} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {first} from 'rxjs/operators';
import {OwllyRoutingService} from 'src/app/services/owlly-routing.service';
import {OwllyAdministrationService} from 'src/app/services/owlly-administration.service';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-certify-detail',
  templateUrl: './certify-detail.component.html',
  styleUrls: ['./certify-detail.component.scss'],
})
export class CertifyDetailComponent implements OnInit {
  owlly$ = this.initOwlly().pipe(first());
  certifyList: any = [];

  initiativeSelect: String | null = '';

  faUserCircle = faUserCircle;
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  faLink = faLink;
  faEdit = faEdit;
  faFilePdf = faFilePdf;
  faAngleLeft = faAngleLeft;

  constructor(
    private owllyAdminService: OwllyAdministrationService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private authService: AuthService,
    private router: Router,
    private owllyRoutingService: OwllyRoutingService
  ) {}

  ngOnInit(): void {
    this.owlly$.subscribe((owlly: any) => {
      //console.log( owlly.data);
      this.initiativeSelect = owlly.data.title;

      this.owllyAdminService.getCertifyList(owlly.id, '8200').forEach((snapshot: any) => {
        console.log(snapshot.docs);

        snapshot.forEach((element: any) => {
          console.log(element.data());

          this.certifyList.push(element.data());
        });
      });
      this.owllyAdminService.getCertifyList(owlly.id, '0000').forEach((snapshot: any) => {
        console.log(snapshot.docs);

        snapshot.forEach((element: any) => {
          console.log(element.data());

          this.certifyList.push(element.data());
        });
      });
      this.owllyAdminService.getCertifyList(owlly.id, '6300').forEach((snapshot: any) => {
        console.log(snapshot.docs);

        snapshot.forEach((element: any) => {
          console.log(element.data());

          this.certifyList.push(element.data());
        });
      });
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('logout');
  }
  initOwlly() {
    return this.owllyRoutingService.owllyBySlugName(this.activatedRoute.paramMap);
  }

  back(): void {
    this.location.back();
  }

  openMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(0%)';
  }
  closeMobileNav() {
    document.getElementById('mobileNav')!.style.transform = 'translateX(-100%)';
  }

  sortTable(n: any) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById('myTable');
    switching = true;
    //Set the sorting direction to ascending:
    dir = 'asc';
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table!.getElementsByTagName('TR');
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //Change i=0 if you have the header th a separate table.
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == 'asc') {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == 'desc') {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode!.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
  }
}
