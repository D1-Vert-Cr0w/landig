import './App.css';
import { Layout, Menu, Breadcrumb} from 'antd';
import { Row, Col } from 'antd';
import forest_img from './img/Forest.jpg'
import React, {useState} from 'react'
const { Header, Content, Footer } = Layout;
function App() {
  const[page, setPage] = useState(0)
  return (
    <>
    <Layout className="layout">
    <Header style={{ zIndex: 1, width: '100%' }}>
      <Row>
        <Col span={6}><div className="Circle"/><div className='logoclass'>Шашин Константин</div></Col>
        <Col span={6}></Col>
        <Col span={6} className="colGOne">Мои проекты</Col>
        <Col span={6} className="colGTow">Мои интересы</Col>
      </Row>
    </Header>
    <Content className='ha' style={{backgroundColor:'rgba(0,0,0,0)'}}>
      
    {page==0 &&
        <Row className="r1" style={{backgroundColor:'rgba(0,0,0,0)'}}>
          <Col className= "colOne"></Col>
          <Col className= "colOne"></Col>
        </Row>


    }
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
    </>
  );
}

export default App;
