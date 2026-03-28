Voici une proposition de README.md complète, structurée et professionnelle, basée sur l'énoncé de ton projet et les fonctionnalités que nous avons implémentées.

ToDo-List Project - React BUT2
Projet de gestion de tâches et de dossiers réalisé dans le cadre du module Développement d'Applications au BUT2 Informatique. Cette application permet une gestion organisée des tâches avec des fonctionnalités avancées de filtrage, de tri et de visualisation de données.

 Fonctionnalités
Gestion des Tâches (Mode Tâches)
Affichage Dynamique : Visualisation des tâches avec un "Mode Simple" (titre, échéance, 2 premiers dossiers) et un "Mode Complet" (description, équipiers, tous les dossiers) via un système d'accordéon.

Filtre par défaut : À l'arrivée, seules les tâches non terminées (hors états "Réussi" ou "Abandonné") sont affichées.

Tri Avancé : Tri des tâches par date d'échéance (par défaut), date de création ou nom.

Filtrage Multicritères : Filtrage par dossiers (0 à n), par états (0 à n) ou par statut "En cours".

Édition : Modification du titre, de la description et de la date d'échéance directement depuis la carte de la tâche.

Gestion des Dossiers (Mode Dossiers)
CRUD Dossiers : Passage en mode Dossiers pour visualiser, créer ou supprimer des dossiers thématiques.

Personnalisation : Chaque dossier possède un intitulé, une description, une couleur parmi 10 choix et un pictogramme optionnel.

Tableaux de Bord et Statistiques
Compteurs en temps réel : Affichage du nombre total de tâches et du nombre de tâches restant à accomplir dans le Header.

Visualisation Graphique : Un camembert (Pie Chart) dynamique affiche la répartition exacte des tâches par état avec une légende détaillée.

 Critères d'Acceptation (Validation)
Tâches : Intitulé (min. 5 caract.), date d'échéance obligatoire, état obligatoire, liste d'équipiers gérée par virgules.

Dossiers : Intitulé (min. 3 caract.), couleur obligatoire.

Sécurité : Demande de confirmation systématique avant de réinitialiser l'application à zéro.

Données : Chargement automatique d'un backup JSON au démarrage.

 Installation et Lancement
Cloner le projet :

Bash
git clone [URL_DE_TON_REPO]
cd to-do-list
Installer les dépendances :

Bash
npm install
Lancer l'application :

Bash
npm start
L'application sera disponible sur http://localhost:3000.

 Structure du Projet
L'architecture suit une approche modulaire pour faciliter la maintenance :

src/components/ : Composants UI découpés par dossier avec leur propre fichier CSS (Header, Footer, TaskCard, Modals, etc.).

src/hooks/ : Logique métier centralisée dans le hook personnalisé useTodoApp.js.

src/utils/ : Fonctions pures pour le tri, le filtrage et la manipulation des données.

src/constants/ : Enums pour les états, les couleurs et les valeurs par défaut.

 Bibliothèques utilisées
React : Framework principal.

react-minimal-pie-chart : Pour la génération du graphique statistique dans le Header.

CSS Modules / Vanilla CSS : Pour le stylisation "Papeterie/Rétro".

Auteur : Sofia Ach - BUT2 Informatique
