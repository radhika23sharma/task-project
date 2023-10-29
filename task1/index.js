function printEvenNumbers() {
    let output = document.getElementById('output');
    let start = 1;
    let end = 100;
    let count = 0;
    let evenNumbers = '';

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers += i + ' ';
            count++;

            // Check if 5 even numbers have been printed
            if (count % 5 === 0) {
                setTimeout(function(numbers) {
                    output.innerHTML += numbers + '<br>';
                }, 5000 * (count / 5), evenNumbers); // 5000 milliseconds = 5 seconds
                evenNumbers = '';
            }
        }
    }
}

// Call the function to print even numbers
printEvenNumbers();