import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { TasksTaskModule } from 'app/entities/task/task.module';

@NgModule({
    imports: [TasksSharedModule, RouterModule.forChild([HOME_ROUTE]), TasksTaskModule],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksHomeModule {}
