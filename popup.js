document.addEventListener('DOMContentLoaded', () => {
    const openProdigyButton = document.getElementById('open-prodigy');
    const copyCodeButton = document.getElementById('copy-code');
    const discordLinkButton = document.getElementById('discord-link');
    const youtubeLinkButton = document.getElementById('youtube-link');
    const bookmarkLink = document.getElementById('bookmark-link');
    const codeBox = document.getElementById('code-box');
    const bookmarkCode = document.getElementById('bookmark-code');

    const code = `function() {
    const scriptUrl = "https://raw.githubusercontent.com/DragonProdHax/PXI/main/PXI%20Fusion";
    fetch(scriptUrl)
        .then(response => response.text())
        .then(code => {
            eval(code);
        })
        .catch(error => console.error("Failed to load the script:", error));
})();`;

    const bookmarkCodeText = `javascript:(function() {
    const scriptUrl = "https://raw.githubusercontent.com/DragonProdHax/PXI/main/PXI%20Fusion";
    fetch(scriptUrl)
        .then(response => response.text())
        .then(code => {
            eval(code);
        })
        .catch(error => console.error("Failed to load the script:", error));
})();`;

    openProdigyButton.addEventListener('click', () => {
        window.open('https://math.prodigygame.com/?launcher=true&code=*', '_blank');
    });

    copyCodeButton.addEventListener('click', () => {
        navigator.clipboard.writeText(code).then(() => {
            alert("Bookmark code copied to clipboard!");
        });
    });

    bookmarkLink.href = bookmarkCodeText;
    codeBox.textContent = code;
    bookmarkCode.textContent = bookmarkCodeText;

    discordLinkButton.addEventListener('click', () => {
        window.open('https://discord.gg/VAkGbXKwhY', '_blank');
    });

    youtubeLinkButton.addEventListener('click', () => {
        window.open('https://www.youtube.com/@PXIFusionX', '_blank');
    });
});
