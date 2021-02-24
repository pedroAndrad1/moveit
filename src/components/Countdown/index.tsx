import { CountdownContainer } from "../../styles/components/Countdown.module";

export default function Countdown(){
    return(
        <CountdownContainer >
            <div>
                <span>2</span>
                <span>5</span>
            </div>
            <span>:</span>
            <div>
                <span>0</span>
                <span>0</span>
            </div>
        </CountdownContainer>
    )
}