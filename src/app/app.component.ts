import {Component} from '@angular/core';
import {MenuItem} from './common/models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Heroes App';
  links: MenuItem[] = [{
      text: 'Home',
      url: '/'
    },
    {
      text: 'Heroes',
      url: '/heroes'
    }];
}
