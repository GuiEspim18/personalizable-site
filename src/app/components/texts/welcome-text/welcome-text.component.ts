import { Component } from '@angular/core';
import { HTMLWelcomeUserComponent } from '../../../utils/classes/HTMLWelcomeUserComponent';

@Component({
  selector: 'app-welcome-text',
  standalone: true,
  imports: [],
  templateUrl: './welcome-text.component.html',
  styleUrl: './welcome-text.component.scss'
})
export class WelcomeTextComponent extends HTMLWelcomeUserComponent {
}
