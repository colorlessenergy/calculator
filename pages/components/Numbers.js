export default function Numbers({ setOutput }) {
    const handleSelectNumber = event => {
        if (event.target.textContent.length !== 1) {
            return;
        }

        if (event.target.textContent === 'c') {
            return setOutput('');
        }

        if (event.target.textContent === '=') {
            return setOutput(previousOutput =>
                eval(previousOutput.replaceAll('x', '*'))
            );
        }

        setOutput(previousOutput => previousOutput + event.target.textContent);
    };

    return (
        <div onClick={handleSelectNumber}>
            <button className="number">1</button>
            <button className="number">2</button>
            <button className="number">3</button>
            <button className="number">4</button>
            <button className="number">5</button>
            <button className="number">6</button>
            <button className="number">7</button>
            <button className="number">8</button>
            <button className="number">9</button>
            <button className="number number-clear">c</button>
            <button className="number">0</button>
            <button className="number">=</button>
        </div>
    );
}
