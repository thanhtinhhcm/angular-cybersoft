import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LessonModule } from './lesson/lesson.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LightboxModule } from 'ngx-lightbox';
import { JwtInterceptor } from './provider/guards/jwt.interceptor';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    HelloWorldComponent,
    PageNotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LessonModule,
    ClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LightboxModule,
    ShareModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
