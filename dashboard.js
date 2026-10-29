 // dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    const tradesContainer = document.getElementById('tradesContainer');
    const activeCountDisplay = document.getElementById('activeCount');
    const completedCountDisplay = document.getElementById('completedCount');

    function initializeDatabase() {
        if (!localStorage.getItem('skillSwapConnections')) {
            const defaultConnections = [
                {
                    id: 501,
                    partnerName: "Sarah J.",
                    learning: "Python",
                    teaching: "UI/UX Design",
                    category: "Dev",
                    categoryLabel: "Development",
                    status: "active"
                },
                {
                    id: 502,
                    partnerName: "David K.",
                    learning: "SEO",
                    teaching: "Copywriting Basics",
                    category: "Marketing",
                    categoryLabel: "Marketing",
                    status: "active"
                }
            ];
            localStorage.setItem('completedCountValue', '14');
            localStorage.setItem('skillSwapConnections', JSON.stringify(defaultConnections));
        }
    }

    function renderDashboard() {
        const rawConnections = localStorage.getItem('skillSwapConnections') || '[]';
        const connections = JSON.parse(rawConnections);
        
        const completedCount = localStorage.getItem('completedCountValue') || '0';

        tradesContainer.innerHTML = '<h2>In Progress Connections</h2>';

        let activeCount = 0
        connections.forEach(item => {
            if (item.status === 'active') {
                activeCount++;

                const cardMarkup = `
                    <div class="panel" data-id="${item.id}" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <span class="badge ${item.category}" style="margin-bottom: .5rem; display: inline-block;">${item.categoryLabel}</span>
                            <h3>Learning ${item.learning} with ${item.partnerName}</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">You are teaching: <strong>${item.teaching}</strong></p>
                        </div>
                        <div>
                            <button class="btn-secondary chat-trigger">Open Chat Room</button>
                            <button class="btn-primary finish-trade" style="background-color: #10b981;">Mark Complete</button>
                        </div>
                    </div>
                `;
                tradesContainer.insertAdjacentHTML('beforeend', cardMarkup);
            }
        });

        activeCountDisplay.textContent = activeCount;
        completedCountDisplay.textContent = completedCount;

        if (activeCount === 0) {
            tradesContainer.insertAdjacentHTML('beforeend', `
                <p style="color: var(--text-muted); font-style: italic; padding-top: 1rem;">
                    All caught up! No active swap agreements are running right now.
                </p>
            `);
        }

        attachCardActions();
    }

    
    function attachCardActions() {
        // Complete button logic
        document.querySelectorAll('.finish-trade').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetCard = e.target.closest('.panel');
                const targetId = parseInt(targetCard.getAttribute('data-id'));
                const tradeHeadline = targetCard.querySelector('h3').textContent;

                if (confirm(`Are you finished with your trade session for "${tradeHeadline}"?`)) {
                    // Pull working connection array data
                    const currentList = JSON.parse(localStorage.getItem('skillSwapConnections') || '[]');

                    // Swap status to completed inside database array
                    const updatedList = currentList.map(item => {
                        if (item.id === targetId) {
                            item.status = 'completed';
                        }
                        return item;
                    });
                    localStorage.setItem('skillSwapConnections', JSON.stringify(updatedList));

                    // Increment the completed tracking total score
                    let currentCompletedTotal = parseInt(localStorage.getItem('completedCountValue') || '0');
                    currentCompletedTotal += 1;
                    localStorage.setItem('completedCountValue', currentCompletedTotal.toString());

                    // Re-render display layout with updated datasets
                    renderDashboard();
                }
            });
        });

        // Static chat response simulation helper
        document.querySelectorAll('.chat-trigger').forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Opening live encrypted communication channel...');
            });
        });
    }

    // Run startup cycle
    initializeDatabase();
    renderDashboard();
});
