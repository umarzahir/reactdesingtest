import React from "react";
import { Button, Card } from "react-bootstrap";

export default function ThirdCard() {
  return (
    <Card style={{ width: "350px", height: "400px" }}>
      <Card.Body className="d-flex justify-content-around flex-column align-items-center">
        <Card.Title style={{ color: "#03989E" }}>
          اضف فرصتك الاستثمارية
        </Card.Title>
        <Card.Text style={{ color: "#9CA6AF", maxWidth: "250px" }}>
          تحتاج استثمار يكبر وينمي مشروعك بشكل جدا سريع ؟ تقدم الان عبر بوابة
          سكوبير
        </Card.Text>
        <Button style={{ backgroundColor: "#03989E", width: "300px" }}>
          تقدم الان
        </Button>
      </Card.Body>
    </Card>
  );
}
