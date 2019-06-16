import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseditComponent } from './jobsedit.component';

describe('JobseditComponent', () => {
  let component: JobseditComponent;
  let fixture: ComponentFixture<JobseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
