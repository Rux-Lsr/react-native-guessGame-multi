# Guess The number Multi
# Regles du jeux

1. **Participants et Tour de Jeu :**
   - Chaque participant choisit un nombre à chaque tour.
   - Après avoir choisi un nombre, les participants doivent deviner le nombre caché des autres joueurs.
   - Si un joueur trouve le nombre caché d'un autre joueur, ce dernier est éliminé et ne participe plus aux tours suivants.

2. **Étapes du Jeu :**
   - Les participants répètent les étapes de choix de nombre et de devinette jusqu'à ce qu'il ne reste qu'un seul joueur en lice.
   - À chaque tour, une liste est affichée pour montrer comment se situe le choix de chaque participant par rapport aux autres.

3. **Création et Rejoindre une Partie :**
   - Un joueur peut créer une partie en définissant le nombre maximum de participants.
   - Les autres joueurs peuvent rejoindre une partie existante.

4. **Score et Fin de Partie :**
   - Chaque joueur se voit attribuer un score à la fin de chaque partie en fonction de son classement ou de ses performances.
   - La partie se termine lorsqu'il ne reste qu'un seul joueur, déclaré vainqueur.

5. **Authentification et Temps Réel :**
   - Les joueurs doivent s'inscrire et se connecter avec leur compte Google.
   - Le jeu se déroule en temps réel grâce à l'utilisation de Firebase pour la communication entre les joueurs.

### Découpage du Projet en Tâches :

1. **Mise en Place de l'Environnement de Développement :**
   - Configurer l'environnement de développement avec Firebase.
   - Mettre en place l'authentification via le compte Google.

2. **Implémentation de la Logique de Jeu :**
   - Programmer la logique du jeu "Guess the Number" (choix de nombres, vérification, élimination).
   - Gérer les tours de jeu et l'affichage des informations relatives aux choix.

3. **Intégration de Firebase Realtime Database :**
   - Connecter l'application au service Firebase Realtime Database.
   - Établir la communication en temps réel pour les parties multijoueur.

4. **Gestion des Parties et des Joueurs :**
   - Permettre la création de parties avec un nombre maximum de participants.
   - Mettre en place la logique de gestion des joueurs et des scores.

5. **Affichage des Résultats et des Scores :**
   - Développer la fonctionnalité d'affichage des résultats à la fin de chaque partie.
   - Mettre en place l'enregistrement et la mise à jour des scores des joueurs.


# Structure de la BD 
Collections:
- **Joueurs**:
    - player_id: Identifiant unique du joueur (clé primaire)
    - player_name: Nom du joueur
    - google_account: Identifiant du compte Google du joueur
    - score: Score du joueur
    - created_at: Date de création du compte joueur
- **Parties**:
    - game_id: Identifiant unique de la partie (clé primaire)
    - max_players: Nombre maximum de participants dans la partie
    - current_players: Nombre de joueurs actuels dans la partie
    - game_status: Statut de la partie (en attente, en cours, terminée)
    - created_by: ID du joueur créateur de la partie
    - start_time: Heure de début de la partie
    - end_time: Heure de fin de la partie
- **Choix**:
    - guess_id: Identifiant unique du choix d'un joueur (clé primaire)
    - game_id: ID de la partie à laquelle le choix est associé
    - player_id: ID du joueur qui a fait le choix
    - guessed_number: Nombre choisi par le joueur
    - is_correct_guess: Indicateur si le choix était le bon
    - round_number: Numéro du tour lors duquel le choix a été fait
- **Relations**:

Un joueur peut participer à plusieurs parties, donc une relation N:M entre Joueurs et Parties.
Chaque partie peut avoir plusieurs choix de joueurs, donc une relation 1:N entre Parties et Choix.

