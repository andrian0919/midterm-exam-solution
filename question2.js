function delayedGreeting(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, 2000); // 2000 milliseconds = 2 seconds
}

// Example usage:
delayedGreeting("Andrian");