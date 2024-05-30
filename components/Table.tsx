"use client"

import { useState} from 'react';
import DataTable from 'react-data-table-component';
import { dataTable } from "@/contants";

export default function Table() {

  const columns= [
    {
        name:"Title",
        selector:(row)=>row.title,
    },
    {
        name:"Category",
        selector:(row)=>row.director,
    },
    {
        name:"Actor",
        selector:(row)=>row.actors,
    },
    {
      name:"Year",
      selector:(row)=>row.year,
  },
    // {
    //     name:"Action",
    //     cell:(row)=>(
    //         <button className="btn btn-danger" onClick={()=>handleDelete(row.id)}>Delete</button>
    //     )
    // }

  ];

  const data = dataTable;

  const [filter,setFilter] = useState('');

  const handleFilter = (e:any) =>{
    const value = e.target.value || '';
    setFilter(value);
  }

  const filteredData = data.filter((row) =>{
    return Object.values(row).some((value) => value.toString().toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <div>
      <div className='flex item-right'>
      <input type="text"
                    className="w-25 form-control"
                    placeholder="Search..."
                    value={filter}
                    onChange={(e)=>handleFilter}
                    
                    />
      </div>
        <DataTable
          columns = {columns}
          data = {filteredData}
          pagination
          fixedHeader
        />
    </div>
  )
}