import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions, HttpModule } from '@angular/http';

import { Footer } from './footer/footer.component';

import { CoreService } from './service/core.service';

@NgModule({
  declarations: [
    Footer,
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    Footer,
  ],
  providers: [
    CoreService,
    // {
    //   provide: CoreService,
    //   useFactory: provideAFactoryForCoreServiceHere,
    //   deps: [Http, RequestOptions]
    // },
  ],
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. This module is to be loaded in the ROOT MODULE ONLY.');
    }
  }
  static forRoot(): ModuleWithProviders{
    return{
      ngModule: CoreModule,
      providers: [CoreService]
    }
  }
 }
