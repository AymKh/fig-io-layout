import { Component, Input } from '@angular/core';
import { TABCONTENTTYPE } from 'src/app/types/tab.type';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent {
  @Input() DATA!: TABCONTENTTYPE;
}
