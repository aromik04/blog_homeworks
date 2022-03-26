import React from "react";
const Main2 = (props) => {
    return (
        <main className="content">
            <h1 className="visually-hidden">
                {props.title}
                </h1>
                {props.children}
            </main>
    );
};


export default Main2;

//пришлось назвать компонент Main > Main2 из-за ошибки с модулями