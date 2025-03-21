import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing';

const applicationConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

bootstrapApplication(AppComponent, applicationConfig).catch((err) => console.error(err));
