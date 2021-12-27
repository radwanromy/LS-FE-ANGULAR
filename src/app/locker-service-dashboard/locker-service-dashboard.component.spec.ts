import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerServiceDashboardComponent } from './locker-service-dashboard.component';

describe('LockerServiceDashboardComponent', () => {
  let component: LockerServiceDashboardComponent;
  let fixture: ComponentFixture<LockerServiceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockerServiceDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerServiceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
