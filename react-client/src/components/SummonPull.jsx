import React from 'react';

const SummonPull = (props) => (
  <div>
    <strong>{ props.oc.name } the Hedgheg</strong>
    <br></br>
    <img src={ props.oc.html_url } alt=""/>
  </div>
)

export default SummonPull;