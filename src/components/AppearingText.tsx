import { useEffect, useState } from "react"
import '../styles/AppearingText.css'

interface AppearingTextProps {
    text: string
}

export const AppearingText = ({ text }: AppearingTextProps) => {
    const [words] = useState(text.split(" "));
    const [opacities, setOpacities] = useState(new Array<number>(words.length).fill(0));

    useEffect(() => {
        for (let i = 0; i < words.length; i++) {
            setTimeout(() => {
                setOpacities(opacities => { 
                    const newOpacities = [...opacities];
                    newOpacities[i] = 1;
                    return newOpacities;
                });
            }, i*600)
        }
    }, [words]);

    return (
        <>
          <p className="text-5xl text-center">
            {words.map((word, i) => 
                (<span className="word" key={i} style={{opacity: opacities[i]}}>{word} </span>))
            }
          </p>
        </>
    )
}