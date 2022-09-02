import { Row, Col, Card, Radio, Table, Upload, Button, Modal, Form, Input, Select } from "antd";

import { ToTopOutlined } from "@ant-design/icons";

import {
  PlayerColumns,
  PlayerData,
  TableDataProject,
  TableFormProps,
  TableProject,
} from "../utils/utils";
import { useState } from "react";

// Images

function Player() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
      const { Option } = Select;
      const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
  return (
    <>
      <div className="tabled">
        <div  style={{display:"flex", alignItems:"flex-end", justifyContent:"flex-end", padding:"20px"}}>
        <Button type="primary" onClick={showModal}>
          Add Atheletes
        </Button>
        </div>
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Athlete Information"
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
                  columns={PlayerColumns}
                  dataSource={PlayerData}
                  pagination={true}
                  className="ant-border-space"
                  onClick={showModal}
                  visible={isModalVisible}
                />

                <Modal
                  title="Add Atheletes"
                  visible={isModalVisible}
                  onOk={handleOk}
                  okText="Submit"
                  onCancel={handleCancel}
                >
                <Form
      
      
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      // onValuesChange={onFormLayoutChange}
    >
     
        
      
      <Form.Item label="Name">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Grade">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Roles">
      <Select
      defaultValue="admin"
      style={{
        width: 120,
      }}
      onChange={handleChange}
    >
      <Option value="admin">Admin</Option>
      <Option value="student">Student</Option>
     
      <Option value="superadmin ">Super Admin</Option>
      <Option value="superadmin ">Coach</Option>
      <Option value="superadmin ">Athlete</Option>

  </Select>
  </Form.Item>
      
    </Form>
  
                </Modal>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Player;
