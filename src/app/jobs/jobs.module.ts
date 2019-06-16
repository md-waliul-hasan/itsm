import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobshomeComponent } from './jobshome/jobshome.component';
import { JobsaddComponent } from './jobsadd/jobsadd.component';
import { JobseditComponent } from './jobsedit/jobsedit.component';

@NgModule({
  declarations: [JobshomeComponent, JobsaddComponent, JobseditComponent],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
