import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoundedPhotoComponent } from './user-rounded-photo.component';

describe('UserRoundedPhotoComponent', () => {
  let component: UserRoundedPhotoComponent;
  let fixture: ComponentFixture<UserRoundedPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoundedPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRoundedPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
