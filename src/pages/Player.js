import { Row, Col, Card, Radio, Table, Upload, Button } from "antd";

import { ToTopOutlined } from "@ant-design/icons";

import {
  PlayerColumns,
  PlayerData,
  TableDataProject,
  TableFormProps,
  TableProject,
} from "../utils/utils"; 

// Images

function Player() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Athlete Information"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    {/* <Radio.Button value='b'>ONLINE</Radio.Button> */}
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={PlayerColumns}
                  dataSource={PlayerData}
                  pagination={true} 
                  className="ant-border-space"
                />
              </div>
            </Card>

           
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Player;
