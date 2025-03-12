// Dark Mode Toggle
const darkModeButton = document.getElementById("darkModeToggle");

darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Event Countdown (Dummy-Zeit für 1 Stunde in der Zukunft)
function updateCountdown() {
    const eventTime = new Date(Date.now() + 3600 * 1000); // 1 Stunde später
    const interval = setInterval(() => {
        const now = new Date();
        const diff = eventTime - now;
        
        if (diff <= 0) {
            document.getElementById("eventCountdown").innerText = "Das Event läuft jetzt!";
            clearInterval(interval);
        } else {
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            document.getElementById("eventCountdown").innerText = `${minutes} Min ${seconds} Sek`;
        }
    }, 1000);
}
updateCountdown();
function goToTournament(game) {
    if (game === "lol") {
        window.location.href = "lol-tournament.html";
    } else if (game === "valorant") {
        window.location.href = "valorant-tournament.html";
    } else if (game === "chess") {
        window.location.href = "chess-tournament.html";
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    const connectButton = document.getElementById("connectWallet");
    const walletAddress = document.getElementById("walletAddress");

    if (window.solana && window.solana.isPhantom) {
        connectButton.addEventListener("click", async () => {
            try {
                const response = await window.solana.connect();
                walletAddress.textContent = `Wallet: ${response.publicKey.toString()}`;
            } catch (err) {
                console.error("Wallet Connection Failed:", err);
            }
        });
    } else {
        connectButton.textContent = "Phantom Wallet nicht gefunden";
        connectButton.disabled = true;
    }
});
