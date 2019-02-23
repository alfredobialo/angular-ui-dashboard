import {Component, OnInit, OnDestroy} from '@angular/core';
import {Meta,  Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'caas-home-page',
  template: `
    <div>
      <h1>Home Page</h1>
      
      <br>
      <button class="btn btn-outline-primary" (click)="gotoAbout()">Read more About Us</button>
      
    </div>`
})

export class HomePageComponent implements OnInit, OnDestroy {

  defPageTitle : string;
  constructor(private title:Title, private meta : Meta, private activatedRoute : ActivatedRoute, private route : Router) {
  }

  ngOnInit() {
    // store default page title
    this.defPageTitle  = this.title.getTitle();
    this.activatedRoute.data
      .subscribe( x =>{
        this.title.setTitle( x.data.title);
        this.meta.addTag({name  : "description", content :x.data.description});

        console.log(x);
      })
  }

  ngOnDestroy(): void {
    // reset the meta and title properties to there defaults
    this.title.setTitle(this.defPageTitle);
  }

  gotoAbout() {
    this.route.navigate(["/about", {from:"homePage",data :  "my data"}])
      .then(x => {
        console.log(x);
      },reason => {
        console.log(reason);
      });
  }
}
