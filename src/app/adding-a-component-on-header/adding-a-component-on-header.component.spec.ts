import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingAComponentOnHeaderComponent } from './adding-a-component-on-header.component';

describe('AddingAComponentOnHeaderComponent', () => {
  let component: AddingAComponentOnHeaderComponent;
  let fixture: ComponentFixture<AddingAComponentOnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingAComponentOnHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingAComponentOnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
