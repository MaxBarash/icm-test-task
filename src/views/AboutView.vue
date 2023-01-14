<template>
   <div class="about2">
      <ag-grid-vue style="width: 1200px; height: 600px;" class="ag-theme-alpine-dark" 
         :columnDefs="columnDefs"
         :rowData="rowData"
         @grid-ready="onGridReady"
         :defaultColDef="defaultColDef"
         :autoGroupColumnDef="autoGroupColumnDef" 
         >
      </ag-grid-vue>
   </div>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

export default {
   name: "App",
   components: {
      AgGridVue,
   },
   setup(props) {
      return ({
         columnDefs: [
            {
               headerName: 'Group1',
               children: [
                  { headerName: 'Col1', field: 'val6', },
                  { headerName: 'Col2', field: 'val1', },
                  { headerName: 'Col3', field: 'val2', filter: 'agNumberColumnFilter', rowGroup: true, aggFunc: 'sum', valueGetter: params => params.data.val2 + ' кг', },
               ],
            },
            {
               headerName: 'GROUP2',
               children: [
                  { headerName: 'Col4', aggFunc: 'avg', filter: 'agNumberColumnFilter', rowGroup: true, valueGetter: params => params.data.val4 + params.data.val5, },
                  { headerName: 'Col5', field: 'val7', filter: false, cellStyle: { fontWeight: 'bold', textDecoration: 'underline', }, },
                  { headerName: 'Col6', field: 'val8', floatingFilter: true, filter: 'agTextColumnFilter', },
               ],
            },
            {
               children: [
                  { field: 'total', rowGroup: true,},
               ]
            },
         ],

         defaultColDef: {
            flex: 1,
            sortable: true,
            filter: false,
            floatingFilter: false,
            resizable: true,
            editable: true,
            rowAnimation: true,
         },
         rowData: null,
      });

   },
   created() {
      this.autoGroupColumnDef = {
         field: 'val2',
         aggFunc: 'sum',
      };
      this.rowData = createRowData();
   },
   methods: {
      onGridReady(params) {
         this.gridApi = params.api;
         this.gridColumnApi = params.columnApi;
         const updateData = (data) => params.api.setRowData(data);
      }
   }
};

const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

function getRandomSrting(length) {
   let result = '';
   const abcLength = abc.length;
   for (let i = 0; i < length; i++) {
      result += abc.charAt(Math.floor(Math.random() * abcLength));
   }
   return result;
}

function getRandomFloat(n) {
   return parseFloat((Math.random() * 100 + 1).toFixed(n));
}

function getRandomInteger() {
   return (Math.floor(Math.random() * 100) + 1);
}

function getSumValue(a, b) {
   return a + b;
}

function getRandomImagePath() {
   return `${getRandomSrting(3)}/${getRandomSrting(3)}.${getRandomArrayItem(['jpeg', 'png', 'svg'])}`;
}

function getRandomArrayItem(arr) {
   return arr[(Math.floor(Math.random() * arr.length))];
}

const rowData = [];

window.createRowData = function createRowData() {
   var arr = ['str1', 'str2', 'str3', 'str4', 'str5'];
   for (var i = 0; i < 100; i++) {
      rowData.push({
         val1: getRandomSrting(10),
         val2: getRandomFloat(2),
         val3: getRandomFloat(4),
         val4: getRandomInteger(),
         val5: getRandomInteger(),
         val6: getRandomImagePath(),
         val7: getRandomSrting(10),
         val8: getRandomArrayItem(arr),
      });
   }
   return rowData;
};

</script>
<style>
.about2 {
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>