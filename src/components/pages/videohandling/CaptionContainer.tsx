import React from "react"

interface CaptionContainerProps {
    index: any,
    transcript: any,
}

const CaptionContainer: React.FC<CaptionContainerProps> = ({ index, transcript }) => {
    return (
        <div className={`p-2 flex flex-col gap-1 bg-white bg-opacity-80 rounded-lg m-[10px] ${index == 3 ? "opacity-60 lg:opacity-100" : index == 4 ? "opacity-60 hidden lg:block" : index == 5 ? "opacity-40 hidden lg:block" : index == 6 ? "opacity-20 hidden lg:block" : "opacity-100"}`}>
            <div className="text-black text-xs font-normal leading-[124%]">
                {transcript.time.format("hh:mm:ss")}
            </div>
            <div className="text-black text-sm font-normal leading-[125%] tracking-[-0.0175rem]">
                {transcript.caption}
            </div>
        </div>
    )
}

export default CaptionContainer;