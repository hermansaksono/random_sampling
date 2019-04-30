import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratifiedRandomComponent } from './stratified-random.component';

describe('StratifiedRandomComponent', () => {
  let component: StratifiedRandomComponent;
  let fixture: ComponentFixture<StratifiedRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratifiedRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratifiedRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
