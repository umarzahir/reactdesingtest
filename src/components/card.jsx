import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import ProgressBar from "react-bootstrap/ProgressBar";

function MyCard() {
  return (
    <Card
      className="mt-4"
      border="light"
      style={{
        borderRadius: "40px",
        width: "550px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <div className="card-image-container">
        <Card.Img
          style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}
          variant="top"
          src="/card1.jpg"
        />
        <div className="card-logo">
          <div style={{ position: "relative" }}>
            <img
              className="d-block"
              width={100}
              src="/rec.png"
              alt="Second slide"
            />
            <div
              style={{ position: "absolute", top: "1.2rem", right: "0.9rem" }}
            >
              <img
                className="d-block"
                width={70}
                src="/ar.png"
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </div>
      <Card.Body>
        <Stack direction="horizontal" gap={3} className="mb-2">
          <div className="ms-auto">
            <Button className="card-btn">نشط</Button>
          </div>
          <img
            className="d-block"
            width={25}
            src="/bookmark.png"
            alt="Second slide"
          />
        </Stack>
        <Card.Title>صندوق رؤية</Card.Title>
        <Card.Text>
          نعمل في رؤية ريزدنس على الإبداع والابتكار في تصاميمنا للوحدات السكنية
          ، فبين الجمال واستثمار المساحات تكمن تصاميم الماجدية ....
        </Card.Text>

        <Stack direction="horizontal" gap={3} className="mb-2 border-top pt-3">
          <div className="ms-auto">
            <p>إجمالي قيمة الطرح</p>
          </div>
          <Button className="card-btn"> ريا50,500,000</Button>
        </Stack>
        <div className="my-4">
          <ProgressBar now={70} label={`50%`} />
        </div>
        <Stack direction="horizontal" gap={3}>
          <div className="ms-auto">المبلغ الذي تم جمعه</div>
          <p className="color-primary"> 25,200,000 ريال </p>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div className="ms-auto"> العائد المتوقع</div>
          <p className="color-primary">17.3%</p>
        </Stack>
        <Stack direction="horizontal" gap={3} className="">
          <div className="ms-auto">سعر الوحدة</div>
          <p className="color-primary"> 1,000 ريال</p>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div className="ms-auto">مدة الصندوق</div>
          <p className="color-primary"> 22 شهر</p>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
