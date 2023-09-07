import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './01 header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './03 footer/footer.component';
import { AuthService } from './04 authentication/auth-service/auth.service';
import { AuthGuardService } from './04 authentication/auth-service/auth-guard.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbCollapseModule],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
