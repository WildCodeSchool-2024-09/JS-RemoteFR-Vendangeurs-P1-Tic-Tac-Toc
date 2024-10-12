<script>
    const toggleStatsButton = document.getElementById('toggle-stats');
    const statsMenu = document.getElementById('stats-menu');

    toggleStatsButton.addEventListener('click', function() {
        if (statsMenu.style.display === 'none' || statsMenu.style.display === '') {
            statsMenu.style.display = 'block'; // Affiche le menu
        } else {
            statsMenu.style.display = 'none'; // Cache le menu
        }
    });
</script>
