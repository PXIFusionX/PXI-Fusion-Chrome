document.getElementById('open-prodigy').addEventListener('click', () => {
    window.open("https://math.prodigygame.com/?launcher=true&code=*");
  });
  
  document.getElementById('copy-code').addEventListener('click', () => {
    const code = document.getElementById('code-box').innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert('Console code copied to clipboard!');
    });
  });
  
  document.getElementById('copy-bookmark').addEventListener('click', () => {
    const bookmarkCode = document.getElementById('bookmark-code').innerText;
    navigator.clipboard.writeText(bookmarkCode).then(() => {
      alert('Bookmark code copied to clipboard!');
    });
  });
  
  document.getElementById('discord-link').addEventListener('click', () => {
    window.open('https://discord.gg/VAkGbXKwhY');
  });
  
  document.getElementById('youtube-link').addEventListener('click', () => {
    window.open('https://www.youtube.com/@PXIFusionX');
  });
  