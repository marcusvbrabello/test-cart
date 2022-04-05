import React from 'react';

import List from '../../components/List';
import DoneBtn from '../../components/DoneBtn';
import TotalPrice from '../../components/TotalPrice';

import './style.css';
import { over } from '../../static/over-ten';
import { under } from '../../static/under-ten';

function renderList(){
    return <List items={over.items}/>;
}

function renderTotalPrice(){
    return <TotalPrice total={over.value}/>
}

function renderButton(){
    return <DoneBtn />;
}

function Cart() {
  return (
    <>
        <head>
            <title>Meu carrinho</title>
        </head>
        <body>
            <div id="divTitle">
                <h1 id="title">Meu carrinho</h1>
            </div>

            {renderList()}
            {renderTotalPrice()}
            {renderButton()}
        </body>
    </>
  );
}

export default Cart;