import React from 'react';

function maskPrice(priceInitial){
  var finalPrice = '';

  if(typeof priceInitial === 'string'){
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
  }else{
    return false;
  }
}

function openInfoModal(item){
  return false;
}

function List(props) {
  maskPrice();
  return (
    <div id="list">
      {props.items.map((val) => {
        console.log(val);

        let imgStyle = {
          backgroundImage: `url(${val.imageUrl})`, 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        };

        return (
          <div class="wrapItem" onClick={() => openInfoModal(val)} key={val.uniqueId}>
              <div id="wrapImg" style={imgStyle}></div>
              <div id="wrapInfo">
                <h3 id="name-item">{val.name}</h3>
                <h6 id="price">{maskPrice(val.price.toString())}</h6>
                <h5 id="selling-price">{maskPrice(val.sellingPrice.toString())}</h5>
              </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;