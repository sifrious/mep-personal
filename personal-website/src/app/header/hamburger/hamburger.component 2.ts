import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'nav-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})

export class HamburgerComponent implements OnInit {
  show_nav:boolean;
  current_route:string;
  prev_route:string;

  checkInitRoute(location:Location){
    let load_on_nav:boolean = false;
    if (location.path() == '/navigation') {load_on_nav = true;}
    return load_on_nav;
  }

  setInitRoute(location:Location) {
    return location.path()
  }

  checkRoute(){
      let current_route:string = this.router.url;
      if (this.current_route != current_route) {
        this.prev_route = this.current_route;
        this.current_route = current_route;
      }
      return current_route
  }

  showNav() {
    console.log('called showNav()');
    console.log('current_route is ' + this.current_route + " and prev route is " + this.prev_route);
    this.current_route = this.checkRoute();
    console.log('current_route is now ' + this.current_route + " and prev route is " + this.prev_route);
  }

  toggleNav() {
      let show_nav:boolean = false;
      let init_nav:boolean = false;
      // get correct current_route
      if (this.prev_route == '.') { // if previous route is constructor default
          show_nav = (this.current_route == '/navigation') ? true:false;
          init_nav = true; // set true for 'first run' (prevents auto-rerouting)
          this.prev_route = '/';
        } else {
          this.current_route = this.checkRoute(); // prev and current routes updated here
          if (this.current_route=='/navigation'){
            show_nav=true;}
          init_nav = false;
      };
      // 'close' nav bar by routing away if it's 'open' (displayed), unless it's the first time toggleNav has been run
      if (show_nav == true && init_nav == true) {
        this.router.navigate([this.prev_route]);
        show_nav = false; //set show_nav to false for the next run
        }
      else if (init_nav == false || show_nav==true) {
        this.router.navigate(['/navigation']); // show navigation if it's not visible
        show_nav = true; //set to true for user to press hamburger to exit
        }
      this.show_nav = show_nav;
      return show_nav;
  };

  constructor(private router:Router, private location:Location) {
    this.show_nav = this.checkInitRoute(location);
    this.current_route = this.setInitRoute(location);
    this.prev_route = '.';
    this.show_nav = this.toggleNav();
  };

  ngOnInit() {};
}