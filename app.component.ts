import { Component } from '@angular/core';
import { ListingComponent } from './listing/listing.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Silver Screen';
}
