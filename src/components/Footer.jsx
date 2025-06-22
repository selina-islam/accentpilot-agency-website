import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer>
      {/* top section */}
      <div className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        {/* Services */}
        <nav>
          <h6 className="footer-title">Programs</h6>
          <Link className="link link-hover" to="/">Fluency Coaching</Link>
          <Link className="link link-hover" to="/">1:1 Speaking Practice</Link>
          <Link className="link link-hover" to="/">Grammar Workshop</Link>
          <Link className="link link-hover" to="/">Interview Prep</Link>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover" to="/about">About AccentPilot</Link>
          <Link className="link link-hover" to="/team">Meet the Team</Link>
          <Link className="link link-hover" to="/testimonials">Testimonials</Link>
          <Link className="link link-hover" to="/partners">Partner with Us</Link>
        </nav>

        {/* Support */}
        <nav>
          <h6 className="footer-title">Support</h6>
          <Link className="link link-hover" to="/help">Help Center</Link>
          <Link className="link link-hover" to="/contact">Contact Us</Link>
          <Link className="link link-hover" to="/terms">Terms & Conditions</Link>
          <Link className="link link-hover" to="/privacy">Privacy Policy</Link>
        </nav>

        {/* Newsletter */}
        <form>
          <h6 className="footer-title">Join Our Newsletter</h6>
          <fieldset className="w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="your@email.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* bottom section */}
      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved
            by <span className="font-semibold">AccentPilot English Agency</span>
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
