import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotTableComponent } from '@handsontable/angular';
import Handsontable from 'handsontable';
import { FilterInputComponent } from './filter-input/filter-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // to test if needs to dispose
  showFirst = true
}