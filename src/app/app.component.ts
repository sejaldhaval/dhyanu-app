import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dhyanu Software Solutions...';
  
  ngOnInit() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $("#main-navbar").addClass("main-navar-scrolled");
      }
      else {
        $("#main-navbar").removeClass("main-navar-scrolled");
      }
    });
  }
}
