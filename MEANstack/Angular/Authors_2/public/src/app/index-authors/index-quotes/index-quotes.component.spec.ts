import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexQuotesComponent } from './index-quotes.component';

describe('IndexQuotesComponent', () => {
  let component: IndexQuotesComponent;
  let fixture: ComponentFixture<IndexQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
