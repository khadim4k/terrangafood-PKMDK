import Link from 'next/link';
import CommandeForm from '../../../components/CommandeForm';
import { getRestaurant, getPlatsByRestaurant } from '../../../lib/api';

export default async function CommanderPage({ params }) {
  const { id } = params;
  let restaurant = null;
  let plats = [];
  let error = null;

  try {
    // Récupération des données en parallèle (Server Component)
    restaurant = await getRestaurant(id);
    plats = await getPlatsByRestaurant(id);
  } catch (err) {
    error = err.message;
  }

  // Gestion des erreurs ou restaurant inexistant
  if (error || !restaurant) {
    return (
      <div className="commande-page">
        <Link href="/" className="back-link">
          Retour aux restaurants
        </Link>
        <div className="error">
          <p>{error || 'Restaurant non trouvé'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="commande-page">
      <Link href={`/restaurants/${id}`} className="back-link">
        Retour au restaurant
      </Link>
      
      <CommandeForm 
        restaurant={restaurant} 
        plats={plats.filter((p) => p.disponible)} 
      />
    </div>
  );
}