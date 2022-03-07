//create a new pet 
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#pet-name').value.trim();
    const species = document.querySelector('#pet-species').value.trim();
    const breed = document.querySelector('#pet-breed').value.trim();
    const age = document.querySelector('#pet-age').value.trim();
    //const sex = document.querySelector('#pet-sex').value.trim();
    const description = document.querySelector('#pet-desc').value.trim();
    const photourl = document.querySelector('#pet-url').value.trim();
  
    if (name && species && breed && age) {
      const response = await fetch(`/api/pet`, {
        method: 'POST',
        body: JSON.stringify({ name, species, breed, age, description, photourl }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to post your pet.');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/pet/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete pet');
      }
    }
  };
  
  document
    .querySelector('#submit-pet')
    .addEventListener('click', newFormHandler);
  
  document
    .querySelector('#delete-pet')
    .addEventListener('click', delButtonHandler);
  
