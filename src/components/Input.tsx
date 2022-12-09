import React from 'react';
import styles from "../styles/Input.module.css";

interface Prop {
    type: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({type, placeholder, name, value, onChange}: Prop) => {
  return (
    <input className={styles.input} value={value} type={type} placeholder={placeholder} name={name} onChange={onChange} />
  )
}

export default Input