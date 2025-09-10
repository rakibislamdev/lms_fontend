import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Card, Space } from 'antd';

import {
  PieChart, Pie, Cell, Legend, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from 'recharts';


const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];



export default function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [stats, setStats] = useState({ books: 0, members: 0, transactions: 0 });
  // eslint-disable-next-line no-unused-vars
  const [monthlyTx, setMonthlyTx] = useState([
    { name: 'Jan 24', count: 20 },
    { name: 'Feb 24', count: 35 },
    { name: 'Mar 24', count: 25 },
    { name: 'Apr 24', count: 40 },
    { name: 'May 24', count: 30 },
    { name: 'Jun 24', count: 50 },
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        // const books = await api.get('/books');
        // const members = await api.get('/members');
        // const tx = await api.get('/transactions');
        const tx = { data: [
          { issueDate: '2024-01-15' },
          { issueDate: '2024-01-20' },
          { issueDate: '2024-02-10' },
          { issueDate: '2024-02-25' },
          { issueDate: '2024-03-05' },
          { issueDate: '2024-03-15' },
          { issueDate: '2024-04-01' },
          { issueDate: '2024-04-18' },
          { issueDate: '2024-05-22' },
          { issueDate: '2024-06-03' },
          { issueDate: '2024-06-14' },
          { issueDate: '2024-06-20' },
        ] };

        // setStats({ books: books.data.length, members: members.data.length, transactions: tx.data.length });
        setStats({ books: 5, members: 10, transactions: 15 });

        // Process monthly transactions for the past 6 months
        const monthsMap = {};
        const now = new Date();
        for (let i = 5; i >= 0; i--) {
          const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
          const key = d.toLocaleString('default', { month: 'short', year: '2-digit' });
          monthsMap[key] = 0;
        }
        tx.data.forEach(t => {
          if (t.issueDate) {
            const d = new Date(t.issueDate);
            const key = d.toLocaleString('default', { month: 'short', year: '2-digit' });
            if (monthsMap[key] !== undefined) {
              monthsMap[key]++;
            }
          }
        });
        // const monthlyData = Object.entries(monthsMap).map(([name, count]) => ({ name, count }));
        // setMonthlyTx(monthlyData);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  const pieData = [
    { name: 'Books', value: 10 },
    { name: 'Members', value: 5 },
    { name: 'Transactions', value: 20 },
    { name: 'Overdue', value: 15 },

  ];
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Total Books" variant="borderless">
            <p style={{ fontSize: 24, fontWeight: 'bold' }}>1,250</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Members" variant="borderless">
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>350</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Books Borrowed" variant="borderless">
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>120</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card title="Overdue Books" variant="borderless">
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>15</p>
        </Card>
      </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 24 }}>
        {/* Pie Chart */}
        <Col xs={24} md={12}>
          <Card variant="borderless" title="Library Overview">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Monthly Transactions Bar Chart */}
        <Col xs={24} md={12}>
          <Card variant="borderless" title="Monthly Transactions (Last 6 Months)">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={monthlyTx}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    <Row gutter={16} style={{ marginTop: 24 }}>
      <Col span={12}>
        <Card variant="borderless" title="Recent Activity">
          <p>Alice Johnson borrowed 'To Kill a Mockingbird'.</p>
          <p>New book 'Dune' added to the collection.</p>
          <p>Bob Smith renewed his Gold membership.</p>
        </Card>
      </Col>
      <Col span={12}>
        <Card variant="borderless" title="Quick Actions">
          <Space>
            <Button type="primary">Add New Book</Button>
            <Button>Add New Member</Button>
            <Button>Issue a Book</Button>
          </Space>
        </Card>
      </Col>
    </Row>
  </div>
  );
}