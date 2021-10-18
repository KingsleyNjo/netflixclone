import React,{useRef, useState } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import "./list.scss";
import ListItem from '../listItem/ListItem';

export default function List() {
    const [isMoved, setIsMoved] = useState(false); 
    {/*isMoved is false initially(we are considering left arrow in ntflix page) */ }
    const [slideNumber, setSlideNumber] = useState(0); 
    {/* to consider that if we move the array
    either leftward or rightward(for leftward once it gets to 0 Stop moving and for rightward once its gets to 5 stop moving, so for when its gets to 0 stop it stops
    moving leftward and when its gets to rightward it 5 it stops moving right in the arrow, so we consider(slideNumber>0 but <5)) */}

    const listRef = useRef(); 
    {/*useRef hook to select a container(its like selectbyId) */ }

    const handleClick = (direction) => {
        setIsMoved(true); 
        {/* when clicked the setIsMoved changes to true, i am considering the right arrow ooo, since we have already disabled the left arrow below */ }
        let distance = listRef.current.getBoundingClientRect().x - 50; 
        {/*to find how we are from from 0 point we use an awesome method called getBoundingClientRect() */ }
        console.log(distance)
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1); {/* as we move leftward its state changes and slideNumber decreases by 1 */ }
            listRef.current.style.transform = `translateX(${230 + distance}px)`; {/*the distance after clicking so another item will move */ }
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1); {/* as we move this rightward its state changes and slideNumber increases by 1 */ }
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                //the left arrow being disabled when display: !isMoved, so display is none, left arrow will not show 
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0} /> 
                    <ListItem index={1} />  
                    <ListItem index={2} /> 
                    <ListItem index={3} />  
                    <ListItem index={4} />  
                    <ListItem index={5} />  
                    <ListItem index={6} />  
                    <ListItem index={7} />  
                    <ListItem index={8} />  
                    <ListItem index={9} />
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
}
