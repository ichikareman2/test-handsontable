import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingATemplateOnHeaderComponent } from './adding-a-template-on-header.component';

describe('AddingATemplateOnHeaderComponent', () => {
  let component: AddingATemplateOnHeaderComponent;
  let fixture: ComponentFixture<AddingATemplateOnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingATemplateOnHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingATemplateOnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
