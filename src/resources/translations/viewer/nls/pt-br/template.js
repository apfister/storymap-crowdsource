define({
  "loading": {
    "general": "Carregando",
    "initializing": "Carregando história",
    "map": "Carregando mapa"
  },
  "common": {
    "or": "ou",
    "appNamePrepend": "Mapa Histórico",
    "appName": "Colaboração Coletiva",
    "buttons": {
      "save": "Salvar",
      "saving": "Salvando",
      "close": "Fechar"
    }
  },
  "banner": {
    "buttons": {
      "edit": "Editar História",
      "hide": "Ocultar"
    }
  },
  "sharing": {
    "buttonTitleAttr": {
      "facebook": "Compartilhar no Facebook",
      "twitter": "Compartilhar no Twitter",
      "link": "Obter código embutido ou copiar um link curto"
    },
    "link": {
      "title": "Compartilhar",
      "copied": "Copiado",
      "linkHeader": "Link para história",
      "linkHelper": "Compartilhe esta história por e-mail ou mídia social com o link abaixo.",
      "copyShortLink": "Copiar link curto",
      "showShortLink": "Mostrar link curto",
      "copyFullLink": "Copiar URL inteira",
      "showFullLink": "Mostrar link inteiro",
      "embedSizeHelper": "Tamanho (largura/altura)",
      "embedCodeHeader": "Anexar no site da web",
      "embedCodeHelper": "Utilize o código de HTML seguinte para embutir a história em uma página da web.",
      "copyEmbedCode": "Copiar código embutido"
    }
  },
  "layouts": {
    "stacked": {
      "changeView": {
        "mapView": "Visualizar Mapa",
        "galleryView": "Visualizar Galeria"
      }
    }
  },
  "mobile": {
    "bottomNav": {
      "home": "Página Inicial",
      "map": "Mapa",
      "gallery": "Galeria",
      "participate": "Participar"
    }
  },
  "forms": {
    "select": {
      "noDefaultSelection": "Escolha uma opção..."
    },
    "photo": {
      "loading": "Carregando Fotografia",
      "resizing": "Redimensionando Fotografia"
    }
  },
  "map": {
    "controls": {
      "homeButton": "Ir para local da página inicial"
    }
  },
  "selectedShares": {
    "enlargePhotoButton": "Visualizar Maior",
    "review": {
      "title": "Revisar Item",
      "options": {
        "approve": "Aprovar",
        "reject": "Rejeitar"
      }
    }
  },
  "contribute": {
    "login": {
      "title": "Entrar",
      "services": {
        "arcgis": "Entrar com ArcGIS",
        "facebook": "Entrar com Facebook",
        "google": "Entrar com Google",
        "guest": "Continuar como Convidado"
      },
      "loginDescription": "Para participar, utilize uma das opções acima.",
      "loginDescriptionSingle": "Para participar, utilize a opção acima."
    },
    "form": {
      "photo": {
        "pickFile": "Clique para selecionar um arquivo",
        "choosePhoto": "Carregar uma Fotografia",
        "selectNew": "Utilize uma fotografia diferente",
        "photoTooSmall": "Sua fotografia é muito pequena. O lado menor deve ser pelo menos"
      },
      "location": {
        "gettingLocation": "Localizando",
        "locate": "Localize-Me",
        "findOnMap": "Localizar no Mapa",
        "findOnMapTooltip": "Clique no mapa ou arraste este ponto para refinar sua localização.",
        "saveLocation": "Salvar Localização",
        "search": "Pesquisar",
        "longitude": "Longitude",
        "latitude": "Latitude",
        "nullIsland": "Ilha Nula",
        "photoLocation": "Você deseja utilizar o local onde a foto foi tirada?"
      },
      "termsAndConditions": {
        "buttonShow": "Mostrar termos e condições",
        "buttonHide": "Ocultar termos e condições"
      },
      "save": "Aceitar Termos e Enviar",
      "saving": "Enviando",
      "requiredWarning": "Campos Exigidos",
      "changedCloseWarning": "Tem certeza que deseja cancelar? Suas alterações serão perdidas."
    },
    "messages": {
      "contributionShownAfterReview": {
        "title": "Obrigado por participar.",
        "body": "Sua contribuição foi enviada e aparecerá no mapa após de ter sido revisada e aprovada. Volte mais tarde.",
        "confirmBtn": "OK"
      },
      "contributionError": {
        "title": "Atenção",
        "body": "Ocorreu um erro desconhecido e não foi possível salvar a sua contribuição. Atualize seu navegador e tente novamente.",
        "confirmBtn": "OK"
      }
    }
  },
  "validations": {
    "fix": "Corrija!",
    "basic": {
      "noValue": "Nenhum valor foi fornecido",
      "required": "Um <% atributo %> é exigido.",
      "regex": "O <% atributo %> não corresponde ao padrão exigido.",
      "max": {
        "string": "O <% atributo %> não pode conter mais que <% máx %> caracteres.",
        "number": "O <% atributo %> deve ser menor ou igual ao <% máx %>."
      },
      "acceptedTerms": "Você deve aceitar os termos e condições antes de compartilhar.",
      "https": "O <% atributo %> deve ser carregado em uma conexão segura. A URL deve começar com \"https://\" ou \"//\" para carregar corretamente.",
      "imageUrl": "O <% atributo %> deve ser uma URL de imagem válida. Na maioria dos casos, a URL terminará com a extensão \".jpg\", \".gif\". ou \".png\"."
    },
    "pattern": {
      "commaSeparated": "O <% atributo %> não pode conter nenhum espaço.",
      "noNewLine": "O <% atributo %> não pode conter quebras de linha."
    },
    "arcgis": {
      "basic": {
        "arcgisSupportedHtml": "O <% atributo %> contém HTML sem suporte."
      },
      "location": {
        "notValid": "O local que você inseriu não é válido. Tente novamente.",
        "noResults": "O local que você pesquisou não pode ser encontrado. Tente novamente e seja o mais específico possível."
      }
    }
  },
  "errors": {
    "actionsBtns": {
      "startFromScratch": "Iniciar construindo uma nova História de Informações Coletivas"
    },
    "loading": {
      "heading": "Atenção",
      "invalidConfig": "Configuração inválida",
      "inaccessibleApp": "O Aplicativo de Mapeamento da Web não existe ou está inacessível.",
      "invalidConfigNoApp": "Um ID do aplicativo de mapeamento da web válido não está especificado no arquivo index.html ou URL do aplicativo. Corrija o appid e tente novamente.",
      "unspecifiedConfigOwner": "O proprietário autorizado não foi configurado.",
      "invalidConfigOwner": "O proprietário da história não está autorizado.",
      "createMap": "Não foi possível criar o mapa",
      "notAuthorizedApp": "Você não tem autorização para acessar esta história",
      "notAuthorizedMap": "Você não está autorizado a acessar o mapa da web nesta história",
      "notAuthorizedLayers": "Você não está autorizado a visualizar uma ou mais camadas no mapa da web",
      "upgradeBrowser": "<a href=\"http://browsehappy.com/\" target=\"_blank\">Atualize seu navegador</a>.",
      "mapLoadingFail": "Algo deu errado, o mapa não carregou corretamente.",
      "appLoadingFail": "Algo deu errado, o aplicativo não carregou corretamente.",
      "crowdsourceLayerNotFound": "Algo deu errado, não foi possível a história localizar ou carregar a camada do mapa de informações coletivas corretamente."
    },
    "sharing": {
      "localhost": "URLs com \"localhost\" não podem ser compartilhadas."
    },
    "selectedDisplay": {
      "noPhoto": "Erro: A fotografia não existe ou está inacessível."
    }
  },
  "livingArchive": {
    "header": {
      "title": "A Maior Aula do Mundo",
      "studentCount": "Estudantes participando",
      "becomePart": "Faça parte da história"
    },
    "intro": {
      "title": "Arquivo vivo da Maior Aula do Mundo",
      "subtitle": "Inclua-se no mapa e faça parte da história que está unindo toda uma geração para mudar o mundo até 2030",
      "foodText": "Projeto Alimentar das Metas Globais 2017 – saiba mais",
      "pledgeText": "Iniciativa Be Fearless Be Kind – saiba mais",
      "explore": "Explore o Mapa"
    },
    "contribute": {
      "termsAndConditions": "Você garante e declara que (1) possui todos os direitos, o título e a propriedade das fotos a serem compartilhadas neste site e concede à ESRI, à Maior Aula do Mundo e seus parceiros e a seus contratados o direito não exclusivo e isento de royalties de usar, copiar, armazenar, armazenar em cache, hospedar, elaborar trabalhos derivados, reproduzir, exibir e executar publicamente, redistribuir e retransmitir a foto compartilhada como parte deste serviço e que (2) sua ação de compartilhar fotos e quaisquer informações geolocalizadas associadas não infringirá ou configurará apropriação indevida dos direitos de propriedade ou direitos de privacidade ou publicidade de terceiros. É estritamente proibido compartilhar fotos que possam ser consideradas difamatórias, obscenas, pornográficas, excessivamente violentas ou que incentivem atividades ilícitas."
    },
    "form": {
      "title": "Coloque a Maior Aula do Mundo no Mapa",
      "fields": {
        "PrimaryPhoto": {
          "label": "Foto da sua aula",
          "placeholder": "Arraste e solte",
          "flipGridPreText": "Para compartilhar um vídeo, carregue-o na nossa",
          "flipGridLinkText": "página do Facebook"
        },
        "LocationName": {
          "label": "Minha localização",
          "placeholder": "Insira a sua localização"
        },
        "EDUCATOR_STUDENT": {
          "label": "Você é um educador ou estudante?",
          "options": [{
              "label": "Educador", //Educator,
              "value": "Educator"
            },
            {
              "label": "Estudante", //Student
              "value": "Student"
            }
          ]
        },
        "THANKS": {
          "label": "Estou participando da Maior Aula do Mundo graças ao(à)..."
        },
        "LESSON_SDG_GOAL": {
          "label": "Nossa aula foi sobre",
          "options": [{
            "value": "All the Goals",
            "label": "Todas as Metas"
          },
          {
            "value": "Goal 1 - No Poverty",
            "label": "Goal 1 - No Poverty"
          },
          {
            "value": "Goal 2 - Zero Hunger",
            "label": "Goal 2 - Zero Hunger"
          },
          {
            "value": "Goal 3 - Good Health and Well-being",
            "label": "Goal 3 - Good Health and Well-being"
          },
          {
            "value": "Goal 4 - Quality Education",
            "label": "Goal 4 - Quality Education"
          },
          {
            "value": "Goal 5 - Gender Equality",
            "label": "Goal 5 - Gender Equality"
          },
          {
            "value": "Goal 6 - Clean Water and Sanitation",
            "label": "Goal 6 - Clean Water and Sanitation"
          },
          {
            "value": "Goal 7 - Affordable and Clean Energy",
            "label": "Goal 7 - Affordable and Clean Energy"
          },
          {
            "value": "Goal 8 - Decent Jobs and Economic Growth",
            "label": "Goal 8 - Decent Jobs and Economic Growth"
          },
          {
            "value": "Goal 9 - Industry, Innovation and Infrastructure",
            "label": "Goal 9 - Industry, Innovation and Infrastructure"
          },
          {
            "value": "Goal 10 - Reduced Inequalities",
            "label": "Goal 10 - Reduced Inequalities"
          },
          {
            "value": "Goal 11 - Sustainable Cities and Communities",
            "label": "Goal 11 - Sustainable Cities and Communities"
          },
          {
            "value": "Goal 12 - Responsible Consumption and Production",
            "label": "Goal 12 - Responsible Consumption and Production"
          },
          {
            "value": "Goal 13 - Climate Action",
            "label": "Goal 13 - Climate Action"
          },
          {
            "value": "Goal 14 - Life Below Water",
            "label": "Goal 14 - Life Below Water"
          },
          {
            "value": "Goal 15 - Life on Land",
            "label": "Goal 15 - Life on Land"
          },
          {
            "value": "Goal 16 - Peace, Justice, and Strong Institutions",
            "label": "Goal 16 - Peace, Justice, and Strong Institutions"
          },
          {
            "value": "Goal 17 - Partnerships for the Goals",
            "label": "Goal 17 - Partnerships for the Goals"
          }
          ]
        },
        "OPEN_INPUT_SHARE": {
          "label": "Quero compartilhar",
          "placeholder": "Compartilhe algo sobre a sua aula – pode ser a citação de um aluno, uma ideia, um resultado, um compromisso..."
        },
        "OPEN_INPUT_CONNECT_TWITTER": {
          "label": "Desejo me conectar a outros educadores que estão ensinando sobre as MDS. Meu nome de usuário no Twitter é",
          "placeholder": "@nomedeusuário"
        },
        "FOOD_PROJECT_SCORE": {
          "label": "Participei do Projeto Alimentar das Metas Globais e a minha nota foi"
        },
        "EDUCATOR_ROLE": {
          "label": "Que papel desempenha como educador?",
          "options": [{
              "label": "Educador professional",
              "value": "Professional Educator"
            }, //Professional Educator
            {
              "label": "Líder de grupos de jovens",
              "value": "Youth Group Leader"
            }, //Youth Group Leader
            {
              "label": "Jovem (educador de pares)",
              "value": "Young Person (Peer Educator)"
            }, //Young Person (Peer Educator)
            {
              "label": "Voluntário da sociedade civil",
              "value": "Civil Society Volunteer"
            }, //Civil Society Volunteer
            {
              "label": "Funcionário voluntário",
              "value": "Business Employee Volunteer"
            }, //Business Employee Volunteer
            {
              "label": "Outro",
              "value": "Other"
            } //Other
          ]
        },
        "EDUCATOR_NUM_STUDENTS": {
          "label": "Com quantos alunos você compartilhou as Metas?"
        },
        "EDUCATOR_CLASS_AGE_RANGE": {
          "label": "Selecione sua faixa etária"
        },
        "STUDENT_AGE_RANGE": {
          "label": "Selecione sua faixa etária"
        },
        "STUDENT_INDIVIDUAL_CLASS": {
          "headerLabel": "Como estudante, você é",
          "studentClassAgeRangeLabel": "Selecione sua faixa etária",
          "options": [{
              "label": "Um indivíduo",
              "value": "An Individual"
            }, //An Individual
            {
              "label": "Representante de uma turma, escola ou grupo de",
              "value": "An Representing a Class, School, or Group of"
            } //Representing a Class, School, or Group of
          ]
        }
      }
    }
  }
});
