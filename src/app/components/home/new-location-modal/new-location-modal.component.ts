import { Component } from '@angular/core';
import { faGripLines, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-location-modal',
  templateUrl: './new-location-modal.component.html',
  styleUrls: ['./new-location-modal.component.scss']
})
export class NewLocationModalComponent {
  xmark = faXmark;
  user = faUser;
  lines = faGripLines;
}
