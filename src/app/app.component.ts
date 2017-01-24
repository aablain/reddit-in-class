import { Component } from '@angular/core';
import { Data } from './data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'REDDIT';

  database: Data[] = [
    new Data('Best Movie Ever', 'It was the best mvie EVERR', 'fake link', 'movies'),
    new Data('Second Best Movie Ever', 'It was the SECOND best movie EVER', 'fake link', 'movies'),
    new Data('Third Best Movie Ever', 'It was the THIRD best movie EVER', 'fake link', 'movies'),
    new Data('Funny GIF', 'A somewhat funny GIF', 'fake link', 'gifs'),
    new Data('Other Funny GIF', 'A mildy ammussing', 'fake link', 'gifs'),
    new Data('Another Funny GIF', 'A sensible chuckle ensues', 'fake link', 'gifs'),
    new Data('This Is Funny', 'Is not this so funny?', 'fake link', 'funny'),
    new Data('This Is ALSO Funny', 'Is not this also funny?', 'fake link', 'funny'),
    new Data('Funniest Thing You Ever Did See', 'Kind of a wide claim, but just trust me', 'fake link', 'funny'),
    new Data('Final Funny Thing', 'Funny Funny funny', 'fake link', 'funny'),
  ];
}
//   var database: Database = {
//     "funny" : [
//       new Funny(),
//       new Funny(),
//       new Funny()
//     ],
//     "gifs" : [
//       new Gif(),
//       new Gif(),
//       new Gif()
//     ],
//     "movies" : [
//       new Movie(),
//       new Movie(),
//       new Movie()
//     ]
//   };
// },


// constructor (public )
