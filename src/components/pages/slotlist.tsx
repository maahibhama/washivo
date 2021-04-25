import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Typography } from "antd";
import { useHistory } from "react-router";
import axios from "axios";

const { Title } = Typography;

const SlotList = () => {

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/users`).then((res) => {
      setAllData(res.data);
    });
  });

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Start Time",
      dataIndex: "start_time",
    },
    {
      title: "End Time",
      dataIndex: "durationInMinutes",
    },
    {
      title: "Availablity",
      dataIndex: "availablity",
    },
    {
      title: "Vehicle Number",
      dataIndex: "vehical_no",
    },

  ];

  const data = [{
      key: Number,
      Date : Date(),
      "Start Time" : Date.now(),
      "End Time" : Date.now(),
      Availablity: true,
      "Vehical Number" : ""


  }];

//   allData.map((slot: any) => {
//     data.push({
//       key: slot.id
//       id : user.id,
//       Date : user,
//       "Start Time" : Date.now(),
//       "End Time" : Date.now(),
//       Availablity: true,
//       "Vehical Number" : ""
//     });
//     return data;
//   });
  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Title level={2}>Slot List</Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </div>
  );
}

export default SlotList;



const BookingList = () => {










  return <div></div>;
};
