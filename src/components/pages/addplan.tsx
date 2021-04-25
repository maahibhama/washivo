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

const AddPlan = () => {
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
            Add Plan
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form {...layout} onFinish={handleSubmit}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input plan name",
                },
              ]}
            >
              <Input placeholder="Please enter plan name" />
            </Form.Item>
            <Form.Item
              name="details"
              label="Details"
              rules={[
                {
                  required: true,
                  message: "Please input plan details",
                },
              ]}
            >
              <Input placeholder="Please enter plan details" />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  message: "Please input plan price",
                },
              ]}
            >
              <Input placeholder="Please enter plan price" />
            </Form.Item>
            <div style={{ textAlign: "right" }}>
              <Button type="primary" loading={loading} htmlType="submit">
                Add
              </Button>{" "}
              <Button
                type="dashed"
                htmlType="button"
                onClick={() => history.push("/home")}
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

export default AddPlan;
