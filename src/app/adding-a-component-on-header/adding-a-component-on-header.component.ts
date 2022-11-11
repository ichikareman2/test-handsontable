import { AfterViewInit, ChangeDetectorRef, Component, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotTableComponent } from '@handsontable/angular';
import Handsontable from 'handsontable';
import { FilterInputComponent } from '../filter-input/filter-input.component';

@Component({
  selector: 'app-adding-a-component-on-header',
  templateUrl: './adding-a-component-on-header.component.html',
  styleUrls: ['./adding-a-component-on-header.component.scss']
})
export class AddingAComponentOnHeaderComponent {
  columns = ['A','B','C','D'];
  formObject = this.columns.reduce((acc,curr) => ({...acc, [curr]: new FormControl()}), {} as Record<string, FormControl>);
  formGroup = new FormGroup(this.formObject);
  @ViewChild('inputTemplate') inputTemplate!: TemplateRef<any>;
  @ViewChild(HotTableComponent) hottable!: HotTableComponent;

  constructor(private viewRef: ViewContainerRef) {}
  
  createHeaders = () => this.columns.map(this.createInput);
  createInput = () => this.viewRef.createComponent(FilterInputComponent);

  headerInputs = this.createHeaders();
  hotSettings: Handsontable.GridSettings = {
    data: [
      ['A1', 'B1', 'C1', 'D1'],
      ['A2', 'B2', 'C2', 'D2'],
      ['A3', 'B3', 'C3', 'D3'],
      ['A4', 'B4', 'C4', 'D4'],
    ],
    colHeaders: true,
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation',
    afterGetColHeader: (column: number, TH: HTMLTableCellElement) => {
      TH.prepend(this.headerInputs[column].location.nativeElement);
    },
  };
}