import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigurationModule } from '../../projects/configuration/src/lib/configuration.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConfigurationModule.forRoot({ path: '/assets/config.json' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
