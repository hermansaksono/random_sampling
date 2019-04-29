import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRandomComponent } from './simple-random.component';

describe('SimpleRandomComponent', () => {
  let component: SimpleRandomComponent;
  let fixture: ComponentFixture<SimpleRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
