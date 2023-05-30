import React from 'react';
import styles from "./Value.module.scss";
import classname from "classnames/bind";
import {Accordion, 
  AccordionItem, 
  AccordionItemButton, 
  AccordionItemHeading, 
  AccordionItemPanel, 
  AccordionItemState
} from "react-accessible-accordion";
import {MdOutlineArrowDropDown} from "react-icons/md";

import valueImg from '../../assets/images/value.png';

const cx = classname.bind(styles);

const Value = () => {
  return (
    <section className={cx('value-wrapper')}>
      <div className={cx('value-container', 'paddings', 'inner-width', 'flex-center')}>
        {/* Left side */}
        <div className={cx('value__left')}>
          <div className={cx('value__img-container')}>
            <img src={valueImg} alt="" className={cx('value-img')} />
          </div>
        </div>

        {/* Right side */}
        <div className={cx('value__right')}>Right</div>
      </div>
    </section>
  )
}

export default Value