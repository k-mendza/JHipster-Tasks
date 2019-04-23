import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksSharedModule } from 'app/shared';
import {
    TaskComponent,
    TaskDetailComponent,
    TaskUpdateComponent,
    TaskDeletePopupComponent,
    TaskDeleteDialogComponent,
    taskRoute,
    taskPopupRoute
} from './';

const ENTITY_STATES = [...taskRoute, ...taskPopupRoute];

@NgModule({
    imports: [TasksSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TaskComponent, TaskDetailComponent, TaskUpdateComponent, TaskDeleteDialogComponent, TaskDeletePopupComponent],
    entryComponents: [TaskComponent, TaskUpdateComponent, TaskDeleteDialogComponent, TaskDeletePopupComponent],
    exports: [TaskComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksTaskModule {}
