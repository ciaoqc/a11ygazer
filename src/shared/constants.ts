import type { TWcagCriteria, TWcagCritera } from './types'

// TODO: Tags par défaut?
// [{ value, label, icon, color }]

// TODO: Ménage?
export const wcagCritera: TWcagCriteria[] = [
  { version: '2.0', value: '1.1.1', label: '1.1.1 Contenu non textuel', level: 'A' },
  { version: '2.0', value: '1.2.1', label: '1.2.1 Contenus seulement audio et seulement vidéo (pré-enregistrés)', level: 'A' },
  { version: '2.0', value: '1.2.2', label: '1.2.2 Sous-titres (pré-enregistrés)', level: 'A' },
  { version: '2.0', value: '1.2.3', label: '1.2.3 Audio-description ou version de remplacement pour un média temporel (pré-enregistré)', level: 'A' },
  { version: '2.0', value: '1.2.4', label: '1.2.4 Sous-titres (en direct)', level: 'AA' },
  { version: '2.0', value: '1.2.5', label: '1.2.5 Audio-description (pré-enregistrée)', level: 'AA' },
  { version: '2.0', value: '1.2.6', label: '1.2.6 Langue des signes (pré-enregistrée)', level: 'AAA' },
  { version: '2.0', value: '1.2.7', label: '1.2.7 Audio-description étendue (pré-enregistrée)', level: 'AAA' },
  { version: '2.0', value: '1.2.8', label: '1.2.8 Version de remplacement pour un média temporel (pré-enregistrée)', level: 'AAA' },
  { version: '2.0', value: '1.2.9', label: '1.2.9 Seulement audio (en direct)', level: 'AAA' },
  { version: '2.0', value: '1.3.1', label: '1.3.1 Information et relations', level: 'A' },
  { version: '2.0', value: '1.3.2', label: '1.3.2 Ordre séquentiel logique', level: 'A' },
  { version: '2.0', value: '1.3.3', label: '1.3.3 Caractéristiques sensorielles', level: 'A' },
  { version: '2.0', value: '1.3.4', label: '1.3.4 Orientation', level: 'AA' },
  { version: '2.0', value: '1.3.5', label: '1.3.5 Identifier la finalité de la saisie', level: 'AA' },
  { version: '2.0', value: '1.3.6', label: '1.3.6 Identifier la fonction', level: 'AAA' },
  { version: '2.0', value: '1.4.1', label: '1.4.1 Utilisation de la couleur', level: 'A' },
  { version: '2.0', value: '1.4.2', label: '1.4.2 Contrôle du son', level: 'A' },
  { version: '2.0', value: '1.4.3', label: '1.4.3 Contraste (minimum)', level: 'AA' },
  { version: '2.0', value: '1.4.4', label: '1.4.4 Redimensionnement du texte', level: 'AA' },
  { version: '2.0', value: '1.4.5', label: '1.4.5 Texte sous forme d’image', level: 'AA' },
  { version: '2.0', value: '1.4.6', label: '1.4.6 Contraste (amélioré)', level: 'AAA' },
  { version: '2.0', value: '1.4.7', label: '1.4.7 Arrière-plan sonore de faible volume ou absent', level: 'AAA' },
  { version: '2.0', value: '1.4.8', label: '1.4.8 Présentation visuelle', level: 'AAA' },
  { version: '2.0', value: '1.4.9', label: '1.4.9 Texte sous forme d’image (sans exception)', level: 'AAA' },
  { version: '2.0', value: '1.4.10', label: '1.4.10 Redistribution', level: 'AA' },
  { version: '2.0', value: '1.4.11', label: '1.4.11 Contraste du contenu non textuel', level: 'AA' },
  { version: '2.0', value: '1.4.12', label: '1.4.12 Espacement du texte', level: 'AA' },
  { version: '2.0', value: '1.4.13', label: '1.4.13 Contenu au survol ou au focus', level: 'AA' },
  { version: '2.0', value: '2.1.1', label: '2.1.1 Clavier', level: 'A' },
  { version: '2.0', value: '2.1.2', label: '2.1.2 Pas de piège au clavier', level: 'A' },
  { version: '2.0', value: '2.1.3', label: '2.1.3 Clavier (pas d’exception)', level: 'AAA' },
  { version: '2.0', value: '2.1.4', label: '2.1.4 Raccourcis clavier utilisant des caractères', level: 'A' },
  { version: '2.0', value: '2.2.1', label: '2.2.1 Réglage du délai', level: 'A' },
  { version: '2.0', value: '2.2.2', label: '2.2.2 Mettre en pause, arrêter, masquer', level: 'A' },
  { version: '2.0', value: '2.2.3', label: '2.2.3 Pas de délai d’exécution', level: 'AAA' },
  { version: '2.0', value: '2.2.4', label: '2.2.4 Interruptions', level: 'AAA' },
  { version: '2.0', value: '2.2.5', label: '2.2.5 Nouvelle authentification', level: 'AAA' },
  { version: '2.0', value: '2.2.6', label: '2.2.6 Délais d’expiration', level: 'AAA' },
  { version: '2.0', value: '2.3.1', label: '2.3.1 Pas plus de trois flashs ou sous le seuil critique', level: 'A' },
  { version: '2.0', value: '2.3.2', label: '2.3.2 Trois flashs', level: 'AAA' },
  { version: '2.0', value: '2.3.3', label: '2.3.3 Animation résultant d’interactions', level: 'AAA' },
  { version: '2.0', value: '2.4.1', label: '2.4.1 Contourner des blocs', level: 'A' },
  { version: '2.0', value: '2.4.2', label: '2.4.2 Titre de page', level: 'A' },
  { version: '2.0', value: '2.4.3', label: '2.4.3 Parcours du focus', level: 'A' },
  { version: '2.0', value: '2.4.4', label: '2.4.4 Fonction du lien (selon le contexte)', level: 'A' },
  { version: '2.0', value: '2.4.5', label: '2.4.5 Accès multiples', level: 'AA' },
  { version: '2.0', value: '2.4.6', label: '2.4.6 En-têtes et étiquettes', level: 'AA' },
  { version: '2.0', value: '2.4.7', label: '2.4.7 Visibilité du focus', level: 'AA' },
  { version: '2.0', value: '2.4.8', label: '2.4.8 Localisation', level: 'AAA' },
  { version: '2.0', value: '2.4.9', label: '2.4.9 Fonction du lien (lien uniquement)', level: 'AAA' },
  { version: '2.0', value: '2.4.10', label: '2.4.10 En-têtes de section', level: 'AAA' },
  { version: '2.0', value: '2.5.1', label: '2.5.1 Gestes pour le contrôle du pointeur', level: 'A' },
  { version: '2.0', value: '2.5.2', label: '2.5.2 Annulation de l’action du pointeur', level: 'A' },
  { version: '2.0', value: '2.5.3', label: '2.5.3 Étiquette dans le nom', level: 'A' },
  { version: '2.0', value: '2.5.4', label: '2.5.4 Activation par le mouvement', level: 'A' },
  { version: '2.0', value: '2.5.5', label: '2.5.5 Taille de la cible', level: 'AAA' },
  { version: '2.0', value: '2.5.6', label: '2.5.6 Modalités d’entrées concurrentes', level: 'AAA' },
  { version: '2.0', value: '3.1.1', label: '3.1.1 Langue de la page', level: 'A' },
  { version: '2.0', value: '3.1.2', label: '3.1.2 Langue d’un passage', level: 'AA' },
  { version: '2.0', value: '3.1.3', label: '3.1.3 Mots rares', level: 'AAA' },
  { version: '2.0', value: '3.1.4', label: '3.1.4 Abréviations', level: 'AAA' },
  { version: '2.0', value: '3.1.5', label: '3.1.5 Niveau de lecture', level: 'AAA' },
  { version: '2.0', value: '3.1.6', label: '3.1.6 Prononciation', level: 'AAA' },
  { version: '2.0', value: '3.2.1', label: '3.2.1 Au focus', level: 'A' },
  { version: '2.0', value: '3.2.2', label: '3.2.2 À la saisie', level: 'A' },
  { version: '2.0', value: '3.2.3', label: '3.2.3 Navigation cohérente', level: 'AA' },
  { version: '2.0', value: '3.2.4', label: '3.2.4 Identification cohérente', level: 'AA' },
  { version: '2.0', value: '3.2.5', label: '3.2.5 Changement à la demande', level: 'AAA' },
  { version: '2.0', value: '3.3.1', label: '3.3.1 Identification des erreurs', level: 'A' },
  { version: '2.0', value: '3.3.2', label: '3.3.2 Étiquettes ou instructions', level: 'A' },
  { version: '2.0', value: '3.3.3', label: '3.3.3 Suggestion après une erreur', level: 'AA' },
  { version: '2.0', value: '3.3.4', label: '3.3.4 Prévention des erreurs (juridiques, financières, de données)', level: 'AA' },
  { version: '2.0', value: '3.3.5', label: '3.3.5 Aide', level: 'AAA' },
  { version: '2.0', value: '3.3.6', label: '3.3.6 Prévention des erreurs (toutes)', level: 'AAA' },
  { version: '2.0', value: '4.1.1', label: '4.1.1 Analyse syntaxique', level: 'A' },
  { version: '2.0', value: '4.1.2', label: '4.1.2 Nom, rôle et valeur', level: 'A' },
  { version: '2.0', value: '4.1.3', label: '4.1.3 Messages d’état', level: 'AA' },
]

export const CriteraById: Record<string, TWcagCritera> = {
  '1.1.1': {
    version: '2.0',
    label: '1.1.1 Contenu non textuel',
    level: 'A'
  },
  '1.2.1': {
    version: '2.0',
    label: '1.2.1 Contenus seulement audio et seulement vidéo (pré-enregistrés)',
    level: 'A'
  },
  '1.2.2': {
    version: '2.0',
    label: '1.2.2 Sous-titres (pré-enregistrés)',
    level: 'A'
  },
  '1.2.3': {
    version: '2.0',
    label: '1.2.3 Audio-description ou version de remplacement pour un média temporel (pré-enregistré)',
    level: 'A'
  },
  '1.2.4': {
    version: '2.0',
    label: '1.2.4 Sous-titres (en direct)',
    level: 'AA'
  },
  '1.2.5': {
    version: '2.0',
    label: '1.2.5 Audio-description (pré-enregistrée)',
    level: 'AA'
  },
  '1.2.6': {
    version: '2.0',
    label: '1.2.6 Langue des signes (pré-enregistrée)',
    level: 'AAA'
  },
  '1.2.7': {
    version: '2.0',
    label: '1.2.7 Audio-description étendue (pré-enregistrée)',
    level: 'AAA'
  },
  '1.2.8': {
    version: '2.0',
    label: '1.2.8 Version de remplacement pour un média temporel (pré-enregistrée)',
    level: 'AAA'
  },
  '1.2.9': {
    version: '2.0',
    label: '1.2.9 Seulement audio (en direct)',
    level: 'AAA'
  },
  '1.3.1': {
    version: '2.0',
    label: '1.3.1 Information et relations',
    level: 'A'
  },
  '1.3.2': {
    version: '2.0',
    label: '1.3.2 Ordre séquentiel logique',
    level: 'A'
  },
  '1.3.3': {
    version: '2.0',
    label: '1.3.3 Caractéristiques sensorielles',
    level: 'A'
  },
  '1.3.4': {
    version: '2.0',
    label: '1.3.4 Orientation',
    level: 'AA'
  },
  '1.3.5': {
    version: '2.0',
    label: '1.3.5 Identifier la finalité de la saisie',
    level: 'AA'
  },
  '1.3.6': {
    version: '2.0',
    label: '1.3.6 Identifier la fonction',
    level: 'AAA'
  },
  '1.4.1': {
    version: '2.0',
    label: '1.4.1 Utilisation de la couleur',
    level: 'A'
  },
  '1.4.2': {
    version: '2.0',
    label: '1.4.2 Contrôle du son',
    level: 'A'
  },
  '1.4.3': {
    version: '2.0',
    label: '1.4.3 Contraste (minimum)',
    level: 'AA'
  },
  '1.4.4': {
    version: '2.0',
    label: '1.4.4 Redimensionnement du texte',
    level: 'AA'
  },
  '1.4.5': {
    version: '2.0',
    label: '1.4.5 Texte sous forme d’image',
    level: 'AA'
  },
  '1.4.6': {
    version: '2.0',
    label: '1.4.6 Contraste (amélioré)',
    level: 'AAA'
  },
  '1.4.7': {
    version: '2.0',
    label: '1.4.7 Arrière-plan sonore de faible volume ou absent',
    level: 'AAA'
  },
  '1.4.8': {
    version: '2.0',
    label: '1.4.8 Présentation visuelle',
    level: 'AAA'
  },
  '1.4.9': {
    version: '2.0',
    label: '1.4.9 Texte sous forme d’image (sans exception)',
    level: 'AAA'
  },
  '1.4.10': {
    version: '2.0',
    label: '1.4.10 Redistribution',
    level: 'AA'
  },
  '1.4.11': {
    version: '2.0',
    label: '1.4.11 Contraste du contenu non textuel',
    level: 'AA'
  },
  '1.4.12': {
    version: '2.0',
    label: '1.4.12 Espacement du texte',
    level: 'AA'
  },
  '1.4.13': {
    version: '2.0',
    label: '1.4.13 Contenu au survol ou au focus',
    level: 'AA'
  },
  '2.1.1': {
    version: '2.0',
    label: '2.1.1 Clavier',
    level: 'A'
  },
  '2.1.2': {
    version: '2.0',
    label: '2.1.2 Pas de piège au clavier',
    level: 'A'
  },
  '2.1.3': {
    version: '2.0',
    label: '2.1.3 Clavier (pas d’exception)',
    level: 'AAA'
  },
  '2.1.4': {
    version: '2.0',
    label: '2.1.4 Raccourcis clavier utilisant des caractères',
    level: 'A'
  },
  '2.2.1': {
    version: '2.0',
    label: '2.2.1 Réglage du délai',
    level: 'A'
  },
  '2.2.2': {
    version: '2.0',
    label: '2.2.2 Mettre en pause, arrêter, masquer',
    level: 'A'
  },
  '2.2.3': {
    version: '2.0',
    label: '2.2.3 Pas de délai d’exécution',
    level: 'AAA'
  },
  '2.2.4': {
    version: '2.0',
    label: '2.2.4 Interruptions',
    level: 'AAA'
  },
  '2.2.5': {
    version: '2.0',
    label: '2.2.5 Nouvelle authentification',
    level: 'AAA'
  },
  '2.2.6': {
    version: '2.0',
    label: '2.2.6 Délais d’expiration',
    level: 'AAA'
  },
  '2.3.1': {
    version: '2.0',
    label: '2.3.1 Pas plus de trois flashs ou sous le seuil critique',
    level: 'A'
  },
  '2.3.2': {
    version: '2.0',
    label: '2.3.2 Trois flashs',
    level: 'AAA'
  },
  '2.3.3': {
    version: '2.0',
    label: '2.3.3 Animation résultant d’interactions',
    level: 'AAA'
  },
  '2.4.1': {
    version: '2.0',
    label: '2.4.1 Contourner des blocs',
    level: 'A'
  },
  '2.4.2': {
    version: '2.0',
    label: '2.4.2 Titre de page',
    level: 'A'
  },
  '2.4.3': {
    version: '2.0',
    label: '2.4.3 Parcours du focus',
    level: 'A'
  },
  '2.4.4': {
    version: '2.0',
    label: '2.4.4 Fonction du lien (selon le contexte)',
    level: 'A'
  },
  '2.4.5': {
    version: '2.0',
    label: '2.4.5 Accès multiples',
    level: 'AA'
  },
  '2.4.6': {
    version: '2.0',
    label: '2.4.6 En-têtes et étiquettes',
    level: 'AA'
  },
  '2.4.7': {
    version: '2.0',
    label: '2.4.7 Visibilité du focus',
    level: 'AA'
  },
  '2.4.8': {
    version: '2.0',
    label: '2.4.8 Localisation',
    level: 'AAA'
  },
  '2.4.9': {
    version: '2.0',
    label: '2.4.9 Fonction du lien (lien uniquement)',
    level: 'AAA'
  },
  '2.4.10': {
    version: '2.0',
    label: '2.4.10 En-têtes de section',
    level: 'AAA'
  },
  '2.5.1': {
    version: '2.0',
    label: '2.5.1 Gestes pour le contrôle du pointeur',
    level: 'A'
  },
  '2.5.2': {
    version: '2.0',
    label: '2.5.2 Annulation de l’action du pointeur',
    level: 'A'
  },
  '2.5.3': {
    version: '2.0',
    label: '2.5.3 Étiquette dans le nom',
    level: 'A'
  },
  '2.5.4': {
    version: '2.0',
    label: '2.5.4 Activation par le mouvement',
    level: 'A'
  },
  '2.5.5': {
    version: '2.0',
    label: '2.5.5 Taille de la cible',
    level: 'AAA'
  },
  '2.5.6': {
    version: '2.0',
    label: '2.5.6 Modalités d’entrées concurrentes',
    level: 'AAA'
  },
  '3.1.1': {
    version: '2.0',
    label: '3.1.1 Langue de la page',
    level: 'A'
  },
  '3.1.2': {
    version: '2.0',
    label: '3.1.2 Langue d’un passage',
    level: 'AA'
  },
  '3.1.3': {
    version: '2.0',
    label: '3.1.3 Mots rares',
    level: 'AAA'
  },
  '3.1.4': {
    version: '2.0',
    label: '3.1.4 Abréviations',
    level: 'AAA'
  },
  '3.1.5': {
    version: '2.0',
    label: '3.1.5 Niveau de lecture',
    level: 'AAA'
  },
  '3.1.6': {
    version: '2.0',
    label: '3.1.6 Prononciation',
    level: 'AAA'
  },
  '3.2.1': {
    version: '2.0',
    label: '3.2.1 Au focus',
    level: 'A'
  },
  '3.2.2': {
    version: '2.0',
    label: '3.2.2 À la saisie',
    level: 'A'
  },
  '3.2.3': {
    version: '2.0',
    label: '3.2.3 Navigation cohérente',
    level: 'AA'
  },
  '3.2.4': {
    version: '2.0',
    label: '3.2.4 Identification cohérente',
    level: 'AA'
  },
  '3.2.5': {
    version: '2.0',
    label: '3.2.5 Changement à la demande',
    level: 'AAA'
  },
  '3.3.1': {
    version: '2.0',
    label: '3.3.1 Identification des erreurs',
    level: 'A'
  },
  '3.3.2': {
    version: '2.0',
    label: '3.3.2 Étiquettes ou instructions',
    level: 'A'
  },
  '3.3.3': {
    version: '2.0',
    label: '3.3.3 Suggestion après une erreur',
    level: 'AA'
  },
  '3.3.4': {
    version: '2.0',
    label: '3.3.4 Prévention des erreurs (juridiques, financières, de données)',
    level: 'AA'
  },
  '3.3.5': {
    version: '2.0',
    label: '3.3.5 Aide',
    level: 'AAA'
  },
  '3.3.6': {
    version: '2.0',
    label: '3.3.6 Prévention des erreurs (toutes)',
    level: 'AAA'
  },
  '4.1.1': {
    version: '2.0',
    label: '4.1.1 Analyse syntaxique',
    level: 'A'
  },
  '4.1.2': {
    version: '2.0',
    label: '4.1.2 Nom, rôle et valeur',
    level: 'A'
  },
  '4.1.3': {
    version: '2.0',
    label: '4.1.3 Messages d’état',
    level: 'AA'
  },
}

