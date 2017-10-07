import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationHomeComponent } from '../applicationHome/applicationHome.component';

const applicationRoutes: Routes = [
    {
        path: 'home',
        component: ApplicationHomeComponent
    },
    {
        path: '',
        component: ApplicationHomeComponent
    }
]

@NgModule(
    {
        imports: [
            RouterModule.forRoot(
                applicationRoutes
            )
        ],
        exports: [
            RouterModule
        ],
        providers:[

        ]
    }
)
export class ApplicationRoutes{

}
