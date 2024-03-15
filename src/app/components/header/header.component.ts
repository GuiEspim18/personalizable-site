import { Component } from '@angular/core';
import { UserRoundedPhotoComponent } from '../photo-holders/user-rounded-photo/user-rounded-photo.component';
import { WelcomeTextComponent } from '../texts/welcome-text/welcome-text.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserRoundedPhotoComponent, WelcomeTextComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
