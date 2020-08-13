import { Component, OnInit, Input } from '@angular/core';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() colname: any;
  @Input() eventme: Array<any>;

  constructor() { }

  ngOnInit() {}

}
