import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Producto from './Producto';
import productosDataPc from './productosDataPc';
import './Productos.css';


export const Productos = () => {
return (

    <Container fluid className="productoscss">
    <Row className="rowProductosCss" >
    {productosDataPc.map(producto =>(
    <Col xs={12} sm={12} md={12} lg={4}>
        <Producto key={producto.id} producto={producto}/>
    </Col>
))}
    </Row>

</Container>

)
}

export default Productos
