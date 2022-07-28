


const url = "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";

function Quiz() {
    const getQuestions = async () => {
        const res = await fetch(url);
        const questionData = await res.json();
        return questionData.results;

    }

    getQuestions();

    return(
        <div>

        </div>
    )
}

export default Quiz;