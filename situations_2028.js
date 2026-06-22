const SITUATIONS_2028 = [
  { id:'conversation_douce', titre:'Conversation douce', description:'Ouvrir, écouter, relancer, remercier.', interactions:['ouvrir_sujet_001','interet_001','reformulation_001','fin_echange_001'] },
  { id:'sujet_prudent', titre:'Sujet sensible avec tact', description:'Préparer le terrain, poser une question ouverte, laisser une sortie.', interactions:['ouvrir_sujet_002','maladresse_001','changer_sujet_001','desaccord_001'] },
  { id:'france_japon', titre:'Comparer France / Japon', description:'Comparer sans généraliser ni donner de leçon.', interactions:['culture_001','travail_002','ecologie_001','tourisme_001'] },
  {id: "famille_avec_tact", titre: "Parler famille sans indiscrétion", description: "Partir de soi, rester général, laisser une sortie, relancer doucement.", interactions: ["famille_006", "famille_009", "prudence_006", "famille_010", "famille_011"]},
  {id: "travail_rythme_vie", titre: "Travail et rythme de vie", description: "Comprendre le travail japonais sans cliché ni jugement.", interactions: ["travail_007", "travail_008", "travail_009", "travail_010", "travail_012"]},
  {id: "ecologie_climat_energie", titre: "Écologie, climat, énergie", description: "Parler climat, chaleur, tri, énergie et catastrophes avec prudence.", interactions: ["ecologie_006", "ecologie_007", "ecologie_009", "ecologie_008", "ecologie_010"]},
  {id: "actualite_sans_debat", titre: "Actualité sans débat frontal", description: "Demander le contexte, écouter, nuancer et éviter le débat politique.", interactions: ["actualite_006", "actualite_007", "actualite_008", "actualite_010", "nuancer_005"]},
  {id: "defis_japon_prudent", titre: "Grands défis du Japon", description: "Vieillissement, natalité, solitude, ruralité, tourisme, coût de la vie, égalité.", interactions: ["defis_japon_006", "defis_japon_007", "defis_japon_008", "defis_japon_009", "defis_japon_010", "defis_japon_011", "defis_japon_012"]},
{
  "id": "ouvrir_reparer_clore",
  "titre": "Ouvrir, réparer, clore",
  "description": "Parcours de sécurité conversationnelle : poser une question, vérifier, réparer une maladresse, changer de sujet.",
  "objectif": "Apprendre à garder une conversation chaleureuse même avec un japonais encore hésitant.",
  "interactions": [
    "ouvrir_sujet_101",
    "ouvrir_sujet_102",
    "comprendre_102",
    "prudence_101",
    "prudence_102",
    "clore_101",
    "clore_102"
  ]
},
{
  "id": "conversation_loisirs_gouts",
  "titre": "Loisirs et goûts personnels",
  "description": "Passer à une conversation légère : temps libre, goûts, recommandations, relance naturelle.",
  "objectif": "Créer un échange simple, vivant et non intrusif.",
  "interactions": [
    "loisirs_001",
    "loisirs_002",
    "cuisine_101",
    "reagir_101",
    "clore_102"
  ]
},
{
  "id": "travail_moderne",
  "titre": "Travail moderne",
  "description": "Parler de télétravail, fatigue, rythme de vie, sans juger ni généraliser.",
  "objectif": "Savoir poser des questions ouvertes sur le travail tout en restant attentionné.",
  "interactions": [
    "travail_101",
    "travail_102",
    "nuancer_101",
    "nuancer_102",
    "prudence_102"
  ]
},
{
  "id": "actualite_avec_distance",
  "titre": "Actualité avec distance",
  "description": "Comprendre comment un sujet est perçu au Japon sans lancer un débat frontal.",
  "objectif": "Rester modeste, curieux, et capable de sortir du sujet si besoin.",
  "interactions": [
    "actualite_101",
    "actualite_102",
    "nuancer_005",
    "nuancer_102",
    "clore_101"
  ]
},
{
  "id": "ecologie_quotidienne",
  "titre": "Écologie quotidienne",
  "description": "Parler climat, chaleur, énergie et gestes quotidiens sans ton militant ou accusateur.",
  "objectif": "Relier les grands sujets écologiques à la vie quotidienne.",
  "interactions": [
    "ecologie_101",
    "ecologie_102",
    "comprendre_102",
    "reagir_101",
    "clore_102"
  ]
},
{
  "id": "defis_japon_delicats",
  "titre": "Défis délicats du Japon",
  "description": "Aborder ruralité, solitude, tourisme et lien social avec beaucoup de tact.",
  "objectif": "Savoir parler de sujets sérieux sans être intrusif ni brutal.",
  "interactions": [
    "defis_japon_101",
    "defis_japon_102",
    "defis_japon_103",
    "prudence_101",
    "prudence_102",
    "clore_101"
  ]
}
];
