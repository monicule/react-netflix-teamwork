import style from './ReasonsToJoin.module.css';

export function Reason(params) {
    return (
        <div className={style.reason}>
            <h2 className={style.title}>{params.title}</h2>
            <p className={style.description}>{params.description}</p>
            <div className={style.icon}>{params.icon}</div>
        </div>
    );
}