import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

import {isScullyRunning} from '@scullyio/ng-lib';

import {Owlly} from '../../types/owlly';

import {OwllyRoutingService} from '../../services/owlly-routing.service';

import {faTwitter, faFacebook, faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import {faEnvelope, faCopy} from '@fortawesome/free-solid-svg-icons';

import {Plugins} from '@capacitor/core';
const {Share, Device} = Plugins;

@Component({
  selector: 'app-owlly',
  templateUrl: './owlly.component.html',
  styleUrls: ['./owlly.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class OwllyComponent {
  // Social Share Web Component
  shareSocialShareOptions: any;
  showSocialShare = false;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faCopy = faCopy;

  owlly$ = this.initOwlly().pipe(first());

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private owllyRoutingService: OwllyRoutingService) {}

  private initOwlly(): Observable<Owlly | undefined> {
    // FIXME: currently Scully is not able to query Firestore somehow
    return isScullyRunning()
      ? this.owllyRoutingService.getOwllyBySlugForScully(this.activatedRoute.paramMap)
      : this.owllyRoutingService.owllyBySlug(this.activatedRoute.paramMap);
  }
  async share() {
    const device = await Device.getInfo();

    this.owlly$.subscribe(async (owlly: any) => {
      //    const owlly:any = this.owlly$.pipe(first());

      //console.log(JSON.stringify(owlly.data));

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
