async function includeFooter(selector = '#site-footer', url = 'footer.html') {

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const html = await res.text();
        const container = document.querySelector(selector);
        if (!container) return;
        container.innerHTML = html;
    } catch (error) {
        console.error('Error including footer:', error);
    }

}

    // Auto-run the include when the script is loaded
    includeFooter();