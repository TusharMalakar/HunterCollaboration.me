import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    
  }

  userDetails(){
    console.log( this.userService.settings);
  }

    logOut(){
      localStorage.removeItem('capstoneAuth');
      this.router.navigate(['/login']);
    }
}
