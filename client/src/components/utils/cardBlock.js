import React from 'react';

import Card from './card';

const cardBlock = (props) => {

    const renderCards = (list) => {
        return(
            list? list.map(
                (card,index) => {
                    return (
                            <Card key={index}
                            {...card}/>
                    )
                }
            )
            :null
        )
    }

    return (
        <div className="card_block">
            <div className="container">
                {
                    props.title ?
                        <div className="title">
                            {props.title}
                        </div>
                        : null
                }
                <div style={{
                    display:"flex",
                    flexWrap: 'wrap'
                }}>
                    {renderCards(props.list)}
                </div>
            </div>
        </div>
    );
};

export default cardBlock;