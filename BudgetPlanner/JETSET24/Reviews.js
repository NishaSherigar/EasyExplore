document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Create review item
    const reviewItem = document.createElement('li');
    reviewItem.className = 'review-item';
    reviewItem.innerHTML = `
        <strong>${name} (${rating}/5)</strong>
        <p><em>${place}</em></p>
        <p>${review}</p>
    `;

    // Append review to reviews list
    document.getElementById('reviews-list').appendChild(reviewItem);

    // Clear the form
    document.getElementById('review-form').reset();
});
