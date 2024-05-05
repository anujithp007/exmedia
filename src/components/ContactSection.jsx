import React from "react";
import "../styles/contactSection.css";

const ContactSection = () => {
  return (
    <div id="contact" className="contactSection">
      <div className="contact">
        <div className="contact-form">
          <h2>Contact us</h2>
          <form
            id="wf-form-Contact-Us"
            name="wf-form-Contact-Us"
            data-name="Contact Us"
            method="get"
            class="form"
            data-wf-page-id="6523e8a88921cc0faaee729f"
            data-wf-element-id="81f29a7f-4c30-86d9-3b85-caf756a74a18"
            aria-label="Contact Us"
          >
            <div className="msg-elements">
              <label className="msg" for="field-message">
                Message
              </label>
              <textarea
                id="field-message"
                name="field"
                maxlength="5000"
                data-name="Field"
                placeholder="Hi, What's up! Wanted to ask you about..."
                class="input textarea w-input"
              ></textarea>
            </div>

            <div className="email-elements">
              <label className="email" for="field-email">
                Contact Email
              </label>
              <input
                className="input w-input"
                maxlength="256"
                name="email"
                data-name="Email"
                placeholder="mail@example.com"
                type="email"
                id="field-email"
                required=""
              ></input>
            </div>
            <div class="submit-btn">
              <input
                type="submit"
                data-wait="Please wait..."
                className="button w-button"
                value="Send"
              ></input>
            </div>
          </form>
        </div>
        <div className="contact-image">
          <img
            src="https://assets-global.website-files.com/6523e8a88921cc0faaee72a8/6543833cf360bf0abd0eec77_decor03-p-500.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
