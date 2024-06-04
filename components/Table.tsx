"use client"

import { useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import { dataTableConst } from "@/contants";
import { dataTable } from "@/types";

export default function Table() {
  const columns= [
    {
        name:"Title",
        selector:(row:any) => row.title,
        cell:(row:any)=><p>{row.title}</p>,
        sortable: true
    },
    {
        name:"Category",
        selector:(row:any) => row.director,
        cell:(row:any)=>row.director,
        sortable: true
    },
    {
        name:"Actor",
        selector:(row:any) => row.actors,
        cell:(row:any)=><p>{row.actors}</p>,
        sortable: true
    },
    {
        name:"Year",
        selector:(row:any) => row.year,
        cell:(row:any)=>row.year,
        sortable: true
    },
  ];

  const [data, setData] = useState<dataTable[]>([]);
  const [filter,setFilter] = useState('');

  const handleFilter = (e:any) =>{
    const value = e || '';
    setFilter(value);
  }

  useEffect(()=>{
    setData(dataTableConst);
  },[])


  const filteredData = data.filter((row) =>{
    return Object.values(row).some((value:any) => value.toString().toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <>
    <div>
      <input type="text"
      className="w-25 form-control"
      placeholder="Search..."
      value={ filter}
      onChange={(e)=>handleFilter(e.target.value)}
      />
    </div>

      <DataTable             
        columns={columns}
        data={filteredData}
        fixedHeader
        pagination        
        />
    </>
  )
}