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
import { useHistory } from "react-router";
import { loginUser, editUser } from '../../api/controller';
import { useAppDispatch } from "../../app/hooks";
import { updateIsLogin } from "../../reducer/appSlice";

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
  const dispatch =  useAppDispatch();
  const history = useHistory();


  const onFinish = (values: any) => {
    history.push("/app/home")
    setLoading(true);
    loginUser(values.email, values.password ).then(res => {

      setLoading(false);
      //TODO: Push to home page
      history.push("/home")
      console.log(res);
      alert("Log in success!");

    }).catch(err=>{
      setLoading(false);
      dispatch(updateIsLogin(true));
      history.push("/app/home")
      //alert(err);
      console.log(err);
      //debugger;
    })

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

              label="Email"
              name="email"

              rules={[
                { required: true, message: "Please input your Email!" },
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
                onClick={() => history.push("/signup")}
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
