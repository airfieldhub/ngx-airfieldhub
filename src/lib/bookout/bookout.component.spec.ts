import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookoutComponent } from './bookout.component';

describe('BookoutComponent', () => {
  let component: BookoutComponent;
  let fixture: ComponentFixture<BookoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
