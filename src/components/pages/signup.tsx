import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  Radio,
  Switch,
  Slider,
  Select,
  message,
} from "antd";
import axios from "axios";
import { useHistory } from "react-router";

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (values: any) => {
    setLoading(true);
    axios
      .post(`http://localhost:5000/users`, values)
      .then((res) => {
        setLoading(false);
        message.success("User Added Successfully!");
        history.push("/list");
      })
      .catch((error) => {
        setLoading(false);
        message.error(error);
      });
  };

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: "center" }} level={2}>
            Sign Up
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form {...layout} onFinish={handleSubmit}>
            <Form.Item
              name="name"
              label="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Please Enter your name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your correct email",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Please Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="ConfirmPassword"
              name="confirmpassword"
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select your gender",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="others">Others</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="type"
              label="type"
              rules={[
                {
                  required: true,
                  message: "Please select your type",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="washer">Washer</Radio>
                <Radio value="endUser">End User</Radio>
                <Radio value="others">Others</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "Please input your address",
                },
              ]}
            >
              <Input placeholder="Please Enter your address" />
            </Form.Item>

            <Form.Item
              name="city"
              label="city"
              rules={[
                {
                  required: true,
                  message: "Please input your city",
                },
              ]}
            >
              <Input placeholder="Please Enter your city" />
            </Form.Item>

            <Form.Item
              name="phoneno"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone no",
                },
              ]}
            >
              <Input placeholder="Please Enter your Phone no" />
            </Form.Item>

            <Form.Item
              name="company"
              label="Company"
              rules={[
                {
                  required: true,
                  message: "Please input your company",
                },
              ]}
            >
              <Input placeholder="Please Enter your company" />
            </Form.Item>

            <Form.Item
              name="details"
              label="Details"
              rules={[
                {
                  required: true,
                  message: "Please input your details",
                },
              ]}
            >
              <Input placeholder="Please Enter your details" />
            </Form.Item>

            <Form.Item
              name="notificaiton"
              label="Receive Notificaiton"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>


            <Form.Item
              name="newsletter"
              label="Receive Newsletters"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>

            <Form.Item
              name="specialoffer"
              label="Receive Special Offer"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>


            <div style={{ textAlign: "right" }}>
              <Button type="primary" loading={loading} htmlType="submit">
                Save
              </Button>{" "}
              <Button
                type="dashed"
                htmlType="button"
                onClick={() => history.push("/list")}
              >
                Back
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
