import React from "react";

export default function Cards(props){
    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="cards">
            <div className="card1">
            {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className="card--image" src={props.data.coverImg} height={'235px'} width={'176px'}/>
                <div className="cards--stats">
                    <div className='ratings' id="rating1"><img src='ratings.jpg' width={'14px'}/>
                    <span>{props.data.stats.rating}</span>
                    <span className="gray">({props.data.stats.reviewCount}) • </span>
                    <span className="gray">{props.data.location}</span>
                    <p className="description" id='description1'>{props.data.title}</p>
                    <p ><span className="price" id='price1'>From {props.data.price}</span> / person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}