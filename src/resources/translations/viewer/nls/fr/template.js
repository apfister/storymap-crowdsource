define({
  "loading": {
    "general": "Chargement",
    "initializing": "Chargement du récit",
    "map": "Chargement de la carte"
  },
  "common": {
    "or": "ou",
    "appNamePrepend": "Story Map",
    "appName": "Crowdsource",
    "buttons": {
      "save": "Enregistrer",
      "saving": "Enregistrement",
      "close": "Fermer"
    }
  },
  "banner": {
    "buttons": {
      "edit": "Mettre à jour le récit",
      "hide": "Masquer"
    }
  },
  "sharing": {
    "buttonTitleAttr": {
      "facebook": "Partager sur Facebook",
      "twitter": "Partager sur Twitter",
      "link": "Obtenir le code incorporé ou copier un lien court"
    },
    "link": {
      "title": "Partager",
      "copied": "Copié",
      "linkHeader": "Lien vers le récit",
      "linkHelper": "Partagez ce récit par e-mail ou sur les réseaux sociaux en cliquant sur le lien ci-après.",
      "copyShortLink": "Copier un lien court",
      "showShortLink": "Afficher un lien court",
      "copyFullLink": "Copier l’URL complète",
      "showFullLink": "Afficher le lien complet",
      "embedSizeHelper": "Taille (largeur/hauteur)",
      "embedCodeHeader": "Incorporer dans un site web",
      "embedCodeHelper": "Utilisez le code HTML suivant pour incorporer le récit dans une page web.",
      "copyEmbedCode": "Copier le code incorporé"
    }
  },
  "layouts": {
    "stacked": {
      "changeView": {
        "mapView": "Afficher la carte",
        "galleryView": "Afficher la galerie"
      }
    }
  },
  "mobile": {
    "bottomNav": {
      "home": "Accueil",
      "map": "Carte",
      "gallery": "Bibliothèque",
      "participate": "Participer"
    }
  },
  "forms": {
    "select": {
      "noDefaultSelection": "Choisissez une option..."
    },
    "photo": {
      "loading": "Chargement de la photo",
      "resizing": "Redimensionnement de la photo"
    }
  },
  "map": {
    "controls": {
      "homeButton": "Accéder à l'emplacement d’accueil"
    }
  },
  "selectedShares": {
    "enlargePhotoButton": "Agrandir",
    "review": {
      "title": "Vérifier l’élément",
      "options": {
        "approve": "Approuver",
        "reject": "Refuser"
      }
    }
  },
  "contribute": {
    "login": {
      "title": "Se connecter",
      "services": {
        "arcgis": "Se connecter avec ArcGIS",
        "facebook": "Se connecter avec Facebook",
        "google": "Se connecter avec Google",
        "guest": "Continuer comme invité"
      },
      "loginDescription": "Pour participer, utilisez l’une des options ci-dessus.",
      "loginDescriptionSingle": "Pour participer, utilisez l’option ci-dessus."
    },
    "form": {
      "photo": {
        "pickFile": "Cliquez ici pour choisir un fichier",
        "choosePhoto": "Télécharger une photo",
        "selectNew": "Utiliser une photo différente",
        "photoTooSmall": "Votre photo est trop petite. Le côté le plus petit doit mesurer au moins"
      },
      "location": {
        "gettingLocation": "Localisation",
        "locate": "Localiser mon emplacement",
        "findOnMap": "Rechercher sur la carte",
        "findOnMapTooltip": "Cliquez sur la carte ou faites glisser ce point pour préciser votre emplacement.",
        "saveLocation": "Enregistrer l’emplacement",
        "search": "Rechercher",
        "longitude": "Longitude",
        "latitude": "Latitude",
        "nullIsland": "Ilot Null",
        "photoLocation": "Voulez-vous utiliser l’emplacement où votre photo a été prise ?"
      },
      "termsAndConditions": {
        "buttonShow": "Afficher les conditions d'utilisation",
        "buttonHide": "Masquer les conditions d'utilisation"
      },
      "save": "Accepter les conditions et envoyer",
      "saving": "Envoi",
      "requiredWarning": "Champs requis",
      "changedCloseWarning": "Vouez-vous vraiment fermer ? Vos modifications seront perdues."
    },
    "messages": {
      "contributionShownAfterReview": {
        "title": "Merci de votre participation.",
        "body": "Votre contribution a été envoyée. Elle s’affichera sur la carte lorsqu’elle aura été vérifiée et approuvée. Vérifiez à nouveau ultérieurement.",
        "confirmBtn": "OK"
      },
      "contributionError": {
        "title": "Attention",
        "body": "Une erreur inconnue s’est produite et votre contribution n’a pas pu être enregistrée. Actualisez votre navigateur et essayez à nouveau.",
        "confirmBtn": "OK"
      }
    }
  },
  "validations": {
    "fix": "Corriger !",
    "basic": {
      "noValue": "Aucune valeur n’a été fournie",
      "required": "Un <% attribute %> est requis.",
      "regex": "L’<% attribute %> ne correspond pas au modèle requis.",
      "max": {
        "string": "L’<% attribute %> ne peut pas contenir plus de <% max %> caractères.",
        "number": "L’<% attribute %> doit être inférieur ou égal à <% max %>."
      },
      "acceptedTerms": "Vous devez accepter les conditions d’utilisation avant de partager.",
      "https": "L’<% attribute %> doit être chargé via une connexion sécurisée. L’URL doit commencer par « https:// » ou « // » pour que le chargement soit correct.",
      "imageUrl": "L’<% attribute %> doit être une URL d’image valide. Dans la plupart des cas, l’URL termine par une extension « .jpg », « .gif » ou « .png »."
    },
    "pattern": {
      "commaSeparated": "L’<% attribute %> ne peut pas contenir d’espaces.",
      "noNewLine": "L’<% attribute %> ne peut pas contenir de sauts de ligne."
    },
    "arcgis": {
      "basic": {
        "arcgisSupportedHtml": "L’<% attribute %> contient du HTML non pris en charge."
      },
      "location": {
        "notValid": "L’emplacement que vous avez saisi n’est pas valide, essayez à nouveau.",
        "noResults": "L’emplacement recherché est introuvable. Essayez à nouveau en étant aussi précis que possible."
      }
    }
  },
  "errors": {
    "actionsBtns": {
      "startFromScratch": "Commencer à créer un nouveau récit Crowdsource"
    },
    "loading": {
      "heading": "Attention",
      "invalidConfig": "Configuration non valide",
      "inaccessibleApp": "L’application de cartographie web n'existe pas ou est inaccessible.",
      "invalidConfigNoApp": "Aucun ID d’application de cartographie web n’est précisé dans le fichier index.html de l’application ou l’URL. Corrigez l’appid et essayez à nouveau.",
      "unspecifiedConfigOwner": "Le propriétaire autorisé n'est pas configuré.",
      "invalidConfigOwner": "Le propriétaire du récit n'est pas autorisé.",
      "createMap": "Impossible de créer la carte",
      "notAuthorizedApp": "Vous n'êtes pas autorisé à accéder à ce récit.",
      "notAuthorizedMap": "Vous n'êtes pas autorisé à accéder à la carte web dans ce récit.",
      "notAuthorizedLayers": "Vous n'êtes pas autorisé à afficher une ou plusieurs couches dans la carte web",
      "upgradeBrowser": "<a href=\"http://browsehappy.com/\" target=\"_blank\">Mettez à jour votre navigateur</a>.",
      "mapLoadingFail": "Une erreur s'est produite et la carte n'a pas été chargée correctement.",
      "appLoadingFail": "Une erreur s'est produite et l’application n'a pas été chargée correctement.",
      "crowdsourceLayerNotFound": "Une erreur s'est produite, le récit n’a pas trouvé ou chargé la couche de carte Crowdsource correctement."
    },
    "sharing": {
      "localhost": "Les URL avec « localhost » ne peuvent pas être partagées."
    },
    "selectedDisplay": {
      "noPhoto": "Erreur : la photo n'existe pas ou est inaccessible."
    }
  },
  "livingArchive": {
    "header": {
      "title": "La plus grande leçon du monde",
      "studentCount": "Élèves participants",
      "becomePart": "Faites l’histoire"
    },
    "intro": {
      "title": "Archive vivante de La plus grande leçon du monde",
      "subtitle": "Situez-vous sur la carte et participez à l'aventure qui unit toute une génération désireuse de changer le monde d'ici 2030",
      "foodText": "Projet 2017 des objectifs mondiaux pour l'alimentation - En savoir plus",
      "pledgeText": "Be Fearless Be Kind - En savoir plus",
      "explore": "Parcourir la carte"
    },
    "contribute": {
      "termsAndConditions": "Vous garantissez et déclarez (1) que vous détenez l'ensemble des droits, titres et propriétés concernant les photos que vous partagez sur ce site et que vous accordez à ESRI, à La plus grande leçon du monde et à leurs partenaires, ainsi qu'à leurs contractants, le droit non exclusif et libre de redevance d'utiliser, de copier, de stocker, de mettre en cache, d'héberger, de reproduire, d'afficher et de présenter publiquement, de redistribuer, de rediffuser et de retransmettre les photos partagées, ainsi que d’en tirer des œuvres dérivées, dans le cadre de ce service et (2) que le partage desdites photos et de toute donnée de géolocalisation associée ne risque en aucun cas de violer les droits de propriété, à la vie privée ou à l'image d'un tiers. Le partage de photos pouvant être considérées comme diffamatoires, obscènes, pornographiques, excessivement violentes ou susceptibles d'encourager des activités illicites est strictement interdit."
    },
    "form": {
      "title": "Épinglez votre plus grande leçon du monde sur la carte",
      "fields": {
        "Photo principale": {
          "label": "Photo de votre leçon",
          "placeholder": "Glisser-déposer",
          "flipGridPreText": "Partager une vidéo sur notre",
          "flipGridLinkText": "page Facebook"
        },
        "LocationName": {
          "label": "Localisation",
          "placeholder": "Indiquez votre emplacement",
        },
        "EDUCATOR_STUDENT": {
          "label": "Êtes-vous un éducateur ou un élève ?",
          "options": [
            {
              "label": "Éducateur", //Educator
              "value": "Educator"
            },
            {
              "label": "Élève", //Student
              "value": "Student"
            }
          ]
        },
        "THANKS": {
          "label": "Je participe à La plus grande leçon du monde grâce à..."
        },
        "LESSON_SDG_GOAL": {
          "label": "Notre leçon concernait",
          "options": [
            {
              "value": "All the Goals",
              "label": "L'ensemble des objectifs"
            },
            {
              "value": "Goal 1 - No Poverty",
              "label": "L'objectif 1 - Éradication de la pauvreté"
            },
            {
              "value": "Goal 2 - Zero Hunger",
              "label": "L'objectif 2 - Lutte contre la faim"
            },
            {
              "value": "Goal 3 - Good Health and Well-being",
              "label": "L'objectif 3 - Accès à la santé"
            },
            {
              "value": "Goal 4 - Quality Education",
              "label": "L'objectif 4 - Accès à une éducation de qualité"
            },
            {
              "value": "Goal 5 - Gender Equality",
              "label": "L'objectif 5 - Égalité entre les sexes"
            },
            {
              "value": "Goal 6 - Clean Water and Sanitation",
              "label": "L'objectif 6 - Accès à l'eau salubre et à l'assainissement"
            },
            {
              "value": "Goal 7 - Affordable and Clean Energy",
              "label": "L'objectif 7 - Recours aux énergies renouvelables"
            },
            {
              "value": "Goal 8 - Decent Jobs and Economic Growth",
              "label": "L'objectif 8 - Accès à des emplois décents"
            },
            {
              "value": "Goal 9 - Industry, Innovation and Infrastructure",
              "label": "L'objectif 9 - Innovation et infrastructures"
            },
            {
              "value": "Goal 10 - Reduced Inequalities",
              "label": "L'objectif 10 - Réduction des inégalités"
            },
            {
              "value": "Goal 11 - Sustainable Cities and Communities",
              "label": "L'objectif 11 - Villes et communautés durables"
            },
            {
              "value": "Goal 12 - Responsible Consumption and Production",
              "label": "L'objectif 12 - Consommation et production responsables"
            },
            {
              "value": "Goal 13 - Climate Action",
              "label": "L'objectif 13 - Mesures relatives à la lutte contre les changements climatiques"
            },
            {
              "value": "Goal 14 - Life Below Water",
              "label": "L'objectif 14 - Vie aquatique"
            },
            {
              "value": "Goal 15 - Life on Land",
              "label": "L'objectif 15 - Vie terrestre"
            },
            {
              "value": "Goal 16 - Peace, Justice, and Strong Institutions",
              "label": "L'objectif 16 - Paix, justice et institutions efficaces"
            },
            {
              "value": "Goal 17 - Partnerships for the Goals",
              "label": "L'objectif 17 - Partenariats pour la réalisation des objectifs"
            }
          ]
        },
        "OPEN_INPUT_SHARE": {
          "label": "J'aimerais partager",
          "placeholder": "Partagez un élément concernant votre leçon : les mots d'un élève, une idée, un résultat, un engagement..."
        },
        "OPEN_INPUT_CONNECT_TWITTER": {
          "label": "J'aimerais entrer en contact avec d'autres éducateurs qui enseignent les ODD. Mon identifiant Twitter est",
          "placeholder": "@nom_d'utilisateur"
        },
        "FOOD_PROJECT_SCORE": {
          "label": "J'ai participé au projet des objectifs mondiaux pour l'alimentation et j'ai obtenu un score de"
        },
        "EDUCATOR_ROLE": {
          "label": "Quel est votre rôle en tant qu'éducateur ?",
          "options": [
            {"label": "Éducateur professionnel", "value": "Professional Educator" }, //Professional Educator
            {"label": "Animateur d'un groupe de jeunes", "value": "Youth Group Leader" }, //Youth Group Leader
            {"label": "Jeune (pair éducateur)", "value": "Young Person (Peer Educator" }, //Young Person (Peer Educator)
            {"label": "Volontaire de la société civile", "value": "Civil Society Volunteer" }, //Civil Society Volunteer
            {"label": "Volontaire du secteur privé", "value": "Business Employee Volunteer" }, //Business Employee Volunteer
            {"label": "Autre", "value": "Other" } //Other
          ]
        },
        "EDUCATOR_NUM_STUDENTS": {
          "label": "À combien d'élèves avez-vous fait découvrir les objectifs?"
        },
        "EDUCATOR_CLASS_AGE_RANGE": {
          "label": "Sélectionnez votre tranche d'âge"
        },
        "STUDENT_AGE_RANGE": {
          "label": "Sélectionnez votre groupe d'âge"
        },
        "STUDENT_INDIVIDUAL_CLASS": {
          "headerLabel":  "En tant qu'élève, agissez-vous",
          "studentClassAgeRangeLabel": "Sélectionnez votre tranche d'âge",
          "options": [
            {"label": "À titre personnel",
              "value": "An Individual"}, //An Individual
            {"label": "Au nom d’une classe, d’une école ou d’un groupe de",
              "value": "Representing a Class, School, or Group of"} //Representing a Class, School, or Group of
          ]
        }
      }
    }
  }
});
