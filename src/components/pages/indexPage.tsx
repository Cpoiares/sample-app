import { useState } from "react";
import { INTERVALE_SIZE_MS } from "../../constants/apiMapping";
import Counter from "../partial/counter/counter";
import './indexPage.css'
import AnimatedImage from "../partial/image/animatedImage";

type IndexPageProps = {
    introText: string;
    imgRef: string;
};

function IndexPage({ introText, imgRef } : IndexPageProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleCounter = () => {
        setIsPlaying(pValue => !pValue);
    };

    return (
        <div className='container'>
        <div style={{ width: "50%", marginRight: "20px" }}>
            <p>{introText}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <AnimatedImage imgRef={imgRef} />
            </div>
        </div>
        <div style={{ width: "50%", marginLeft: "20px" }}>
        <button onClick={toggleCounter}>
            {isPlaying ? 'Stop Counter' : 'Start Counter'}
        </button>
        <Counter intervalSize={INTERVALE_SIZE_MS} isPlaying={isPlaying}/>
        </div>
    </div>
    );
}

export default IndexPage;