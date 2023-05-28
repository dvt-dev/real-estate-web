import React from "react";
import styles from "./Header.module.scss";
import classname from "classnames/bind";
import logo from "../../assets/images/logo.png";

const cx = classname.bind(styles);

const Header = () => {
    return (
        <section className={cx("header-wrapper")}>
            <div
                className={cx(
                    "header-container",
                    "flex-center",
                    "paddings",
                    "inner-width"
                )}
            >
                <img src={logo} alt="logo" className={cx("header-logo")} />
                <nav className={cx("navbar")}>
                    <ul className={cx("navbar__list", "flex-center")}>
                        <li className={cx("navbar__item")}>
                            <a href="" className={cx("navbar__item-link")}>
                                Residencies
                            </a>
                        </li>
                        <li className={cx("navbar__item")}>
                            <a href="" className={cx("navbar__item-link")}>
                                Our Value
                            </a>
                        </li>
                        <li className={cx("navbar__item")}>
                            <a href="" className={cx("navbar__item-link")}>
                                Contact Us
                            </a>
                        </li>
                        <li className={cx("navbar__item")}>
                            <a href="" className={cx("navbar__item-link")}>
                                Get Started
                            </a>
                        </li>
                        <button className={cx("btn", "btn-contact")}>
                            Contact
                        </button>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Header;
