import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
            iconRegistry.addSvgIcon(
              'facebook-f-brands',
              sanitizer.bypassSecurityTrustResourceUrl('assets/img/facebook-brands.svg')),
              iconRegistry.addSvgIcon(
                'instagram-brands',
                sanitizer.bypassSecurityTrustResourceUrl('assets/img/instagram-brands.svg')),
                iconRegistry.addSvgIcon(
                  'telegram-brands',
                  sanitizer.bypassSecurityTrustResourceUrl('assets/img/telegram-brands.svg'));
        }
    ngOnInit() {
        }

}
