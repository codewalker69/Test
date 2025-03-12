document.addEventListener("DOMContentLoaded", async () => {
    const connectButton = document.getElementById("connect-wallet");
    const walletAddressDisplay = document.getElementById("wallet-address");

    if (!window.solana) {
        connectButton.innerText = "Phantom Wallet nicht gefunden";
        connectButton.disabled = true;
        return;
    }

    connectButton.addEventListener("click", async () => {
        try {
            const response = await window.solana.connect();
            walletAddressDisplay.innerText = `Wallet: ${response.publicKey.toString()}`;
            connectButton.innerText = "Verbunden";
            connectButton.disabled = true;
        } catch (err) {
            console.error("Wallet Verbindung fehlgeschlagen:", err);
        }
    });

    // Automatisch checken, ob Phantom schon verbunden ist
    try {
        const { publicKey } = await window.solana.connect({ onlyIfTrusted: true });
        walletAddressDisplay.innerText = `Wallet: ${publicKey.toString()}`;
        connectButton.innerText = "Verbunden";
        connectButton.disabled = true;
    } catch (err) {
        console.log("Keine automatische Verbindung");
    }
});
