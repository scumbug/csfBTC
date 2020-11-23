import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { GetBtcService } from './services/getBtc.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { Stor } from './services/Stor.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ConfirmDialogComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    MatMomentDateModule,
    ClipboardModule,
    HttpClientModule,
  ],
  providers: [GetBtcService, Stor],
  bootstrap: [AppComponent],
})
export class AppModule {}
