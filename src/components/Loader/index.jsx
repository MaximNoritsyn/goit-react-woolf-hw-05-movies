import React from 'react';
import { DNA } from 'react-loader-spinner' 
import css from './index.module.css';

export const Loader = ({visible}) => {
  return (<div className={css.dnaWrapper}>
    <DNA
        visible={visible}
        height="80"
        width="300"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
    />
  </div>)
}