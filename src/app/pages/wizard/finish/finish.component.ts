import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {Owlly} from '../../../types/owlly';

import {OwllyRoutingService} from '../../../services/owlly-routing.service';
import {faTwitter, faFacebook, faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import {faEnvelope, faCopy} from '@fortawesome/free-solid-svg-icons';

import {Plugins} from '@capacitor/core';
const {Share, Device} = Plugins;

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

  readonly owlly$: Observable<Owlly | undefined> = this.owllyRoutingService.owlly(this.activatedRoute.paramMap).pipe(first());

  constructor(private activatedRoute: ActivatedRoute, private owllyRoutingService: OwllyRoutingService) {}

  async share() {
    const device = await Device.getInfo();

    this.owlly$.subscribe(async (owlly: any) => {
      if (device.platform === 'web' && navigator && navigator['share']) {
        let shareRet = await Share.share({
          title: owlly.data.title,
          text: String(owlly.data.text).substr(0, 50),
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
              socialShareUrl: shareUrl,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400,
            },
          },
          {
            facebook: {
              socialShareUrl: shareUrl,
            },
          },
          {
            whatsapp: {
              socialShareUrl: shareUrl,
            },
          },
          {
            linkedin: {
              socialShareUrl: shareUrl,
            },
          },
          {
            email: {
              socialShareBody: shareUrl,
            },
          },
          {
            copy: {
              socialShareUrl: shareUrl,
            },
          },
        ],
      };
      this.showSocialShare = true;
      resolve(true);
    });
  }
}
