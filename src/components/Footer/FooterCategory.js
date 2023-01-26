import React, { useState } from 'react';
import './Footer.css';

function FooterCategory({ title, item }) {

    return (
        <>
            <div className="footer_column_item">
                <div className="footer_column_name">{title}</div>
                <ul className="footer_column_list">
                    {
                        item.map((list, idx) => {
                            return (
                                <li key={idx} className="footer_column_list_item" >
                                    <a key={"link_" + idx} className="footer_column_list_link">{list?.title}</a>
                                </li>

                            );
                        })
                    }
                </ul>
            </div>
            <div className="footer_column_spacer"></div>
        </>


    )
}

export default FooterCategory