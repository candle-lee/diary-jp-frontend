import React, { useImperativeHandle, forwardRef, useState } from "react"
import CaptionContainer from "./CaptionContainer";
import moment from "moment";

interface CaptionListProps {
    captionShow: boolean
}

export interface CaptionListRef {
}

const CaptionList: React.ForwardRefRenderFunction<CaptionListRef, CaptionListProps> = (props, ref) => {
    useImperativeHandle(ref, () => ({ appendCaption, getCaption }));

    const [transcripts, setTranscripts] = useState<any>([]);

    const appendCaption = (caption: string, speech_final: boolean) => {
        if (speech_final || transcripts.length == 0) {
            setTranscripts([...transcripts, { caption, time: moment() }]);
        } else {
            const last_index = transcripts.length - 1;
            const updatedTranscripts = [...transcripts];
            updatedTranscripts[last_index].caption = updatedTranscripts[last_index].caption + caption;
            updatedTranscripts[last_index].time = moment();
            setTranscripts(transcripts);
        }
    };

    const getCaption = () => {
        let caption = "";
        for (let i = 0; i < transcripts.length; i++) {
            caption += transcripts[i].caption;
        }
        return caption;
    }

    return (
        <div className={`${props.captionShow ? "absolute" : "hidden"} w-full lg:right-[24px] bottom-[136px] lg:w-[20rem]`}>
            {
                transcripts.filter((_: any, index: any) => index >= transcripts.length - 6).map((transcript: string, index: any) => <CaptionContainer key={index} index={Math.min(transcripts.length, 6) - index} transcript={transcript} />)
            }
        </div>
    )
};

export default forwardRef(CaptionList);