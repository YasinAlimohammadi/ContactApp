import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./ContactItem.module.css";

const ContactItem = ({data: {id, name, lastName, email, phone}, deleteHandler}) => {

    return (
        <div>
            <li className={styles.item}>
                    <p>{name} {lastName}</p>
                    <p><span><HiOutlineMail/></span>{email}</p>
                    <p><span><FiPhone/></span>{phone}</p>
                    <p><button onClick={() => deleteHandler(id)}><FaRegTrashCan/></button></p>
            </li>
        </div>
    );
};

export default ContactItem;