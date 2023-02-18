import React from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Search() {
  return (
    <Stack className="my-4">
      <div className="mb-3" style={{ position: "relative", maxWidth: "940px" }}>
        <Form.Control placeholder="الماجدية" aria-label="الماجدية" />
        <img
          style={{ position: "absolute", left: "20px", bottom: "6px" }}
          height="25px"
          width="25px"
          src="/search.png"
        ></img>
      </div>
      <Stack direction="horizontal" gap={3}>
        <Button
          style={{
            width: "250px",
            borderRadius: "11px",
            backgroundColor: "#03989E",
            border: "1px solid #03989E",
          }}
        >
          جميع الفرص الاستثمارية
        </Button>
        <Button
          style={{ border: "2px solid #03989E" }}
          className="search-outline-btn"
        >
          الفرص النشطة
        </Button>
        <Button
          style={{ border: "2px solid #03989E" }}
          className="search-outline-btn"
        >
          الفرص القادمة
        </Button>
        <Button
          style={{ border: "2px solid #03989E" }}
          className="search-outline-btn"
        >
          الفرص المكتملة
        </Button>
      </Stack>
    </Stack>
  );
}
