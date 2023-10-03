
	
    // STEP 3: Change the below loop to a DO/WHILE structure
    let i = 10;
    do{
        countDown(i);
        i--;
    }
    while(i >= 0);
	
    function countDown(num) {
        setTimeout(function() {
            
            // STEP 4: Check if countDown is zero and if so, output "Blastoff!" to the HTML element.
            document.getElementById('countdownDisplay').textContent = num !== 0 ? num : "Blastoff!";

            // STEP 5: Change the background color based on the countdown number.
            switch (num) {
                case 8:
                case 7:
                case 6:
                case 5:
                    document.body.style.backgroundColor = 'yellow';
                    break;
                case 4:
                case 3:
                case 2:
                case 1:
                    document.body.style.backgroundColor = 'orange';
                    break;
                case 0:
                    document.body.style.backgroundColor = 'red';
                    break;
            }
        }, 10000 - (1000 * num));  // timeout so that the numbers have a chance to display for 1 second.
    }
	