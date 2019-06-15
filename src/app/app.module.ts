import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { SearchApiService } from './search-api.service';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, NoopAnimationsModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule
  ],
  providers: [SearchApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
