import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../../../model/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  @Input() private party: Observable<Party>;
  @Input() private title: string;

  constructor() { }

  ngOnInit() {
  }

}
