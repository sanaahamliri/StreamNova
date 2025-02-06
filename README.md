# 🎥 Application de Streaming

## 📚 Contexte du Projet
Une application de streaming permettant aux utilisateurs d'accéder à un catalogue de films, de laisser des commentaires, de gérer leurs films favoris et de recevoir des notifications. Les administrateurs peuvent gérer les utilisateurs et analyser les statistiques d'utilisation.

## 🚀 Fonctionnalités

### Utilisateurs
- **Inscription des utilisateurs** : Permet aux utilisateurs de créer un compte.
- **Connexion et gestion des abonnés** : Authentification sécurisée avec gestion des comptes pour les utilisateurs abonnés.

### Streaming et Interactions
- **Streaming de films** : Accès au catalogue de films pour les utilisateurs abonnés.
- **Notation des films** : Les utilisateurs peuvent évaluer les films.
- **Recherche et filtrage** :
  - Recherche de films par nom.
  - Filtrage des films par genre et date.

### Commentaires et Favoris
- **Commentaires** :
  - Ajout de commentaires sur les films.
  - Affichage des commentaires associés à chaque film.
- **Films favoris** : Les utilisateurs peuvent gérer une liste de leurs films préférés.

### Contenus et Suggestions
- **Affichage des nouveautés** : Présentation des derniers films ajoutés sur la page d’accueil.
- **Détail des films** : Affichage des informations détaillées avec des suggestions de films en relation.

### Administration
- **Interface administrateur** :
  - Gestion des utilisateurs.
  - Analyse des statistiques d’utilisation, telles que :
    - Temps passé sur l’application.
    - Nombre de visiteurs.
    - Nombre d’inscriptions globales et sur une période donnée.

### Notifications
- **Notifications programmées** :
  - Envoi de notifications aux utilisateurs n'ayant pas ouvert l'application depuis plus de 24 heures.
  - Notifications en temps réel : Pour informer des nouveaux films ajoutés.
  - Alertes promotionnelles : Notifications pour les films en promotion.
  - Rappels d'abonnement : Rappels pour les abonnements à renouveler.

### Paiement et Vérification
- **Paiement par carte bancaire** :
  - Implémentation d’une maquette pour le paiement sécurisé par carte de crédit.
- **Service de vérification des cartes** : Intégration d’un algorithme basé sur Luhn pour valider les numéros de carte bancaire.

## 🛠️ Technologies Utilisées
- **Tests** : Jest, Supertest, React Native Testing Library
- **Backend** : NestJS, TypeORM
- **Frontend Mobile** : React Native, Expo

## 📄 Installation
1. Cloner le dépôt : `git clone https://github.com/sanaahamliri/StreamNova.git`
2. Installer les dépendances backend : `cd backend && npm install`
3. Installer les dépendances frontend : `cd frontend && npm install`
4. Lancer le backend : `npm run start`
5. Lancer le frontend : `npm run start`

## 📫 Contact
Pour toute question ou problème, veuillez contacter sanahamlirifr01@gmail.com.
