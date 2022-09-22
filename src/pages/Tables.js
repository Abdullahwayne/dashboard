import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Modal,
  Upload,
  Button,
  Input,
  Form,
  Select,
  Space,
  Skeleton,
} from "antd";
import React, { useEffect, useState } from "react";

import { DeleteOutlined, EditOutlined, ToTopOutlined } from "@ant-design/icons";
// import Modal from "react-modal";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import {
  TableData,
  TableDataProject,
  TableFormProps,
  TableProject,
} from "../utils/utils";
import { useMutation, useQuery } from "@apollo/client";
import { ALL_USERS } from "../graphql/queries/userQueries";
import { Option } from "antd/lib/mentions";
import { DELETE_USER } from "../graphql/mutations/userMutations";
// Images

function Users({ user }) {
  const { confirm } = Modal;
  const [id, setId] = useState("");
  const [deleteUser] = useMutation(DELETE_USER, {
    variables: {
      id: id,
    },
    update(cache, { data: { deleteUser } }) {
      const { getAllUsers } = cache.readQuery({ query: ALL_USERS });
      cache.writeQuery({
        query: ALL_USERS,
        data: {
          getAllUsers: getAllUsers.filter((user) => user.id !== deleteUser.id),
        },
      });
    },
    //
  });
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const { loading, error, data } = useQuery(ALL_USERS, {
    variables: {},
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const editUserModal = () => {
    setIsModalOpen(true);
  };
  const deletePost = async () => {
    try {
      const response = await deleteUser({
        id: id,
      });

      console.log(response, "successfull");
    } catch (errors) {
      console.log(errors.message, "message", data.id, data);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showConfirm = () => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",

      onOk() {
        console.log("OK");
        deletePost();
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const [form] = Form.useForm();
  const [formCreate] = Form.useForm();
  const [userData, setUserData] = useState("");
  const TableColumns = [
    {
      title: "NO",
      dataIndex: "id",
      key: "id",
      width: "32%",
      render: (data, index, element) => {
        return <p  style= {{color :"#8A2BE2"}}onClick={console.log(element)}>{element + 1}</p>
      },
    },
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      width: "32%",
      render: (text, props) => {
        return <p style={{ color: "#6A5ACD"}}>{text}</p>;
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      width: "32%",
      render: (text) => {
        return <p style={{ color: "#6A5ACD" }}>{text}</p>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "32%",
      render: (text) => {
        return <p style={{ color: "#6A5ACD" }}>{text}</p>;
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => {
        return <p style={{ color: "#6A5ACD" }}>{text}</p>;
      },
    },

    // {
    //   title: 'STATUS',
    //   key: 'status',
    //   dataIndex: 'status',
    // },
    {
      title: "Attendance",
      key: "",
      dataIndex: "",
      render:()=>{
        return(
          <div>
            <p style={{ color: "#6A5ACD" }}> 65% </p>
          </div>
        )
      }
     
      
    },
    {
      title: "Action",

      render: (record) => {
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <EditOutlined
              style={{ color: "blue" }}
              onClick={() => {
                editUserModal();
                setUserData(record)
                console.log("ID", record);
                console.log(userData, "bhai user data hai");
                setId(record?.id);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                console.log("clicking");
                showConfirm();
                console.log("ID", record);
                setId(record?.id);
              }}
              style={{ color: "red" }}
            />
          </div>
        );
      },
    },
  ];
  if (loading) return <Skeleton />;
  if (error) return <p>Something went wrong</p>;

  if (data)
    return (
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Users"
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
                dataSource={data?.getAllUsers}
                pagination={{ defaultPageSize: 10 }}
                className="ant-border-space"
              />
            </div>

            <Modal
              title="Edit Users"
              visible={isModalOpen}
              okText="Submit"
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form
                form={formCreate}

                // onValuesChange={onFormLayoutChange}
              >
                
                <Form.Item   label="First Name">
                  <Input value={userData?.firstname} placeholder="John"  />
                </Form.Item>
                <Form.Item label="Last Name">
                  <Input value={userData?.lastname} placeholder="Doe" />
                </Form.Item>
                <Form.Item label="Email">
                  <Input value={userData?.email} placeholder="Do@e" />
                </Form.Item>
                <Form.Item label="Roles">
                  <Select
                    value={userData?.role}
                    style={{
                      width: 120,
                    }}
                    onChange={handleChange}
                  >
                    <Option value="admin">Teacher</Option>
                    <Option value="student">Player</Option>

                    <Option value="superadmin ">User</Option>
                    <Option value="coach ">Coach</Option>
                    <Option value="athlete ">Athlete</Option>
                  </Select>
                </Form.Item>
             
              </Form>
            </Modal>
           
          </Card>
        </Col>
      </Row>
    );
}

export default Users;
