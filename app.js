const data = [
  {
    nombre: 'Marina Crespo',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Santa Fe',
    image: 'https://randomuser.me/api/portraits/women/75.jpg'
  },
  {
    nombre: 'Gabriel Carrillo',
    age: 28,
    gender: 'male',
    lookingfor: 'female',
    location: 'Rosario',
    image: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    nombre: 'Juan Cruz Fernandez',
    age: 27,
    gender: 'male',
    lookingfor: 'male',
    location: 'Mercedes',
    image: 'https://randomuser.me/api/portraits/men/23.jpg'
  },
];

const profiles = profileIterator(data);
//Lo llamo manualmente para que al relodear la pagina
//cuando ya no hay mas perfiles
//me muestre otra vez el primero
nextProfile();

//Next event
document.getElementById('next').addEventListener('click',
nextProfile);

function nextProfile(){
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.nombre}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`;
  } else {
    //No more profiles to show
    window.location.reload();
  }
}

//profile iterator

function profileIterator(profiles){
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  };
}