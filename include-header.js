async function includeHeader(selector = '#site-header', url = 'header.html') {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    const html = await res.text();
    const container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = html;

    // Re-insert any scripts found in the included HTML so they execute
    container.querySelectorAll('script').forEach(old => {
      const s = document.createElement('script');
      if (old.src) s.src = old.src;
      else s.textContent = old.textContent;
      document.head.appendChild(s);
      old.remove();
    });
  } catch (e) {
    console.error('Header include failed:', e);
  }
}

includeHeader();
    