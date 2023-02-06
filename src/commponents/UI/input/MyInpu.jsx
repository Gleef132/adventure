import React from 'react';
import classes from './MyInput.module.scss'

const MyInput = (props, className) => {
	return (
		<input {...props} autoFocus className={`${classes.input} ${className}`} />
	);
};

export default MyInput;