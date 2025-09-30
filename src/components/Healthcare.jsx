import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import heroImg from "../../images/f54c6e9ac3eee364168f921d9edcadcc7d5838e7.png"; 
import robotImg from "../../images/robot.png"; 
import heartImg from "../../images/heart.png";
import diabetesImg from "../../images/diabetes.png";
import cancerImg from "../../images/cancer.png";
import dnaImg from "../../images/dna.png";
export default function HeroSection() {
  return (
    <Container fluid className="p-0">

      <Row className="align-items-center g-0" style={{ height: "100vh" }}>
        <Col md={6} className="text-center">
          <h1 className="fw-bold display-4">
            <span
              style={{
                background: "linear-gradient(90deg, #000000 0%, #8238E5 2.88%, #000000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "700",
              }}
            >
              Healthcare
            </span>{" "}
            <span className="text-white fw-bolder">
              AI Projects
            </span>
          </h1>

          <p
            className="mt-3 mx-auto"
            style={{
              color: "rgba(224, 214, 214, 0.65)",
              fontSize: "1.25rem",
              maxWidth: "380px",
            }}
          >
            AI-powered solutions for modern healthcare systems
          </p>
        </Col>

        <Col md={6} className="text-center mt-4 mt-md-0">
          <img
            src={heroImg}
            alt="Healthcare Illustration"
            className="img-fluid"
            style={{ maxWidth: "600px", height: "600px" }}
          />
        </Col>
      </Row>

      {/* Prediction Cards Section */}
      <Container fluid className="py-5">
        <Row className="justify-content-center text-center align-items-center">
          {/* Heart Disease Card */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="prediction-card shadow-lg">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center h-100 text-center p-4">
                <img 
                  src={heartImg} 
                  alt="Heart" 
                  className="card-img mb-3" 
                />
                <Card.Title className="fw-bold text-white mb-3 fs-4">
                  Heart Disease Prediction
                </Card.Title>
                <Card.Text className="text-light">
                  Analyze patient data to predict potential heart disease risk.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Robot Image */}
          <Col md={4} className="d-flex justify-content-center align-items-center mb-4">
            <img 
              src={robotImg} 
              alt="Robot" 
              className="img-fluid robot-img" 
            />
          </Col>

          {/* Diabetes Card */}
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="prediction-card shadow-lg">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center h-100 text-center p-4">
                <img 
                  src={diabetesImg} 
                  alt="Diabetes" 
                  className="card-img mb-3" 
                />
                <Card.Title className="fw-bold text-white mb-3 fs-4">
                  Diabetes Prediction
                </Card.Title>
                <Card.Text className="text-light">
                  Predict the likelihood of a person having diabetes based on their health data.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Cancer Card Row */}
        <Row className="justify-content-center text-center mt-4">
          <Col md={4} className="d-flex justify-content-center">
            <Card className="prediction-card shadow-lg">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center h-100 text-center p-4">
                <img 
                  src={cancerImg} 
                  alt="Cancer" 
                  className="card-img cancer-img mb-3" 
                />
                <Card.Title className="fw-bold text-white mb-3 fs-4">
                  Cancer Prediction
                </Card.Title>
                <Card.Text className="text-light">
                  An AI model that helps detect early signs of cancer using medical information.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
<Container fluid className="hero-bottom ">
  <Row className="align-items-center justify-content-center g-0">
    <Col md={6} className="text-center text-md-start ps-md-5 ps-lg-5">
      <h2 className="fw-bold text-white hero-bottom-title mb-4">
        Transforming health data
        <span className="d-block">into life-saving insights –</span>
        <span className="d-block">your <span className="highlight">future</span> health,</span>
        <span className="d-block"> predicted today.</span>
      </h2>
      <Button
        variant="outline-light"
        className="hero-bottom-btn mt-3 px-4 py-2 fw-semibold"
      >
        Send Us a Message
      </Button>
    </Col>
    <Col md={6} className="text-center mt-4 mt-md-0">
      <img src={dnaImg} alt="DNA Illustration" className="img-fluid hero-dna-img" />
    </Col>
  </Row>
</Container>




    </Container>
  );
}