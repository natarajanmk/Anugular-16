import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent, ChildComponent } from '../00learningPath';
import { LearningRoutingModule } from '../00learningPath/learning.routing.module';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, LearningRoutingModule],
})
export class LearningModule {}
