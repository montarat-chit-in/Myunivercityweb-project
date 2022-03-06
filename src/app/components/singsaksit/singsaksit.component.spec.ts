import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingsaksitComponent } from './singsaksit.component';

describe('SingsaksitComponent', () => {
  let component: SingsaksitComponent;
  let fixture: ComponentFixture<SingsaksitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingsaksitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingsaksitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
