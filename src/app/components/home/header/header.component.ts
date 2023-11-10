import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  name: string = 'Work Locations';
  description: string =
    'Keep track of your work locations easily and conveniently';
}
