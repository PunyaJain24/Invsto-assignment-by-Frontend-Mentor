import { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import iconCheck from "../images/icon-check.svg";
import Confetti from "react-confetti";
import { useSelector } from "react-redux";

const CardComponent = () => {
    const [data, setData] = useState(16);
    const [views, setViews] = useState("100K");
    const [toggle,setToggle] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const theme = useSelector(store => store.theme.dark);

    useEffect(() => {
        if (data == 8) setViews("10K");
        else if (data == 12) setViews("50K");
        else if (data == 16) setViews("100K");
        else if (data == 20) setViews("250K");
        else if (data == 24) setViews("500K");
        else if (data == 28) setViews("650K");
        else if (data == 32) setViews("800K");
        else setViews("1M");
    }, [data]);

    const handleStartTrialClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
    };

    return (
        <div className="flex justify-center w-full">
            {showConfetti && <Confetti />}
            <div style={theme ? {backgroundColor: "rgb(209,213,219)"} : {backgroundColor: "white"}} 
            className="md:h-[300px] h-[500px] w-[90%] md:w-[45%] rounded-xl shadow-lg m-auto">
                <div className="flex justify-around mt-10">
                    <div>
                        <h1 style={{color: theme ? "rgb(55,65,81)": "rgb(107 114 128)"}} 
                        className="font-bold text-gray-500 text-sm">{views} PAGEVIEWS
                        </h1>
                    </div>
                    {window.innerWidth >= 500 && <div className="flex -mt-3">
                        <div className="text-4xl text-black font-bold">
                            ${toggle ? (data*0.75)*12 : data}.00
                        </div>
                        <div style={theme ? {color: "rgb(55,65,81)"} : {color: "rgb(107 114 128)"}} 
                        className="px-2 py-2 text-gray-500 font-medium">
                            / {toggle ? "year " : "month"}
                        </div>
                    </div>}
                </div>
                <div className="mx-16 my-9">
                    <input 
                        className="w-full range-slider" 
                        type="range" 
                        step="4" 
                        min="8" 
                        max="36" 
                        value={data} 
                        onChange={(e) => setData(e.target.value)}
                        style={{ 
                            background: `linear-gradient(90deg, hsl(174, 77%, 70%) ${(data - 8) * (100 / (36 - 8))}%, hsl(224, 65%, 95%) ${(data - 8) * (100 / (36 - 8))}%)`
                        }}
                    />
                </div>
                {window.innerWidth < 500 && <div className="flex ml-[94px] mt-6 my-8">
                        <div className="text-4xl text-black font-bold">
                            ${toggle ? (data*0.75)*12 : data}.00
                        </div>
                        <div style={theme ? {color: "rgb(55,65,81)"} : {color: "rgb(107 114 128)"}} 
                        className="px-2 py-2 text-gray-500 font-medium">
                            / {toggle ? "year " : "month"}
                        </div>
                    </div>}
                <div className="flex ml-[3rem] md:ml-28 mt-4">
                    <h3 style={theme ? {color: "rgb(55,65,81)"} : {color: "rgb(107 114 128)"}} className="mr-3 text-sm text-gray-500 font-medium pt-0.5">Monthly Billing</h3>
                    <div className="pt-1">
                    <ReactSwitch 
                        checked={toggle} 
                        onChange={() => setToggle(!toggle)} 
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
                    <h3 style={theme ? {color: "rgb(55,65,81)"} : {color: "rgb(107 114 128)"}} className="ml-3 text-sm text-gray-500 font-medium pt-0.5">Yearly Billing</h3>
                    {window.innerWidth >= 500 && <button className="text-[hsl(15,100%,70%)] bg-[hsl(14,92%,95%)] ml-2 rounded-3xl px-4 font-medium">
                        25% Discount
                    </button>}
                    {window.innerWidth < 500 && <button className="text-[hsl(15,100%,70%)] bg-[hsl(14,92%,95%)] rounded-2xl ml-2 pl-1 font-medium">
                        -25%
                    </button>}
                </div>
                <div className="flex md:flex-row flex-col justify-around">
                    <div className="mx-24 md:mx-2 my-8 md:my-4">
                        <div className="flex my-2 md:my-0 items-center">
                            <img src={iconCheck} />
                            <h4 style={theme ? {color: "rgb(55,65,81)"} : {color: "rgb(107 114 128)"}} className="ml-2 text-gray-500 font-medium">Unlimited websites</h4>
                        </div>
                        <div className="flex my-2 md:my-0 items-center">
                            <img src={iconCheck} />
                            <h4 style={theme ? {color: "rgb(55,65,81)"} : {color: "rgb(107 114 128)"}} className="ml-2 text-gray-500 font-medium">100% data ownership</h4>
                        </div>
                        <div className="flex flex-row items-center">
                            <img src={iconCheck} />
                            <h4 style={theme ? {color: "rgb(55,65,81)"} : {color: "rgb(107 114 128)"}} className="ml-2 text-gray-500 font-medium">Email reports</h4>
                        </div>
                    </div>
                    <div className="md:my-9 mx-24 md:mx-0  bg-[hsl(227, 35%, 25%)]">
                    <button className="bg-[hsl(227,35%,25%)] text-gray-200 font-medium px-7 md:py-1 py-3 rounded-3xl" onClick={handleStartTrialClick}>Start my trial</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
