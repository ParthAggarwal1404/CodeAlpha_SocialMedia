document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('login');
    const feedsSection = document.getElementById('feeds');
    const facebookFeed = document.getElementById('facebook-feed');
    const twitterFeed = document.getElementById('twitter-feed');
    const instagramFeed = document.getElementById('instagram-feed');

    document.getElementById('facebook-login').addEventListener('click', function() {
        // Simulated login process
        setTimeout(() => {
            loginSection.classList.add('hidden');
            feedsSection.classList.remove('hidden');
            facebookFeed.textContent = "Facebook feed content goes here...";
        }, 1000);
    });

    document.getElementById('twitter-login').addEventListener('click', function() {
        // Simulated login process
        setTimeout(() => {
            loginSection.classList.add('hidden');
            feedsSection.classList.remove('hidden');
            twitterFeed.textContent = "Twitter feed content goes here...";
        }, 1000);
    });

    document.getElementById('instagram-login').addEventListener('click', function() {
        // Simulated login process
        setTimeout(() => {
            loginSection.classList.add('hidden');
            feedsSection.classList.remove('hidden');
            instagramFeed.textContent = "Instagram feed content goes here...";
        }, 1000);
    });
});
