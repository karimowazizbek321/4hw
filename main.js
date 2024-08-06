
function fetchQuote() {
    const url = 'https://api.quotable.io/random';

    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('Status 200 OK');
                return response.json(); 
            } else {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
        })
        .then(data => {
            console.log('Quote:', data.content);

            document.getElementById('quote').textContent = data.content;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            document.getElementById('quote').textContent = 'Failed to fetch quote';
        });
}


document.getElementById('fetchQuoteButton').addEventListener('click', fetchQuote);


fetchQuote();

