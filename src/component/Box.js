const Box = (props) => {
    console.log(props.item);
    let result;
    if (
        props.title === "computer" &&
        props.result !== "tie" &&
        props.result !== ""
    ) {
        result = props.result === "win" ? "lose" : "win";
    } else result = props.result;

    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <img
                className="item-img"
                src={props.item && props.item.img}
                alt=""
            />
            <h2>{result}</h2>
        </div>
    );
};
export default Box;
