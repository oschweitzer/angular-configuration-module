import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../projects/configuration/src/lib/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  configuration;

  constructor(private readonly configurationService: ConfigurationService) {}

  ngOnInit(): void {
    this.configuration = this.configurationService.configuration;
  }
}
