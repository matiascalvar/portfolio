const quote = document.querySelector('blockquote');
console.log(quote.innerText);

const getQuote = async () => {
    const res = await axios.get('https://type.fit/api/quotes');
    const resQuote = res.data[Math.floor(Math.random() * (1644 - 0)) + 0].text;
    return resQuote;
}

const addQuote = async () => {
    const quoteText = await getQuote();
    quote.innerText = `'${quoteText}'`;
}

quote.innerText = addQuote();
quote.addEventListener('click', ()=> addQuote());