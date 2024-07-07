import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'ng_prime/button';
import { CalendarModule } from 'ng_prime/calendar';
import { ConfirmDialogModule } from 'ng_prime/confirmdialog';
import { ContextMenuModule } from 'ng_prime/contextmenu';
import { DialogModule } from 'ng_prime/dialog';
import { DropdownModule } from 'ng_prime/dropdown';
import { FileUploadModule } from 'ng_prime/fileupload';
import { SelectButtonModule } from 'ng_prime/selectbutton';
import { InputSwitchModule } from 'ng_prime/inputswitch';
import { InputNumberModule } from 'ng_prime/inputnumber';
import { InputTextModule } from 'ng_prime/inputtext';
import { InputTextareaModule } from 'ng_prime/inputtextarea';
import { MultiSelectModule } from 'ng_prime/multiselect';
import { ProgressBarModule } from 'ng_prime/progressbar';
import { RadioButtonModule } from 'ng_prime/radiobutton';
import { RatingModule } from 'ng_prime/rating';
import { SkeletonModule } from 'ng_prime/skeleton';
import { SliderModule } from 'ng_prime/slider';
import { TableModule } from 'ng_prime/table';
import { TabViewModule } from 'ng_prime/tabview';
import { TagModule } from 'ng_prime/tag';
import { ToastModule } from 'ng_prime/toast';
import { ToggleButtonModule } from 'ng_prime/togglebutton';
import { ToolbarModule } from 'ng_prime/toolbar';
import { TooltipModule } from 'ng_prime/tooltip';
import { AppCodeModule } from 'src/app/showcase/layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { IconFieldModule } from 'ng_prime/iconfield';
import { InputIconModule } from 'ng_prime/inputicon';
import { ContextMenuDoc } from './contextmenudoc';
import { BasicDoc } from './basicdoc';
import { CellEditDoc } from './celleditdoc';
import { CheckboxSelectionDoc } from './checkboxselectiondoc';
import { ColumnGroupDoc } from './columngroupdoc';
import { ColumnResizeExpandModeDoc } from './columnresizeexpandmodedoc';
import { ColumnResizeScrollableModeDoc } from './columnresizescrollablemodedoc';
import { ColumnSelectionDoc } from './columnselectiondoc';
import { ColumnToggleDoc } from './columntoggledoc';
import { ControlledSelectionDoc } from './controlledselectiondoc';
import { CustomersDoc } from './customersdoc';
import { CustomSortDoc } from './customsortdoc';
import { DynamicDoc } from './dynamicdoc';
import { ExpandableRowGroupDoc } from './expandablerowgroupdoc';
import { ExportDoc } from './exportdoc';
import { FilterBasicDoc } from './filterbasic';
import { FlexibleScrollDoc } from './flexiblescrolldoc';
import { FrozenColumnsDoc } from './frozencolumnsdoc';
import { FrozenRowsDoc } from './frozenrowsdoc';
import { GridlinesDoc } from './gridlinesdoc';
import { ImportDoc } from './importdoc';
import { HorizontalScrollDoc } from './horizontalscrolldoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { MultipleSelectionDoc } from './multipleselectiondoc';
import { PageOnlySelectionDoc } from './pageonlyselectiondoc';
import { PaginatorBasicDoc } from './paginatorbasicdoc';
import { PaginatorProgrammaticDoc } from './paginatorprogrammaticdoc';
import { ProductsDoc } from './productsdoc';
import { RadioButtonSelectionDoc } from './radiobuttonselectiondoc';
import { ReorderDoc } from './reorderdoc';
import { ResponsiveScrollDoc } from './responsivescrolldoc';
import { ResponsiveStackDoc } from './responsivestackdoc';
import { RowEditDoc } from './roweditdoc';
import { RowspanGroupingDoc } from './rowspangroupingdoc';
import { SingleColumnSortDoc } from './singlecolumnsortdoc';
import { MultipleColumnsSortDoc } from './multiplecolumnssortdoc';
import { SingleSelectionDoc } from './singleselectiondoc';
import { SizeDoc } from './sizedoc';
import { StatefulDoc } from './statefuldoc';
import { StripedDoc } from './stripeddoc';
import { StyleDoc } from './styledoc';
import { SubheaderGroupingDoc } from './subheadergroupingdoc';
import { TemplateDoc } from './templatedoc';
import { VerticalScrollDoc } from './verticalscrolldoc';
import { VirtualScrollDoc } from './virtualscrolldoc';
import { VirtualScrollLazyDoc } from './virtualscrolllazydoc';
import { ColumnResizeFitModeDoc } from './columnresizefitmodedoc';
import { StylingDoc } from './stylingdoc';
import { SelectionEventsDoc } from './selectioneventsdoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { PaginatorLocaleDoc } from './paginatorlocaledoc';
import { DeferredDemo } from '../../demo/deferreddemo';
import { PreSortDoc } from './presortdoc';
import { RowExpansionDoc } from './rowexpansiondoc';
import { FilterSortEditDoc } from './filtersorteditdoc';
import { RemovableSortDoc } from './removablesortdoc';
import { FilterAdvancedDoc } from './filteradvanceddoc';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        TagModule,
        ToastModule,
        InputTextModule,
        InputSwitchModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        SelectButtonModule,
        AppCodeModule,
        AppDocModule,
        DeferredDemo,
        IconFieldModule,
        InputIconModule
    ],
    declarations: [
        ImportDoc,
        BasicDoc,
        DynamicDoc,
        CellEditDoc,
        CheckboxSelectionDoc,
        ColumnGroupDoc,
        ColumnResizeExpandModeDoc,
        ColumnResizeScrollableModeDoc,
        ColumnResizeFitModeDoc,
        ColumnSelectionDoc,
        ColumnToggleDoc,
        ContextMenuDoc,
        ControlledSelectionDoc,
        CustomersDoc,
        CustomSortDoc,
        DynamicDoc,
        ExpandableRowGroupDoc,
        ExportDoc,
        FilterBasicDoc,
        FilterAdvancedDoc,
        FlexibleScrollDoc,
        FrozenColumnsDoc,
        FrozenRowsDoc,
        GridlinesDoc,
        HorizontalScrollDoc,
        LazyLoadDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorBasicDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorProgrammaticDoc,
        ProductsDoc,
        RadioButtonSelectionDoc,
        ReorderDoc,
        ResponsiveScrollDoc,
        ResponsiveStackDoc,
        RowEditDoc,
        FilterSortEditDoc,
        RowExpansionDoc,
        RowspanGroupingDoc,
        SingleColumnSortDoc,
        MultipleColumnsSortDoc,
        SingleSelectionDoc,
        SizeDoc,
        StatefulDoc,
        StripedDoc,
        StyleDoc,
        SubheaderGroupingDoc,
        TemplateDoc,
        VerticalScrollDoc,
        VirtualScrollDoc,
        VirtualScrollLazyDoc,
        StylingDoc,
        SelectionEventsDoc,
        AccessibilityDoc,
        PaginatorLocaleDoc,
        PreSortDoc,
        RemovableSortDoc
    ],
    exports: [AppDocModule]
})
export class TableDocModule {}
