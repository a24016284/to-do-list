# Projet ToDo-List - React BUT2

Projet de gestion de taches et de dossiers realise dans le cadre du module Developpement d'Applications au BUT2 Informatique. Cette application permet une gestion organisee des taches avec des fonctionnalites avancees de filtrage, de tri et de visualisation de donnees.

## Fonctionnalites

### Gestion des Taches (Mode Taches)
* **Affichage Dynamique** : Visualisation des taches avec un "Mode Simple" (titre, echeance, 2 premiers dossiers) et un "Mode Complet" (description, equipiers, tous les dossiers) via un systeme d'accordeon.
* **Filtre par defaut** : A l'arrivee, seules les taches non terminees (hors etats "Reussi" ou "Abandonné") sont affichees.
* **Tri Avance** : Tri des taches par date d'echeance (par defaut), date de creation ou nom.
* **Filtrage Multicriteres** : Filtrage par dossiers, par etats ou par statut "En cours".
* **Edition** : Modification du titre, de la description et de la date d'echeance directement depuis la carte de la tache.

### Gestion des Dossiers (Mode Dossiers)
* **CRUD Dossiers** : Passage en mode Dossiers pour visualiser, creer ou supprimer des dossiers thematiques.
* **Personnalisation** : Chaque dossier possede un intitule, une description, une couleur parmi 10 choix et un pictogramme optionnel.

### Tableaux de Bord et Statistiques
* **Compteurs en temps reel** : Affichage du nombre total de taches et du nombre de taches restant a accomplir dans le Header.
* **Visualisation Graphique** : Un camembert (Pie Chart) dynamique affiche la repartition exacte des taches par etat avec une legende detaillee.

## Criteres d'Acceptation

* **Taches** : Intitule (min. 5 caract.), date d'echeance obligatoire, etat obligatoire, liste d'equipiers geree par virgules.
* **Dossiers** : Intitule (min. 3 caract.), couleur obligatoire.
* **Securite** : Demande de confirmation systematique avant de reinitialiser l'application a zero.
* **Donnees** : Chargement automatique d'un backup JSON au demarrage.

L'application sera disponible sur `http://localhost:3000`.

## Structure du Projet

L'architecture suit une approche modulaire:
* **src/components/** : Composants UI decoupes par dossier avec leur propre fichier CSS.
* **src/hooks/** : Logique metier centralisee dans le hook personnalise `useTodoApp.js`.
* **src/utils/** : Fonctions pour le tri, le filtrage et la manipulation des donnees.
* **src/constants/** : Enums pour les etats, les couleurs et les valeurs par defaut.

## Bibliotheques utilisees

* **React** : Framework principal.
* **react-minimal-pie-chart** : Pour la generation du graphique statistique dans le Header.

---
**Auteur** : Sofia Ach - BUT2 Informatique
