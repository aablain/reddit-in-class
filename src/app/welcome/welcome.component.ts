import { Component, Input } from '@angular/core';
import { Data } from './../data.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
@Input() childDataList: Data[];

}
