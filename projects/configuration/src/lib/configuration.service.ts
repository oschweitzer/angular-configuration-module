import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationModuleOptions } from './configuration-module-options.interface';
import { CONFIGURATION_MODULE_OPTIONS } from './configuration.token';

@Injectable()
export class ConfigurationService {
  constructor(
    @Inject(CONFIGURATION_MODULE_OPTIONS)
    private readonly serviceConfiguration: ConfigurationModuleOptions,
    private readonly http: HttpClient,
  ) {}

  get configuration(): any {
    return this._configuration;
  }

  private _configuration: any;

  private static isLocalConfiguration(
    serviceConfiguration: ConfigurationModuleOptions,
  ): boolean {
    return serviceConfiguration.values !== undefined;
  }

  // the return value (Promise) of this method is used as an APP_INITIALIZER,
  // so the application's initialization will not complete until the Promise resolves.
  async initialize(): Promise<void> {
    if (!this._configuration) {
      // path is relative to that for app's index.html
      if (
        !ConfigurationService.isLocalConfiguration(this.serviceConfiguration)
      ) {
        this._configuration = await this.http
          .get(this.serviceConfiguration.path)
          .toPromise();
      } else {
        this._configuration = this.serviceConfiguration.values;
      }
    }
  }
}
