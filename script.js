
document.getElementById('mortgageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = Number(document.querySelectorAll('input')[7].value);
    const years = Number(document.querySelectorAll('input')[8].value);
    const rate = Number(document.querySelectorAll('input')[9].value) / 100 / 12;
    const n = years * 12;
    const monthly = (amount * rate) / (1 - Math.pow(1 + rate, -n));
    const results = document.getElementById('results');
    results.innerHTML = "<h3>החזר חודשי משוער:</h3><p>" + monthly.toFixed(2) + " ₪</p>";
});
