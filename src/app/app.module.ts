import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FilterModule } from './shared/filter/filter.module';
import { SelectModule } from './shared/select/select.module';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './shared/logo/logo.component';
import { HelloBlockComponent } from './shared/hello-block/hello-block.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationComponent,
    LogoComponent,
    HelloBlockComponent
  ],
  imports: [
    BrowserModule,
    FilterModule,
    SelectModule,
    SidebarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
