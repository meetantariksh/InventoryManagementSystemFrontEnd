import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CoreService } from '../applicationCoreModule/service/core.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

@Component(
    {
        selector: 'applicationHome',
        templateUrl: 'home.html',
        styleUrls: [
            '../../assets/css/applicationHome/clean-blog.min.css',
            '../../assets/css/applicationHome/font-awesome.min.css',
          ],
    }
)

export class ApplicationHomeComponent implements OnInit, OnDestroy {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    backendApplicationConnectionStatus = "Checking";
    databaseConnectionStatus = "Checking";

    connectionCheckHeadder = "Connecting to Backen Servers";
    constructor( 
        private router: Router,
        private modalService: NgbModal,
        private coreService: CoreService
    ){

    }

    openCheckConnection(content) {
        this.modalService.open(content);
        this.backendApplicationConnectionStatus = "Checking";
        this.databaseConnectionStatus = "Checking";
        this.connectionCheckHeadder = "Connecting to Backen Servers";
        this.coreService.checkConnectionToBackEndDatabaseServer()
            .takeUntil(this.ngUnsubscribe)
            .subscribe(data => {
                this.connectionCheckHeadder = "Connection Check Complete";
                if(data.checkStatus){
                    this.databaseConnectionStatus = "ESTABLISHED";
                }else{
                    this.databaseConnectionStatus = "NOT ESTABLISHED (All aspects of the application might not work)";
                }
            });
        
        this.coreService.checkConnectionToBackEndApplication()
            .takeUntil(this.ngUnsubscribe)
            .subscribe(data => {
                if(data.checkStatus){
                    this.backendApplicationConnectionStatus = "ESTABLISHED";
                }else{
                    this.backendApplicationConnectionStatus = "NOT ESTABLISHED (All aspects of the application might not work)";
                }
            });

    }

    ngOnInit(){
        // If User Logged In Redirect to User logged in Home.
    }

    ngOnDestroy(){
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}