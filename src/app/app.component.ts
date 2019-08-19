import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  //<<<< import it here
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule //<<<< and here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authApp';
}
