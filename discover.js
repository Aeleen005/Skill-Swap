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
    function loadSavedSills() {
        const rawData = localStorage.getItem("communitySkills") || '[]';
        const savedSkills = JSON.parse(rawData);
    savedSkills.forEach(skill => {
         const cardMarkup = `
                <div class="card" data-category="${skill.category}">
                    <span class="badge ${skill.category}">${skill.category === 'Dev' ? 'Development' : skill.category === 'UI' ? 'Design' : 'Marketing'}</span>
                    <h3>${skill.title}</h3>
                    <p class="description">${skill.description}</p>
                    <div class="footer-swap">
                        <p class="seeking"><strong>Looking for:</strong> ${skill.seeking}</p>
                        <button class="btn-secondary request-btn">Request Swap</button>
                    </div>
                </div>
            `;
            discoverGrid.insertAdjacentHTML('beforeend', cardMarkup);
        });
        attachRequestEvents();

    }
    newSwapForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newSkillObject = {
            title: document.getElementById('skillTitle').value,
            category: document.getElementById('skillCategory').value,
            description: document.getElementById('skillDesc').value,
            seeking: document.getElementById('skillSeeking').value,
            id: Date.now() 
        };
        const currentDatabase = JSON.parse(localStorage.getItem("communitySkills") || "[]");
        currentDatabase.push(newSkillObject);

        localStorage.setItem('communitySkills', JSON.stringify(currentDatabase));

        newSwapForm.reset();
        modal.classList.remove('active');
        
        window.location.reload();
    });

    function filterCards() {
        const query = searchBar.value.toLowerCase();
        const category = filterCategory.value;
        const cards = document.querySelectorAll('#discoverGrid .card');

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('.description').textContent.toLowerCase();
            const cardCategory = card.getAttribute('data-category');

            const matchesSearch = title.includes(query) || desc.includes(query);
            const matchesCategory = category === 'all' || cardCategory === category;

            card.style.display = (matchesSearch && matchesCategory) ? 'flex' : 'none';
        });
    }
    
