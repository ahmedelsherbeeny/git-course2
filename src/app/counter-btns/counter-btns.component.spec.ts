import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBtnsComponent } from './counter-btns.component';

describe('CounterBtnsComponent', () => {
  let component: CounterBtnsComponent;
  let fixture: ComponentFixture<CounterBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterBtnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
