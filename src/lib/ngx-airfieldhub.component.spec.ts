import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAirfieldhubComponent } from './ngx-airfieldhub.component';

describe('NgxAirfieldhubComponent', () => {
  let component: NgxAirfieldhubComponent;
  let fixture: ComponentFixture<NgxAirfieldhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAirfieldhubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAirfieldhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
