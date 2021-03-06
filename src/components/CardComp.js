import {
    Container,
    CardGroup,
    Card,
    Button,
    Badge,
    Row,
    Col,
  } from "react-bootstrap";
  import { Rating } from "./Rating.js";
  import { CardData } from "./CardData.js";
  import { useState } from "react";
  
  export function CardComp({ item, setItem }) {
    const [addBtn, setaddBtn] = useState(false);
  
    // Adding the the data to the item state which is used to display the data in the cart
    const Add = (data) => {
      const items = [...item];
      items.push(data);
      setItem(items);
  
      setaddBtn(true);
    };
  
    return (
      // Main Card components for each object from the CardData-db
      <div className="main">
        <Container>
          <Row>
            <CardGroup>
              {CardData.map((data, index) => {
                const { id, title, ratings, striked, price, sale, options } =
                  data;
  
                return (
                  <Col xs={12} md={6} lg={3} key={index} style={{padding:"0.50em"}}>
                    <Card className="cards">
                      <Badge
                        className="saleBdg"
                        variant="outline-dark"
                        style={{
                          padding: "0.35em 0.65em",
                          display: sale === true ? "block" : "none",
                        }}
                      >
                        Sale
                      </Badge>
  
                      <Card.Img
                        variant="top"
                        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      />
  
                      <Card.Body className="cardBody">
                        <h5>{title}</h5>
                        <Rating ratings={ratings} />
  
                        <p>
                          {/* Span tag for striked of prices */}
                          <span className="striked">{striked}</span>
  
                          {/*To display prices from CardData-DB (If title is Fancy product and if no values are there from  db then will display as it $ and .00)*/}
                          {title === "Fancy Product"
                            ? price
                            : "$" + price + ".00"}
                        </p>
                      </Card.Body>
  
                      <div>
                        {/* Two different buttons in components as required which is selected by the option key from the db */}
                        {options === true ? (
                          <Button variant="outline-dark">View Options</Button>
                        ) : (
                          <Button
                            className={id}
                            variant="outline-dark"
                            onClick={() => {
                              Add(data);
                            }}
                            disabled={addBtn}
                          >
                            Add to cart
                          </Button>
                        )}
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </CardGroup>
          </Row>
        </Container>
      </div>
    );
  }