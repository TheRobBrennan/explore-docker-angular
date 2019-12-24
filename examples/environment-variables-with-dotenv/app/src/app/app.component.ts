import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public message;

  config = this.configService.getConfig();

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.message = `
      Your API environment variable is: ${this.config.API}
      Your TEST environment variable is: ${this.config.TEST}
    `;
  }
}
