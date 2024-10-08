import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router, ParamMap} from '@angular/router';

import {Observable} from 'rxjs';
import {filter, first, map, shareReplay} from 'rxjs/operators';

import {Owlly} from '../../../types/owlly';

import {OwllyRoutingService} from '../../../services/owlly-routing.service';
import {faTwitter, faFacebook, faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import {faEnvelope, faCopy, faCheckCircle, faFileSignature, faFileAlt, faFileExport} from '@fortawesome/free-solid-svg-icons';

/*import {Plugins} from '@capacitor/core';
const {Share, Device} = Plugins;*/
import {Share} from '@capacitor/share';
import {Device} from '@capacitor/device';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent {
  // Social Share Web Component
  shareSocialShareOptions: any;
  showSocialShare = false;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faCopy = faCopy;
  faCheckCircle = faCheckCircle;

  faFileSignature = faFileSignature;
  faFileAlt = faFileAlt;
  faFileExport = faFileExport;

  readonly owlly$: Observable<Owlly | undefined> = this.owllyRoutingService.owlly(this.route.paramMap).pipe(first());
  readonly owllyId$: Observable<string | undefined> = this.route.paramMap.pipe(
    first(),
    filter((params: Params) => params.get('owllyId') !== null),
    map((params: Params) => params.get('owllyId')),
    shareReplay({bufferSize: 1, refCount: true})
  );

  constructor(private route: ActivatedRoute, private router: Router, private owllyRoutingService: OwllyRoutingService) {}

  /*back(): void {
      this.route.paramMap.pipe(first()).subscribe(async (param) => {

      await this.router.navigate(['/sign', param.get('owllyId')]).catch((err) => {
        console.log(err.message);
      });
    });
  }*/

  navigate(): void {
    this.route.paramMap.pipe(first()).subscribe(async (param) => {
      await this.router.navigate(['/']).catch((err) => {
        console.log(err.message);
      });
    });
  }

  async share() {
    const device = await Device.getInfo();

    this.owlly$.subscribe(async (owlly: any) => {
      if (device.platform === 'web' && navigator && navigator['share']) {
        let shareRet = await Share.share({
          title: owlly.data.title,
          text: owlly.data.title + ': ' + String(owlly.data.description).substr(0, 50),
          url: 'https://owlly.ch/o/' + owlly.data.slug,
          dialogTitle: owlly.data.title,
        }).catch((onrejected) => {});
      } else {
        await this.shareFallback(owlly);
      }
    });
  }

  shareFallback(owlly: any) {
    return new Promise(async (resolve) => {
      const shareUrl = 'https://owlly.ch/o/' + owlly.data.slug;

      // The configuration, set the share options
      this.shareSocialShareOptions = {
        displayNames: true,
        config: [
          {
            twitter: {
              socialShareUrl: '👉 ' + owlly.data.title + ': ' + shareUrl,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400,
            },
          },
          {
            facebook: {
              socialShareUrl: '👉 ' + owlly.data.title + ': ' + shareUrl,
            },
          },
          {
            whatsapp: {
              socialShareUrl: '👉 ' + owlly.data.title + ': ' + shareUrl,
            },
          },
          {
            linkedin: {
              socialShareUrl: '👉 ' + owlly.data.title + ': ' + shareUrl,
            },
          },
          {
            email: {
              socialShareUrl: '👉 ' + owlly.data.title + ': ' + shareUrl,
            },
          },
          {
            copy: {
              socialShareUrl: '👉 ' + owlly.data.title + ': ' + shareUrl,
            },
          },
        ],
      };
      this.showSocialShare = true;
      resolve(true);
    });
  }
}
