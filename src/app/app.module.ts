import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { IgxGridModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ModalComponent } from './components/layout/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    GenericFormComponent,
    SidenavComponent,
    ModalComponent
  ],
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
    IgxGridModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
