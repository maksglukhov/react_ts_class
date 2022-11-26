import React, {PropsWithChildren} from 'react';
import './App.css';
import {Row, Col, Container, Card} from "react-bootstrap";
import Item from "./Item";
import 'bootstrap/dist/css/bootstrap.min.css';

type IState = {
    name?: string;
}
type IProps = {
    item?: Item,
    children?: Item
}

export default class App extends React.Component<PropsWithChildren<IProps>,PropsWithChildren<IState>>{
    constructor(props: any) {
        super(props);
        this.state = {
            name: 'toto'
        }
    }

    changeName = (newName: string): void =>{
        this.setState({name: newName});
    }
  render(){
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Item name={this.state.name} changeName={this.changeName.bind(this)}></Item>
                </Col>
            </Row>
            <Row className="justify-content-md-center p-2">
                <Col md="auto">
                <Card>
                    <Card.Body>
                        <p>{this.state.name}</p>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
  }
}


