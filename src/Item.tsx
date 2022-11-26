import React from "react";
import {Button, Card, Form, FormLabel} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

interface IProps{
    name?: string,
    changeName(NewName?: string): void
}
interface IState {
    newName?: string

}
export default class Item extends React.Component<IProps, IState>{
    constructor(props : IProps) {
        super(props);
        this.state ={
            newName: this.props.name
        }
    }

    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ newName: e.currentTarget.value });
        console.log(this.state.newName)
    };
    changeName = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log("chnageName ===> ", this.state.newName);
        this.props.changeName(this.state.newName);
    }

    render(){
        return(
            <Card>
                <CardHeader>Person</CardHeader>
                <Card.Body>
                <Form onSubmit={this.changeName}>
                    <FormLabel>Name</FormLabel>
                    <Form.Control
                        type="text"
                        defaultValue={this.props.name}
                        onChange={(event) => {
                            this.setState({newName: event.target.value});
                        }}
                    />
                    <Button variant="primary" type="submit" className="m-1">Change</Button>
                </Form>
                </Card.Body>
                
            </Card>
        )
    }

}