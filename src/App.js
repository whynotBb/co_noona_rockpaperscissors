import { Children, useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
    rock: {
        name: "Rock",
        img: "https://previews.123rf.com/images/yupiramos/yupiramos1712/yupiramos171203749/91050536-%EC%A3%BC%EB%A8%B9-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84-%EC%86%90%EC%97%90.jpg",
    },
    scissors: {
        name: "Scissors",
        img: "https://cdn-icons-png.flaticon.com/512/4151/4151780.png",
    },
    paper: {
        name: "Paper",
        img: "https://cdn-icons-png.flaticon.com/128/2121/2121078.png",
    },
};

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState("");
    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);
        setResult(judgement(choice[userChoice], computerChoice));
    };
    const randomChoice = () => {
        let itemArray = Object.keys(choice); //객체의 키 값만 뽑아서 배열로 만들어주는 함수
        console.log("itemArray", itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };
    const judgement = (user, computer) => {
        console.log("user:", user, "com:", computer);
        if (user.name === computer.name) {
            return "tie";
        } else if (user.name === "Rock")
            return computer.name === "Scissors" ? "win" : "lose";
        else if (user.name === "Scissors")
            return computer.name === "Rock" ? "lose" : "win";
        else if (user.name === "Paper")
            return computer.name === "Rock" ? "win" : "lose";
    };
    return (
        <div>
            <div className="main">
                <Box title="you" item={userSelect} result={result} />
                <Box title="computer" item={computerSelect} result={result} />
            </div>
            <div className="main">
                <button onClick={() => play("scissors")}>가위</button>
                <button onClick={() => play("rock")}>바위</button>
                <button onClick={() => play("paper")}>보</button>
            </div>
        </div>
    );
}

export default App;
