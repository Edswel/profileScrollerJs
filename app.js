const data = [
  {
    name: 'Edward Soul',
    age: 24,
    gender: 'Male',
    lookingFor: 'Female',
    location: 'Hyrum UT',
    image: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    name: 'Heather Paul',
    age: 32,
    gender: 'Female',
    lookingFor: 'Male',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/women/7.jpg'
  },
  {
    name: 'Aidan Shaw',
    age: 40,
    gender: 'Male',
    lookingFor: 'Female',
    location: 'Little Rock AK',
    image: 'https://randomuser.me/api/portraits/men/20.jpg'
  },
  {
    name: 'Kristina Gomez',
    age: 28,
    gender: 'Female',
    lookingFor: 'Male',
    location: 'San Diego LA',
    image: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    name: 'Steve Ham',
    age: 31,
    gender: 'Male',
    lookingFor: 'Female',
    location: 'Brooklyn NY',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    name: 'Pamela Perry',
    age: 35,
    gender: 'Female',
    lookingFor: 'Male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/52.jpg'
  }
];

const profiles = profileIterator(data);

// Display first profile upon page load
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class='list-group'>
      <li class='list-group-item'>Name: ${currentProfile.name}</li>
      <li class='list-group-item'>Age: ${currentProfile.age}</li>
      <li class='list-group-item'>Location: ${currentProfile.location}</li>
      <li class='list-group-item'>Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
    </ul>
  `;
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
  `;
  } else {
    window.location.reload();
  }
}

// PRofile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  };
}