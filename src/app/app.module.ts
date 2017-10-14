import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationHomeComponent } from './applicationHome/applicationHome.component';
import { Application404Error } from './error/application404Error/application404Error.component';

import { ApplicationRoutes } from './applicationRouting/appRouting.module';
import { ApplicationErrorRoutes } from './error/applicationErrorRouting.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './applicationCoreModule/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationHomeComponent,
    Application404Error,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CoreModule,
    ApplicationRoutes,
    //Keep this at last.
    ApplicationErrorRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
