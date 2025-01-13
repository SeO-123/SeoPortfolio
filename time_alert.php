<body>
    <h1>Welcome to My Website</h1>

    <?php
    // Get the current hour
    $currentHour = (int) date("H"); // 24-hour format (0-23)

    // Define the alert message based on time of day
    if ($currentHour >= 6 && $currentHour < 12) {
        // Morning
        $alertMessage = "Good morning! Start your day with a smile!";
        $alertType = "info"; // You can customize this type (success, info, error, etc.)
    } elseif ($currentHour >= 12 && $currentHour < 18) {
        // Afternoon
        $alertMessage = "Good afternoon! Keep going!";
        $alertType = "warning";
    } else {
        // Evening
        $alertMessage = "Good evening! Time to relax!";
        $alertType = "success";
    }

    // Use PHP to output JavaScript to show the alert
    echo "<script type='text/javascript'>
            alert('$alertMessage');
          </script>";
    ?>

</body>