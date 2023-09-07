import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './routing/app.routing.module';
import { FooterComponent } from './footer/footer.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbCollapseModule,
    IconModule,
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
