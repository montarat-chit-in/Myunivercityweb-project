import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KongpadComponent } from './kongpad.component';

describe('KongpadComponent', () => {
  let component: KongpadComponent;
  let fixture: ComponentFixture<KongpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KongpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KongpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
