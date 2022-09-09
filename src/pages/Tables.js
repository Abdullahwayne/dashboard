import { Row, Col, Card, Radio, Table, Upload, Button, Modal } from "antd";

import { ToTopOutlined } from "@ant-design/icons";

import {
  TableColumns,
  TableData,
  TableDataProject,
  TableFormProps,
  TableProject,
} from "../utils/utils";

// Images

function Tables() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Authors Table"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    {/* <Radio.Button value="a">All</Radio.Button> */}
                    {/* <Radio.Button value='b'>ONLINE</Radio.Button> */}
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={TableColumns}
                  dataSource={TableData}
                  pagination={true}
                  className="ant-border-space"
                // onClick={Modal}
                />
               
              </div>
            </Card>

           
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
