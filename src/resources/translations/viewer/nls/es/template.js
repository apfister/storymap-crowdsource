define({
  "loading": {
    "general": "Cargando",
    "initializing": "Cargando historia",
    "map": "Cargando mapa"
  },
  "common": {
    "or": "o",
    "appNamePrepend": "Story Map",
    "appName": "Crowdsource",
    "buttons": {
      "save": "Guardar",
      "saving": "Guardando",
      "close": "Cerrar"
    }
  },
  "banner": {
    "buttons": {
      "edit": "Editar historia",
      "hide": "Ocultar"
    }
  },
  "sharing": {
    "buttonTitleAttr": {
      "facebook": "Compartir en Facebook",
      "twitter": "Compartir en Twitter",
      "link": "Obtener código integrado o copiar un vínculo corto"
    },
    "link": {
      "title": "Compartir",
      "copied": "Copiado",
      "linkHeader": "Vínculo a la historia",
      "linkHelper": "Comparta esta historia por correo electrónico o en las redes sociales con el vínculo siguiente.",
      "copyShortLink": "Copiar vínculo corto",
      "showShortLink": "Mostrar vínculo corto",
      "copyFullLink": "Copiar dirección URL completa",
      "showFullLink": "Mostrar vínculo completo",
      "embedSizeHelper": "Tamaño (ancho/alto)",
      "embedCodeHeader": "Integrar en el sitio web",
      "embedCodeHelper": "Use el siguiente código HTML para integrar la historia en una página web.",
      "copyEmbedCode": "Copiar código integrado"
    }
  },
  "layouts": {
    "stacked": {
      "changeView": {
        "mapView": "Ver mapa",
        "galleryView": "Ver galería"
      }
    }
  },
  "mobile": {
    "bottomNav": {
      "home": "Inicio",
      "map": "Mapa",
      "gallery": "Galería",
      "participate": "Participar"
    }
  },
  "forms": {
    "select": {
      "noDefaultSelection": "Elija una opción..."
    },
    "photo": {
      "loading": "Cargando foto",
      "resizing": "Ajustando tamaño de foto"
    }
  },
  "map": {
    "controls": {
      "homeButton": "Ir a la ubicación de inicio"
    }
  },
  "selectedShares": {
    "enlargePhotoButton": "Ver más grande",
    "review": {
      "title": "Revisar elemento",
      "options": {
        "approve": "Aprobar",
        "reject": "Rechazar"
      }
    }
  },
  "contribute": {
    "login": {
      "title": "Iniciar sesión",
      "services": {
        "arcgis": "Iniciar sesión con ArcGIS",
        "facebook": "Iniciar sesión con Facebook",
        "google": "Iniciar sesión con Google",
        "guest": "Continuar como invitado"
      },
      "loginDescription": "Para participar, use una de las opciones anteriores.",
      "loginDescriptionSingle": "Para participar, use la opción anterior."
    },
    "form": {
      "photo": {
        "pickFile": "Haga clic para seleccionar un archivo",
        "choosePhoto": "Cargar una foto",
        "selectNew": "Usar una foto diferente",
        "photoTooSmall": "La foto es demasiado pequeña. El lado más pequeño debe tener al menos"
      },
      "location": {
        "gettingLocation": "Localizando",
        "locate": "Localizarme",
        "findOnMap": "Buscar en el mapa",
        "findOnMapTooltip": "Haga clic en el mapa o arrastre este punto para precisar su ubicación.",
        "saveLocation": "Guardar ubicación",
        "search": "Buscar",
        "longitude": "Longitud",
        "latitude": "Latitud",
        "nullIsland": "Null Island",
        "photoLocation": "¿Desea usar la ubicación en la que se tomó la foto?"
      },
      "termsAndConditions": {
        "buttonShow": "Mostrar términos y condiciones",
        "buttonHide": "Ocultar términos y condiciones"
      },
      "save": "Aceptar términos y enviar",
      "saving": "Enviando",
      "requiredWarning": "Campos requeridos",
      "changedCloseWarning": "¿Está seguro de que desea cerrar? Los cambios se perderán."
    },
    "messages": {
      "contributionShownAfterReview": {
        "title": "Gracias por participar.",
        "body": "Su contribución se ha enviado y aparecerá en el mapa cuando se haya revisado y aprobado. Vuelva a comprobarlo más tarde.",
        "confirmBtn": "Aceptar"
      },
      "contributionError": {
        "title": "Atención",
        "body": "Se ha producido un error desconocido y su error no se ha podido guardar. Actualice el navegador y vuelva a intentarlo.",
        "confirmBtn": "Aceptar"
      }
    }
  },
  "validations": {
    "fix": "Solucionar",
    "basic": {
      "noValue": "No se ha proporcionado ningún valor",
      "required": "Se necesita un <% attribute %>.",
      "regex": "El <% attribute %> no coincide con el patrón requerido.",
      "max": {
        "string": "El <% attribute %> no puede contener más de <% max %> caracteres.",
        "number": "El <% attribute %> debe ser menor o igual a <% max %>."
      },
      "acceptedTerms": "Debe aceptar los términos y condiciones antes de compartir.",
      "https": "El <% attribute %> se debe cargar a través de una conexión segura. La dirección URL debe empezar con \"https://\" o \"//\" para que se cargue correctamente.",
      "imageUrl": "El <% attribute %> debe ser una dirección URL de imagen válida. En la mayoría de los casos, la dirección URL terminará con una extensión \".jpg\", \".gif\", o \".png\"."
    },
    "pattern": {
      "commaSeparated": "El <% attribute %> no puede contener ningún espacio.",
      "noNewLine": "El <% attribute %> no puede contener saltos de línea"
    },
    "arcgis": {
      "basic": {
        "arcgisSupportedHtml": "El <% attribute %> contiene HTML no compatible."
      },
      "location": {
        "notValid": "La ubicación que ha introducido no es válida. Vuelva a intentarlo.",
        "noResults": "La ubicación que ha buscado no se puede encontrar. Vuelva a intentarlo y sea lo más concreto posible."
      }
    }
  },
  "errors": {
    "actionsBtns": {
      "startFromScratch": "Empezar a crear una nueva historia de Crowdsource"
    },
    "loading": {
      "heading": "Atención",
      "invalidConfig": "Configuración no válida",
      "inaccessibleApp": "La aplicación de representación cartográfica en la red no existe o es inaccesible.",
      "invalidConfigNoApp": "No se ha especificado un Id. válido de la aplicación de representación cartográfica en la red en el archivo index.html o en la dirección URL de la aplicación. Corrija el appid y vuelva a intentarlo.",
      "unspecifiedConfigOwner": "El propietario autorizado no se ha configurado.",
      "invalidConfigOwner": "El propietario de la historia no está autorizado.",
      "createMap": "No se puede crear el mapa",
      "notAuthorizedApp": "No tiene autorización para acceder a esta historia",
      "notAuthorizedMap": "No tiene autorización para acceder al mapa web de esta historia",
      "notAuthorizedLayers": "No tiene autorización para ver una o varias capas del mapa web",
      "upgradeBrowser": "<a href=\"http://browsehappy.com/\" target=\"_blank\">Actualice el navegador</a>.",
      "mapLoadingFail": "Se ha producido un error, el mapa no se ha cargado correctamente.",
      "appLoadingFail": "Se ha producido un error, la aplicación no se ha cargado correctamente.",
      "crowdsourceLayerNotFound": "Se ha producido un error, la historia no puede encontrar o cargar la capa de mapa de Crowdsource correctamente."
    },
    "sharing": {
      "localhost": "Las direcciones URL con \"localhost\" no se pueden compartir."
    },
    "selectedDisplay": {
      "noPhoto": "Error: la foto no existe o es inaccesible."
    }
  },
  "livingArchive": {
    "header": {
      "title": "La Lección más grande del mundo",
      "studentCount": "Participación de estudiantes",
      "becomePart": "Forme parte de la historia"
    },
    "intro": {
      "title": "Archivo vivo de La Lección más grande del mundo",
      "subtitle": "Sitúese en el mapa y forme parte de la historia de una generación que cambiará el mundo de aquí a 2030",
      "foodText": "Proyecto sobre alimentación de 2017 para lograr los Objetivos – obtener más información",
      "pledgeText": "Be Fearless Be Kind – obtener más información",
      "explore": "Explorar el mapa"
    },
    "contribute": {
      "termsAndConditions": "Garantiza 1) que es titular de todos los derechos sobre las fotografías que comparta en este sitio web y cede a ESRI, La Lección más grande del mundo y sus asociados, así como a sus contratistas, en condiciones no exclusivas y de exención de regalías, el derecho de utilizar, copiar, almacenar, copiar en caché, hospedar, reproducir, mostrar o representar públicamente, redistribuir y retransmitir las fotografías que comparta, así como crear obras derivadas de ellas, en el marco de este servicio; y 2) que, al transmitir fotografías y cualquier información asociada sobre geolocalización, se compromete a no vulnerar el derecho a la privacidad ni el derecho de propiedad o de publicidad de terceros. Queda estrictamente prohibido el uso de fotografías que puedan considerarse difamatorias, obscenas, pornográficas, excesivamente violentas, o que promuevan actividades ilícitas."
    },
    "form": {
      "title": "Sitúe en el mapa su Lección más grande del mundo",
      "fields": {
        "Foto principal": {
          "label": "Foto de su Lección",
          "placeholder": "Arrastrar y soltar",
          "flipGridPreText": "Para compartir un vídeo, súbalo a nuestra",
          "flipGridLinkText": "página de Facebook"
        },
        "LocationName": {
          "label": "Mi ubicación es",
          "placeholder": "Indique su ubicación"
        },
        "EDUCATOR_STUDENT": {
          "label": "¿Es usted educador o estudiante?",
          "options": [{
              "label": "Educador", //Educator
              "value": "Educator"
            },
            {
              "label": "Estudiante", //Student
              "value": "Student"
            }
          ]
        },
        "THANKS": {
          "label": "Participo en La Lección más grande del mundo gracias a"
        },
        "LESSON_SDG_GOAL": {
          "label": "El tema de nuestra Lección fue",
          "options": [{
              "value": "All the Goals",
              "label": "Todos los Objetivos"
            },
            {
              "value": "Goal 1 - No Poverty",
              "label": "Objetivo 1 - Fin de la pobreza"
            },
            {
              "value": "Goal 2 - Zero Hunger",
              "label": "Objetivo 2 - Hambre cero"
            },
            {
              "value": "Goal 3 - Good Health and Well-being",
              "label": "Objetivo 3 - Salud y bienestar"
            },
            {
              "value": "Goal 4 - Quality Education",
              "label": "Objetivo 4 - Educación de calidad"
            },
            {
              "value": "Goal 5 - Gender Equality",
              "label": "Objetivo 5 - Igualdad de género"
            },
            {
              "value": "Goal 6 - Clean Water and Sanitation",
              "label": "Objetivo 6 - Agua limpia y saneamiento"
            },
            {
              "value": "Goal 7 - Affordable and Clean Energy",
              "label": "Objetivo 7 - Energía asequible y no contaminante"
            },
            {
              "value": "Goal 8 - Decent Jobs and Economic Growth",
              "label": "Objetivo 8 - Trabajo decente y crecimiento económico"
            },
            {
              "value": "Goal 9 - Industry, Innovation and Infrastructure",
              "label": "Objetivo 9 - Industria, innovación e infraestructura"
            },
            {
              "value": "Goal 10 - Reduced Inequalities",
              "label": "Objetivo 10 - Reducción de las desigualdades"
            },
            {
              "value": "Goal 11 - Sustainable Cities and Communities",
              "label": "Objetivo 11 - Ciudades y comunidades sostenibles"
            },
            {
              "value": "Goal 12 - Responsible Consumption and Production",
              "label": "Objetivo 12 - Producción y consumo responsables"
            },
            {
              "value": "Goal 13 - Climate Action",
              "label": "Objetivo 13 - Acción por el clima"
            },
            {
              "value": "Goal 14 - Life Below Water",
              "label": "Objetivo 14 - Vida submarina"
            },
            {
              "value": "Goal 15 - Life on Land",
              "label": "Objetivo 15 - Vida de ecosistemas terrestres"
            },
            {
              "value": "Goal 16 - Peace, Justice, and Strong Institutions",
              "label": "Objetivo 16 - Paz, justicia e instituciones sólidas"
            },
            {
              "value": "Goal 17 - Partnerships for the Goals",
              "label": "Objetivo 17 - Alianzas para lograr los Objetivos"
            }
          ]
        },
        "OPEN_INPUT_SHARE": {
          "label": "Quisiera compartir",
          "placeholder": "Comparta algo sobre su Lección: la cita de un alumno, una idea, un resultado, un compromiso…"
        },
        "OPEN_INPUT_CONNECT_TWITTER": {
          "label": "Quisiera conectarme con otros educadores que están enseñando los ODS. Mi nombre de usuario en Twitter es",
          "placeholder": "@nombredeusuario"
        },
        "FOOD_PROJECT_SCORE": {
          "label": "Participé en el proyecto sobre alimentación de los Objetivos Mundiales y mi puntuación fue de"
        },
        "EDUCATOR_ROLE": {
          "label": "¿Cuál es su perfil como educador?",
          "options": [{
              "label": "Educador profesional",
              "value": "Professional Educator"
            }, //Professional Educator
            {
              "label": "Líder de un grupo de jóvenes",
              "value": "Youth Group Leader"
            }, //Youth Group Leader
            {
              "label": "Joven educador (educador entre compañeros)",
              "value": "Young Person (Peer Educator)"
            }, //Young Person (Peer Educator)
            {
              "label": "Voluntario de la sociedad civil",
              "value": "Civil Society Volunteer"
            }, //Civil Society Volunteer
            {
              "label": "Trabajador de empresa voluntario",
              "value": "Business Employee Volunteer"
            }, //Business Employee Volunteer
            {
              "label": "Otro",
              "value": "Other"
            } //Other
          ]
        },
        "EDUCATOR_NUM_STUDENTS": {
          "label": "¿Con cuántos estudiantes ha compartido los Objetivos?"
        },
        "EDUCATOR_CLASS_AGE_RANGE": {
          "label": "Seleccione el rango de edad de su clase"
        },
        "STUDENT_AGE_RANGE": {
          "label": "Seleccione su grupo de edad"
        },
        "STUDENT_INDIVIDUAL_CLASS": {
          "headerLabel": "¿Cuál es su perfil como estudiante?",
          "studentClassAgeRangeLabel": "Seleccione su rango de edad",
          "options": [{
              "label": "Estudiante particular",
              "value": "An Individual"
            }, //An Individual
            {
              "label": "Representante de una clase, escuela o grupo",
              "value": "Representing a Class, School, or Group of"
            } //Representing a Class, School, or Group of
          ]
        }
      }
    }
  }
});
