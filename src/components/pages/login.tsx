import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  message,
  Checkbox,
} from "antd";
import axios from "axios";
import { useHistory } from "react-router";

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
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

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: "center" }} level={2}>
            Login
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
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

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <div style={{ textAlign: "right" }}>
              <Button type="primary" loading={loading} htmlType="submit">
                Login
              </Button>{" "}
              <Button
                type="dashed"
                htmlType="button"
                onClick={() => history.push("/list")}
              >
                Signup
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
