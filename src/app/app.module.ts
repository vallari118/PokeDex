import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokeDataComponent } from './poke-data/poke-data.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatGridListModule} from '@angular/material/grid-list';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { PokeTypeComponent } from './poke-type/poke-type.component';




@NgModule({
  declarations: [
    AppComponent,
    PokeInfoComponent,
    PokeDataComponent,
    PokeTypeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressBarModule,
    DragDropModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatTableModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatGridListModule,
    MatAutocompleteModule,
    ReactiveFormsModule

  ],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
