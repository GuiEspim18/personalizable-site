import { Component } from '@angular/core';
import { UserRoundedPhotoComponent } from '../photo-holders/user-rounded-photo/user-rounded-photo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserRoundedPhotoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
