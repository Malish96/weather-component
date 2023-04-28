import Search from "./components/Search/Search";
import WeatherColombo from "./components/WeatherColombo/WeatherColombo";
import "./App.css";
import { Card, Col, Row } from "antd";

function App() {
  return (
    <>
      <Row style={{ padding: "5%" }}>
        <Col span={12}>
          <Card
            title={"Weather in Colombo"}
            bordered={false}
            style={{
              width: 400,
            }}
          >
            <WeatherColombo />
          </Card>
        </Col>
        <Col span={12}>
          <Search />
        </Col>
      </Row>
    </>
  );
}

export default App;
