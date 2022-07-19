import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Байланыш номери</h5>
            <p>+996 778 21 70 44</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Кыргызстан</h5>
            <p>Жалал-абад</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-globe"></i>
            </div>
            <h5>Социалдык тармак</h5>
            <p>bazaar.kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
