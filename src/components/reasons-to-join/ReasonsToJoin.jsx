import { Reason } from "./ReasonToJoin";
import style from './ReasonsToJoin.module.css';

export function Reasons() {
    return (
        <section className={style.reasonsList}>
            <Reason title="Enjoy on your TV"
            description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." />
            <Reason title="Download your shows to watch offline"
            description="Save your favorites easily and always have something to watch." />
            <Reason title="Watch everywhere"
            description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
            <Reason title="Create profiles for kids"
            description="Send kids on adventures with their favorite characters in a space made just for them — free with your membership." />



        </section>
    );
}
