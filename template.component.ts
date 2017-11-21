import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


/**
 *
 */
@Component({
  selector: 'comp-sel',
  templateUrl: './component.html',
  styleUrls: ['./scss/.scss'],
  changeDetection: ChangeDetectionStrategy.onPush,
})
export class Component {
  constructor() {
  }
}
