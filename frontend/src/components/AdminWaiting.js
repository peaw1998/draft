import React, { useState, useEffect } from "react";
import "../App.css";
import { Button, Card, Form, Col } from "react-bootstrap";
import axios from "axios";
import Footer from "./Footer";

const AdminWaiting = () => {
  const [courses, setCourses] = useState([]);

  const getWaiting = async () => {
    let res = await axios.get("http://localhost:5000/waitingcourse");
    setCourses(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getWaiting();
  }, []);
  return (
    <>
      <div className="bg center">
        <h1 className="font2">คอร์สเรียนอยู่ระหว่างรอผู้สอน</h1>
        <div className="status_box">
          {courses.map((item, index) => {
            return (
              <Card
                className="card-waiting"
                style={{ width: "60%", marginTop: 10 }}
              >
                <Card.Header
                  className="font"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  สถานะ : {item.status}
                </Card.Header>
                <Card.Text className="font" style={{ margin: 5 }}>
                  รหัสวิชา : {item.id}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  ชื่อวิชา : {item.name}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  รายละเอียด : {item.description}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  ราคา : {item.price}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  รหัสผู้สร้างคอร์ส : {item.studentId}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  รหัสผู้สอน : -
                </Card.Text>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AdminWaiting;
