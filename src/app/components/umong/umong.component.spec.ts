import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmongComponent } from './umong.component';

describe('UmongComponent', () => {
  let component: UmongComponent;
  let fixture: ComponentFixture<UmongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
