import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Application404Error } from './application404Error/application404Error.component';

const errorRoutes: Routes = [
    {
        path: '**',
        component: Application404Error
    }
]

@NgModule(
    {
        imports: [
            RouterModule.forRoot(
                errorRoutes
            )
        ],
        exports: [
            RouterModule
        ],
        providers:[

        ]
    }
)
export class ApplicationErrorRoutes{

}
