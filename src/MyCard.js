import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt="img"
        />
        <CardTitle className="text-primary">
          <h1>
            <span style={{ margin: 5 }}>{details.name?.title}</span>
            <span style={{ margin: 5 }}>{details.name?.last}</span>
            <span style={{ margin: 5 }}>{details.name?.first}</span>
          </h1>
        </CardTitle>
        <CardText>
          <div>
            <p><FaMapMarkedAlt style={{ height: 25, width: 25, marginRight: 8 }} />
              {details.location?.city}</p>
            <p><FaPhoneAlt style={{ height: 20, width: 25, marginRight: 8 }} />
              {details.phone}</p>
            <p><FaEnvelope style={{ height: 20, width: 25, marginRight: 8 }} />
              {details.email}</p>

          </div>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
