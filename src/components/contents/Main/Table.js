import * as React from 'react';
import {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import faker from 'faker';
import axios from "axios";
import {Button} from "@mui/material";

console.log(faker.internet.email());

const columns = [
  {field: 'id', headerName: 'ID', width: 70},
  {field: 'firstName', headerName: 'First name', width: 130},
  {field: 'lastName', headerName: 'Last name', width: 130},
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
  {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
  {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
  {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
  {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
  {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
  {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
  {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
  {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
];

const Table = () => {
  const [data, setData] = useState(null);

  const serviceKey = "star"; // 서비스키 입력

  /* 아래는 쿼리 변수들로 차후 입력받을 예정 */

  const [numOfRows, setRows] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const [startCreateDt, setStartCreateDt] = useState(() => {
    let date = new Date();
    // date.setDate(date.getDate() - 1);
    const result = date.toISOString().slice(0, 10).replace(/[-]/g, '');
    return result;
  });

  const [endCreateDt, setEndCreateDt] = useState(() => {
    let date = new Date();
    const result = date.toISOString().slice(0, 10).replace(/[-]/g, '');
    return result;
  });

  const url = `/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`;


  const onClick = async () => {
    try {
      const response = await axios(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/xml; charset=utf-8',
        },
        withCredentials: true,
        credentials: 'same-origin',
      });

      setData(response.data);

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{height: 400, width: '100%'}}>
      <Button onClick={onClick}>데이터 불러오기</Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Table
