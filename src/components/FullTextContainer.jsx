import React from "react";
import { Container } from "react-bootstrap";

export default function FullTextContainer() {
  return (
    <Container
      fluid
      className="my-5"
      style={{
        backgroundColor: "#03989E",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        color: "white",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          marginRight: "300px",
        }}
      >
        <h4>لماذا التمويل الجماعي ؟ </h4>
        <h6 className="mt-5" style={{ lineHeight: "40px" }}>
          من خلال عرض شركتك عبر التمويل الجماعي ، سيكون بإمكانك الوصول إلى
          الآلاف من المستثمرين المستعدين للاستثمار وتسريع الجولة الاستثمارية
          الخاصة بشركتك الناشئة من خلال عرض شركتك عبر التمويل الجماعي ، سيكون
          بإمكانك الوصول إلى الآلاف من المستثمرين المستعدين للاس..
        </h6>
      </div>
    </Container>
  );
}
