import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TummachartComponent } from './tummachart.component';

describe('TummachartComponent', () => {
  let component: TummachartComponent;
  let fixture: ComponentFixture<TummachartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TummachartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TummachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
