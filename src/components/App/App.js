import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import {CarouselNews} from '../Carousel';
import { Layout, Row, Col } from "antd";
import "./App.scss";

function App() {
  const { Sider, Footer } = Layout;

  return (
    <div>
      <Row>
        <div className="cardMargin">
          <Row type="flex" justify="space-around">
            <Col span={4}>
              <NewsCard />
            </Col>
            <Col span={4}>
              <NewsCard />
            </Col>
            <Col span={4}>
              <NewsCard />
            </Col>
            <Col span={4}>
              <NewsCard />
            </Col>
          </Row>
        </div>

        <div style={{ maxHeight: "100px" }}>
          <div>
            <Row>
              <Col span={15} offset={1}>
                <div>
                  <CarouselNews />
                </div>
                <div>
                  <div className="cardMargin">
                    <Row gutter={48}>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                    </Row>
                  </div>
                  <div className="cardMargin">
                    <Row gutter={48}>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                      <Col span={6}>
                        <NewsCard />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col span={6} offset={1}>
                <div>
                  <Sider width="100%">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Sider>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
      <Footer className="footer">footer</Footer>
    </div>
  );
}

export default App;
