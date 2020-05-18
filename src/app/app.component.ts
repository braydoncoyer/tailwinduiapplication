import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwindapp';
  faLinkedIn = faLinkedin;
  faCodepen = faCodepen;
  faTwitter = faTwitterSquare;
  faEmail = faEnvelopeSquare;
  faArrowDown = faAngleDown;
}
