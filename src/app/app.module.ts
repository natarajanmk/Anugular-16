import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './_authentication/auth-service/auth.service';
import { AuthGuardService } from './_authentication/auth-service/auth-guard.service';
import { DirectivesModule } from './_directive/directives';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DirectivesModule,
    NgbCollapseModule,
    HomeModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
