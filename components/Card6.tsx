import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card6 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          WWW
        </Text>
        <Text h3 color="white">
          Software Subscription
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://www.dictionary.com/e/wp-content/uploads/2017/03/software_1000x700.jpg"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="https://www.dictionary.com/e/wp-content/uploads/2017/03/software_1000x700.jpg"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>
                Expire on 10th feb
              </Text>
              <Text color="#d1d1d1" size={12}>
                Renew
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
             Burner
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);