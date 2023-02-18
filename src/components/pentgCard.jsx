import Card from "react-bootstrap/Card";

function PentgCard() {
  return (
    <div className="card-image-container">
      <Card
        border="light"
        style={{
          width: "18rem",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        className="my-5 p-3"
      >
        <div style={{ position: "absolute", top: "-91px", right: "62px" }}>
          <div style={{ position: "relative" }}>
            <img
              className="d-block"
              width={"150px"}
              src="/pentgR.png"
              alt="Second slide"
            />
            <div
              style={{ position: "absolute", top: "2.7rem", right: "2.9rem" }}
            >
              <img
                className="d-block"
                width={60}
                src="/rocket.png"
                alt="Second slide"
              />
            </div>
          </div>
        </div>

        <Card.Body
          className="text-center mt-5"
          style={{ position: "relative" }}
        >
          <Card.Title>البساطه</Card.Title>
          <Card.Text>
            من خلال عرض شركتك عبر التمويل الجماعي ، سيكون بإمكانك الوصول إلى
            الآلاف من المستثمرين المستعدين للاستثمار وتسريع الجولة الاستثمارية
            الخاصة بشركتك الناشئة.
          </Card.Text>
        </Card.Body>
        <div
          style={{
            borderBottom: "3px solid green",
            position: "absolute",
            bottom: "0px",
            right: "67px",
            width: "50%",
          }}
        ></div>
      </Card>
    </div>
  );
}

export default PentgCard;
