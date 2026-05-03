# Rapport de tests -- Lab 3 (Docker)

## Équipe : PKMDK
## Testeur : Khadime (QA)

### Images Docker
| # | Test                           | OK ? | Notes            |
|---|--------------------------------|------|------------------|
| 1 | docker build API réussit       | OK   |                  |
| 2 | docker build Frontend réussit  | OK   |                  |
| 3 | Image API < 250 Mo             | OK   | Taille :  58.1MB |
| 4 | Image Frontend < 500 Mo        | OK   | Taille :  221MB  |

### Docker Compose
| # | Test                              | OK ? | Notes            |
|---|-----------------------------------|------|------------------|
| 5 | docker compose up --build réussit | OK   |                  |
| 6 | 3 conteneurs en état "Up"         | OK   | api, web, mongo  |
| 7 | Seed fonctionne dans le conteneur | OK   |                  |
| 8 | API répond sur localhost:3001     | OK   |                  |
| 9 | Frontend répond sur localhost:3000| OK   |                  |

### Fonctionnel
| #  | Test                              | OK ? | Notes                       |
|----|-----------------------------------|------|-----------------------------|
| 10 | Restaurants affichés              | OK   | Données seed visibles       |
| 11 | Commande créée via formulaire     | OK   |                             |
| 12 | Commande visible dans mes-cmds    | OK   |                             |
| 13 | Données persistent après restart  | OK   | Volume mongodb_data vérifié |
| 14 | docker compose down fonctionne    | OK   |                             |
| 15 | docker compose down -v vide la DB | OK   | Volume supprimé proprement  |