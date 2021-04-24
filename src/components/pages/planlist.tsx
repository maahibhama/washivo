import React, {useEffect, useState} from 'react';
import {Table, Row, Col, Button, Typography} from 'antd';
import {useHistory} from 'react-router';
import axios from 'axios';

const {Title} = Typography;


const PlanList = () => {
  const history = useHistory();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/users`).then(res => {
      setAllData(res.data);
    });
  });

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Details',
      dataIndex: 'details'
    },
    {
      title: 'Pricing',
      dataIndex: 'pricing'
    },
  ];

  const data = [{
  }];

  allData.map((user: any) => {
    data.push({
     key: user.id,
     username: user.username,
     email: user.email,
     gender: user.gender,
     review: user.review + '%',
   })
   return data;
 });

  const handleClick = () => {
    history.push('/addplan')
  }

  return (
    <div>
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>
            Plan List
            </Title>
            </Col>
          <Col span={6}>
          <Button onClick={handleClick} block>Add Plan</Button>
          </Col>
        </Row>
        <Row gutter={[40, 0]}>
        <Col span={24} >
        <Table columns={columns} dataSource={data} />
        </Col>
        </Row>
    </div>
  );
}

export default PlanList;