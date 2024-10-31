
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Validate if all required fields are filled
    const formElements = this.elements;
    let allFilled = true;
  
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].hasAttribute('required') && !formElements[i].value) {
            allFilled = false;
            break;
        }
    }
  
    if (!allFilled) {
        alert('Please fill out all fields.');
        return;
    }
  
    // Simulate form submission (replace with actual AJAX call if needed)
    const formData = new FormData(this);
  
    fetch(this.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Show success message
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
  
            // Reset the form fields
            this.reset();
  
            // Hide the success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  });