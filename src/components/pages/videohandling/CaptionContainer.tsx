import React from "react"
import { getCurrentTime } from "../../../utils";

const CaptionContainer: React.FC = () => {
    return (
        <div className="p-2 flex flex-col gap-1 bg-white bg-opacity-30 rounded-lg m-[10px]">
            <div className="text-black text-xs font-normal leading-[124%]">
                {getCurrentTime()}
            </div>
            <div className="text-black text-sm font-normal leading-[125%] tracking-[-0.0175rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </div>
        </div>
    )
}

export default CaptionContainer;