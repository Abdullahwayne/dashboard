import React,{useState} from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Form, Input, Modal, Select, Table } from "antd";
import { LiveScores, LiveScoresColuns, ProfilePencil, theColumns } from "../utils/utils";
import { styles } from "./sports.style";
import { Option } from "antd/lib/mentions";

const { Meta } = Card;
const Sports = () => {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCreateCancel = () => {
    setIsCreateModalVisible(false);
  };
  
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCreateOk = () => {
    setIsCreateModalVisible(false);
  };
  const [form] = Form.useForm();
  const [formCreate] = Form.useForm();

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
    
    <div className="sports-container">
       <div  style={{display:"flex", alignItems:"flex-end", justifyContent:"flex-end", padding:"20px"}}>
        <Button type="primary" onClick={showModal}>
         Add Game
        </Button>
        </div>
      <div className="sports-container-parent">
        
        <div className="site-card-border-less-wrapper" style={{display:"flex", flexWrap:"wrap", gap:"25px", width:"100%"}}>
       <Modal
                  title="Create Live game"
                  visible={isCreateModalVisible}
                  onOk={handleCreateOk}
                  okText="Submit"
                  onCancel={handleCreateCancel}
                >
                <Form
      
      
      form={formCreate}
      initialValues={{
        layout: formLayout,
      }}
      // onValuesChange={onFormLayoutChange}
    >
     
        
      
      <Form.Item label="Team one Name">
        <Input placeholder="Boston United" />
      </Form.Item>
      <Form.Item label="Team two Name">
        <Input placeholder="Boston United" />
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
      <Option value="coach ">Coach</Option>
      <Option value="athlete ">Athlete</Option>

  </Select>
  </Form.Item>
      
    </Form>
  
                </Modal>
          <Card
          extra={<Button type='link' onClick={showModal} style={{display:"flex"}}>{ProfilePencil}</Button>}
            title = {<h1 style={{color:"#191970", fontSize:"30px", fontWeight:"bold"}}>Live Score</h1>}
            bordered={true}
            style={{
              width: "48%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color:"#B22222",
              fontWeight:"bold"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "30px",
                color:"#B22222",
              }}
            >
              <p>News Boston</p>
              <h2> VS</h2>
              <p>New Orleans</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <h2>{LiveScores[0].TeamScore}</h2>
              <h2>{LiveScores[1].TeamScore}</h2>
            </div>
            <div>
              <Table
                dataSource={LiveScores}
                columns={LiveScoresColuns}
                pagination={false}
              />
            </div>
          </Card>
          <Card
          extra={<Button type='link' onClick="" style={{display:"flex"}}>{ProfilePencil}</Button>}

            title={<h1 style={{color:"#191970", fontSize:"30px", fontWeight:"bold"}}>Live Score</h1>}
            bordered={true}
            style={{
              width: "48%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color:"#B22222",
              fontWeight:"bold"
              
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "30px",
              }}
            >
              <p>News Boston</p>
              <h2> VS</h2>
              <p>New Orleans</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <h2>{LiveScores[2].TeamScore}</h2>
              <h2>{LiveScores[3].TeamScore}</h2>
            </div>
            <div>
              <Table
                dataSource={LiveScores}
                columns={LiveScoresColuns}
                pagination={false}
              />
            </div>
          </Card>
          <Card
          extra={<Button type='link' onClick="" style={{display:"flex"}}>{ProfilePencil}</Button>}

            title={<h1 style={{color:"#191970", fontSize:"30px", fontWeight:"bold"}}>Live Score</h1>}
            bordered={true}
            style={{
              width: "48%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color:"#B22222",
              fontWeight:"bold"
            }}
          >
            <div className="ant-card-">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "30px",
              }}
            >
              <p>News Boston</p>
              <h2> VS</h2>
              <p>New Orleans</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <h2>{LiveScores[0].TeamScore}</h2>
              <h2>{LiveScores[1].TeamScore}</h2>
            </div>
            <div>
              <Table
                dataSource={LiveScores}
                columns={LiveScoresColuns}
                pagination={false}
              />
            </div>
            </div>
          </Card>
          <Card
          extra={<Button type='link' onClick="" style={{display:"flex"}}>{ProfilePencil}</Button>}

            title={<h1 style={{color:"#191970", fontSize:"30px", fontWeight:"bold"}}>Live Score</h1>}
            bordered={true}
            style={{
              width: "48%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color:"#B22222",
              fontWeight:"bold"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "30px",
              }}
            >
              <p>News Boston</p>
              
              <h2> VS</h2>
              <p>New Orleans</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <h2>{LiveScores[2].TeamScore}</h2>
              <h2>{LiveScores[3].TeamScore}</h2>
            </div>
            <div>
              <Table
                dataSource={LiveScores}
                columns={LiveScoresColuns}
                pagination={false}
              />
            </div>
            <Modal
                  title="Edit Live Games"
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
      <Option value="coach ">Coach</Option>
      <Option value="athlete ">Athlete</Option>

  </Select>
  </Form.Item>
      
    </Form>
  
                </Modal>
          </Card>
          
        </div>
        
      </div>
    </div>
  );
};

export default Sports;
