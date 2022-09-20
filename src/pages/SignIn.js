import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import signinbg from "../assets/images/img-signin.jpg";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import {
  SigninProfile,
  SigninSignin,
  SigninSignup,
  SigninTemplate,
} from "../utils/utils";

import { gql, useMutation } from "@apollo/client";
import { LOGIN_ADMIN, LOGIN_USER } from "../graphql/mutations/userMutations";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg-2.jpg";
import logoo from "../assets/images/logoo.png";


export default function SignIn() {
  
  const [id, setID] = useState("")
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Title } = Typography;
  const { Header, Footer, Content } = Layout;
  let history = useHistory();

  const [loginAdmin, { data, loading, error }] = useMutation(LOGIN_ADMIN, {
    variables: {
      loginAdminInput: {
      
        email,
        password
      },
    },
  });

  //show error message dont use here for testing
  if (error) console.log("ERROR: ", error);
  if (loading) console.log("LOADING...");

  const onFinish = async (e) => {
    try {
      if (email && password) {
        let response = await loginAdmin({
          email,
          password,
        });
        console.log("response", response.data.loginUser);
        if (response && !error) {
          history.push("/");
          console.log(response.data)
        }
      } else {
        alert("Please fill the fields");
      }
    } catch (err) {
      console.log("Exception Error:", err);
    }
  };

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Layout className="layout-default layout-signin">
        <Header>
          <div className="header-col header-brand">
            <h5>Stats JR Admin Dashboard</h5>
          </div>
          {/* <div className='header-col header-nav'>
              <Menu mode='horizontal' defaultSelectedKeys={['1']}>
                <Menu.Item key='1'>
                  <Link to='/dashboard'>
                    {SigninTemplate}
                    <span> Dashboard</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key='2'>
                  <Link to='/profile'>
                    {SigninProfile}
                    <span>Profile</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key='3'>
                  <Link to='/sign-up'>
                    {SigninSignup}
                    <span> Sign Up</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key='4'>
                  <Link to='/sign-in'>
                    {SigninSignin}
                    <span> Sign In</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </div> */}
          {/* <div className='header-col header-btn'>
              <Button type='primary'>FREE DOWNLOAD</Button>
            </div> */}
        </Header>
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">Sign In</Title>
              <Title className="font-regular text-muted" level={5}>
                Enter your email and password to sign in
              </Title>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="email"
                  label="Email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  className="password"
                  label="Password"
                  name="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item
                  name="remember"
                  className="aligin-center"
                  valuePropName="checked"
                >
                  <Switch defaultChecked onChange={onChange} />
                  Remember me
                </Form.Item>

                <Form.Item>
                  {/* <NavLink to="/"> */}
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    SIGN IN
                  </Button>
                  {/* </NavLink> */}
                </Form.Item>
                {error ? (
                  <p style={{ color: "red" }}> {error.message} </p>
                ) : null}

                <p className="font-semibold text-muted">
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-dark font-bold">
                    Sign Up
                  </Link>
                </p>
              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12, display:"flex", justifyContent:"center" }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
          

            >
              <img src={logoo} alt="" style={{paddingBottom:"10rem"}}/>
            </Col>
          </Row>
        </Content>
        <Footer>
         
          <p className="copyright">
            {" "}
            Copyright © 2022 by Stats JR.{" "}
          </p>
        </Footer>
      </Layout>
    </>
  );
}
