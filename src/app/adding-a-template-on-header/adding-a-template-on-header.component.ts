import { AfterViewInit, ChangeDetectorRef, Component, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotTableComponent } from '@handsontable/angular';
import Handsontable from 'handsontable';
import { FilterInputComponent } from '../filter-input/filter-input.component';

@Component({
  selector: 'app-adding-a-template-on-header',
  templateUrl: './adding-a-template-on-header.component.html',
  styleUrls: ['./adding-a-template-on-header.component.scss']
})
export class AddingATemplateOnHeaderComponent implements AfterViewInit, OnInit {
  columns = ['A','B','C','D'];
  formObject = this.columns.reduce((acc,curr) => ({...acc, [curr]: new FormControl()}), {} as Record<string, FormControl>);
  formGroup = new FormGroup(this.formObject);
  @ViewChild('inputTemplate') inputTemplate!: TemplateRef<any>;
  // @ViewChild('hottable') hottable!: TemplateRef<HotTableComponent>;
  @ViewChild(HotTableComponent) hottable!: HotTableComponent;
  constructor(
    private viewRef: ViewContainerRef,
    private changeRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    // it logs!
    this.formGroup.valueChanges.subscribe(console.log)
  }
  createHeaders = () => this.columns.map(this.createInput);
  createInput = () => this.viewRef.createComponent(FilterInputComponent);

  createInputWithFormControl = (formControl: FormControl) => this.viewRef.createEmbeddedView(this.inputTemplate, {control: formControl});
  createInputsFromTemplate = () => this.columns.map(col => this.createInputWithFormControl(this.formObject[col]));

  // headerInputs = this.createHeaders();
  headerInputsFromTemplate!: Record<string, EmbeddedViewRef<any>>;
  // hotSettings: Handsontable.GridSettings = {
  //   data: [
  //     ['A1', 'B1', 'C1', 'D1'],
  //     ['A2', 'B2', 'C2', 'D2'],
  //     ['A3', 'B3', 'C3', 'D3'],
  //     ['A4', 'B4', 'C4', 'D4'],
  //   ],
  //   colHeaders: true,
  //   height: 'auto',
  //   licenseKey: 'non-commercial-and-evaluation',
  // };
  hotSettings!: Handsontable.GridSettings;
  ngAfterViewInit() {
    setTimeout(() => {
      this.headerInputsFromTemplate = this.columns.reduce((acc, curr) => ({
        ...acc,
        [curr]: this.createInputWithFormControl(this.formObject[curr])
      }), {} as Record<string, EmbeddedViewRef<any>>);
      this.hotSettings = {
        /** when you provide initial hotsettings, and just update the `afterGetColHeader`, it does not call it. */
        // ...this.hotSettings,
        
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
          TH.prepend(this.headerInputsFromTemplate[this.columns[column]].rootNodes[0]);
          /** this is for providing a component as filter instead of template */
          // TH.prepend(this.headerInputs[column].location.nativeElement);
        },
      }; 
      this.changeRef.markForCheck();
      this.changeRef.detectChanges();
    });
  }
}