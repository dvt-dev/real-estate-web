import React from "react";
import styles from "./Companies.module.scss";
import classname from "classnames/bind";

import prologis from "../../assets/images/prologis.png";
import realty from "../../assets/images/realty.png";
import equinix from "../../assets/images/equinix.png";
import tower from "../../assets/images/tower.png";

const cx = classname.bind(styles);

const Companies = () => {
    return (
        <section className={cx("companies-wrapper")}>
            <div
                className={cx(
                    "companies-container",
                    "paddings",
                    "inner-width",
                    "flex-center"
                )}
            >
                <img src={prologis} alt="" className={cx("companies-img")} />
                <img src={tower} alt="" className={cx("companies-img")} />
                <img src={equinix} alt="" className={cx("companies-img")} />
                <img src={realty} alt="" className={cx("companies-img")} />
            </div>
        </section>
    );
};

export default Companies;
