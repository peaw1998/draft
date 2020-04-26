import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Card, Form, Col } from "react-bootstrap";
import axios from "axios";

const AdminSuccess = (props) => {
  const [courses, setCourses] = useState([]);

  const getSuccess = async () => {
    let res = await axios.get("http://localhost:5000/successcourse");
    setCourses(res.data);
    console.log(res.data);
  };
  // const getOffer = async () => {
  //   let res = await axios.get("http://localhost:5000/offer");
  //   console.log(res.data);
  // };
  useEffect(() => {
    getSuccess();
    // getOffer();
  }, []);

  return (
    <>
      <div className="bg center">
        <h1 className="font2">คอร์สเรียนที่สำเร็จแล้ว</h1>
        <div className="status_box">
          {courses.map((item, index) => {
            return (
              <Card bg="success" style={{ width: "60%", marginTop: 10 }}>
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
                <Card.Title className="font" style={{ margin: 5 }}>
                  รหัสวิชา : {item.id}
                </Card.Title>
                <Card.Title className="font" style={{ margin: 5 }}>
                  ชื่อวิชา : {item.name}
                </Card.Title>
                <Card.Text className="font" style={{ margin: 5 }}>
                  รายละเอียด : {item.description}
                </Card.Text>
                <Card.Text className="font" style={{ margin: 5 }}>
                  ราคา : {item.price}
                </Card.Text>
                <Card.Title className="font" style={{ margin: 5 }}>
                  รหัสผู้สร้างคอร์ส : {item.studentId}
                </Card.Title>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default AdminSuccess;
