// Ensure there's only one event listener for the search bar
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    // Check which section to scroll to based on the query input
    if (query.includes('home')) {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('highlights')) {
        document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('services')) {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('about')) {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('mv')) {
        document.getElementById('mv').scrollIntoView({ behavior: 'smooth' });    
    } else if (query.includes('contact')) {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
});
