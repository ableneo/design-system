import { Component, Input, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'ableneo-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() public iconName: IconName = 'fingerprint';
  @Input() public iconColor: string = 'blue';
  constructor() {}

  ngOnInit(): void {}
}
