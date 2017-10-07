import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../../model';
import { DetailsPageComponentComponent } from './details-page-component.component';
import { PartyComponent } from './party/party.component';

describe('DetailsPageComponentComponent', () => {
  let component: DetailsPageComponentComponent;
  let fixture: ComponentFixture<DetailsPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPageComponentComponent, PartyComponent ],
          imports: [
            CommonModule,
            ModelModule,
            FormsModule,
            RouterTestingModule.withRoutes([
             { path: 'settings/:collection/edit/:item', component: DetailsPageComponentComponent }
            ])
          ],
        });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
