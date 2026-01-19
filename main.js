document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calc-form');
  const biomassInput = document.getElementById('biomass');
  const percentageSelect = document.getElementById('percentage');
  const resultContainer = document.getElementById('result-container');
  const resultGram = document.getElementById('result-gram');
  const resultKg = document.getElementById('result-kg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const biomass = parseFloat(biomassInput.value);
    const percentage = parseFloat(percentageSelect.value);

    if (isNaN(biomass) || isNaN(percentage)) {
      return;
    }

    // Calculate feed in kg
    const feedKg = biomass * percentage;
    // Convert to grams
    const feedGram = feedKg * 1000;

    // Update UI
    resultGram.textContent = Math.round(feedGram).toLocaleString('id-ID');
    resultKg.textContent = feedKg.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 2 });

    // Show result with animation
    resultContainer.classList.remove('hidden');
    resultContainer.style.opacity = '1';
    
    // Smooth scroll to result
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});
