import React from 'react';
import SummonPull from './SummonPull.jsx';

const SummonCircle = (props) => (
  <div>
    <h4> Summon Circle </h4>
    You summoned { props.ocs.length } Sonic OCs!
    { props.ocs.map( oc => <SummonPull oc={oc}/>)}
  </div>
)

export default SummonCircle;