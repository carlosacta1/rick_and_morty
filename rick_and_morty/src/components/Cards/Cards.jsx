import Card from './Card';

export default function Cards(props) {
   const {characters} = props;
   return (
      <div className='card'>
         {characters.map(character => {
           return(
               <Card
                  key={character.name}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={() => window.alert('Emulamos que se cierra la card testing')}
               />
            )})
         }
      </div>
      
   );
}
