import { useEffect, useState } from "react";
import "./App.css";

function App() {
    //0-rock, 1-paper, 2-scissors
    const [user, setUser] = useState(0);
    const [com, setCom] = useState(0);
    //0-tie, 1-win, 2-lose
    const [result, setResult] = useState(0);
    const play = (item) => {
        setUser(item);
        setCom(Math.floor(Math.random() * 3));
        console.log(user, com);
    };
    useEffect(() => {
        console.log("useEffect", user, com);
        user === com
            ? setResult(0)
            : (user === 0 && com === 2) ||
              (user === 1 && com === 0) ||
              (user === 2 && com === 1)
            ? setResult(1)
            : setResult(2);
    }, [user, com]);

    return (
        <div className="game_wrap">
            <div className="box_wrap">
                <div
                    className="box"
                    style={{
                        borderColor:
                            result === 1
                                ? "red"
                                : result === 2
                                ? "blue"
                                : "black",
                    }}
                >
                    user :{" "}
                    {user === 0 ? "rock" : user === 1 ? "paper" : "scissors"}
                    <div>
                        {result === 0 ? "tie" : result === 1 ? "win" : "lose"}
                    </div>
                </div>
                <div
                    className="box"
                    style={{
                        borderColor:
                            result === 1
                                ? "blue"
                                : result === 2
                                ? "red"
                                : "black",
                    }}
                >
                    com :{" "}
                    {com === 0 ? "rock" : com === 1 ? "paper" : "scissors"}
                    <div>
                        {result === 0 ? "tie" : result === 1 ? "lose" : "win"}
                    </div>
                </div>
            </div>
            <div className="btns">
                <button onClick={() => play(0)}>rock : </button>
                <button onClick={() => play(1)}>paper</button>
                <button onClick={() => play(2)}>scissors</button>
            </div>
        </div>
    );
}

export default App;
