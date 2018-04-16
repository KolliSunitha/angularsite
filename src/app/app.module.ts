import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatMenuTrigger } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatMenuItem } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
