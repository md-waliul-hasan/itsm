import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsaddComponent } from './jobsadd.component';

describe('JobsaddComponent', () => {
  let component: JobsaddComponent;
  let fixture: ComponentFixture<JobsaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
