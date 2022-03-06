import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BekeryComponent } from './bekery.component';

describe('BekeryComponent', () => {
  let component: BekeryComponent;
  let fixture: ComponentFixture<BekeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BekeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BekeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
