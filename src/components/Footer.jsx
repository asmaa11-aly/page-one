import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-bg pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* شعار + Follow Us */}
          <div className="col-md-3 mb-4">
            <h4 className="footer-brand mb-3">Neuronix</h4>
            <p className="footer-follow mb-2">Follow Us</p>
            <div className="d-flex gap-3">
              <a href="#" className="footer-icon" aria-label="facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="footer-icon" aria-label="linkedin">
                <FaLinkedinIn />
              </a>
              <a href="#" className="footer-icon" aria-label="instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* روابط */}
          <div className="col-md-3 mb-4 d-flex flex-column gap-2">
            <a href="#" className="footer-link">Services</a>
            <a href="#" className="footer-link">Goal</a>
          </div>

          <div className="col-md-3 mb-4 d-flex flex-column gap-2">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of services</a>
          </div>

          <div className="col-md-3 mb-4 d-flex flex-column gap-2">
            <a href="#" className="footer-link">Help</a>
            <a href="#" className="footer-link">FAQ</a>
          </div>
        </div>

        {/* نص الحقوق في أقصى اليمين */}
        <div className="row">
          <div className="col-12">
            <p className="footer-copy mb-0">
              © 2025 Neuronix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}