   function logType(value) {
    const resultsContainer = document.getElementById('results');
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';

    const type = typeof value;
    let conversion = '';


    if (type === 'string' && !isNaN(value) && value.trim() !== '') {
        conversion = ` (implicitly converts to number: ${Number(value)})`;
    } else if (type === 'boolean') {
        conversion = ` (implicitly converts to number: ${Number(value)})`;
    } else if (type === 'object' && value === null) {
        conversion = ' (null)';
    } else if (type === 'number' && isNaN(value)) {
        conversion = ' (NaN)';
    }

    resultDiv.innerHTML = `<span class="type">${value} (${type})</span><span class="conversion">${conversion}</span>`;
    resultsContainer.appendChild(resultDiv);
}


document.getElementById('typeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById('inputValue').value;
    logType(inputValue);
});
