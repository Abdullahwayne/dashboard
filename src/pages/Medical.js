import React from 'react'
import { Avatar, Card, Table } from "antd";
import { MedicaldataColumns, MedicaldataSource } from '../utils/utils';

const Medical = () => {
  return (
    <div className='medical-container'>
        <div className='medical-container-heading'>
            <h1>Medical Page</h1>

        </div>
        <div className='medical-container-body'>
        <Table dataSource={MedicaldataSource} columns={MedicaldataColumns} />;
        </div>
      
    </div>
  )
}

export default Medical
