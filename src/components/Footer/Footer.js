import React, { useState } from 'react';
import './Footer.css';
import FooterCategory from './FooterCategory';

function Footer() {
  const [footer, setFooter] = useState([{ title: "Get to know us", item: [{ title: "About Us" }, { title: "Careers" }, { title: "Press Releases" }, { title: "Amazon Science" }] },
  { title: "Connect with Us", item: [{ title: "Facebook" }, { title: "Twitter" }, { title: "Instagram" }] },
  { title: "Make Money with Us", item: [{ title: "Sell on Amazon" }, { title: "Sell under Amazon Accelerator" }, { title: "Protect and Build Your Brand" }, { title: "Amazon Global Selling" }, { title: "Become an Affiliate" }, { title: "Fulfilment by Amazon" }, { title: "Advertise Your Products" }, { title: "Amazon Pay on Merchants" }] },
  { title: "Let Us Help You", item: [{ title: "COVID-19 and Amazon" }, { title: "Your Account" }, { title: "Returns Centre" }, { title: "100% Purchase Protection" }, { title: "Amazon App Download" }, { title: "Amazon Assistant Download" }, { title: "Help" }] },
  ]);
  return (
    <div className="footer">
      <a className='footer_backToTop' href='#'>
        <div className='footer_backToTop_inner'>
          <span className='footer_backToTop_text'>

            Back to top

          </span>
        </div>
      </a>
      <div className="footer_table">
        <div className="footer_row_1">
          {footer.map((list, idx) => {
            return (
              <FooterCategory key={idx} title={list.title} item={list.item} />
            );
          })}

        </div>
      </div>
      <div className="footer_line"></div>
      <div className="footer_padding_item">
        <span className="footer_padding_item_logo">
          <div className="footer_padding_item_logo_inner">
            <a href="" className="footer_padding_item_logo_link">
              <div className="footer_padding_item_logo_img logo"></div>
            </a>
          </div>
        </span>
        <span className="footer_padding_item_input">
          <div className="footer_padding_item_input_container">
            <a href="" className="footer_padding_item_input_link">
              <div className="footer_padding_item_input_language_logo symbol"></div>
              <span className="footer_padding_item_input_option">English</span>
              <span className="footer_padding_item_input_arrow symbol" ></span>
            </a>
            <a href="" className="footer_padding_item_input_link">
              <div className="footer_padding_item_input_currency_logo">$</div>
              <span className="footer_padding_item_input_option">USD - U.S. Dollar</span>
            </a>
            <a href="" className="footer_padding_item_input_link">
              <div className="footer_padding_item_input_flag_logo symbol"></div>
              <span className="footer_padding_item_input_option">United States</span>
            </a>

          </div>
        </span>
      </div>
    </div>
  )
}

export default Footer;