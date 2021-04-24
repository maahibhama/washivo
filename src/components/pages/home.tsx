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
import PlanList from "./planlist";
import BookingList from "./bookinglist";

const Home = () => {

  const [selectedButtonIndex, setselectedButtonIndex] = useState(0)
  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          flexDirection: "row",
          flex: 1,
        }}
      >
        <Button type="primary" htmlType="button" onClick={() => setselectedButtonIndex(0) }  style={{ margin: 10 }}>
          Your Plan
        </Button>

        <Button type="primary" htmlType="button" onClick={() => setselectedButtonIndex(1) }  style={{ margin: 10 }}>
          Your Bookings
        </Button>

        <Button type="primary" htmlType="button" onClick={() => setselectedButtonIndex(2) }  style={{ margin: 10 }}>
          Your time slots
        </Button>
      </div>

      {selectedButtonIndex == 0 && <PlanList />}
      {selectedButtonIndex == 1 && <BookingList />}
      {selectedButtonIndex == 2 && <PlanList />}
    </div>
  );
};
export default Home;
