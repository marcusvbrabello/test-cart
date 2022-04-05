import React from 'react';

import FreeShip from './FreeShip';

function maskPrice(priceInitial){
  var finalPrice = '';

  const splittedPrice = priceInitial.toString().split('');

  if(splittedPrice.length === 2){
    return 'R$0,'+priceInitial;
  }else{
    let index = splittedPrice.length - 2;
    splittedPrice.splice(index, 0, ",");
  }

  for (let index = 0; index < splittedPrice.length; index++) {
    finalPrice += splittedPrice[index];
  }

  return 'R$'+finalPrice;
}

function TotalPrice(props) {
  return (
    <div id='wrapTotalPrice'>
        <div id="totalPrice">
            <p>Total</p>
            <p>{maskPrice(props.total)}</p>
        </div>

        {props.total > 1000 && 
            <FreeShip />}
    </div>
  );
}

export default TotalPrice;