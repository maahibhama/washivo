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
  List,
  message,
  Modal,
} from "antd";
import axios from "axios";
import { useHistory } from "react-router";

const { Title, Text } = Typography;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddBooking = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [showAddBookingModul, setshowAddBookingModul] = useState(false);

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
  const data = [1, 2, 3, 4, 5];

  const onClickBooking = () => {
    setshowAddBookingModul(true);
  };

  const handleOnCancelBooking = () => {
    setshowAddBookingModul(false);
  };
  const handleOnBooking = () => {
    // setshowAddBookingModul(false);
  };

  const handleVehicalChange = () => {};

  const ListItem = () => {
    return (
      <List
        dataSource={[1, 2, 3]}
        grid={{ gutter: 16 }}
        itemLayout="vertical"
        size="large"
        style={{}}
        renderItem={(item) => (
          <List.Item>
            <div
              style={{
                padding: 10,
                width: 200,
                minHeight: 200,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: "#F5F5F5",
                borderColor: "black",
                alignItems: "center",
              }}
            >
              <Row>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                    flex: 1,
                    marginBottom: 5,
                  }}
                >
                  {"Plan Name"}
                </Text>
              </Row>
              <Row>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "green",
                    flex: 1,
                    marginBottom: 5,
                  }}
                >
                  {"$123"}
                </Text>
              </Row>
              <Row style={{ flex: 1, minHeight: 80 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: "lighter",
                    flex: 1,
                    marginBottom: 5,
                  }}
                >
                  {"Plan info"}
                </Text>
              </Row>
              <Row justify="center" style={{ marginBottom: 5 }}>
                <Button
                  type="primary"
                  onClick={onClickBooking}
                  htmlType="submit"
                >
                  Booking
                </Button>
              </Row>
            </div>
          </List.Item>
        )}
      />
    );
  };

  const rowTitleAndValue = (title: string, value: string) => {
    return (
      <Row justify="start" align="middle" style={{ marginBottom: 5 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#606060",
          }}
        >
          {`${title}:-`}
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginLeft: 10,
            fontSize: 15,
            fontWeight: "inherit",
          }}
        >
          {value}
        </Text>
      </Row>
    );
  };

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: "center" }} level={2}>
            Add Booking
          </Title>
        </Col>
      </Row>
      <List
        dataSource={data}
        style={{ flex: 1 }}
        renderItem={(item) => (
          <List.Item>
            <div style={{ flex: 1 }}>
              {rowTitleAndValue("Washer Name", "Mukesh Soni")}
              {rowTitleAndValue(
                "Address",
                "House no 117, ward 10, sujangarh, Rajasthan"
              )}
              {rowTitleAndValue("Basic Information", "Mukesh Soni")}
              {rowTitleAndValue("Comapany Name", "Mukesh Soni")}
              {rowTitleAndValue("Rating", "4/10")}
              <Title style={{ textAlign: "left" }} level={4}>
                Washer Plans
              </Title>
              <ListItem />
            </div>
          </List.Item>
        )}
      />
      <Modal
        title="Add Booking"
        visible={showAddBookingModul}
        onOk={handleOnBooking}
        okText={"Book"}
        onCancel={handleOnCancelBooking}
      >
        <Row>
          <Text
            style={{
              textAlign: "center",
              marginRight: 10,
              fontSize: 15,
              fontWeight: "inherit",
            }}
          >
            {"Select Vehical"}
          </Text>
          <Select
            placeholder={"Please select vehical"}
            style={{ width: 300 }}
            onChange={handleVehicalChange}
          >
            <Option value="jack">
              {
                <>
                  {rowTitleAndValue("name", "sdsd")}
                  {rowTitleAndValue("name", "sdsd")}
                </>
              }
            </Option>
            <Option value="sdd">
              {
                <>
                  {rowTitleAndValue("name", "sdsd")}
                  {rowTitleAndValue("name", "sdsd")}
                </>
              }
            </Option>
          </Select>
        </Row>
        <Row style={{marginTop: 10}}>
          <Text
            style={{
              textAlign: "center",
              marginRight: 10,
              fontSize: 15,
              fontWeight: "inherit",
            }}
          >
            {"Select Time Slot"}
          </Text>
          <Select
            placeholder={"Please select time slot"}
            style={{ width: 300 }}
            onChange={handleVehicalChange}
          >
            <Option value="jack">
              {
                <>
                  {rowTitleAndValue("name", "sdsd")}
                  {rowTitleAndValue("name", "sdsd")}
                </>
              }
            </Option>
            <Option value="sdd">
              {
                <>
                  {rowTitleAndValue("name", "sdsd")}
                  {rowTitleAndValue("name", "sdsd")}
                </>
              }
            </Option>
          </Select>
        </Row>
      </Modal>
    </div>
  );
};

export default AddBooking;
