import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function MianText() {
  return (
    <Stack gap={2} className="col-md-5 mx-auto my-4">
      <div
        style={{
          width: "433px",
          height: "113px",
          backgroundColor: "#F5F5F5",
          borderRadius: "37px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <p
          className="color-primary"
          style={{ fontWeight: "400", fontSize: "26px" }}
        >
          الفرص الإستثمارية
        </p>
      </div>
      <p style={{ lineHeight: "30px" }}>
        من خلال منصة أويس المالية ، يمكن للمستثمرين استعراض الفرص الاستثمارية ،
        الاستثمار ، وانهاء الاجراءات القانونية عبر المنصة فوراً. استثمر الآن
        ابتداءً من 1000 ريال سعودي فقط . الشركات المدرجة على المنصة هي شركات تمت
        مراجعة معلوماتها والتأكد من صحتها
      </p>
    </Stack>
  );
}
