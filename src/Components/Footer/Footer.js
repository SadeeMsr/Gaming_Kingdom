import React from "react";
import "./Footer.css";
// import Logo from "../logo";

const footerLinks = [
    {
        title: "Get to Know Us",
        list: ["About Gaming Kingdom", "Connect with Us", "Gaming Kingdom Cares", "Gift a Smile"],
    },
    {
        title: "Make Money with Us",
        list: [
            "Sell products on Gaming Kingdom",
            "Sell apps on Gaming Kingdom",
            "Become an Affiliate",
            "Advertise Your Products",
            "Self-Publish with Us",
            "Host an Gaming Kingdom Hub",
            "› See More",
        ],
    },
    {
        title: "Gaming Kingdom Payment",
        list: [
            "Gaming Kingdom Business Card",
            "Shop with Points",
            "Reload Your Balance",
            "Gaming Kingdom Currency Converter",
        ],
    },
    {
        title: "Let Us Help You",
        list: [
            "Gaming Kingdom and COVID-19",
            "Returns & Replacements",
            "Manage Your Devices",
            "Gaming Kingdom Assistant",
        ],
    },
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__inner">
                <div className="footer__disclaimer">
                    <strong>Disclaimer:</strong> In this COVID situation we are giving 20% off on some of your favorite Games. Hurry Up, Purchase!!
                </div>
                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div className="footer__row">
                            <h6>{link.title}</h6>
                            <ul>
                                {link.list.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="footer__bottom">
                    {/* <img src={Logo} className="footer__logo" /> */}
                    <span className="footer__copy">
                        &copy; 2021 | Developed by{" "}
                        <a href="/">King's Dev</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Footer;