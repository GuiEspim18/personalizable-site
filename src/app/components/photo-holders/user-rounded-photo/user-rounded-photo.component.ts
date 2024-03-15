import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HTMLPhotoComponent } from '../../../utils/classes/HTMLPhotoComponent';

@Component({
  selector: 'app-user-rounded-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-rounded-photo.component.html',
  styleUrl: './user-rounded-photo.component.scss'
})
export class UserRoundedPhotoComponent extends HTMLPhotoComponent{
}
