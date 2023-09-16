import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './_authentication/auth-service/auth.service';
import { AuthGuardService } from './_authentication/auth-service/auth-guard.service';
import { HomeModule } from './home/home.module';
import { ProductModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbCollapseModule],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
