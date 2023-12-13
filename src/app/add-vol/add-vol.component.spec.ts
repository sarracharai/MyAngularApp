import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVolComponent } from './add-vol.component';

describe('AddVolComponent', () => {
  let component: AddVolComponent;
  let fixture: ComponentFixture<AddVolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVolComponent]
    });
    fixture = TestBed.createComponent(AddVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
