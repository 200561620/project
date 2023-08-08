function includeHeaderAndFooter() {
    const headerContainer = document.querySelector('header');
    if (headerContainer) {
        console.log('Fetching header content...');
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                console.log('Header content fetched:', data);
                headerContainer.innerHTML = data;
            })
            .catch(error => console.error('Error fetching header:', error));
    }

    const footerContainer = document.querySelector('footer');
    if (footerContainer) {
        console.log('Fetching footer content...');
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                console.log('Footer content fetched:', data);
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error('Error fetching footer:', error));
    }
}

document.addEventListener('DOMContentLoaded', includeHeaderAndFooter);
