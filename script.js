  // Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check for saved theme preference or use system preference
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        // Apply the saved theme or system preference
        if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
            htmlElement.classList.remove('light-mode');
            htmlElement.classList.add('dark-mode');
        } else {
            htmlElement.classList.remove('dark-mode');
            htmlElement.classList.add('light-mode');
        }

        // Toggle theme when button is clicked
        themeToggle.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark-mode')) {
                htmlElement.classList.remove('dark-mode');
                htmlElement.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.remove('light-mode');
                htmlElement.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Mobile menu functionality
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        
        

        // Set the launch date (1 month from now)
        const launchDate = new Date();
        launchDate.setMonth(launchDate.getMonth() + 1);

        // Update countdown every second
        const countdown = setInterval(function() {
            const now = new Date().getTime();
            const distance = launchDate - now;
            
            // Calculate days, hours, minutes, seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
            
            // If the countdown is finished, display a message
            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
            }
        }, 1000);

        // Handle form submission
        document.getElementById("subscribe-btn").addEventListener("click", function() {
            const email = document.getElementById("email").value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(email)) {
                // In a real application, you would send this to your server
                console.log("Subscription email:", email);
                
                // Show success message
                document.getElementById("success-message").style.display = "block";
                document.getElementById("email").value = "";
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    document.getElementById("success-message").style.display = "none";
                }, 5000);
            } else {
                alert("Please enter a valid email address");
            }
        });

        // Animate progress bar
        const progressBar = document.querySelector('.progress-bar');
        let width = 0;
        const animateProgress = setInterval(function() {
            if (width >= 75) {
                clearInterval(animateProgress);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 20);
    