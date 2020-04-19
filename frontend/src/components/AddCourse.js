import React, { useState } from "react";
import "../App.css";
import { Button, Card, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

const AddCourse = (props) => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const id = props.student.id;

  const Post = async () => {
    const res = await axios.post("http://localhost:5000/course", {
      studentId: id,
      name: name,
      description: detail,
      price: price,
    });
    props.history.push("/");
  };

  return (
    <>
      <div className="bg center_page">
        <h1 className="font2">เพิ่มคอร์สเรียนของฉัน</h1>

        <Form style={{ width: "40%" }}>
          {/* <Form.Label className="font2">
                        ข้อมูลส่วนตัว</Form.Label>
                    <div style={{ marginTop: 5, marginBottom: 5 }}>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="ชื่อจริง" className="font" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="นามสกุล" className="font" />
                            </Col>
                        </Form.Row>
                    </div>
                    <Form.Control placeholder="อีเมล์" className="font" style={{ marginTop: 5, marginBottom: 5 }} />
                    <Form.Control placeholder="เบอร์โทรศัพท์" className="font" style={{ marginTop: 5, marginBottom: 5 }} />
                    <Form.Label className="font2">ข้อมูลคอร์สเรียน</Form.Label>
                    <Form.Control placeholder="วิชาที่อยากเรียน" className="font" style={{ marginTop: 5, marginBottom: 5 }} />
                    <div style={{ marginTop: 5, marginBottom: 5 }}>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="อายุ" className="font" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="ชั้นการศึกษา" className="font" />
                            </Col>
                        </Form.Row>
                    </div> */}
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">ชื่อวิชา</Form.Label>
              <Col>
                <Form.Control
                  placeholder="วิชาที่อยากเรียน"
                  className="font"
                  style={{ marginTop: 5, marginBottom: 5 }}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">รายละเอียดวิชา</Form.Label>
              <Col>
                <Form.Control
                  placeholder="รายละเอียด"
                  className="font"
                  style={{ marginTop: 5, marginBottom: 5 }}
                  onChange={(e) => setDetail(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label className="font2">ราคา</Form.Label>
              <Col>
                <Form.Control
                  placeholder="ราคา"
                  className="font"
                  style={{ marginTop: 5, marginBottom: 5 }}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form.Row>
        </Form>
        <Button
          variant="danger"
          className="font"
          style={{ marginTop: 20, marginLeft: 20 }}
          onClick={Post}
        >
          ยืนยัน
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = ({ student }) => ({ ...student });

export default connect(mapStateToProps)(AddCourse);
