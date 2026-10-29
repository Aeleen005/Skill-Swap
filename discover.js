   const modal = document.getElementById('skillModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const searchBar = document.getElementById('searchBar');
    const filterCategory = document.getElementById('filterCategory');
    const discoverGrid = document.getElementById('discoverGrid');
    const newSwapForm = document.getElementById('newSwapForm');
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('open') === 'true') {
        modal.classList.add('active');
    }
    openBtn.addEventListener('click', () => modal.classList.add('active'));
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
    