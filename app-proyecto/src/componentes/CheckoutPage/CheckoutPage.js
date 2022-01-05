import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Typography} from '@material-ui/core'
import CheckoutCard from '../CheckoutCard/CheckoutCard'
import Total from '../Total/Total'
import productosDataPc from '../Productos/productosDataPc'
import {useStateValue} from '../../helper/StateProvider'



export const CheckoutPage = () => {

    
    const [{basket},dispatch]= useStateValue();

  

    function FormRow() {
        return (
            <>
            <Container fluid>
            <Row>
            {basket?.map((item)=>(
            <Col xs={12} sm={12} md={12} lg={4}>
                <CheckoutCard key={item.id} producto={item}/>
            </Col>
            ))}
            </Row>
            </Container>
        </>
        )
    };
    
  return (
    <>
        <Container fluid>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
            <Typography align='center' gutterBottom variant='h4'>
                Shopping Cart
            </Typography>
        </Col>
        <Col xs={12} sm={12} md={12} lg={8}>
            <FormRow/>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3}>
        <Typography align='center' gutterBottom variant='h4'>
                <Total/>
            </Typography>
        </Col>
        </Row>
        </Container>
   </>
  )
}

export default CheckoutPage
