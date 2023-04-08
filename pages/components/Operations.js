export default function Operations({ output, setOutput }) {
    const handleSelectOperation = event => {
        if (event.target.textContent.length !== 1) {
            return;
        }

        if (
            output[output.length - 2] === '+' ||
            output[output.length - 2] === '-' ||
            output[output.length - 2] === 'x' ||
            output[output.length - 2] === '/'
        ) {
            return;
        }

        setOutput(
            previousOutput => previousOutput + ` ${event.target.textContent} `
        );
    };

    return (
        <div className="operations" onClick={handleSelectOperation}>
            <button className="operation operation-add">+</button>
            <button className="operation operation-subtract">-</button>
            <button className="operation operation-multiply">x</button>
            <button className="operation operation-divide">/</button>
        </div>
    );
}
