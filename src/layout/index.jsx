import React from "react";
import Helmet from "react-helmet";
import {Row, Col} from 'reactstrap';
import config from "../../data/SiteConfig";
import "../styles/main.scss";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {/* {children} */}
      <div class="container">
        <Row>
          <Col>
            Hello World
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainLayout;