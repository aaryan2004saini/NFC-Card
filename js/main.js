// Sample contact data
const sampleData = {
  // TODO: Use an API or json file to get the data
  "name": "John Manager",
  "role": "Senior Manager",
  "phone": "+919876543210",
  "email": "john@ajmerashringar.com",
  "whatsapp": "+919876543210",
  "website": "https://ajmerashringaar.com",
  "social": {
    "instagram": "https://instagram.com/ajmera_cityscapes",
    "facebook": "https://facebook.com/ajmerashringar", // TODO: Add Facebook  
    "twitter": "https://twitter.com/ajmerashringar", // TODO: Add Twitter
    "pinterest": "https://pinterest.com/ajmerashringar" // TODO: Add Pinterest
  }
};

// Load contact data
function loadContactData() {
  try {
    const contact = sampleData;

    // Update UI with contact information
    document.getElementById('contactName').textContent = contact.name;
    document.getElementById('contactRole').textContent = contact.role;
    
    const phoneBtn = document.getElementById('phoneBtn');
    phoneBtn.href = `tel:${contact.phone}`;
    phoneBtn.querySelector('span').textContent = contact.phone;
    
    const emailBtn = document.getElementById('emailBtn');
    emailBtn.href = `mailto:${contact.email}`;
    emailBtn.querySelector('span').textContent = contact.email;
    
    const whatsappBtn = document.getElementById('whatsappBtn');
    whatsappBtn.href = `https://wa.me/${contact.whatsapp.replace('+', '')}`;
    
    const websiteBtn = document.getElementById('websiteBtn');
    websiteBtn.href = contact.website;
    websiteBtn.querySelector('span').textContent = new URL(contact.website).hostname;
    
    // Update social media links
    document.getElementById('instagramBtn').href = contact.social.instagram;
    document.getElementById('facebookBtn').href = contact.social.facebook;
    document.getElementById('twitterBtn').href = contact.social.twitter;
    document.getElementById('pinterestBtn').href = contact.social.pinterest;
    
    // Show main content
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('errorMessage').classList.add('hidden');
  } catch (error) {
    // Show error message
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('errorMessage').classList.remove('hidden');
    console.error('Error:', error);
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Always show the sample data
  loadContactData();
}); 