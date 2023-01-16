<template>
   <div class="table">
      <ag-grid-vue style="width: 1200px; height: 600px;" class="ag-theme-alpine-dark" :columnDefs="columnDefs"
         :rowData="rowData" @grid-ready="onGridReady" :defaultColDef="defaultColDef">
      </ag-grid-vue>
   </div>
</template>

<script>
import 'ag-grid-enterprise';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { createRowData } from "../utils"

export default {
   name: "App",
   components: {
      AgGridVue,
   },
   setup() {
      return ({
         columnDefs: [

            { rowGroup: true, field: 'aggregation', hide: true, },
            {
               headerName: 'GROUP1',
               children: [
                  { headerName: 'Col1', field: 'val6', },
                  { headerName: 'Col2', field: 'val1', },
                  {
                     headerName: 'Col3', field: 'val2', aggFunc: 'sum',
                     valueFormatter: params => params.value + ' кг',
                  },
               ],
            },
            {
               headerName: 'GROUP2',
               children: [
                  {
                     headerName: 'Col4', aggFunc: 'avg',
                     valueGetter: params => params.data.val4 + params.data.val5,
                  },
                  {
                     headerName: 'Col5', field: 'val7',
                     filter: false,
                     cellStyle: { fontWeight: 'bold', textDecoration: 'underline', },
                  },
                  { headerName: 'Col6', field: 'val8', floatingFilter: true, filter: 'agTextColumnFilter', }
               ],
            },
         ],

         defaultColDef: {
            flex: 1,
            sortable: true,
            filter: false,
            floatingFilter: false,
            resizable: true,
            editable: true,
         },
         rowData: null,
      });

   },
   created() {
      this.rowData = createRowData();
   },
   methods: {
      onGridReady(params) {
         this.gridApi = params.api;
         this.gridColumnApi = params.columnApi;
         this.gridApi.expandAll()
      }
   }
};

</script>
<style>
.table {
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>