import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationInfoComponent } from './notification-info.component';

describe('NotificationInfoComponent', () => {
  let component: NotificationInfoComponent;
  let fixture: ComponentFixture<NotificationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationInfoComponent]
    });
    fixture = TestBed.createComponent(NotificationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
