<template>
   <div class="about">
      <ag-grid-vue style="width: 100%; height: 600px; text-align: center" class="ag-theme-alpine"
         :columnDefs="columnDefs" :rowData="rowData" :defaultColDef="defaultColDef.def">
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
   data: () => {
      return ({
         columnDefs: [
            {
               headerName: 'Group1',
               children: [
                  { field: 'col1', valueGetter: getRandomImagePath, maxWidth: 120, },
                  { field: 'col2', valueGetter: () => getRandomSrting(10), maxWidth: 120, },
                  {
                     field: 'col3', sortable: true,
                     valueGetter: () => `${getRandomFloat(2)}кг`, maxWidth: 90,
                  },
               ],
            },
            {
               headerName: 'GROUP2',
               children: [

                  {
                     field: 'col4', sortable: true,
                     maxWidth: 65, valueGetter: () => getRandomInteger() + getRandomInteger(),
                  },
                  { field: 'col5', valueGetter: () => getRandomSrting(5), maxWidth: 100, },
                  {
                     field: 'col6',
                     valueGetter: () => getRandomArrayItem(['str1', 'str2', 'str3', 'str4', 'str5']), maxWidth: 90,
                     sortable: true,
                     filter: true,
                  },
               ],
            },
         ],

         gridApi: null,
         columnApi: null,
         defaultColDef: {
            flex: 1,
            maxWidth: 100,
            sortable: true,
            filter: true,

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
      },
   },
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

function getRandomImagePath() {
   return `${getRandomSrting(3)}/${getRandomSrting(3)}.${getRandomArrayItem(['jpeg', 'png', 'svg'])}`
}

function getRandomArrayItem(arr) {
   return arr[(Math.floor(Math.random() * arr.length))];
}

window.createRowData = function createRowData() {
   var rowData = [];
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
@media (min-width: 1024px) {
   .about {
      min-width: 100%;
      min-height: 100vh;
      display: flex;
      align-items: center;
   }
}
</style>