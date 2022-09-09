import { useState } from 'react'

import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  Space ,
  message,
} from 'antd'
import { Input, Modal, Select, Table,Form } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons'

import BgProfile from '../assets/images/bg-profile.jpg'
import profilavatar from '../assets/images/face-1.jpg'
import convesionImg from '../assets/images/face-3.jpg'
import convesionImg2 from '../assets/images/face-4.jpg'
import convesionImg3 from '../assets/images/face-5.jpeg'
import {
  ProfileData,
  ProfilePencil,
  ProfileProject,
  ProfileUploadButton,
} from '../utils/utils'

function Profile() {
  const [imageURL, setImageURL] = useState(false)
  const [, setLoading] = useState(false)

  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
const { confirm } = Modal;

const showConfirm = () => {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',

    onOk() {
      console.log('OK');
    },

    onCancel() {
      console.log('Cancel');
    },
  });
};

const showPromiseConfirm = () => {
  confirm({
    title: 'Do you want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'When clicked the OK button, this dialog will be closed after 1 second',

    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },

    onCancel() {},
  });
};

const showDeleteConfirm = () => {
  confirm({
    title: 'Are you sure you want to suspend this account?',
    icon: <ExclamationCircleOutlined />,
    content: 'This may take some time to make it active',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',

    onOk() {
      console.log('OK');
    },

    onCancel() {
      console.log('Cancel');
    },
  });
};

const showPropsConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',

    onOk() {
      console.log('OK');
    },

    onCancel() {
      console.log('Cancel');
    },
  });
};
const { TextArea } = Input;
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(false)
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false)
        setImageURL(false)
      })
    }
  }
  
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

      // const handleChange = (value) => {
      //   console.log(`selected ${value}`);
      // };

  return (
    <>
      <div
        className='profile-nav-bg'
        style={{ backgroundImage: 'url(' + BgProfile + ')', }}
      ></div>

      <Card
        className='card-profile-head'
        bodyStyle={{ display: 'none' }}
        title={
          <Row justify='space-between' align='middle' gutter={[24, 0]}>
            <Col span={24} md={12} className='col-info'>
              <Avatar.Group>
                <Avatar size={74} shape='square' src={profilavatar} />

                <div className='avatar-info' style={{}}>
                  <h4 className='font-semibold m-0'>Sarah Jacob</h4>
                  <p>CEO / Co-Founder</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col 
              span={24}
              md={12}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
             
            > 
              <Radio.Group defaultValue='a'>
              <Button type="primary"onClick={showDeleteConfirm} value='a' danger>
      Suspend
    </Button>
                {/* <Radio.Button value='a'>OVERVIEW</Radio.Button> */}
                {/* <Radio.Button value='b'>TEAMS</Radio.Button>
                <Radio.Button value='c'>PROJECTS</Radio.Button> */}
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]} >
        {/* <Col span={24} md={8} className='mb-24 '>
          <Card
            bordered={false}
            className='header-solid h-full'
            title={<h6 className='font-semibold m-0'>Platform Settings</h6>}
          >
            <ul className='list settings-list'>
              <li>
                <h6 className='list-header text-sm text-muted'>ACCOUNT</h6>
              </li>
              <li>
                <Switch defaultChecked />

                <span>Email me when someone follows me</span>
              </li>
              <li>
                <Switch />
                <span>Email me when someone answers me</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Email me when someone mentions me</span>
              </li>
              <li>
                <h6 className='list-header text-sm text-muted m-0'>
                  APPLICATION
                </h6>
              </li>
              <li>
                <Switch defaultChecked />
                <span>New launches and projects</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Monthly product updates</span>
              </li>
              <li>
                <Switch defaultChecked />
                <span>Subscribe to newsletter</span>
              </li>
            </ul>
          </Card>
        </Col> */}
        <Col span={24} md={8} className='mb-24'>
          <Card
            bordered={false}
            title={<h6 className='font-semibold m-0'>Profile Information</h6>}
            className='header-solid h-full card-profile-information'
            extra={<Button type='link' onClick={showModal}>{ProfilePencil}</Button>}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className='text-dark'>
              {' '}
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).{' '}
            </p>
            <hr className='my-25' />
            <Descriptions title='Oliver Liam'>
              <Descriptions.Item label='Full Name' span={3}>
                Sarah Emily Jacob
              </Descriptions.Item>
              <Descriptions.Item label='Mobile' span={3}>
                (44) 123 1234 123
              </Descriptions.Item>
              <Descriptions.Item label='Email' span={3}>
                sarahjacob@mail.com
              </Descriptions.Item>
              <Descriptions.Item label='Location' span={3}>
                USA
              </Descriptions.Item>
             
            </Descriptions>
            <Modal
                  title="Edit Profile"
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
     
        
      
      <Form.Item label="Full Name">
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item label="About yourself">
      <TextArea rows={4} placeholder="For ex. Hi this is Jacob..." />
      </Form.Item>
     
      <Form.Item label="Mobile number">
        <Input placeholder="Mobile Number" />
      </Form.Item>
  <Form.Item label="Email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Location">
        <Input placeholder="Location" />
      </Form.Item>
      
    </Form>
  
                </Modal>
          </Card>
        </Col>
        {/* <Col span={2} md={2} className='mb-24'>
          <Card
            bordered={false}
            title={<h6 className='font-semibold m-0'>Conversations</h6>}
            className='header-solid h-full'
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <List
              itemLayout='horizontal'
              dataSource={ProfileData}
              split={false}
              className='conversations-list'
              // renderItem={(item) => (
              //   <List.Item actions={[<Button type='error'>Suspend</Button>]}>
              //     <List.Item.Meta
              //       avatar={
              //         <Avatar shape='square' size={48} src={item.avatar} />
              //       }
              //       title={item.title}
              //       description={item.description}
              //     />
              //   </List.Item>
              // )}
            />
            
          </Card>
        </Col> */}

      </Row>
      
      {/* <Card
        bordered={false}
        className='header-solid mb-24'
        title={
          <>
            <h6 className='font-semibold'>Projects</h6>
            <p>Architects design houses</p>
          </>
        }
      >
        <Row gutter={[24, 24]}>
          {ProfileProject.map((p, index) => (
            <Col span={24} md={12} xl={6} key={index}>
              <Card
                bordered={false}
                className='card-project'
                cover={<img alt='example' src={p.img} />}
              >
                <div className='card-tag'>{p.titlesub}</div>
                <h5>{p.titile}</h5>
                <p>{p.disciption}</p>
                <Row gutter={[6, 0]} className='card-footer'>
                  <Col span={12}>
                    <Button type='button'>VIEW PROJECT</Button>
                  </Col>
                  <Col span={12} className='text-right'>
                    <Avatar.Group className='avatar-chips'>
                      <Avatar size='small' src={profilavatar} />
                      <Avatar size='small' src={convesionImg} />
                      <Avatar size='small' src={convesionImg2} />
                      <Avatar size='small' src={convesionImg3} />
                    </Avatar.Group>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
          <Col span={24} md={12} xl={6}>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader projects-uploader'
              showUploadList={false}
              action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageURL ? (
                <img src={imageURL} alt='avatar' style={{ width: '100%' }} />
              ) : (
                ProfileUploadButton
              )}
            </Upload>
          </Col>
        </Row>
      </Card> */}
    </>
  )
}

export default Profile
