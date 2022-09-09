import React, { useState } from "react";
import { Avatar, Card, Input, Modal, Select, Table, Form, Button } from "antd";
import { MedicaldataColumns, MedicaldataSource } from "../utils/utils";

const Medical = () => {
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
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
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
    formLayout === "horizontal"
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
    <div className="medical-container">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          padding: "15px",
        }}
      >
        <Button type="primary" onClick={showModal}>
          Add Atheletes
        </Button>
      </div>
      <div className="medical-container-heading">
        <h1>Medical Page</h1>
      </div>
      <div className="medical-container-body">
        <Table dataSource={MedicaldataSource} columns={MedicaldataColumns} />;
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
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item label="Age">
              <Input placeholder="Age" />
            </Form.Item>
            <Form.Item label="Availablity ">
              <Select
                defaultValue="Fit"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
              >
                <Option value="admin">Fit</Option>
                <Option value="student">Unavailable</Option>

                <Option value="superadmin ">Injured Admin</Option>
                <Option value="superadmin ">Available</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Attendance">
              <Input placeholder="Attendance" />
            </Form.Item>
            <Form.Item label="Diagnosis">
              <Input placeholder="Diagnosis" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Medical;
