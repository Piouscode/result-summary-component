// Calculates the average score
function calculateAverage(data) {
    const sum = data.reduce((acc, item) => acc + item.score, 0);
    return sum / data.length;
}

// Formats the average score for display
function formatAverage(average) {
    return new Intl.NumberFormat(undefined, {
        maximumSignificantDigits: 2,
    }).format(average);
}

const average = calculateAverage(summaryData);
const averageFormatted = formatAverage(average);