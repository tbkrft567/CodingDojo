import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuotesComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewQuotesComponent;
  let fixture: ComponentFixture<NewQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
