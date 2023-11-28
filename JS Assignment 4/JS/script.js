// js/script.js

document.addEventListener('DOMContentLoaded', function () {
    // Replace with your actual YouTube API key
    const youtubeApiKey = 'AIzaSyCi12rV1g2n1wNgKXY0k5l18n4nKIDn1Xg';

    // Replace with the actual video ID you want to display
    const videoId = '6afTjl5Zais';

    async function fetchData() {
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${youtubeApiKey}`;

        try {
            const response = await fetch(url);
            const result = await response.json();

            // Assuming you want to display the title of the first video
            const videoTitle = result.items[0].snippet.title;


            // Update the HTML content with the fetched data
            document.getElementById('info-container').innerHTML = `
                <h1>${videoTitle}</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            `;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
});
