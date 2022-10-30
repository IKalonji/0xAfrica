import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '0xAfrica-DEX';

  constructor(private router: Router){}

  launchDEX(){
    this.router.navigate(["0xAfrica/dex"])
  }
}
