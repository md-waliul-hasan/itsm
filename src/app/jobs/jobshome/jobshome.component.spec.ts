import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobshomeComponent } from './jobshome.component';

describe('JobshomeComponent', () => {
  let component: JobshomeComponent;
  let fixture: ComponentFixture<JobshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
