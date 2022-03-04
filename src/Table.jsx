import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './App.css';

// import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { useEffect } from 'react';

function Table() {
  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);
  const [hidden, setHidden] = React.useState(false);
  const [columnDefs] = useState([
    { field: 'Name' },
    { field: 'Age' },
    { field: 'mobile', hide: false },
    { field: 'email', hide: false },
    // { field: 'id', checkboxSelection: true },
    // {
    //   field: 'name',
    //   headerCheckboxSelection: true,
    //   // rowGroup: true,
    // },
    // { field: 'email', tooltipField: 'name' },

    // {
    //   headerName: 'Comment',
    //   field: 'body',
    //   tooltipField: 'email',
    //   hide: hidden,
    //   // cellClass: (params) => (params.value < 18 ? 'major' : 'minor'),
    // },
    // { field: 'moible', tooltipField: 'Name' },
    // {
    //   headerName: 'Action',
    //   field: 'Name',
    //   cellRenderer: (getin) => (
    //     <button onClick={() => actionHandler(getin)}>Edit</button>
    //   ),
    // },
  ]);

  const [rowData] = useState([
    {
      Name: 'Ajeeth',
      Age: '23',
      email: 'rajeethkumarind01@gmail.com',
      mobile: +91_01,
    },
    {
      Name: 'Ranjith',
      Age: '19',
      email: 'ranjthkumar07@gmail.com',
      mobile: +91_02,
    },
    { Name: 'jojo', Age: '17', email: 'jojo11@gmail.com', mobile: +91_03 },
  ]);

  // static data

  // function actionHandler(welcome) {
  //   alert(`${welcome.data.Name} : ${welcome.data.Age}`);
  //   // console.log(welcome.data.Age);
  // }

  const defaultColumnDef = {
    sortable: true,
    filter: true,
    editable: true,
    floatingFilter: true,
    flex: 1,
  };
  // dynamic data
  // useEffect(() => {
  //   fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
  //     .then((res) => res.json())
  //     .then((rowData) => setRowData(rowData));
  // }, []);

  // const onButtonClick = () => {
  //   const selectedRow = gridRef.current.api.getSelectedNodes();
  //   const selectedData = selectedRow
  //     .map((scr) => scr.data)
  //     .map((sr) => `${sr.Name} -> ${sr.Age}`);
  //   // const showData = selectedData.map((scr) => `${scr.model} : ${scr.price}`);
  //   // console.log(selectedData);
  //   alert(`Selected nodes: ${selectedData}`);
  // };

  // const autoGroupColumnDef = useMemo(
  //   () => ({
  //     field: 'Age', // show model in group column at leaf levels
  //     cellRendererParams: {
  //       checkbox: true, // put in checkbox selection in group column
  //     },
  //   }),
  //   []
  // );

  // let gridApi;
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    // fetch('https://jsonplaceholder.typicode.com/comments')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     params.api.applyTransaction({ add: res });
    //     params.api.paginationGoToPage(10 - 1);
    //   });
  };

  // export CSV
  // const onButtonClick = () => {
  //   gridApi.exportDataAsCsv();
  // };

  const rowSelectionType = 'multiple';
  const onSelectionChanged = (data) => {
    console.log(data.api.getSelectedRows());
  };

  const isRowSelectable = (rowValue) => {
    return rowValue.data;
    // ! --> based on condition
    // ? rowValue.data.id % 2 == 0 || rowValue.data.email.includes('.com')
    // : false;
  };

  // const onRecordsChange = (records) => {
  //   gridApi.api.paginationSetPageSize(records);
  // };

  const showColumn = () => {
    // gridColumnApi.setColumnVisible('email', hidden);
    gridColumnApi.setColumnsVisible(['mobile', 'email'], hidden);
    setHidden(!hidden);
    gridApi.sizeColumnsToFit();
  };
  return (
    <div className='ag-theme-alpine' style={{ height: 400, width: '100%' }}>
      <h2>Details</h2>
      {/* <select name='records' onChange={(e) => onRecordsChange(e.target.value)}>
        <option value='1'>1</option>
        <option value='10'>10</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
        <option value='250'>250</option>
      </select> */}
      <button onClick={showColumn}>Show hidden columns</button>
      {/* <button onClick={onButtonClick}>Export as CSV</button> */}
      <AgGridReact
        // ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColumnDef}
        onGridReady={onGridReady}
        enableBrowserTooltips={true}
        tooltipShowDelay={{ tooltipShowDelay: 2 }}
        rowSelection={rowSelectionType}
        rowMultiSelectWithClick={true}
        onSelectionChanged={onSelectionChanged}
        isRowSelectable={isRowSelectable}
        // pagination={true}
        // paginationPageSize='10'
        // paginationAutoPageSize={true}
        // groupSelectsChildren={true}
        // autoGroupColumnDef={autoGroupColumnDef}
      />
    </div>
  );
}

export default Table;
