import { useSelector } from "react-redux";
import bgPattern from "../images/bg-pattern.svg";
import patternCircles from "../images/pattern-circles.svg";
import CardComponent from "./CardComponent";
import ReactSwitch from "react-switch";
import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/themeSlice";
import { useEffect, useState } from "react";
import background from "../images/img-1.png";

const Body = () => {
    const th = useSelector(store => store.theme.dark);
    const [theme,setTheme] = useState(th);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeTheme(theme));
    },[theme]);

    return (
        <div className={theme ? "text-white" : "text-black"}>
            <div className="h-[60vh]"> 
                {theme ? <div className="md:h-auto"><img className="h-[50vh] md:h-auto" src={background} /></div> : <img className="h-[50vh] md:h-auto" src={bgPattern} alt="Background Pattern" />}
            </div>
            <div className="z-10 -mt-[53vh] md:-mt-[25%] w-screen">
                <div className="absolute ml-[35%] mr-[30%] md:mx-[44%]">
                    <img src={patternCircles} alt="Pattern Circles" />
                </div>
                <div className="my-4 mx-10 md:mx-[33%] py-5 md:py-7 ">
                    <h1 className="w-full text-2xl md:text-3xl font-bold my-3">Simple, traffic-based pricing</h1>
                    <h1 style={{color: theme ? "rgb(209 213 219)" :  "rgb(107 114 128)"}} className="text-[15px] text-center px-12 md:text-left md:px-4 font-semibold">Sign-up for our 30-day trial. No credit card required.</h1>
                </div>
                <div className="mt-16"><CardComponent /></div>
                <div className="-mt-[82vh] md:-mt-[42%] ml-[58%] md:ml-[83%]">
                    <div className="flex">
                        <h4 className="mx-3 font-semibold text-lg">Light</h4>
                        <div className="py-1">
                            <ReactSwitch 
                                checked={theme} 
                                onChange={() => setTheme(!theme)} 
                                onColor="#86d3ff"
                                onHandleColor="hsl(174, 77%, 80%)"
                                handleDiameter={14}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={18}
                                width={40}
                            />
                        </div>
                        <h4 className="mx-3 font-semibold text-lg">Dark</h4>
                    </div>
                </div>
                <div style={{backgroundColor: theme ? "rgb(209 213 219)" : "white"}} className="mt-[10%] min-h-screen  fixed w-screen -z-10"></div>
            </div>
        </div>
    );
};

export default Body;
