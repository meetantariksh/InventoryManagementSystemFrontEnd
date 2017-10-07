import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

export class ApplicationHomeComponent implements OnInit{
    constructor( private router: Router){

    }

    ngOnInit(){
        // If User Logged In Redirect to User logged in Home.
    }
}