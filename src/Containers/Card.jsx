import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardFooter, Button
} from 'reactstrap';

const Example = (props) => {
    const { id } = props;
    const [modal, setModal] = useState(false);
    const book = () => setModal(true);
    return (
        <div className="col-4 my-1">
            <Card>
                <CardImg top width="100%" src='./apartment.jpg' alt="Card image cap" />
                <CardBody >
                    <CardTitle tag="h5">{id}</CardTitle>
                    <CardText ><img height="17px" src='./greyarrow.png' alt="arrow icon" /> 115 Sqft</CardText>
                    <CardText ><img height="17px" src='./apartmenticon.png' alt="apartment icon" /> Rooms 6</CardText>
                    <CardText ><img height="17px" src='./building.png' alt="building icon" /> Built Year: 2012</CardText>
                    <CardText ><img height="17px" src='./bed.png' alt="bed icon" /> Bedrooms: 4</CardText>
                    {!modal && <Button onClick={book} className="btn-success">Book</Button>}
                </CardBody>
                <CardFooter className="text-muted">KES 22, 000</CardFooter>
            </Card>
        </div>
    );
};

export default Example;