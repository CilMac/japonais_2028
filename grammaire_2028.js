// Fiches de grammaire 2028 — 120 fiches avec chapitres, expressions, romaji et aides pédagogiques.
const GRAMMAIRE_2028 = [
  {
    "id": "recap_langue_japonaise_vue_ensemble",
    "chapitre": "00 — Vue d’ensemble",
    "titre": "Vue d’ensemble — comment fonctionne le japonais",
    "niveau": "A1",
    "explication": "Le japonais a une logique très régulière, mais différente du français. Pour bien débuter, il faut comprendre trois idées : le verbe arrive souvent à la fin, les particules indiquent le rôle des mots, et beaucoup d’éléments sont laissés implicites quand le contexte suffit. Cette fiche sert de carte routière : elle résume la structure des phrases, les particules de base, la politesse, et les réflexes les plus utiles quand on commence.",
    "exemples": [
      {
        "jp": "私はフランス人です。",
        "romaji": "Watashi wa Furansu-jin desu.",
        "fr": "Je suis français. は marque le thème : à propos de moi, je suis français."
      },
      {
        "jp": "魚を食べます。",
        "romaji": "Sakana o tabemasu.",
        "fr": "Je mange du poisson. を marque ce qui est mangé : le complément d’objet."
      },
      {
        "jp": "東京で寿司を食べました。",
        "romaji": "Tōkyō de sushi o tabemashita.",
        "fr": "J’ai mangé des sushis à Tokyo. で marque le lieu de l’action ; を marque l’objet ; le verbe vient à la fin."
      },
      {
        "jp": "日本語は少し難しいですが、とても面白いです。",
        "romaji": "Nihongo wa sukoshi muzukashii desu ga, totemo omoshiroi desu.",
        "fr": "Le japonais est un peu difficile, mais très intéressant. が peut introduire une nuance douce : mais / cependant."
      },
      {
        "jp": "すみません、まだ日本語があまり上手ではありません。",
        "romaji": "Sumimasen, mada Nihongo ga amari jōzu de wa arimasen.",
        "fr": "Excusez-moi, je ne suis pas encore très bon en japonais. Formule utile pour parler modestement."
      }
    ],
    "pieges": "Ne pas coller le français sur le japonais. Le japonais n’exprime pas toujours explicitement le sujet, et la même particule peut avoir plusieurs usages. は n’est pas ‘je’, が n’est pas uniquement ‘mais’, を se prononce ‘o’, et へ se prononce ‘e’ comme particule. Une phrase brève peut être tout à fait complète si le contexte est partagé. Enfin, en conversation réelle, la politesse et la nuance comptent autant que la grammaire brute.",
    "lien_vocab": [
      "私",
      "日本語",
      "少し",
      "難しい",
      "面白い",
      "すみません"
    ],
    "lien_interactions": [
      "comprendre_001",
      "prudence_001",
      "nuancer_001"
    ],
    "expression": "日本語のしくみ",
    "expression_romaji": "Nihongo no shikumi",
    "titre_fr": "Vue d’ensemble de la langue japonaise",
    "layout": "full",
    "sections": [
      {
        "title": "1. L’idée générale",
        "text": "Le japonais n’empile pas les mots comme le français. On annonce souvent d’abord le thème, puis les informations utiles, et la phrase se ferme avec le verbe ou la copule です. Il faut donc écouter la fin de la phrase : c’est souvent là que se trouve l’information grammaticale décisive.",
        "bullets": [
          "Ordre typique : thème + compléments + verbe.",
          "Le japonais est souvent décrit comme une langue SOV : sujet — objet — verbe.",
          "Le verbe final donne le temps, la polarité et souvent le niveau de politesse.",
          "Les particules relient les mots entre eux et portent une grande partie du sens."
        ],
        "examples": [
          {
            "jp": "私は寿司を食べます。",
            "romaji": "Watashi wa sushi o tabemasu.",
            "fr": "Je mange des sushis. Littéralement : moi + thème / sushi + objet / manger."
          },
          {
            "jp": "今日は雨です。",
            "romaji": "Kyō wa ame desu.",
            "fr": "Aujourd’hui, il pleut / c’est la pluie. Le thème est aujourd’hui, et です ferme la phrase."
          }
        ]
      },
      {
        "title": "2. Comment se construit une phrase simple",
        "text": "Une phrase japonaise débutante se construit souvent à partir de petits blocs. On peut partir d’un nom, d’un lieu, d’un moment, puis ajouter la particule appropriée avant de terminer par です ou par un verbe.",
        "bullets": [
          "Nom + です : pour dire ‘c’est… / je suis…’.",
          "Nom + は + adjectif / nom + です : pour parler du thème.",
          "Lieu + で + verbe : pour dire où une action se passe.",
          "Lieu + に + 行きます / 来ます : pour dire la destination.",
          "Temps + に + verbe : pour un moment précis."
        ],
        "patterns": [
          "A は B です。→ ‘A, c’est B.’",
          "A は い-adjectif です。→ ‘A est …’",
          "A で B を します。→ ‘Je fais B à/en A.’",
          "A に 行きます。→ ‘Je vais à A.’"
        ]
      },
      {
        "title": "3. Les particules indispensables",
        "text": "Les particules sont de petits mots grammaticaux placés après un nom ou un groupe de mots. Elles n’ont pas toujours de traduction fixe en français. Il faut surtout apprendre leur fonction.",
        "particle_table": [
          {
            "p": "は",
            "r": "wa",
            "role": "marque le thème, ‘à propos de…’",
            "jp": "私はフランス人です。",
            "romaji": "Watashi wa Furansu-jin desu.",
            "fr": "Moi / en ce qui me concerne, je suis français."
          },
          {
            "p": "が",
            "r": "ga",
            "role": "marque souvent le sujet mis en avant ; peut aussi marquer ce qu’on aime / comprend",
            "jp": "日本語が好きです。",
            "romaji": "Nihongo ga suki desu.",
            "fr": "J’aime le japonais."
          },
          {
            "p": "を",
            "r": "o",
            "role": "marque l’objet direct de l’action",
            "jp": "コーヒーを飲みます。",
            "romaji": "Kōhī o nomimasu.",
            "fr": "Je bois du café."
          },
          {
            "p": "に",
            "r": "ni",
            "role": "destination, moment précis, existence, point d’arrivée",
            "jp": "七時に起きます。",
            "romaji": "Shichi-ji ni okimasu.",
            "fr": "Je me lève à sept heures."
          },
          {
            "p": "で",
            "r": "de",
            "role": "lieu de l’action, moyen, instrument",
            "jp": "東京で働いています。",
            "romaji": "Tōkyō de hataraite imasu.",
            "fr": "Je travaille à Tokyo."
          },
          {
            "p": "へ",
            "r": "e",
            "role": "direction générale, souvent avec aller/venir",
            "jp": "日本へ行きます。",
            "romaji": "Nihon e ikimasu.",
            "fr": "Je vais au Japon."
          },
          {
            "p": "の",
            "r": "no",
            "role": "possession, relation, précision entre deux noms",
            "jp": "日本語の先生です。",
            "romaji": "Nihongo no sensei desu.",
            "fr": "C’est un professeur de japonais."
          },
          {
            "p": "と",
            "r": "to",
            "role": "avec / et / citation",
            "jp": "友だちと話します。",
            "romaji": "Tomodachi to hanashimasu.",
            "fr": "Je parle avec un ami."
          }
        ]
      },
      {
        "title": "4. Ce que le japonais omet volontiers",
        "text": "Le japonais évite souvent de répéter ce que le contexte rend évident. Cela surprend les francophones, mais c’est tout à fait normal. On peut omettre le sujet, le possessif, voire certaines informations évidentes pour l’interlocuteur.",
        "bullets": [
          "Le sujet ‘je’ est souvent absent.",
          "On ne répète pas toujours ‘vous’, ‘mon’, ‘ton’, etc.",
          "Une réponse courte peut être parfaitement naturelle.",
          "Le contexte compte énormément : qui parle, à qui, où et à propos de quoi ?"
        ],
        "examples": [
          {
            "jp": "食べました。",
            "romaji": "Tabemashita.",
            "fr": "J’ai mangé / il a mangé / nous avons mangé… Le sujet dépend du contexte."
          },
          {
            "jp": "大丈夫です。",
            "romaji": "Daijōbu desu.",
            "fr": "C’est bon / ça va / pas de problème. Sens précis selon le contexte."
          }
        ]
      },
      {
        "title": "5. Politesse et formes finales",
        "text": "En débutant, il est très utile de parler en style poli. Ce style se reconnaît surtout à la fin de la phrase. La politesse japonaise passe énormément par cette zone finale.",
        "bullets": [
          "です : forme polie avec les noms et adjectifs en な.",
          "ます : forme polie des verbes.",
          "ません : négatif poli.",
          "ました : passé poli.",
          "ませんでした : passé négatif poli."
        ],
        "patterns": [
          "学生です。→ Je suis étudiant.",
          "食べます。→ Je mange.",
          "食べません。→ Je ne mange pas.",
          "食べました。→ J’ai mangé.",
          "食べませんでした。→ Je n’ai pas mangé."
        ]
      },
      {
        "title": "6. Adjectifs, noms et petites différences utiles",
        "text": "Le japonais distingue les adjectifs en い et les adjectifs en な. Il faut aussi retenir qu’un nom suivi de です peut suffire à faire une phrase complète.",
        "bullets": [
          "Adjectif en い : 高いです, 難しいです, 面白いです.",
          "Adjectif en な : 静かです, 便利です, 有名です.",
          "Nom + です : 日本人です, 先生です, 会社員です.",
          "On ne met pas ‘être’ séparé comme en français : です ferme simplement la phrase polie."
        ],
        "examples": [
          {
            "jp": "この店は高いです。",
            "romaji": "Kono mise wa takai desu.",
            "fr": "Ce magasin est cher."
          },
          {
            "jp": "浅草はにぎやかです。",
            "romaji": "Asakusa wa nigiyaka desu.",
            "fr": "Asakusa est animée."
          }
        ]
      },
      {
        "title": "7. Questions, négation et nuance",
        "text": "Une question japonaise peut être très simple. En style poli, on ajoute souvent か à la fin, mais dans la conversation réelle l’intonation joue aussi beaucoup. La langue aime également la nuance et l’atténuation.",
        "bullets": [
          "Question polie : 〜ですか / 〜ますか.",
          "Négation : 〜ではありません / 〜ません.",
          "Nuance douce : ちょっと, まあ, あまり…, 〜ですが…",
          "On évite souvent les formulations trop tranchées quand on parle à quelqu’un qu’on connaît peu."
        ],
        "examples": [
          {
            "jp": "日本語は難しいですか。",
            "romaji": "Nihongo wa muzukashii desu ka.",
            "fr": "Le japonais est-il difficile ?"
          },
          {
            "jp": "あまり分かりません。",
            "romaji": "Amari wakarimasen.",
            "fr": "Je ne comprends pas très bien / pas vraiment."
          }
        ]
      },
      {
        "title": "8. Réflexes très utiles pour un débutant",
        "text": "Quand une phrase japonaise semble difficile, il ne faut pas paniquer. Il vaut mieux l’aborder comme une suite de blocs grammaticaux. Quelques réflexes simples donnent déjà beaucoup de résultats.",
        "bullets": [
          "Chercher la fin de la phrase : c’est souvent le verbe ou です.",
          "Repérer les particules : elles disent qui fait quoi, où, quand et comment.",
          "Ne pas vouloir traduire mot à mot.",
          "Accepter qu’un même mot puisse avoir plusieurs traductions selon le contexte.",
          "Privilégier des phrases courtes, polies et claires quand on débute."
        ],
        "patterns": [
          "Je repère d’abord : thème ? objet ? lieu ? verbe final ?",
          "Si je ne comprends pas tout, je cherche au moins le sens global.",
          "Pour parler, je construis petit : thème + information + verbe."
        ]
      }
    ]
  },
  {
    "id": "recap_particules_bases",
    "chapitre": "00 — Vue d’ensemble",
    "titre": "Récap — les particules indispensables",
    "titre_fr": "Récap — les particules indispensables",
    "niveau": "A1",
    "expression": "助詞の基本",
    "expression_romaji": "Joshi no kihon",
    "layout": "full",
    "explication": "Les particules sont probablement le cœur de la grammaire japonaise pour un débutant. Elles sont courtes, mais elles donnent le rôle des mots : thème, sujet, objet, lieu, direction, moyen, appartenance. Il ne faut pas chercher une traduction française unique : il faut apprendre leur fonction.",
    "sections": [
      {
        "title": "1. Le principe",
        "text": "Une particule se place après le mot ou le groupe de mots qu’elle organise. C’est donc souvent ce qui suit un nom qui explique son rôle dans la phrase.",
        "bullets": [
          "Nom + は : on annonce le thème.",
          "Nom + が : on met le sujet en évidence.",
          "Nom + を : on indique ce qui subit l’action.",
          "Nom + に / で : on précise un lieu, une destination, un moment ou un moyen selon le contexte."
        ],
        "examples": [
          {
            "jp": "私は日本語を勉強しています。",
            "romaji": "Watashi wa Nihongo o benkyō shite imasu.",
            "fr": "J’étudie le japonais. は annonce le thème ; を indique l’objet étudié."
          }
        ]
      },
      {
        "title": "2. Les particules à apprendre en premier",
        "text": "Ces particules reviennent sans arrêt. Les maîtriser progressivement donne déjà accès à beaucoup de phrases.",
        "particle_table": [
          {
            "p": "は",
            "r": "wa",
            "role": "thème : à propos de…",
            "jp": "今日は暑いです。",
            "romaji": "Kyō wa atsui desu.",
            "fr": "Aujourd’hui, il fait chaud."
          },
          {
            "p": "が",
            "r": "ga",
            "role": "sujet mis en avant, découverte, goût, capacité",
            "jp": "寿司が好きです。",
            "romaji": "Sushi ga suki desu.",
            "fr": "J’aime les sushis."
          },
          {
            "p": "を",
            "r": "o",
            "role": "objet direct de l’action",
            "jp": "水を飲みます。",
            "romaji": "Mizu o nomimasu.",
            "fr": "Je bois de l’eau."
          },
          {
            "p": "に",
            "r": "ni",
            "role": "destination, moment précis, existence",
            "jp": "駅に行きます。",
            "romaji": "Eki ni ikimasu.",
            "fr": "Je vais à la gare."
          },
          {
            "p": "で",
            "r": "de",
            "role": "lieu de l’action, moyen",
            "jp": "カードで払います。",
            "romaji": "Kādo de haraimasu.",
            "fr": "Je paie par carte."
          },
          {
            "p": "の",
            "r": "no",
            "role": "appartenance, précision entre deux noms",
            "jp": "友だちの家です。",
            "romaji": "Tomodachi no ie desu.",
            "fr": "C’est la maison d’un ami."
          }
        ]
      },
      {
        "title": "3. Réflexe de débutant",
        "text": "Quand tu vois une phrase japonaise, commence par entourer mentalement les particules. Elles font apparaître la structure.",
        "patterns": [
          "今日は / は → thème : aujourd’hui",
          "東京で / で → lieu de l’action : à Tokyo",
          "寿司を / を → objet : les sushis",
          "食べました → verbe final : j’ai mangé"
        ]
      }
    ],
    "pieges": "Ne pas apprendre les particules comme de simples équivalents français. は n’est pas « est », が n’est pas seulement « mais », に et で ne se traduisent pas tous les deux par « à ». Leur fonction dépend du verbe et du contexte.",
    "exemples": [],
    "lien_vocab": [],
    "lien_interactions": []
  },
  {
    "id": "recap_structure_phrase",
    "chapitre": "00 — Vue d’ensemble",
    "titre": "Récap — la structure de la phrase",
    "titre_fr": "Récap — la structure de la phrase",
    "niveau": "A1",
    "expression": "文の作り方",
    "expression_romaji": "Bun no tsukurikata",
    "layout": "full",
    "explication": "La phrase japonaise paraît étrange au début parce que l’information principale arrive souvent à la fin. On comprend mieux en la lisant comme une suite de blocs : thème, temps, lieu, objet, puis verbe final.",
    "sections": [
      {
        "title": "1. L’ordre de base",
        "text": "L’ordre très fréquent est : thème + temps + lieu + objet + verbe. Cet ordre peut varier, mais le verbe reste très souvent en fin de phrase.",
        "patterns": [
          "私は + 東京で + 寿司を + 食べました。",
          "Moi / thème + à Tokyo / lieu + sushi / objet + ai mangé / verbe final."
        ],
        "examples": [
          {
            "jp": "昨日、東京で友だちとラーメンを食べました。",
            "romaji": "Kinō, Tōkyō de tomodachi to rāmen o tabemashita.",
            "fr": "Hier, j’ai mangé des ramen à Tokyo avec un ami."
          }
        ]
      },
      {
        "title": "2. Phrase nominale avec です",
        "text": "Pour dire « c’est… », « je suis… », « c’est un… », on utilise souvent nom + です en style poli.",
        "patterns": [
          "A は B です。→ A, c’est B.",
          "私はフランス人です。→ Je suis français.",
          "ここは駅です。→ Ici, c’est la gare."
        ]
      },
      {
        "title": "3. Phrase verbale avec ます",
        "text": "Pour une action, le verbe conjugué en ます termine la phrase polie.",
        "patterns": [
          "コーヒーを飲みます。→ Je bois du café.",
          "京都に行きます。→ Je vais à Kyoto.",
          "日本語を勉強します。→ J’étudie le japonais."
        ]
      },
      {
        "title": "4. Pourquoi le contexte est essentiel",
        "text": "Le sujet est souvent omis. Une phrase comme 食べました peut vouloir dire « j’ai mangé », « il a mangé », « nous avons mangé », selon la situation. Ce n’est pas une erreur : c’est normal en japonais.",
        "examples": [
          {
            "jp": "もう食べました。",
            "romaji": "Mō tabemashita.",
            "fr": "J’ai déjà mangé / nous avons déjà mangé / il a déjà mangé — selon le contexte."
          }
        ]
      }
    ],
    "pieges": "Ne pas chercher à tout remettre dans l’ordre français. La bonne stratégie est de repérer le verbe final, puis de remonter la phrase en regardant les particules.",
    "exemples": [],
    "lien_vocab": [],
    "lien_interactions": []
  },
  {
    "id": "recap_verbes_bases",
    "chapitre": "00 — Vue d’ensemble",
    "titre": "Récap — les verbes japonais",
    "titre_fr": "Récap — les verbes japonais",
    "niveau": "A1",
    "expression": "動詞の基本",
    "expression_romaji": "Dōshi no kihon",
    "layout": "full",
    "explication": "Les verbes japonais sont plus réguliers qu’en français, mais leur logique est différente. La forme finale indique le temps, le négatif, la politesse et parfois l’aspect de l’action.",
    "sections": [
      {
        "title": "1. Les trois groupes",
        "text": "Pour conjuguer correctement, il faut reconnaître le groupe du verbe. Au début, on peut apprendre les verbes avec leur forme polie et leur forme dictionnaire.",
        "bullets": [
          "Groupe 1 : verbes en う, く, す, む, る, etc. Exemple : 行く, 飲む, 話す.",
          "Groupe 2 : souvent en る avec son en i/e avant る. Exemple : 食べる, 見る.",
          "Irréguliers : する et 来る."
        ]
      },
      {
        "title": "2. Les formes très utiles",
        "text": "Quelques formes ouvrent beaucoup d’usages concrets.",
        "patterns": [
          "食べます → je mange / je mangerai",
          "食べません → je ne mange pas",
          "食べました → j’ai mangé",
          "食べてください → mangez, s’il vous plaît",
          "食べたいです → je voudrais manger",
          "食べたことがあります → j’ai déjà mangé"
        ]
      },
      {
        "title": "3. La forme て",
        "text": "La forme て sert à relier, demander, autoriser, interdire, décrire une action en cours. Elle devient vite indispensable.",
        "examples": [
          {
            "jp": "写真を撮ってもいいですか。",
            "romaji": "Shashin o totte mo ii desu ka.",
            "fr": "Puis-je prendre une photo ?"
          },
          {
            "jp": "ここで待ってください。",
            "romaji": "Koko de matte kudasai.",
            "fr": "Veuillez attendre ici."
          }
        ]
      },
      {
        "title": "4. Réflexe de débutant",
        "text": "Apprendre un verbe utile avec trois formes dès le départ : forme dictionnaire, forme ます, forme て.",
        "patterns": [
          "食べる / 食べます / 食べて",
          "行く / 行きます / 行って",
          "見る / 見ます / 見て",
          "する / します / して"
        ]
      }
    ],
    "pieges": "Ne pas croire que ます indique forcément le futur : selon le contexte, 食べます peut vouloir dire « je mange » ou « je mangerai ». Le passé se voit clairement avec ました / た.",
    "exemples": [],
    "lien_vocab": [],
    "lien_interactions": []
  },
  {
    "id": "recap_adjectifs_bases",
    "chapitre": "00 — Vue d’ensemble",
    "titre": "Récap — les adjectifs",
    "titre_fr": "Récap — les adjectifs",
    "niveau": "A1",
    "expression": "形容詞の基本",
    "expression_romaji": "Keiyōshi no kihon",
    "layout": "full",
    "explication": "Les adjectifs japonais sont essentiels pour parler de goûts, d’impressions, de météo, de nourriture ou de lieux. Il y a deux grandes familles : les adjectifs en い et les adjectifs en な.",
    "sections": [
      {
        "title": "1. Adjectifs en い",
        "text": "Ils se terminent par い et se conjuguent eux-mêmes pour le négatif et le passé. En style poli, on ajoute souvent です après la forme de base.",
        "patterns": [
          "高いです → c’est cher",
          "高くないです → ce n’est pas cher",
          "高かったです → c’était cher",
          "高くなかったです → ce n’était pas cher"
        ],
        "examples": [
          {
            "jp": "このレストランはおいしいです。",
            "romaji": "Kono resutoran wa oishii desu.",
            "fr": "Ce restaurant est bon."
          }
        ]
      },
      {
        "title": "2. Adjectifs en な",
        "text": "Ils ressemblent davantage à des noms. Avant un nom, on ajoute な. En fin de phrase, on utilise です.",
        "patterns": [
          "静かです → c’est calme",
          "静かな町 → une ville calme",
          "便利です → c’est pratique",
          "便利なホテル → un hôtel pratique"
        ],
        "examples": [
          {
            "jp": "このホテルは便利です。",
            "romaji": "Kono hoteru wa benri desu.",
            "fr": "Cet hôtel est pratique."
          }
        ]
      },
      {
        "title": "3. Très utile en conversation",
        "text": "Les adjectifs permettent de réagir naturellement, même avec des phrases simples.",
        "patterns": [
          "すごいですね。→ C’est impressionnant.",
          "おいしいです。→ C’est bon.",
          "きれいですね。→ C’est joli / propre.",
          "面白いです。→ C’est intéressant.",
          "ちょっと難しいです。→ C’est un peu difficile."
        ]
      },
      {
        "title": "4. Prudence",
        "text": "Certains adjectifs peuvent être trop directs selon le contexte. Pour adoucir, on ajoute souvent ちょっと, 少し, ou on formule avec nuance.",
        "examples": [
          {
            "jp": "ちょっと難しいですね。",
            "romaji": "Chotto muzukashii desu ne.",
            "fr": "C’est un peu difficile, n’est-ce pas ? Formulation plus douce."
          }
        ]
      }
    ],
    "pieges": "Attention à ne pas mélanger les deux familles : 静かです mais 静かな場所 ; 高いです mais 高い店. Et attention à きれい : malgré le son final, c’est un adjectif en な.",
    "exemples": [],
    "lien_vocab": [],
    "lien_interactions": []
  },
  {
    "id": "te_mo_ii_desu_ka",
    "chapitre": "Formes utiles",
    "titre": "〜てもいいですか — demander la permission",
    "niveau": "A1/A2",
    "explication": "Forme très utile pour demander poliment si l’on peut faire quelque chose.",
    "exemples": [
      {
        "jp": "少し聞いてもいいですか。",
        "romaji": "Sukoshi kiite mo ii desu ka.",
        "fr": "Est-ce que je peux poser une petite question ?"
      },
      {
        "jp": "写真を撮ってもいいですか。",
        "romaji": "Shashin o totte mo ii desu ka.",
        "fr": "Est-ce que je peux prendre une photo ?"
      }
    ],
    "pieges": "Ne pas utiliser de façon trop directe dans un contexte très formel ; ajouter すみません ou もしよければ adoucit la phrase.",
    "lien_vocab": [
      "聞く",
      "写真",
      "少し"
    ],
    "lien_interactions": [
      "ouvrir_sujet_001"
    ],
    "expression": "〜てもいいですか",
    "expression_romaji": "te mo ii desu ka",
    "titre_fr": "demander la permission",
    "idee_cle": "Forme très utile pour demander poliment si l’on peut faire quelque chose",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "kamo_shiremasen",
    "chapitre": "Nuancer",
    "titre": "〜かもしれません — peut-être",
    "niveau": "A2/B1",
    "explication": "Permet de nuancer une affirmation. Très utile pour ne pas paraître catégorique.",
    "exemples": [
      {
        "jp": "少し難しい話題かもしれません。",
        "romaji": "Sukoshi muzukashii wadai kamo shiremasen.",
        "fr": "C’est peut-être un sujet un peu difficile."
      },
      {
        "jp": "私の印象だけかもしれません。",
        "romaji": "Watashi no inshō dake kamo shiremasen.",
        "fr": "Ce n’est peut-être que mon impression."
      }
    ],
    "pieges": "C’est plus prudent que です seul. Excellent pour les conversations culturelles.",
    "lien_vocab": [
      "難しい",
      "話題",
      "印象"
    ],
    "lien_interactions": [
      "changer_sujet_001",
      "culture_001"
    ],
    "expression": "〜かもしれません",
    "expression_romaji": "kamo shiremasen",
    "titre_fr": "peut-être",
    "idee_cle": "Permet de nuancer une affirmation",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "to_omoimasu",
    "chapitre": "Nuancer",
    "titre": "〜と思います — je pense que",
    "niveau": "A2",
    "explication": "Sert à donner son avis de façon moins abrupte.",
    "exemples": [
      {
        "jp": "実際はもっと複雑だと思います。",
        "romaji": "Jissai wa motto fukuzatsu da to omoimasu.",
        "fr": "Je pense que la réalité est plus complexe."
      },
      {
        "jp": "会社によって違うと思います。",
        "romaji": "Kaisha ni yotte chigau to omoimasu.",
        "fr": "Je pense que cela dépend des entreprises."
      }
    ],
    "pieges": "Attention à ne pas sur-utiliser 私は ; souvent le contexte suffit.",
    "lien_vocab": [
      "思う",
      "実際",
      "複雑",
      "会社"
    ],
    "lien_interactions": [
      "travail_002",
      "vieillissement_001"
    ],
    "expression": "〜と思います",
    "expression_romaji": "to omoimasu",
    "titre_fr": "je pense que",
    "idee_cle": "Sert à donner son avis de façon moins abrupte",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "phrase_a_wa_b_desu",
    "chapitre": "Fondations",
    "titre": "A は B です — phrase de base",
    "niveau": "A1",
    "explication": "Structure simple pour identifier, présenter ou décrire calmement un sujet.",
    "exemples": [
      {
        "jp": "これは日本のお菓子です。",
        "romaji": "Kore wa Nihon no okashi desu.",
        "fr": "Ceci est une pâtisserie japonaise."
      },
      {
        "jp": "私はフランス人です。",
        "romaji": "Watashi wa Furansu-jin desu.",
        "fr": "Je suis français."
      }
    ],
    "pieges": "は marque le thème, pas forcément le sujet grammatical. En japonais, on évite souvent 私は quand le contexte est clair.",
    "lien_vocab": [
      "これ",
      "日本",
      "フランス人"
    ],
    "lien_interactions": [],
    "expression": "A は B です",
    "expression_romaji": "A wa B desu",
    "titre_fr": "phrase de base",
    "idee_cle": "Structure simple pour identifier, présenter ou décrire calmement un sujet",
    "mode_emploi": "C’est une base de construction : elle sert partout. Mieux vaut la maîtriser lentement que la survoler.",
    "reflexe_debutant": "Reste d’abord en style poli : です / ます. C’est le plus sûr.",
    "mini_exercice": "Produis une phrase affirmative, puis la même en question ou en négatif."
  },
  {
    "id": "desu_masu_politesse",
    "chapitre": "Fondations",
    "titre": "です / ます — le mode poli de base",
    "niveau": "A1",
    "explication": "Le registre poli standard, sûr avec des personnes que l’on ne connaît pas bien.",
    "exemples": [
      {
        "jp": "日本語を勉強しています。",
        "romaji": "Nihongo o benkyō shite imasu.",
        "fr": "J’étudie le japonais."
      },
      {
        "jp": "この料理はとてもおいしいです。",
        "romaji": "Kono ryōri wa totemo oishii desu.",
        "fr": "Ce plat est très bon."
      }
    ],
    "pieges": "Ne pas mélanger trop vite avec le style familier. Avec des Japonais rencontrés en voyage, です / ます est le choix le plus sûr.",
    "lien_vocab": [
      "日本語",
      "料理",
      "おいしい"
    ],
    "lien_interactions": [],
    "expression": "です / ます",
    "expression_romaji": "desu / masu",
    "titre_fr": "le mode poli de base",
    "idee_cle": "Le registre poli standard, sûr avec des personnes que l’on ne connaît pas bien",
    "mode_emploi": "C’est une base de construction : elle sert partout. Mieux vaut la maîtriser lentement que la survoler.",
    "reflexe_debutant": "Reste d’abord en style poli : です / ます. C’est le plus sûr.",
    "mini_exercice": "Produis une phrase affirmative, puis la même en question ou en négatif."
  },
  {
    "id": "question_ka",
    "chapitre": "Fondations",
    "titre": "〜か — poser une question",
    "niveau": "A1",
    "explication": "La particule か transforme une phrase polie en question.",
    "exemples": [
      {
        "jp": "これは何ですか。",
        "romaji": "Kore wa nan desu ka.",
        "fr": "Qu’est-ce que c’est ?"
      },
      {
        "jp": "もう一度言ってもらえますか。",
        "romaji": "Mō ichido itte moraemasu ka.",
        "fr": "Pouvez-vous le dire encore une fois ?"
      }
    ],
    "pieges": "Avec です / ます, le point d’interrogation est inutile en japonais, mais accepté dans les supports pédagogiques. À l’oral, l’intonation monte.",
    "lien_vocab": [
      "何",
      "もう一度",
      "言う"
    ],
    "lien_interactions": [
      "comprendre_001"
    ],
    "expression": "〜か",
    "expression_romaji": "ka",
    "titre_fr": "poser une question",
    "idee_cle": "La particule か transforme une phrase polie en question",
    "mode_emploi": "C’est une base de construction : elle sert partout. Mieux vaut la maîtriser lentement que la survoler.",
    "reflexe_debutant": "Reste d’abord en style poli : です / ます. C’est le plus sûr.",
    "mini_exercice": "Produis une phrase affirmative, puis la même en question ou en négatif."
  },
  {
    "id": "particle_wa",
    "chapitre": "Particules",
    "titre": "は — thème de la phrase",
    "niveau": "A1",
    "explication": "は présente ce dont on parle : “quant à…”. Très fréquent pour ouvrir une phrase clairement.",
    "exemples": [
      {
        "jp": "今日は暑いですね。",
        "romaji": "Kyō wa atsui desu ne.",
        "fr": "Aujourd’hui, il fait chaud, n’est-ce pas ?"
      },
      {
        "jp": "私はまだ日本語が上手ではありません。",
        "romaji": "Watashi wa mada Nihongo ga jōzu dewa arimasen.",
        "fr": "Je ne suis pas encore bon en japonais."
      }
    ],
    "pieges": "は se prononce wa quand il est particule. Il ne répond pas toujours à “qui fait l’action ?” : il installe le thème.",
    "lien_vocab": [
      "今日",
      "暑い",
      "日本語"
    ],
    "lien_interactions": [],
    "expression": "は",
    "expression_romaji": "wa",
    "titre_fr": "thème de la phrase",
    "idee_cle": "は présente ce dont on parle : “quant à…”",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_ga",
    "chapitre": "Particules",
    "titre": "が — sujet, découverte, contraste",
    "niveau": "A1/A2",
    "explication": "が met souvent l’accent sur le sujet : ce qui existe, ce qui est découvert, ou ce qui se distingue.",
    "exemples": [
      {
        "jp": "雨が降っています。",
        "romaji": "Ame ga futte imasu.",
        "fr": "Il pleut."
      },
      {
        "jp": "この店が好きです。",
        "romaji": "Kono mise ga suki desu.",
        "fr": "J’aime ce restaurant / cette boutique."
      }
    ],
    "pieges": "La différence は / が est subtile. Pour débuter : は = thème connu ; が = sujet mis en relief ou information nouvelle.",
    "lien_vocab": [
      "雨",
      "店",
      "好き"
    ],
    "lien_interactions": [],
    "expression": "が",
    "expression_romaji": "ga",
    "titre_fr": "sujet, découverte, contraste",
    "idee_cle": "が met souvent l’accent sur le sujet : ce qui existe, ce qui est découvert, ou ce qui se distingue",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "wa_vs_ga",
    "chapitre": "Particules",
    "titre": "は / が — comparaison pratique",
    "niveau": "A2",
    "explication": "Point central du japonais. は pose le cadre ; が pointe souvent l’élément important.",
    "exemples": [
      {
        "jp": "日本語は難しいですが、おもしろいです。",
        "romaji": "Nihongo wa muzukashii desu ga, omoshiroi desu.",
        "fr": "Le japonais est difficile, mais intéressant."
      },
      {
        "jp": "この言い方が自然です。",
        "romaji": "Kono iikata ga shizen desu.",
        "fr": "Cette façon de dire est naturelle."
      }
    ],
    "pieges": "Ne pas chercher une équivalence mécanique avec le français. Observer les exemples est plus efficace que mémoriser une règle unique.",
    "lien_vocab": [
      "日本語",
      "難しい",
      "自然"
    ],
    "lien_interactions": [
      "comprendre_004"
    ],
    "expression": "は / が",
    "expression_romaji": "wa / ga",
    "titre_fr": "comparaison pratique",
    "idee_cle": "Point central du japonais",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_o",
    "chapitre": "Particules",
    "titre": "を — complément direct",
    "niveau": "A1",
    "explication": "を marque ce sur quoi porte directement l’action.",
    "exemples": [
      {
        "jp": "水をください。",
        "romaji": "Mizu o kudasai.",
        "fr": "De l’eau, s’il vous plaît."
      },
      {
        "jp": "日本語を勉強しています。",
        "romaji": "Nihongo o benkyō shite imasu.",
        "fr": "J’étudie le japonais."
      }
    ],
    "pieges": "を s’écrit wo mais se prononce généralement o. Ne pas le confondre avec お.",
    "lien_vocab": [
      "水",
      "ください",
      "勉強"
    ],
    "lien_interactions": [],
    "expression": "を",
    "expression_romaji": "o",
    "titre_fr": "complément direct",
    "idee_cle": "を marque ce sur quoi porte directement l’action",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_ni",
    "chapitre": "Particules",
    "titre": "に — direction, lieu d’existence, moment",
    "niveau": "A1/A2",
    "explication": "に sert pour un point d’arrivée, une présence, un destinataire ou un moment précis.",
    "exemples": [
      {
        "jp": "東京に行きます。",
        "romaji": "Tōkyō ni ikimasu.",
        "fr": "Je vais à Tokyo."
      },
      {
        "jp": "七時に会いましょう。",
        "romaji": "Shichi-ji ni aimashō.",
        "fr": "Retrouvons-nous à sept heures."
      }
    ],
    "pieges": "に indique souvent un point ciblé. Avec des lieux d’action, on utilise plutôt で.",
    "lien_vocab": [
      "東京",
      "行く",
      "七時",
      "会う"
    ],
    "lien_interactions": [],
    "expression": "に",
    "expression_romaji": "ni",
    "titre_fr": "direction, lieu d’existence, moment",
    "idee_cle": "に sert pour un point d’arrivée, une présence, un destinataire ou un moment précis",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_de",
    "chapitre": "Particules",
    "titre": "で — lieu de l’action, moyen",
    "niveau": "A1/A2",
    "explication": "で indique où se déroule une action ou par quel moyen elle se fait.",
    "exemples": [
      {
        "jp": "駅で待っています。",
        "romaji": "Eki de matte imasu.",
        "fr": "J’attends à la gare."
      },
      {
        "jp": "電車で行きます。",
        "romaji": "Densha de ikimasu.",
        "fr": "J’y vais en train."
      }
    ],
    "pieges": "に = point d’arrivée ou présence ; で = lieu où l’action se passe. C’est une distinction très utile en voyage.",
    "lien_vocab": [
      "駅",
      "待つ",
      "電車"
    ],
    "lien_interactions": [],
    "expression": "で",
    "expression_romaji": "de",
    "titre_fr": "lieu de l’action, moyen",
    "idee_cle": "で indique où se déroule une action ou par quel moyen elle se fait",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_e",
    "chapitre": "Particules",
    "titre": "へ — direction générale",
    "niveau": "A1",
    "explication": "へ indique une direction, souvent plus générale que に.",
    "exemples": [
      {
        "jp": "京都へ行きます。",
        "romaji": "Kyōto e ikimasu.",
        "fr": "Je vais vers Kyoto / à Kyoto."
      },
      {
        "jp": "ホテルへ戻ります。",
        "romaji": "Hoteru e modorimasu.",
        "fr": "Je retourne à l’hôtel."
      }
    ],
    "pieges": "へ s’écrit he mais se prononce e quand il est particule. に est souvent plus courant pour une destination concrète.",
    "lien_vocab": [
      "京都",
      "ホテル",
      "戻る"
    ],
    "lien_interactions": [],
    "expression": "へ",
    "expression_romaji": "e",
    "titre_fr": "direction générale",
    "idee_cle": "へ indique une direction, souvent plus générale que に",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_to",
    "chapitre": "Particules",
    "titre": "と — avec, et, citation",
    "niveau": "A1/A2",
    "explication": "と relie des noms, signifie “avec”, ou introduit ce que l’on dit/pense.",
    "exemples": [
      {
        "jp": "妻と旅行しています。",
        "romaji": "Tsuma to ryokō shite imasu.",
        "fr": "Je voyage avec ma femme."
      },
      {
        "jp": "おいしいと思います。",
        "romaji": "Oishii to omoimasu.",
        "fr": "Je pense que c’est bon."
      }
    ],
    "pieges": "Pour relier des phrases, と n’est pas toujours le bon choix. Pour “et puis” dans une suite d’actions, on utilise souvent la forme て.",
    "lien_vocab": [
      "妻",
      "旅行",
      "思う"
    ],
    "lien_interactions": [],
    "expression": "と",
    "expression_romaji": "to",
    "titre_fr": "avec, et, citation",
    "idee_cle": "と relie des noms, signifie “avec”, ou introduit ce que l’on dit/pense",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_mo",
    "chapitre": "Particules",
    "titre": "も — aussi, même",
    "niveau": "A1",
    "explication": "も ajoute une idée d’inclusion : “aussi”, “également”, parfois “même”.",
    "exemples": [
      {
        "jp": "私もそう思います。",
        "romaji": "Watashi mo sō omoimasu.",
        "fr": "Moi aussi, je le pense."
      },
      {
        "jp": "これもお願いします。",
        "romaji": "Kore mo onegai shimasu.",
        "fr": "Ceci aussi, s’il vous plaît."
      }
    ],
    "pieges": "も remplace souvent は ou が, il ne s’ajoute pas toujours par-dessus.",
    "lien_vocab": [
      "私",
      "これ",
      "お願いします"
    ],
    "lien_interactions": [
      "reagir_001"
    ],
    "expression": "も",
    "expression_romaji": "mo",
    "titre_fr": "aussi, même",
    "idee_cle": "も ajoute une idée d’inclusion : “aussi”, “également”, parfois “même”",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_no",
    "chapitre": "Particules",
    "titre": "の — possession, précision, lien entre noms",
    "niveau": "A1",
    "explication": "の relie deux noms : possession, appartenance, matière, thème ou précision.",
    "exemples": [
      {
        "jp": "日本の文化に興味があります。",
        "romaji": "Nihon no bunka ni kyōmi ga arimasu.",
        "fr": "Je m’intéresse à la culture japonaise."
      },
      {
        "jp": "妻の名前はプルームです。",
        "romaji": "Tsuma no namae wa Purūmu desu.",
        "fr": "Le prénom de ma femme est Plume."
      }
    ],
    "pieges": "Ne pas traduire seulement par “de”. の sert à créer des blocs nominaux très fréquents.",
    "lien_vocab": [
      "日本",
      "文化",
      "名前"
    ],
    "lien_interactions": [],
    "expression": "の",
    "expression_romaji": "no",
    "titre_fr": "possession, précision, lien entre noms",
    "idee_cle": "の relie deux noms : possession, appartenance, matière, thème ou précision",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_kara_made",
    "chapitre": "Particules",
    "titre": "から / まで — depuis / jusqu’à",
    "niveau": "A1",
    "explication": "から marque le point de départ ; まで marque le point d’arrivée ou la limite.",
    "exemples": [
      {
        "jp": "フランスから来ました。",
        "romaji": "Furansu kara kimashita.",
        "fr": "Je viens de France."
      },
      {
        "jp": "駅までお願いします。",
        "romaji": "Eki made onegai shimasu.",
        "fr": "Jusqu’à la gare, s’il vous plaît."
      }
    ],
    "pieges": "から peut aussi signifier “parce que” dans d’autres constructions. Le contexte aide beaucoup.",
    "lien_vocab": [
      "フランス",
      "来る",
      "駅"
    ],
    "lien_interactions": [],
    "expression": "から / まで",
    "expression_romaji": "kara / made",
    "titre_fr": "depuis / jusqu’à",
    "idee_cle": "から marque le point de départ ; まで marque le point d’arrivée ou la limite",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "particle_yori_hodo",
    "chapitre": "Particules",
    "titre": "より / ほど — comparaison",
    "niveau": "A2",
    "explication": "より sert à comparer ; ほど apparaît souvent dans les comparaisons négatives.",
    "exemples": [
      {
        "jp": "東京はパリより大きいです。",
        "romaji": "Tōkyō wa Pari yori ōkii desu.",
        "fr": "Tokyo est plus grand que Paris."
      },
      {
        "jp": "フランスほど寒くないかもしれません。",
        "romaji": "Furansu hodo samuku nai kamo shiremasen.",
        "fr": "Ce n’est peut-être pas aussi froid qu’en France."
      }
    ],
    "pieges": "La structure est différente du français. Pour débuter, mémoriser des modèles entiers est plus efficace.",
    "lien_vocab": [
      "東京",
      "パリ",
      "大きい",
      "寒い"
    ],
    "lien_interactions": [],
    "expression": "より / ほど",
    "expression_romaji": "yori / hodo",
    "titre_fr": "comparaison",
    "idee_cle": "より sert à comparer ; ほど apparaît souvent dans les comparaisons négatives",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "sentence_particles_ne_yo",
    "chapitre": "Particules",
    "titre": "ね / よ — nuance en fin de phrase",
    "niveau": "A1/A2",
    "explication": "ね cherche l’accord ou adoucit ; よ apporte une information ou insiste légèrement.",
    "exemples": [
      {
        "jp": "きれいですね。",
        "romaji": "Kirei desu ne.",
        "fr": "C’est beau, n’est-ce pas / hein ?"
      },
      {
        "jp": "このお店は有名ですよ。",
        "romaji": "Kono o-mise wa yūmei desu yo.",
        "fr": "Ce restaurant est connu, vous savez."
      }
    ],
    "pieges": "よ peut sonner trop affirmatif si on l’utilise mal. ね est souvent plus doux dans une première conversation.",
    "lien_vocab": [
      "きれい",
      "有名",
      "店"
    ],
    "lien_interactions": [
      "reagir_002"
    ],
    "expression": "ね / よ",
    "expression_romaji": "ne / yo",
    "titre_fr": "nuance en fin de phrase",
    "idee_cle": "ね cherche l’accord ou adoucit ; よ apporte une information ou insiste légèrement",
    "mode_emploi": "Commence par repérer le mot placé juste avant la particule : c’est ce mot que la particule organise.",
    "reflexe_debutant": "Demande-toi : thème, sujet, objet, lieu, direction, moyen ou appartenance ?",
    "mini_exercice": "Prends une phrase exemple et entoure mentalement la particule puis le mot qu’elle marque."
  },
  {
    "id": "demonstratives_kore",
    "chapitre": "Démonstratifs",
    "titre": "これ / それ / あれ / どれ — ceci, cela, lequel",
    "niveau": "A1",
    "explication": "Série こ・そ・あ・ど pour désigner une chose. こ près de moi, そ près de vous, あ loin des deux, ど interrogatif.",
    "exemples": [
      {
        "jp": "これは何ですか。",
        "romaji": "Kore wa nan desu ka.",
        "fr": "Qu’est-ce que c’est ?"
      },
      {
        "jp": "それをください。",
        "romaji": "Sore o kudasai.",
        "fr": "Donnez-moi cela, s’il vous plaît."
      }
    ],
    "pieges": "それ peut aussi reprendre ce que l’autre vient de dire, pas seulement un objet proche de lui.",
    "lien_vocab": [
      "これ",
      "それ",
      "あれ",
      "どれ"
    ],
    "lien_interactions": [],
    "expression": "これ / それ / あれ / どれ",
    "expression_romaji": "kore / sore / are / dore",
    "titre_fr": "ceci, cela, lequel",
    "idee_cle": "Série こ・そ・あ・ど pour désigner une chose",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "demonstratives_kono",
    "chapitre": "Démonstratifs",
    "titre": "この / その / あの / どの — ce… + nom",
    "niveau": "A1",
    "explication": "Même logique, mais cette série doit être suivie d’un nom.",
    "exemples": [
      {
        "jp": "この料理は何ですか。",
        "romaji": "Kono ryōri wa nan desu ka.",
        "fr": "Quel est ce plat ?"
      },
      {
        "jp": "その言い方は自然ですか。",
        "romaji": "Sono iikata wa shizen desu ka.",
        "fr": "Cette façon de dire est-elle naturelle ?"
      }
    ],
    "pieges": "Ne pas dire この seul : il faut un nom après. Pour “ceci” seul, utiliser これ.",
    "lien_vocab": [
      "この",
      "料理",
      "言い方",
      "自然"
    ],
    "lien_interactions": [
      "comprendre_004"
    ],
    "expression": "この / その / あの / どの",
    "expression_romaji": "kono / sono / ano / dono",
    "titre_fr": "ce… + nom",
    "idee_cle": "Même logique, mais cette série doit être suivie d’un nom",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "demonstratives_koko",
    "chapitre": "Démonstratifs",
    "titre": "ここ / そこ / あそこ / どこ — lieux",
    "niveau": "A1",
    "explication": "Série pour désigner des lieux : ici, là, là-bas, où.",
    "exemples": [
      {
        "jp": "ここは浅草です。",
        "romaji": "Koko wa Asakusa desu.",
        "fr": "Ici, c’est Asakusa."
      },
      {
        "jp": "トイレはどこですか。",
        "romaji": "Toire wa doko desu ka.",
        "fr": "Où sont les toilettes ?"
      }
    ],
    "pieges": "あそこ désigne un lieu éloigné des deux personnes. Dans un contexte poli, どちら peut être plus élégant que どこ.",
    "lien_vocab": [
      "ここ",
      "そこ",
      "あそこ",
      "どこ"
    ],
    "lien_interactions": [],
    "expression": "ここ / そこ / あそこ / どこ",
    "expression_romaji": "koko / soko / asoko / doko",
    "titre_fr": "lieux",
    "idee_cle": "Série pour désigner des lieux : ici, là, là-bas, où",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "demonstratives_kochira",
    "chapitre": "Démonstratifs",
    "titre": "こちら / そちら / あちら / どちら — version polie",
    "niveau": "A1/A2",
    "explication": "Forme plus polie pour une direction, un lieu, une personne ou un choix.",
    "exemples": [
      {
        "jp": "こちらは妻です。",
        "romaji": "Kochira wa tsuma desu.",
        "fr": "Voici ma femme."
      },
      {
        "jp": "入口はどちらですか。",
        "romaji": "Iriguchi wa dochira desu ka.",
        "fr": "Où est l’entrée, s’il vous plaît ?"
      }
    ],
    "pieges": "こちら peut désigner “cette personne” de façon polie, mais il faut rester attentif au contexte.",
    "lien_vocab": [
      "こちら",
      "入口",
      "妻"
    ],
    "lien_interactions": [],
    "expression": "こちら / そちら / あちら / どちら",
    "expression_romaji": "kochira / sochira / achira / dochira",
    "titre_fr": "version polie",
    "idee_cle": "Forme plus polie pour une direction, un lieu, une personne ou un choix",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "demonstratives_konna",
    "chapitre": "Démonstratifs",
    "titre": "こんな / そんな / あんな / どんな — ce genre de",
    "niveau": "A2",
    "explication": "Série pour parler d’un type, d’une manière ou d’une qualité.",
    "exemples": [
      {
        "jp": "こんな料理は初めてです。",
        "romaji": "Konna ryōri wa hajimete desu.",
        "fr": "C’est la première fois que je vois / goûte ce genre de plat."
      },
      {
        "jp": "どんな音楽が好きですか。",
        "romaji": "Donna ongaku ga suki desu ka.",
        "fr": "Quel genre de musique aimez-vous ?"
      }
    ],
    "pieges": "そんな peut parfois sonner comme “ce genre de chose-là” avec une nuance émotionnelle ; attention selon le ton.",
    "lien_vocab": [
      "料理",
      "初めて",
      "音楽",
      "好き"
    ],
    "lien_interactions": [],
    "expression": "こんな / そんな / あんな / どんな",
    "expression_romaji": "konna / sonna / anna / donna",
    "titre_fr": "ce genre de",
    "idee_cle": "Série pour parler d’un type, d’une manière ou d’une qualité",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "te_form_kudasai",
    "chapitre": "Formes utiles",
    "titre": "〜てください — demander de faire",
    "niveau": "A1/A2",
    "explication": "Forme pratique pour demander une action, surtout en situation concrète.",
    "exemples": [
      {
        "jp": "もう一度言ってください。",
        "romaji": "Mō ichido itte kudasai.",
        "fr": "Dites-le encore une fois, s’il vous plaît."
      },
      {
        "jp": "ゆっくり話してください。",
        "romaji": "Yukkuri hanashite kudasai.",
        "fr": "Parlez lentement, s’il vous plaît."
      }
    ],
    "pieges": "ください est poli, mais peut rester direct. Pour adoucir, préférer 〜てもらえますか ou 〜ていただけますか.",
    "lien_vocab": [
      "もう一度",
      "ゆっくり",
      "話す"
    ],
    "lien_interactions": [
      "comprendre_001"
    ],
    "expression": "〜てください",
    "expression_romaji": "te kudasai",
    "titre_fr": "demander de faire",
    "idee_cle": "Forme pratique pour demander une action, surtout en situation concrète",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "te_moraemasu_ka",
    "chapitre": "Formes utiles",
    "titre": "〜てもらえますか — pourriez-vous… ?",
    "niveau": "A2",
    "explication": "Demande plus douce que 〜てください, très utile pour demander de l’aide.",
    "exemples": [
      {
        "jp": "もう少しゆっくり話してもらえますか。",
        "romaji": "Mō sukoshi yukkuri hanashite moraemasu ka.",
        "fr": "Pourriez-vous parler un peu plus lentement ?"
      },
      {
        "jp": "書いてもらえますか。",
        "romaji": "Kaite moraemasu ka.",
        "fr": "Pourriez-vous l’écrire ?"
      }
    ],
    "pieges": "Encore plus poli : 〜ていただけますか. Mais 〜てもらえますか est déjà très utile et naturel.",
    "lien_vocab": [
      "ゆっくり",
      "書く",
      "少し"
    ],
    "lien_interactions": [
      "comprendre_002"
    ],
    "expression": "〜てもらえますか",
    "expression_romaji": "te moraemasu ka",
    "titre_fr": "pourriez-vous… ?",
    "idee_cle": "Demande plus douce que 〜てください, très utile pour demander de l’aide",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "tai_desu",
    "chapitre": "Formes utiles",
    "titre": "〜たいです — vouloir faire",
    "niveau": "A1/A2",
    "explication": "Exprime ce que l’on veut faire, de façon simple.",
    "exemples": [
      {
        "jp": "日本語で少し話したいです。",
        "romaji": "Nihongo de sukoshi hanashitai desu.",
        "fr": "J’aimerais parler un peu en japonais."
      },
      {
        "jp": "これを食べてみたいです。",
        "romaji": "Kore o tabete mitai desu.",
        "fr": "J’aimerais goûter ça."
      }
    ],
    "pieges": "Pour parler du désir d’une autre personne, attention : on utilise souvent 〜たがっています ou une formulation indirecte.",
    "lien_vocab": [
      "話す",
      "食べる",
      "少し"
    ],
    "lien_interactions": [],
    "expression": "〜たいです",
    "expression_romaji": "tai desu",
    "titre_fr": "vouloir faire",
    "idee_cle": "Exprime ce que l’on veut faire, de façon simple",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "te_miru",
    "chapitre": "Formes utiles",
    "titre": "〜てみる — essayer de faire",
    "niveau": "A2",
    "explication": "Très utile pour parler d’une tentative ou d’une expérience.",
    "exemples": [
      {
        "jp": "日本語で言ってみます。",
        "romaji": "Nihongo de itte mimasu.",
        "fr": "Je vais essayer de le dire en japonais."
      },
      {
        "jp": "この料理を食べてみたいです。",
        "romaji": "Kono ryōri o tabete mitai desu.",
        "fr": "J’aimerais essayer ce plat."
      }
    ],
    "pieges": "みる n’a pas ici le sens de “voir” au sens visuel, mais d’essayer.",
    "lien_vocab": [
      "言う",
      "料理",
      "食べる"
    ],
    "lien_interactions": [
      "comprendre_004"
    ],
    "expression": "〜てみる",
    "expression_romaji": "te miru",
    "titre_fr": "essayer de faire",
    "idee_cle": "Très utile pour parler d’une tentative ou d’une expérience",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "n_desu",
    "chapitre": "Nuancer",
    "titre": "〜んです / 〜のです — expliquer, contextualiser",
    "niveau": "A2/B1",
    "explication": "Ajoute une nuance d’explication, de contexte ou de demande d’explication.",
    "exemples": [
      {
        "jp": "日本語を勉強しているんです。",
        "romaji": "Nihongo o benkyō shite iru n desu.",
        "fr": "C’est que j’étudie le japonais."
      },
      {
        "jp": "どうしてそう思うんですか。",
        "romaji": "Dōshite sō omou n desu ka.",
        "fr": "Pourquoi pensez-vous cela ?"
      }
    ],
    "pieges": "Peut sonner insistant si la question touche à un sujet personnel. À manier avec douceur.",
    "lien_vocab": [
      "どうして",
      "思う",
      "勉強"
    ],
    "lien_interactions": [
      "ouvrir_sujet_002"
    ],
    "expression": "〜んです / 〜のです",
    "expression_romaji": "n desu / no desu",
    "titre_fr": "expliquer, contextualiser",
    "idee_cle": "Ajoute une nuance d’explication, de contexte ou de demande d’explication",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "kedo_ga_soft",
    "chapitre": "Nuancer",
    "titre": "〜けど / 〜が — mais, amorce douce",
    "niveau": "A2",
    "explication": "Permet d’introduire une nuance ou de préparer une question sans être abrupt.",
    "exemples": [
      {
        "jp": "少し聞きたいんですが、今よろしいですか。",
        "romaji": "Sukoshi kikitai n desu ga, ima yoroshii desu ka.",
        "fr": "J’aimerais demander une petite chose, est-ce que c’est le bon moment ?"
      },
      {
        "jp": "日本のことはまだよく分かりませんが、興味があります。",
        "romaji": "Nihon no koto wa mada yoku wakarimasen ga, kyōmi ga arimasu.",
        "fr": "Je ne connais pas encore bien le Japon, mais cela m’intéresse."
      }
    ],
    "pieges": "が est plus poli / neutre que けど. けど est très courant, mais un peu plus conversationnel.",
    "lien_vocab": [
      "聞く",
      "今",
      "興味"
    ],
    "lien_interactions": [
      "ouvrir_sujet_001"
    ],
    "expression": "〜けど / 〜が",
    "expression_romaji": "kedo / ga",
    "titre_fr": "mais, amorce douce",
    "idee_cle": "Permet d’introduire une nuance ou de préparer une question sans être abrupt",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "node_kara",
    "chapitre": "Nuancer",
    "titre": "ので / から — parce que",
    "niveau": "A2",
    "explication": "Exprime la cause. ので est souvent plus doux et explicatif ; から peut être plus direct.",
    "exemples": [
      {
        "jp": "まだ初心者なので、ゆっくりお願いします。",
        "romaji": "Mada shoshinsha na node, yukkuri onegai shimasu.",
        "fr": "Comme je suis encore débutant, lentement s’il vous plaît."
      },
      {
        "jp": "暑いですから、水を飲みましょう。",
        "romaji": "Atsui desu kara, mizu o nomimashō.",
        "fr": "Comme il fait chaud, buvons de l’eau."
      }
    ],
    "pieges": "Pour demander quelque chose avec délicatesse, ので sonne souvent plus naturel que から.",
    "lien_vocab": [
      "初心者",
      "ゆっくり",
      "暑い"
    ],
    "lien_interactions": [
      "comprendre_003"
    ],
    "expression": "ので / から",
    "expression_romaji": "node / kara",
    "titre_fr": "parce que",
    "idee_cle": "Exprime la cause",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "hou_ga_ii",
    "chapitre": "Nuancer",
    "titre": "〜ほうがいいです — il vaut mieux",
    "niveau": "A2",
    "explication": "Donne un conseil ou une préférence, à formuler prudemment.",
    "exemples": [
      {
        "jp": "無理しないほうがいいですね。",
        "romaji": "Muri shinai hō ga ii desu ne.",
        "fr": "Il vaut mieux ne pas se forcer, n’est-ce pas."
      },
      {
        "jp": "この言い方のほうが自然だと思います。",
        "romaji": "Kono iikata no hō ga shizen da to omoimasu.",
        "fr": "Je pense que cette formulation est plus naturelle."
      }
    ],
    "pieges": "Peut sonner directif. Ajouter と思います ou かもしれません adoucit.",
    "lien_vocab": [
      "無理",
      "言い方",
      "自然"
    ],
    "lien_interactions": [
      "nuancer_002"
    ],
    "expression": "〜ほうがいいです",
    "expression_romaji": "hō ga ii desu",
    "titre_fr": "il vaut mieux",
    "idee_cle": "Donne un conseil ou une préférence, à formuler prudemment",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "comparaison_youni",
    "chapitre": "Nuancer",
    "titre": "〜ように — comme, afin de",
    "niveau": "A2/B1",
    "explication": "Structure utile pour comparer ou exprimer un objectif.",
    "exemples": [
      {
        "jp": "日本人のように自然に話したいです。",
        "romaji": "Nihonjin no yō ni shizen ni hanashitai desu.",
        "fr": "J’aimerais parler naturellement comme un Japonais."
      },
      {
        "jp": "失礼にならないように気をつけたいです。",
        "romaji": "Shitsurei ni naranai yō ni ki o tsuketai desu.",
        "fr": "Je voudrais faire attention à ne pas être impoli."
      }
    ],
    "pieges": "ように a plusieurs usages. Ici, retenir surtout “comme” et “afin de / pour que”.",
    "lien_vocab": [
      "自然",
      "失礼",
      "気をつける"
    ],
    "lien_interactions": [
      "prudence_002"
    ],
    "expression": "〜ように",
    "expression_romaji": "yō ni",
    "titre_fr": "comme, afin de",
    "idee_cle": "Structure utile pour comparer ou exprimer un objectif",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "ni_tsuite",
    "chapitre": "Interaction",
    "titre": "〜について — à propos de, au sujet de",
    "niveau": "A2",
    "explication": "Structure indispensable pour cadrer une question sans être trop directe.",
    "exemples": [
      {
        "jp": "日本の日常生活について、少し質問してもいいですか。",
        "romaji": "Nihon no nichijō seikatsu ni tsuite, sukoshi shitsumon shite mo ii desu ka.",
        "fr": "Puis-je poser une petite question sur la vie quotidienne au Japon ?"
      },
      {
        "jp": "エネルギーについて、どんなことが話題になりますか。",
        "romaji": "Enerugī ni tsuite, donna koto ga wadai ni narimasu ka.",
        "fr": "À propos de l’énergie, quels sujets font parler ?"
      }
    ],
    "pieges": "Ne pas l’utiliser pour tout : parfois は suffit. Mais pour un sujet de conversation, c’est très clair.",
    "lien_vocab": [
      "日本",
      "日常生活",
      "質問",
      "話題"
    ],
    "lien_interactions": [
      "ouvrir_sujet_003",
      "ecologie_003"
    ],
    "expression": "〜について",
    "expression_romaji": "ni tsuite",
    "titre_fr": "à propos de, au sujet de",
    "idee_cle": "Structure indispensable pour cadrer une question sans être trop directe",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "moshi_yokereba",
    "chapitre": "Interaction",
    "titre": "もしよければ — si cela vous va",
    "niveau": "A2",
    "explication": "Formule très douce pour laisser à l’autre la liberté de répondre ou non.",
    "exemples": [
      {
        "jp": "もしよければ、少し教えてください。",
        "romaji": "Moshi yokereba, sukoshi oshiete kudasai.",
        "fr": "Si cela vous va, expliquez-moi un peu."
      },
      {
        "jp": "もしよければ、日本での生活について聞いてもいいですか。",
        "romaji": "Moshi yokereba, Nihon de no seikatsu ni tsuite kiite mo ii desu ka.",
        "fr": "Si cela vous va, puis-je vous poser une question sur la vie au Japon ?"
      }
    ],
    "pieges": "Très utile avant une question personnelle ou culturelle. Ne force pas la réponse.",
    "lien_vocab": [
      "教える",
      "生活",
      "聞く"
    ],
    "lien_interactions": [
      "prudence_001"
    ],
    "expression": "もしよければ",
    "expression_romaji": "moshi yokereba",
    "titre_fr": "si cela vous va",
    "idee_cle": "Formule très douce pour laisser à l’autre la liberté de répondre ou non",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "shitsurei_ni_naru",
    "chapitre": "Interaction",
    "titre": "失礼になるかもしれませんが — peut-être indiscret",
    "niveau": "A2/B1",
    "explication": "Formule de prudence avant une question délicate.",
    "exemples": [
      {
        "jp": "失礼になるかもしれませんが、少し聞いてもいいですか。",
        "romaji": "Shitsurei ni naru kamo shiremasen ga, sukoshi kiite mo ii desu ka.",
        "fr": "C’est peut-être indiscret, mais puis-je demander une petite chose ?"
      },
      {
        "jp": "失礼だったら、答えなくても大丈夫です。",
        "romaji": "Shitsurei dattara, kotaenakute mo daijōbu desu.",
        "fr": "Si c’est indiscret, vous n’êtes pas obligé de répondre."
      }
    ],
    "pieges": "À utiliser avec tact. La formule ne rend pas automatiquement toutes les questions acceptables.",
    "lien_vocab": [
      "失礼",
      "答える",
      "大丈夫"
    ],
    "lien_interactions": [
      "prudence_002"
    ],
    "expression": "失礼になるかもしれませんが",
    "expression_romaji": "shitsurei ni naru kamo shiremasen ga",
    "titre_fr": "peut-être indiscret",
    "idee_cle": "Formule de prudence avant une question délicate",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "iikata",
    "chapitre": "Interaction",
    "titre": "言い方 — façon de dire",
    "niveau": "A2",
    "explication": "Très utile pour demander une correction naturelle sans entrer dans une grammaire abstraite.",
    "exemples": [
      {
        "jp": "この言い方は自然ですか。",
        "romaji": "Kono iikata wa shizen desu ka.",
        "fr": "Cette façon de dire est-elle naturelle ?"
      },
      {
        "jp": "もっと自然な言い方がありますか。",
        "romaji": "Motto shizen na iikata ga arimasu ka.",
        "fr": "Existe-t-il une façon plus naturelle de dire cela ?"
      }
    ],
    "pieges": "Très bon réflexe pour progresser. La réponse pourra être difficile à comprendre : demander un exemple simple.",
    "lien_vocab": [
      "言い方",
      "自然",
      "もっと"
    ],
    "lien_interactions": [
      "comprendre_004"
    ],
    "expression": "言い方",
    "expression_romaji": "iikata",
    "titre_fr": "façon de dire",
    "idee_cle": "Très utile pour demander une correction naturelle sans entrer dans une grammaire abstraite",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "nom_no_nom",
    "chapitre": "Noms et détermination",
    "titre": "Nom の Nom — possession et précision",
    "niveau": "A1",
    "explication": "の relie deux noms. Il peut exprimer la possession, l’appartenance, la matière, le type ou une précision.",
    "exemples": [
      {
        "jp": "これは私の本です。",
        "romaji": "Kore wa watashi no hon desu.",
        "fr": "C’est mon livre."
      },
      {
        "jp": "東京の友だちに会います。",
        "romaji": "Tōkyō no tomodachi ni aimasu.",
        "fr": "Je vais rencontrer un ami de Tokyo."
      }
    ],
    "pieges": "Ne pas traduire mécaniquement par « de ». の sert surtout à coller deux noms de façon naturelle.",
    "lien_vocab": [
      "私",
      "本",
      "東京",
      "友だち"
    ],
    "lien_interactions": [],
    "expression": "名詞 の 名詞",
    "expression_romaji": "meishi no meishi",
    "titre_fr": "nom de / précision",
    "idee_cle": "の relie deux noms",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "nom_to_nom_ya",
    "chapitre": "Noms et détermination",
    "titre": "と / や — énumérer des noms",
    "niveau": "A1/A2",
    "explication": "と énumère de façon complète. や donne une liste ouverte : A, B, etc.",
    "exemples": [
      {
        "jp": "すしと天ぷらが好きです。",
        "romaji": "Sushi to tenpura ga suki desu.",
        "fr": "J’aime les sushis et les tempura."
      },
      {
        "jp": "京都や奈良に行きたいです。",
        "romaji": "Kyōto ya Nara ni ikitai desu.",
        "fr": "J’aimerais aller à Kyoto, Nara, etc."
      }
    ],
    "pieges": "Pour dire « avec quelqu’un », と fonctionne aussi : 友だちと行きます.",
    "lien_vocab": [
      "すし",
      "天ぷら",
      "京都",
      "奈良"
    ],
    "lien_interactions": [],
    "expression": "A と B / A や B",
    "expression_romaji": "A to B / A ya B",
    "titre_fr": "et / entre autres",
    "idee_cle": "と énumère de façon complète",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "adjectifs_i_present",
    "chapitre": "Adjectifs",
    "titre": "Adjectifs en い — présent affirmatif",
    "niveau": "A1",
    "explication": "Les adjectifs en い se placent directement avant un nom ou devant です en phrase polie.",
    "exemples": [
      {
        "jp": "今日は暑いです。",
        "romaji": "Kyō wa atsui desu.",
        "fr": "Aujourd’hui, il fait chaud."
      },
      {
        "jp": "これはおいしい料理です。",
        "romaji": "Kore wa oishii ryōri desu.",
        "fr": "C’est un plat délicieux."
      }
    ],
    "pieges": "Le い fait partie de l’adjectif. Ne pas ajouter な après un adjectif en い.",
    "lien_vocab": [
      "暑い",
      "おいしい",
      "料理"
    ],
    "lien_interactions": [],
    "expression": "高いです",
    "expression_romaji": "takai desu",
    "titre_fr": "adjectif en i",
    "idee_cle": "Les adjectifs en い se placent directement avant un nom ou devant です en phrase polie",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "adjectifs_i_negatif",
    "chapitre": "Adjectifs",
    "titre": "Adjectifs en い — négatif",
    "niveau": "A1/A2",
    "explication": "Pour nier un adjectif en い, on remplace le い final par くないです.",
    "exemples": [
      {
        "jp": "今日は寒くないです。",
        "romaji": "Kyō wa samuku nai desu.",
        "fr": "Aujourd’hui, il ne fait pas froid."
      },
      {
        "jp": "この料理は辛くないです。",
        "romaji": "Kono ryōri wa karaku nai desu.",
        "fr": "Ce plat n’est pas épicé."
      }
    ],
    "pieges": "いい devient よくない, pas いくない.",
    "lien_vocab": [
      "寒い",
      "辛い",
      "いい"
    ],
    "lien_interactions": [],
    "expression": "高くないです",
    "expression_romaji": "takaku nai desu",
    "titre_fr": "négatif des adjectifs en i",
    "idee_cle": "Pour nier un adjectif en い, on remplace le い final par くないです",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "adjectifs_i_passe",
    "chapitre": "Adjectifs",
    "titre": "Adjectifs en い — passé",
    "niveau": "A2",
    "explication": "Au passé affirmatif, on remplace le い final par かったです. Au passé négatif : くなかったです.",
    "exemples": [
      {
        "jp": "昨日は暑かったです。",
        "romaji": "Kinō wa atsukatta desu.",
        "fr": "Hier, il faisait chaud."
      },
      {
        "jp": "その映画は長くなかったです。",
        "romaji": "Sono eiga wa nagaku nakatta desu.",
        "fr": "Ce film n’était pas long."
      }
    ],
    "pieges": "Ne pas dire 暑いでした. Avec un adjectif en い, le passé est dans l’adjectif.",
    "lien_vocab": [
      "昨日",
      "暑い",
      "映画",
      "長い"
    ],
    "lien_interactions": [],
    "expression": "高かったです",
    "expression_romaji": "takakatta desu",
    "titre_fr": "passé des adjectifs en i",
    "idee_cle": "Au passé affirmatif, on remplace le い final par かったです",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "adjectifs_na",
    "chapitre": "Adjectifs",
    "titre": "Adjectifs en な — calme, pratique, célèbre",
    "niveau": "A1/A2",
    "explication": "Les adjectifs en な prennent な devant un nom, mais pas devant です.",
    "exemples": [
      {
        "jp": "静かな場所ですね。",
        "romaji": "Shizuka na basho desu ne.",
        "fr": "C’est un endroit calme, n’est-ce pas."
      },
      {
        "jp": "この町は有名です。",
        "romaji": "Kono machi wa yūmei desu.",
        "fr": "Cette ville est célèbre."
      }
    ],
    "pieges": "Dire 静かなです est incorrect. Devant です : 静かです.",
    "lien_vocab": [
      "静か",
      "場所",
      "町",
      "有名"
    ],
    "lien_interactions": [],
    "expression": "静かな町です",
    "expression_romaji": "shizuka na machi desu",
    "titre_fr": "adjectif en na",
    "idee_cle": "Les adjectifs en な prennent な devant un nom, mais pas devant です",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "adjectifs_na_negatif_passe",
    "chapitre": "Adjectifs",
    "titre": "Adjectifs en な — négatif et passé",
    "niveau": "A2",
    "explication": "Les adjectifs en な se conjuguent comme des noms avec です : ではありません, でした, ではありませんでした.",
    "exemples": [
      {
        "jp": "駅は静かではありません。",
        "romaji": "Eki wa shizuka dewa arimasen.",
        "fr": "La gare n’est pas calme."
      },
      {
        "jp": "その店は便利でした。",
        "romaji": "Sono mise wa benri deshita.",
        "fr": "Ce magasin était pratique."
      }
    ],
    "pieges": "Dans la conversation, じゃありません est plus courant que ではありません, mais un peu moins formel.",
    "lien_vocab": [
      "駅",
      "店",
      "便利"
    ],
    "lien_interactions": [],
    "expression": "静かではありません / 静かでした",
    "expression_romaji": "shizuka dewa arimasen / shizuka deshita",
    "titre_fr": "négation et passé",
    "idee_cle": "Les adjectifs en な se conjuguent comme des noms avec です : ではありません, でした, ではありませんでした",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "suki_kirai",
    "chapitre": "Adjectifs",
    "titre": "好き / 嫌い — aimer, ne pas aimer",
    "niveau": "A1",
    "explication": "好き et 嫌い fonctionnent grammaticalement comme des adjectifs en な. Ce qu’on aime est souvent marqué par が.",
    "exemples": [
      {
        "jp": "日本料理が好きです。",
        "romaji": "Nihon ryōri ga suki desu.",
        "fr": "J’aime la cuisine japonaise."
      },
      {
        "jp": "辛いものはあまり好きではありません。",
        "romaji": "Karai mono wa amari suki dewa arimasen.",
        "fr": "Je n’aime pas beaucoup les choses épicées."
      }
    ],
    "pieges": "Pour être poli, éviter 嫌いです trop frontal. Dire あまり好きではありません est plus doux.",
    "lien_vocab": [
      "日本料理",
      "辛い",
      "あまり"
    ],
    "lien_interactions": [],
    "expression": "〜が好きです",
    "expression_romaji": "ga suki desu",
    "titre_fr": "aimer / ne pas aimer",
    "idee_cle": "好き et 嫌い fonctionnent grammaticalement comme des adjectifs en な",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "jouzu_heta",
    "chapitre": "Adjectifs",
    "titre": "上手 / 下手 — être doué ou pas",
    "niveau": "A2",
    "explication": "上手 et 下手 indiquent l’habileté. Le domaine est souvent marqué par が.",
    "exemples": [
      {
        "jp": "日本語がまだ上手ではありません。",
        "romaji": "Nihongo ga mada jōzu dewa arimasen.",
        "fr": "Je ne suis pas encore doué en japonais."
      },
      {
        "jp": "料理が上手ですね。",
        "romaji": "Ryōri ga jōzu desu ne.",
        "fr": "Vous cuisinez bien, n’est-ce pas."
      }
    ],
    "pieges": "Éviter de dire 自分は上手です pour soi-même : cela peut paraître prétentieux.",
    "lien_vocab": [
      "日本語",
      "料理",
      "まだ"
    ],
    "lien_interactions": [],
    "expression": "〜が上手です",
    "expression_romaji": "ga jōzu desu",
    "titre_fr": "être doué",
    "idee_cle": "上手 et 下手 indiquent l’habileté",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "aru_iru",
    "chapitre": "Existence et localisation",
    "titre": "あります / います — il y a, exister",
    "niveau": "A1",
    "explication": "あります s’utilise pour les choses et les plantes. います s’utilise pour les personnes et les animaux.",
    "exemples": [
      {
        "jp": "近くにコンビニがあります。",
        "romaji": "Chikaku ni konbini ga arimasu.",
        "fr": "Il y a un konbini près d’ici."
      },
      {
        "jp": "駅に人がたくさんいます。",
        "romaji": "Eki ni hito ga takusan imasu.",
        "fr": "Il y a beaucoup de monde à la gare."
      }
    ],
    "pieges": "Le lieu d’existence prend に, pas で.",
    "lien_vocab": [
      "近く",
      "コンビニ",
      "駅",
      "人"
    ],
    "lien_interactions": [],
    "expression": "あります / います",
    "expression_romaji": "arimasu / imasu",
    "titre_fr": "il y a",
    "idee_cle": "あります s’utilise pour les choses et les plantes",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "location_ni_arimasu",
    "chapitre": "Existence et localisation",
    "titre": "〜にあります / 〜にいます — se trouver à",
    "niveau": "A1/A2",
    "explication": "Pour dire où se trouve quelque chose ou quelqu’un, on utilise lieu + に + あります / います.",
    "exemples": [
      {
        "jp": "ホテルは駅の近くにあります。",
        "romaji": "Hoteru wa eki no chikaku ni arimasu.",
        "fr": "L’hôtel se trouve près de la gare."
      },
      {
        "jp": "友だちは東京にいます。",
        "romaji": "Tomodachi wa Tōkyō ni imasu.",
        "fr": "Mon ami est à Tokyo."
      }
    ],
    "pieges": "で marque le lieu d’une action ; に marque ici le lieu d’existence.",
    "lien_vocab": [
      "ホテル",
      "駅",
      "近く",
      "友だち"
    ],
    "lien_interactions": [],
    "expression": "場所 に あります",
    "expression_romaji": "basho ni arimasu",
    "titre_fr": "se trouver",
    "idee_cle": "Pour dire où se trouve quelque chose ou quelqu’un, on utilise lieu + に + あります / います",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "koko_de_action",
    "chapitre": "Existence et localisation",
    "titre": "ここで / ここに — action ou existence",
    "niveau": "A1/A2",
    "explication": "で indique où l’action se passe. に indique où quelque chose se trouve ou arrive.",
    "exemples": [
      {
        "jp": "ここで食べます。",
        "romaji": "Koko de tabemasu.",
        "fr": "Je mange ici."
      },
      {
        "jp": "ここに座ってもいいですか。",
        "romaji": "Koko ni suwatte mo ii desu ka.",
        "fr": "Est-ce que je peux m’asseoir ici ?"
      }
    ],
    "pieges": "Beaucoup d’erreurs viennent de la confusion entre action (で) et existence / destination (に).",
    "lien_vocab": [
      "ここ",
      "食べる",
      "座る"
    ],
    "lien_interactions": [],
    "expression": "ここで / ここに",
    "expression_romaji": "koko de / koko ni",
    "titre_fr": "ici : action ou existence",
    "idee_cle": "で indique où l’action se passe",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "verb_groupes",
    "chapitre": "Verbes",
    "titre": "Les trois groupes de verbes",
    "niveau": "A1/A2",
    "explication": "Pour conjuguer, il faut reconnaître trois familles : verbes en る de type ichidan, verbes godan, et deux irréguliers principaux : する et 来る.",
    "exemples": [
      {
        "jp": "食べるは一段動詞です。",
        "romaji": "Taberu wa ichidan dōshi desu.",
        "fr": "食べる est un verbe ichidan."
      },
      {
        "jp": "行くは五段動詞です。",
        "romaji": "Iku wa godan dōshi desu.",
        "fr": "行く est un verbe godan."
      }
    ],
    "pieges": "Tous les verbes en る ne sont pas ichidan : 帰る, 入る, 走る sont godan.",
    "lien_vocab": [
      "食べる",
      "行く",
      "する",
      "来る"
    ],
    "lien_interactions": [],
    "expression": "五段 / 一段 / 不規則",
    "expression_romaji": "godan / ichidan / fukisoku",
    "titre_fr": "groupes de verbes",
    "idee_cle": "Pour conjuguer, il faut reconnaître trois familles : verbes en る de type ichidan, verbes godan, et deux irréguliers principaux : する et 来る",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "masu_form",
    "chapitre": "Verbes",
    "titre": "〜ます — forme polie du verbe",
    "niveau": "A1",
    "explication": "La forme en ます est la base polie la plus utile au début. Elle sert dans la conversation quotidienne polie.",
    "exemples": [
      {
        "jp": "朝ごはんを食べます。",
        "romaji": "Asagohan o tabemasu.",
        "fr": "Je prends le petit déjeuner."
      },
      {
        "jp": "明日、京都に行きます。",
        "romaji": "Ashita, Kyōto ni ikimasu.",
        "fr": "Demain, je vais à Kyoto."
      }
    ],
    "pieges": "ます n’indique pas forcément le futur : le contexte donne souvent le temps.",
    "lien_vocab": [
      "朝ごはん",
      "明日",
      "京都"
    ],
    "lien_interactions": [],
    "expression": "食べます",
    "expression_romaji": "tabemasu",
    "titre_fr": "forme polie",
    "idee_cle": "La forme en ます est la base polie la plus utile au début",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "masu_negative",
    "chapitre": "Verbes",
    "titre": "〜ません — négatif poli",
    "niveau": "A1",
    "explication": "Pour nier un verbe poli, on remplace ます par ません.",
    "exemples": [
      {
        "jp": "今日はお酒を飲みません。",
        "romaji": "Kyō wa osake o nomimasen.",
        "fr": "Aujourd’hui, je ne bois pas d’alcool."
      },
      {
        "jp": "肉はあまり食べません。",
        "romaji": "Niku wa amari tabemasen.",
        "fr": "Je ne mange pas beaucoup de viande."
      }
    ],
    "pieges": "Pour adoucir, あまり + négatif est très utile : pas beaucoup, pas tellement.",
    "lien_vocab": [
      "お酒",
      "飲む",
      "肉",
      "あまり"
    ],
    "lien_interactions": [],
    "expression": "食べません",
    "expression_romaji": "tabemasen",
    "titre_fr": "ne pas faire",
    "idee_cle": "Pour nier un verbe poli, on remplace ます par ません",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "masu_past",
    "chapitre": "Verbes",
    "titre": "〜ました / 〜ませんでした — passé poli",
    "niveau": "A1/A2",
    "explication": "Le passé poli affirmatif est ました. Le passé poli négatif est ませんでした.",
    "exemples": [
      {
        "jp": "昨日、そばを食べました。",
        "romaji": "Kinō, soba o tabemashita.",
        "fr": "Hier, j’ai mangé des soba."
      },
      {
        "jp": "昨日は出かけませんでした。",
        "romaji": "Kinō wa dekakemasen deshita.",
        "fr": "Hier, je ne suis pas sorti."
      }
    ],
    "pieges": "Ne pas mélanger ました et です. Le verbe porte déjà le passé.",
    "lien_vocab": [
      "昨日",
      "そば",
      "出かける"
    ],
    "lien_interactions": [],
    "expression": "食べました / 食べませんでした",
    "expression_romaji": "tabemashita / tabemasen deshita",
    "titre_fr": "passé poli",
    "idee_cle": "Le passé poli affirmatif est ました",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "dictionary_form",
    "chapitre": "Verbes",
    "titre": "Forme dictionnaire — 食べる / 行く",
    "niveau": "A1/A2",
    "explication": "La forme dictionnaire est la forme de base du verbe. Elle sert dans les dictionnaires et dans beaucoup de constructions.",
    "exemples": [
      {
        "jp": "日本語を勉強するのが好きです。",
        "romaji": "Nihongo o benkyō suru no ga suki desu.",
        "fr": "J’aime étudier le japonais."
      },
      {
        "jp": "京都に行く予定です。",
        "romaji": "Kyōto ni iku yotei desu.",
        "fr": "J’ai prévu d’aller à Kyoto."
      }
    ],
    "pieges": "Elle est moins polie seule en fin de phrase. Pour débuter, garder ます en phrase principale.",
    "lien_vocab": [
      "勉強する",
      "行く",
      "予定"
    ],
    "lien_interactions": [],
    "expression": "辞書形",
    "expression_romaji": "jisho-kei",
    "titre_fr": "forme dictionnaire",
    "idee_cle": "La forme dictionnaire est la forme de base du verbe",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "te_form_basis",
    "chapitre": "Verbes",
    "titre": "Forme en て — base des demandes et enchaînements",
    "niveau": "A1/A2",
    "explication": "La forme en て sert à relier des actions et à construire de nombreuses expressions : ください, います, もいいですか, みる.",
    "exemples": [
      {
        "jp": "写真を見てください。",
        "romaji": "Shashin o mite kudasai.",
        "fr": "Regardez la photo, s’il vous plaît."
      },
      {
        "jp": "東京に行って、友だちに会います。",
        "romaji": "Tōkyō ni itte, tomodachi ni aimasu.",
        "fr": "Je vais à Tokyo et je vois un ami."
      }
    ],
    "pieges": "La formation dépend du groupe verbal. C’est une forme indispensable à automatiser.",
    "lien_vocab": [
      "写真",
      "見る",
      "行く",
      "会う"
    ],
    "lien_interactions": [],
    "expression": "〜て",
    "expression_romaji": "te-form",
    "titre_fr": "forme en te",
    "idee_cle": "La forme en て sert à relier des actions et à construire de nombreuses expressions : ください, います, もいいですか, みる",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "te_imasu_action",
    "chapitre": "Verbes",
    "titre": "〜ています — action en cours",
    "niveau": "A2",
    "explication": "〜ています indique souvent une action en cours ou un état résultant.",
    "exemples": [
      {
        "jp": "今、日本語を勉強しています。",
        "romaji": "Ima, Nihongo o benkyō shite imasu.",
        "fr": "En ce moment, j’étudie le japonais."
      },
      {
        "jp": "雨が降っています。",
        "romaji": "Ame ga futte imasu.",
        "fr": "Il pleut."
      }
    ],
    "pieges": "Ne pas traduire toujours par « être en train de » : 住んでいます signifie « habiter ».",
    "lien_vocab": [
      "今",
      "日本語",
      "雨"
    ],
    "lien_interactions": [],
    "expression": "〜ています",
    "expression_romaji": "te imasu",
    "titre_fr": "être en train de",
    "idee_cle": "〜ています indique souvent une action en cours ou un état résultant",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "te_imasu_state",
    "chapitre": "Verbes",
    "titre": "〜ています — état durable",
    "niveau": "A2",
    "explication": "Certains verbes en ています expriment un état durable : habiter, connaître, être marié, porter.",
    "exemples": [
      {
        "jp": "東京に住んでいます。",
        "romaji": "Tōkyō ni sunde imasu.",
        "fr": "J’habite à Tokyo."
      },
      {
        "jp": "その人を知っています。",
        "romaji": "Sono hito o shitte imasu.",
        "fr": "Je connais cette personne."
      }
    ],
    "pieges": "知りません est le négatif naturel de 知っています. On ne dit pas souvent 知っていません.",
    "lien_vocab": [
      "住む",
      "知る",
      "東京"
    ],
    "lien_interactions": [],
    "expression": "住んでいます",
    "expression_romaji": "sunde imasu",
    "titre_fr": "état durable",
    "idee_cle": "Certains verbes en ています expriment un état durable : habiter, connaître, être marié, porter",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "nai_form",
    "chapitre": "Verbes",
    "titre": "Forme en ない — négatif neutre",
    "niveau": "A2",
    "explication": "La forme en ない est la négation neutre. Elle sert dans beaucoup de constructions : ないでください, なければなりません, なくてもいい.",
    "exemples": [
      {
        "jp": "今日は行かないです。",
        "romaji": "Kyō wa ikanai desu.",
        "fr": "Aujourd’hui, je n’y vais pas."
      },
      {
        "jp": "肉を食べない人もいます。",
        "romaji": "Niku o tabenai hito mo imasu.",
        "fr": "Il y a aussi des gens qui ne mangent pas de viande."
      }
    ],
    "pieges": "En conversation polie simple, ません est souvent plus sûr. ないです est courant mais un peu plus oral.",
    "lien_vocab": [
      "行く",
      "肉",
      "人"
    ],
    "lien_interactions": [],
    "expression": "食べない / 行かない",
    "expression_romaji": "tabenai / ikanai",
    "titre_fr": "forme négative neutre",
    "idee_cle": "La forme en ない est la négation neutre",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "ta_form",
    "chapitre": "Verbes",
    "titre": "Forme en た — passé neutre",
    "niveau": "A2",
    "explication": "La forme en た est le passé neutre. Elle sert aussi dans ことがあります, たり, ほうがいい.",
    "exemples": [
      {
        "jp": "昨日、すしを食べたんです。",
        "romaji": "Kinō, sushi o tabeta n desu.",
        "fr": "Hier, j’ai mangé des sushis."
      },
      {
        "jp": "日本に行ったことがあります。",
        "romaji": "Nihon ni itta koto ga arimasu.",
        "fr": "Je suis déjà allé au Japon."
      }
    ],
    "pieges": "Comme pour la forme en て, la formation dépend du groupe verbal.",
    "lien_vocab": [
      "昨日",
      "すし",
      "日本"
    ],
    "lien_interactions": [],
    "expression": "食べた / 行った",
    "expression_romaji": "tabeta / itta",
    "titre_fr": "forme passée neutre",
    "idee_cle": "La forme en た est le passé neutre",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "te_kara",
    "chapitre": "Chronologie",
    "titre": "〜てから — après avoir fait",
    "niveau": "A2",
    "explication": "〜てから indique qu’une action se fait après une autre.",
    "exemples": [
      {
        "jp": "手を洗ってから、食べます。",
        "romaji": "Te o aratte kara, tabemasu.",
        "fr": "Je mange après m’être lavé les mains."
      },
      {
        "jp": "日本に着いてから、連絡します。",
        "romaji": "Nihon ni tsuite kara, renraku shimasu.",
        "fr": "Je vous contacte après être arrivé au Japon."
      }
    ],
    "pieges": "Ne pas confondre avec から qui signifie aussi « parce que » ou « depuis ».",
    "lien_vocab": [
      "手",
      "洗う",
      "着く",
      "連絡する"
    ],
    "lien_interactions": [],
    "expression": "〜てから",
    "expression_romaji": "te kara",
    "titre_fr": "après avoir",
    "idee_cle": "〜てから indique qu’une action se fait après une autre",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "mae_ato",
    "chapitre": "Chronologie",
    "titre": "〜前に / 〜後で — avant / après",
    "niveau": "A2",
    "explication": "前に indique avant une action. 後で indique après.",
    "exemples": [
      {
        "jp": "寝る前に、少し勉強します。",
        "romaji": "Neru mae ni, sukoshi benkyō shimasu.",
        "fr": "Avant de dormir, j’étudie un peu."
      },
      {
        "jp": "食事の後で、散歩します。",
        "romaji": "Shokuji no ato de, sanpo shimasu.",
        "fr": "Après le repas, je me promène."
      }
    ],
    "pieges": "Avant un verbe : forme dictionnaire + 前に. Après un nom : nom + の後で.",
    "lien_vocab": [
      "寝る",
      "勉強する",
      "食事",
      "散歩"
    ],
    "lien_interactions": [],
    "expression": "前に / 後で",
    "expression_romaji": "mae ni / ato de",
    "titre_fr": "avant / après",
    "idee_cle": "前に indique avant une action",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "toki",
    "chapitre": "Chronologie",
    "titre": "〜とき — quand, au moment où",
    "niveau": "A2",
    "explication": "とき permet de situer une action dans un moment : quand je fais, quand j’ai fait, quand j’étais…",
    "exemples": [
      {
        "jp": "日本に行くとき、使いたいです。",
        "romaji": "Nihon ni iku toki, tsukaitai desu.",
        "fr": "Quand j’irai au Japon, j’aimerais l’utiliser."
      },
      {
        "jp": "困ったとき、どう言えばいいですか。",
        "romaji": "Komatta toki, dō ieba ii desu ka.",
        "fr": "Quand je suis en difficulté, comment dois-je le dire ?"
      }
    ],
    "pieges": "Le temps avant とき change le sens : 行くとき = avant/pendant le départ ; 行ったとき = quand j’y suis allé.",
    "lien_vocab": [
      "日本",
      "使う",
      "困る",
      "言う"
    ],
    "lien_interactions": [],
    "expression": "〜とき",
    "expression_romaji": "toki",
    "titre_fr": "quand",
    "idee_cle": "とき permet de situer une action dans un moment : quand je fais, quand j’ai fait, quand j’étais…",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "made_ni",
    "chapitre": "Chronologie",
    "titre": "まで / までに — jusqu’à / au plus tard",
    "niveau": "A2",
    "explication": "まで indique une durée jusqu’à un point. までに indique une limite avant laquelle faire quelque chose.",
    "exemples": [
      {
        "jp": "五時まで待ちます。",
        "romaji": "Go-ji made machimasu.",
        "fr": "J’attends jusqu’à cinq heures."
      },
      {
        "jp": "五時までに戻ります。",
        "romaji": "Go-ji made ni modorimasu.",
        "fr": "Je reviens au plus tard à cinq heures."
      }
    ],
    "pieges": "までに est un piège fréquent : il implique une action terminée avant la limite.",
    "lien_vocab": [
      "五時",
      "待つ",
      "戻る"
    ],
    "lien_interactions": [],
    "expression": "まで / までに",
    "expression_romaji": "made / made ni",
    "titre_fr": "jusqu’à / avant limite",
    "idee_cle": "まで indique une durée jusqu’à un point",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "kara_reason",
    "chapitre": "Connecteurs",
    "titre": "から — parce que, raison simple",
    "niveau": "A1/A2",
    "explication": "から donne une raison de façon simple et directe.",
    "exemples": [
      {
        "jp": "暑いから、水を飲みます。",
        "romaji": "Atsui kara, mizu o nomimasu.",
        "fr": "Comme il fait chaud, je bois de l’eau."
      },
      {
        "jp": "日本語が難しいから、ゆっくり話してください。",
        "romaji": "Nihongo ga muzukashii kara, yukkuri hanashite kudasai.",
        "fr": "Comme le japonais est difficile, parlez lentement s’il vous plaît."
      }
    ],
    "pieges": "から est plus direct que ので. Dans un contexte poli, ので peut être plus doux.",
    "lien_vocab": [
      "暑い",
      "水",
      "難しい",
      "ゆっくり"
    ],
    "lien_interactions": [],
    "expression": "〜から",
    "expression_romaji": "kara",
    "titre_fr": "parce que",
    "idee_cle": "から donne une raison de façon simple et directe",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "demo_shikashi",
    "chapitre": "Connecteurs",
    "titre": "でも / しかし — mais",
    "niveau": "A1/A2",
    "explication": "でも est courant à l’oral. しかし est plus écrit ou plus formel.",
    "exemples": [
      {
        "jp": "難しいです。でも、おもしろいです。",
        "romaji": "Muzukashii desu. Demo, omoshiroi desu.",
        "fr": "C’est difficile. Mais c’est intéressant."
      },
      {
        "jp": "便利です。しかし、少し高いです。",
        "romaji": "Benri desu. Shikashi, sukoshi takai desu.",
        "fr": "C’est pratique. Cependant, c’est un peu cher."
      }
    ],
    "pieges": "En conversation, でも est plus naturel. しかし peut sonner un peu scolaire ou officiel.",
    "lien_vocab": [
      "難しい",
      "おもしろい",
      "便利",
      "高い"
    ],
    "lien_interactions": [],
    "expression": "でも / しかし",
    "expression_romaji": "demo / shikashi",
    "titre_fr": "mais",
    "idee_cle": "でも est courant à l’oral",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "soshite_sorekara",
    "chapitre": "Connecteurs",
    "titre": "そして / それから — puis, ensuite",
    "niveau": "A1/A2",
    "explication": "そして relie deux informations. それから marque plutôt l’étape suivante.",
    "exemples": [
      {
        "jp": "朝、散歩しました。そして、コーヒーを飲みました。",
        "romaji": "Asa, sanpo shimashita. Soshite, kōhī o nomimashita.",
        "fr": "Le matin, je me suis promené. Et puis, j’ai bu un café."
      },
      {
        "jp": "まず駅に行きます。それから、友だちに会います。",
        "romaji": "Mazu eki ni ikimasu. Sorekara, tomodachi ni aimasu.",
        "fr": "D’abord je vais à la gare. Ensuite, je vois mon ami."
      }
    ],
    "pieges": "Pour enchaîner des actions dans une même phrase, la forme en て est souvent plus naturelle.",
    "lien_vocab": [
      "朝",
      "散歩",
      "コーヒー",
      "駅"
    ],
    "lien_interactions": [],
    "expression": "そして / それから",
    "expression_romaji": "soshite / sorekara",
    "titre_fr": "et puis",
    "idee_cle": "そして relie deux informations",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "sorede_dakara",
    "chapitre": "Connecteurs",
    "titre": "それで / だから — donc, c’est pourquoi",
    "niveau": "A2",
    "explication": "だから donne une conclusion ou une raison. それで indique souvent la suite logique d’une situation.",
    "exemples": [
      {
        "jp": "雨です。だから、タクシーで行きます。",
        "romaji": "Ame desu. Dakara, takushī de ikimasu.",
        "fr": "Il pleut. Donc j’y vais en taxi."
      },
      {
        "jp": "電車が遅れました。それで、少し遅くなりました。",
        "romaji": "Densha ga okuremashita. Sorede, sukoshi osoku narimashita.",
        "fr": "Le train a eu du retard. C’est pourquoi je suis un peu en retard."
      }
    ],
    "pieges": "だから peut paraître direct dans une explication sensible ; なので ou それで est parfois plus doux.",
    "lien_vocab": [
      "雨",
      "タクシー",
      "電車",
      "遅れる"
    ],
    "lien_interactions": [],
    "expression": "それで / だから",
    "expression_romaji": "sorede / dakara",
    "titre_fr": "donc",
    "idee_cle": "だから donne une conclusion ou une raison",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "ga_kedo_sentence_end",
    "chapitre": "Nuancer",
    "titre": "〜が / 〜けど en fin de phrase — laisser en suspens",
    "niveau": "A2",
    "explication": "En japonais, finir par が ou けど peut adoucir une demande ou laisser entendre la suite.",
    "exemples": [
      {
        "jp": "すみません、少し聞きたいんですが…",
        "romaji": "Sumimasen, sukoshi kikitai n desu ga...",
        "fr": "Excusez-moi, j’aimerais demander quelque chose…"
      },
      {
        "jp": "日本語がまだ下手なんですけど…",
        "romaji": "Nihongo ga mada heta nan desu kedo...",
        "fr": "Mon japonais est encore maladroit…"
      }
    ],
    "pieges": "Ne pas toujours chercher à finir la phrase comme en français. La suspension peut être très naturelle.",
    "lien_vocab": [
      "すみません",
      "聞く",
      "日本語",
      "下手"
    ],
    "lien_interactions": [],
    "expression": "〜ですが… / 〜ですけど…",
    "expression_romaji": "desu ga / desu kedo",
    "titre_fr": "phrase suspendue",
    "idee_cle": "En japonais, finir par が ou けど peut adoucir une demande ou laisser entendre la suite",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "interrogatifs",
    "chapitre": "Questions",
    "titre": "Les mots interrogatifs — 何・誰・どこ・いつ",
    "niveau": "A1",
    "explication": "Les mots interrogatifs se placent souvent à l’endroit de l’information cherchée. La particule reste importante.",
    "exemples": [
      {
        "jp": "これは何ですか。",
        "romaji": "Kore wa nan desu ka.",
        "fr": "Qu’est-ce que c’est ?"
      },
      {
        "jp": "駅はどこですか。",
        "romaji": "Eki wa doko desu ka.",
        "fr": "Où est la gare ?"
      }
    ],
    "pieges": "何 se lit souvent nan devant です, の, compteurs ou certains sons.",
    "lien_vocab": [
      "何",
      "誰",
      "どこ",
      "いつ"
    ],
    "lien_interactions": [],
    "expression": "何 / 誰 / どこ / いつ",
    "expression_romaji": "nani / dare / doko / itsu",
    "titre_fr": "mots interrogatifs",
    "idee_cle": "Les mots interrogatifs se placent souvent à l’endroit de l’information cherchée",
    "mode_emploi": "La question japonaise se comprend souvent à la fin : か, l’intonation, ou un mot interrogatif comme 何, どこ, いつ.",
    "reflexe_debutant": "Garde une question courte et polie : 〜ですか / 〜ますか.",
    "mini_exercice": "Transforme un exemple affirmatif en question en ajoutant か à la fin."
  },
  {
    "id": "dore_dono",
    "chapitre": "Questions",
    "titre": "どれ / どの — lequel",
    "niveau": "A1/A2",
    "explication": "どれ s’emploie seul. どの s’emploie devant un nom.",
    "exemples": [
      {
        "jp": "おすすめはどれですか。",
        "romaji": "Osusume wa dore desu ka.",
        "fr": "Lequel recommandez-vous ?"
      },
      {
        "jp": "どの電車に乗りますか。",
        "romaji": "Dono densha ni norimasu ka.",
        "fr": "Quel train prend-on ?"
      }
    ],
    "pieges": "Comme この/その/あの, どの doit être suivi d’un nom.",
    "lien_vocab": [
      "おすすめ",
      "電車",
      "乗る"
    ],
    "lien_interactions": [],
    "expression": "どれ / どの",
    "expression_romaji": "dore / dono",
    "titre_fr": "lequel",
    "idee_cle": "どれ s’emploie seul",
    "mode_emploi": "La question japonaise se comprend souvent à la fin : か, l’intonation, ou un mot interrogatif comme 何, どこ, いつ.",
    "reflexe_debutant": "Garde une question courte et polie : 〜ですか / 〜ますか.",
    "mini_exercice": "Transforme un exemple affirmatif en question en ajoutant か à la fin."
  },
  {
    "id": "doushite_naze",
    "chapitre": "Questions",
    "titre": "どうして / なぜ — pourquoi",
    "niveau": "A2",
    "explication": "どうして est courant à l’oral. なぜ est plus neutre, parfois plus écrit ou analytique.",
    "exemples": [
      {
        "jp": "どうして日本語を勉強していますか。",
        "romaji": "Dōshite Nihongo o benkyō shite imasu ka.",
        "fr": "Pourquoi étudiez-vous le japonais ?"
      },
      {
        "jp": "なぜそう思いますか。",
        "romaji": "Naze sō omoimasu ka.",
        "fr": "Pourquoi pensez-vous cela ?"
      }
    ],
    "pieges": "Pourquoi peut sembler frontal selon le sujet. Pour adoucir, ajouter もしよければ.",
    "lien_vocab": [
      "日本語",
      "勉強する",
      "思う"
    ],
    "lien_interactions": [],
    "expression": "どうして / なぜ",
    "expression_romaji": "dōshite / naze",
    "titre_fr": "pourquoi",
    "idee_cle": "どうして est courant à l’oral",
    "mode_emploi": "La question japonaise se comprend souvent à la fin : か, l’intonation, ou un mot interrogatif comme 何, どこ, いつ.",
    "reflexe_debutant": "Garde une question courte et polie : 〜ですか / 〜ますか.",
    "mini_exercice": "Transforme un exemple affirmatif en question en ajoutant か à la fin."
  },
  {
    "id": "donna_dou",
    "chapitre": "Questions",
    "titre": "どんな / どう — quel genre / comment",
    "niveau": "A1/A2",
    "explication": "どんな demande le type ou la nature d’un nom. どう demande l’état, la manière ou l’avis.",
    "exemples": [
      {
        "jp": "どんな食べ物が好きですか。",
        "romaji": "Donna tabemono ga suki desu ka.",
        "fr": "Quel genre de nourriture aimez-vous ?"
      },
      {
        "jp": "日本の夏はどうですか。",
        "romaji": "Nihon no natsu wa dō desu ka.",
        "fr": "Comment est l’été au Japon ?"
      }
    ],
    "pieges": "Ne pas confondre どんな + nom et どう + verbe/adjectif/phrase.",
    "lien_vocab": [
      "食べ物",
      "好き",
      "夏"
    ],
    "lien_interactions": [],
    "expression": "どんな / どう",
    "expression_romaji": "donna / dō",
    "titre_fr": "quel genre / comment",
    "idee_cle": "どんな demande le type ou la nature d’un nom",
    "mode_emploi": "La question japonaise se comprend souvent à la fin : か, l’intonation, ou un mot interrogatif comme 何, どこ, いつ.",
    "reflexe_debutant": "Garde une question courte et polie : 〜ですか / 〜ますか.",
    "mini_exercice": "Transforme un exemple affirmatif en question en ajoutant か à la fin."
  },
  {
    "id": "ikura_ikutsu",
    "chapitre": "Questions",
    "titre": "いくら / いくつ — combien",
    "niveau": "A1",
    "explication": "いくら demande le prix. いくつ demande un nombre ou l’âge d’un jeune enfant, mais pas l’âge d’un adulte en contexte poli.",
    "exemples": [
      {
        "jp": "これはいくらですか。",
        "romaji": "Kore wa ikura desu ka.",
        "fr": "Combien ça coûte ?"
      },
      {
        "jp": "りんごはいくつありますか。",
        "romaji": "Ringo wa ikutsu arimasu ka.",
        "fr": "Combien y a-t-il de pommes ?"
      }
    ],
    "pieges": "Pour l’âge d’un adulte, demander directement peut être indiscret. Utiliser おいくつですか seulement si le contexte le permet.",
    "lien_vocab": [
      "りんご",
      "値段",
      "いくら"
    ],
    "lien_interactions": [],
    "expression": "いくら / いくつ",
    "expression_romaji": "ikura / ikutsu",
    "titre_fr": "combien",
    "idee_cle": "いくら demande le prix",
    "mode_emploi": "La question japonaise se comprend souvent à la fin : か, l’intonation, ou un mot interrogatif comme 何, どこ, いつ.",
    "reflexe_debutant": "Garde une question courte et polie : 〜ですか / 〜ますか.",
    "mini_exercice": "Transforme un exemple affirmatif en question en ajoutant か à la fin."
  },
  {
    "id": "counters_basics",
    "chapitre": "Quantités et compteurs",
    "titre": "Les compteurs — 一つ・二人・三枚",
    "niveau": "A1/A2",
    "explication": "Le japonais utilise des compteurs selon le type d’objet : personnes, objets plats, livres, petits objets, etc.",
    "exemples": [
      {
        "jp": "おにぎりを二つください。",
        "romaji": "Onigiri o futatsu kudasai.",
        "fr": "Deux onigiri, s’il vous plaît."
      },
      {
        "jp": "チケットを二枚お願いします。",
        "romaji": "Chiketto o ni-mai onegai shimasu.",
        "fr": "Deux billets, s’il vous plaît."
      }
    ],
    "pieges": "Les compteurs demandent de la pratique. Pour débuter, ひとつ, ふたつ, みっつ dépannent souvent.",
    "lien_vocab": [
      "おにぎり",
      "チケット",
      "二つ",
      "二枚"
    ],
    "lien_interactions": [],
    "expression": "助数詞",
    "expression_romaji": "josūshi",
    "titre_fr": "compteurs",
    "idee_cle": "Le japonais utilise des compteurs selon le type d’objet : personnes, objets plats, livres, petits objets, etc",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "gurai_kurai",
    "chapitre": "Quantités et compteurs",
    "titre": "ぐらい / くらい — environ",
    "niveau": "A1/A2",
    "explication": "ぐらい ou くらい indique une approximation de quantité, durée ou degré.",
    "exemples": [
      {
        "jp": "三十分ぐらいかかります。",
        "romaji": "Sanjuppun gurai kakarimasu.",
        "fr": "Cela prend environ trente minutes."
      },
      {
        "jp": "千円ぐらいです。",
        "romaji": "Sen-en gurai desu.",
        "fr": "C’est environ mille yens."
      }
    ],
    "pieges": "ぐらい et くらい sont très proches. En conversation, les deux sont compris.",
    "lien_vocab": [
      "三十分",
      "千円",
      "かかる"
    ],
    "lien_interactions": [],
    "expression": "〜ぐらい",
    "expression_romaji": "gurai / kurai",
    "titre_fr": "environ",
    "idee_cle": "ぐらい ou くらい indique une approximation de quantité, durée ou degré",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "dake_shika",
    "chapitre": "Quantités et compteurs",
    "titre": "だけ / しか〜ない — seulement",
    "niveau": "A2",
    "explication": "だけ signifie « seulement ». しか s’utilise avec une négation et insiste sur la limitation.",
    "exemples": [
      {
        "jp": "少しだけ分かります。",
        "romaji": "Sukoshi dake wakarimasu.",
        "fr": "Je comprends seulement un peu."
      },
      {
        "jp": "日本語は少ししか話せません。",
        "romaji": "Nihongo wa sukoshi shika hanasemasen.",
        "fr": "Je ne parle qu’un peu japonais."
      }
    ],
    "pieges": "しか demande toujours une forme négative. C’est une structure très utile et très japonaise.",
    "lien_vocab": [
      "少し",
      "分かる",
      "話せる"
    ],
    "lien_interactions": [],
    "expression": "だけ / しか〜ない",
    "expression_romaji": "dake / shika nai",
    "titre_fr": "seulement",
    "idee_cle": "だけ signifie « seulement »",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "mo_quantity",
    "chapitre": "Quantités et compteurs",
    "titre": "も après une quantité — autant que",
    "niveau": "A2",
    "explication": "Après une quantité, も peut insister sur une quantité jugée importante.",
    "exemples": [
      {
        "jp": "三時間も歩きました。",
        "romaji": "San-jikan mo arukimashita.",
        "fr": "J’ai marché pas moins de trois heures."
      },
      {
        "jp": "こんなにたくさん食べたんですか。",
        "romaji": "Konna ni takusan tabeta n desu ka.",
        "fr": "Vous avez mangé autant que ça ?"
      }
    ],
    "pieges": "も n’est pas seulement « aussi ». Avec une quantité, il exprime souvent la surprise.",
    "lien_vocab": [
      "三時間",
      "歩く",
      "たくさん"
    ],
    "lien_interactions": [],
    "expression": "三時間も",
    "expression_romaji": "san-jikan mo",
    "titre_fr": "autant que",
    "idee_cle": "Après une quantité, も peut insister sur une quantité jugée importante",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "comparatif_no_hou_ga",
    "chapitre": "Comparaison",
    "titre": "A のほうが B より — plus que",
    "niveau": "A2",
    "explication": "Structure de comparaison : A のほうが B より + adjectif.",
    "exemples": [
      {
        "jp": "東京のほうが京都より大きいです。",
        "romaji": "Tōkyō no hō ga Kyōto yori ōkii desu.",
        "fr": "Tokyo est plus grande que Kyoto."
      },
      {
        "jp": "こちらのほうが少し安いです。",
        "romaji": "Kochira no hō ga sukoshi yasui desu.",
        "fr": "Celui-ci est un peu moins cher."
      }
    ],
    "pieges": "On peut souvent omettre より si le contexte est clair.",
    "lien_vocab": [
      "東京",
      "京都",
      "大きい",
      "安い"
    ],
    "lien_interactions": [],
    "expression": "A のほうが B より",
    "expression_romaji": "A no hō ga B yori",
    "titre_fr": "plus que",
    "idee_cle": "Structure de comparaison : A のほうが B より + adjectif",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "ichiban",
    "chapitre": "Comparaison",
    "titre": "一番 — le plus",
    "niveau": "A1/A2",
    "explication": "一番 exprime le superlatif : le plus bon, le plus intéressant, le préféré.",
    "exemples": [
      {
        "jp": "何が一番好きですか。",
        "romaji": "Nani ga ichiban suki desu ka.",
        "fr": "Qu’est-ce que vous aimez le plus ?"
      },
      {
        "jp": "この料理が一番おいしかったです。",
        "romaji": "Kono ryōri ga ichiban oishikatta desu.",
        "fr": "Ce plat était le meilleur."
      }
    ],
    "pieges": "一番好き est très courant pour dire « préféré ».",
    "lien_vocab": [
      "何",
      "好き",
      "料理",
      "おいしい"
    ],
    "lien_interactions": [],
    "expression": "一番",
    "expression_romaji": "ichiban",
    "titre_fr": "le plus",
    "idee_cle": "一番 exprime le superlatif : le plus bon, le plus intéressant, le préféré",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "hodo_negative",
    "chapitre": "Comparaison",
    "titre": "A は B ほど〜ない — pas autant que",
    "niveau": "A2/B1",
    "explication": "ほど avec une négation sert à dire qu’une chose n’atteint pas le degré d’une autre.",
    "exemples": [
      {
        "jp": "今日は昨日ほど暑くないです。",
        "romaji": "Kyō wa kinō hodo atsuku nai desu.",
        "fr": "Aujourd’hui, il ne fait pas aussi chaud qu’hier."
      },
      {
        "jp": "日本語は思ったほど簡単ではありません。",
        "romaji": "Nihongo wa omotta hodo kantan dewa arimasen.",
        "fr": "Le japonais n’est pas aussi simple que je le pensais."
      }
    ],
    "pieges": "ほど fonctionne ici avec une phrase négative.",
    "lien_vocab": [
      "今日",
      "昨日",
      "暑い",
      "簡単"
    ],
    "lien_interactions": [],
    "expression": "A は B ほど〜ない",
    "expression_romaji": "A wa B hodo nai",
    "titre_fr": "pas autant que",
    "idee_cle": "ほど avec une négation sert à dire qu’une chose n’atteint pas le degré d’une autre",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "potential_form",
    "chapitre": "Capacité",
    "titre": "Forme potentielle — pouvoir faire",
    "niveau": "A2",
    "explication": "La forme potentielle exprime la capacité ou la possibilité : pouvoir manger, pouvoir aller, pouvoir parler.",
    "exemples": [
      {
        "jp": "日本語を少し話せます。",
        "romaji": "Nihongo o sukoshi hanasemasu.",
        "fr": "Je peux parler un peu japonais."
      },
      {
        "jp": "ここでカードが使えますか。",
        "romaji": "Koko de kādo ga tsukaemasu ka.",
        "fr": "Peut-on utiliser la carte ici ?"
      }
    ],
    "pieges": "Le complément est souvent marqué par が avec la forme potentielle, mais を reste fréquent dans l’usage.",
    "lien_vocab": [
      "日本語",
      "話す",
      "カード",
      "使う"
    ],
    "lien_interactions": [],
    "expression": "食べられます / 行けます",
    "expression_romaji": "taberaremasu / ikemasu",
    "titre_fr": "pouvoir faire",
    "idee_cle": "La forme potentielle exprime la capacité ou la possibilité : pouvoir manger, pouvoir aller, pouvoir parler",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "dekimasu",
    "chapitre": "Capacité",
    "titre": "できます — pouvoir, être possible",
    "niveau": "A1/A2",
    "explication": "できます permet de dire qu’une action est possible, ou qu’on sait faire quelque chose.",
    "exemples": [
      {
        "jp": "予約できますか。",
        "romaji": "Yoyaku dekimasu ka.",
        "fr": "Est-il possible de réserver ?"
      },
      {
        "jp": "少し日本語ができます。",
        "romaji": "Sukoshi Nihongo ga dekimasu.",
        "fr": "Je connais un peu le japonais."
      }
    ],
    "pieges": "Très utile quand on ne connaît pas la forme potentielle d’un verbe.",
    "lien_vocab": [
      "予約",
      "少し",
      "日本語"
    ],
    "lien_interactions": [],
    "expression": "できます",
    "expression_romaji": "dekimasu",
    "titre_fr": "c’est possible",
    "idee_cle": "できます permet de dire qu’une action est possible, ou qu’on sait faire quelque chose",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "naide_kudasai",
    "chapitre": "Demandes et obligations",
    "titre": "〜ないでください — ne faites pas",
    "niveau": "A2",
    "explication": "Forme polie pour demander de ne pas faire quelque chose.",
    "exemples": [
      {
        "jp": "ここで写真を撮らないでください。",
        "romaji": "Koko de shashin o toranaide kudasai.",
        "fr": "Ne prenez pas de photo ici, s’il vous plaît."
      },
      {
        "jp": "心配しないでください。",
        "romaji": "Shinpai shinaide kudasai.",
        "fr": "Ne vous inquiétez pas."
      }
    ],
    "pieges": "Selon le ton, cela peut paraître ferme. Pour soi-même, 心配しないでください est naturel et bienveillant.",
    "lien_vocab": [
      "写真",
      "撮る",
      "心配"
    ],
    "lien_interactions": [],
    "expression": "〜ないでください",
    "expression_romaji": "nai de kudasai",
    "titre_fr": "ne pas faire",
    "idee_cle": "Forme polie pour demander de ne pas faire quelque chose",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "nakereba_narimasen",
    "chapitre": "Demandes et obligations",
    "titre": "〜なければなりません — il faut",
    "niveau": "A2",
    "explication": "Exprime une obligation : il faut faire quelque chose.",
    "exemples": [
      {
        "jp": "薬を飲まなければなりません。",
        "romaji": "Kusuri o nomanakereba narimasen.",
        "fr": "Je dois prendre un médicament."
      },
      {
        "jp": "明日早く起きなければなりません。",
        "romaji": "Ashita hayaku okinakereba narimasen.",
        "fr": "Demain, je dois me lever tôt."
      }
    ],
    "pieges": "Forme un peu longue et scolaire, mais très utile. À l’oral, ないといけません est fréquent.",
    "lien_vocab": [
      "薬",
      "飲む",
      "明日",
      "早い"
    ],
    "lien_interactions": [],
    "expression": "〜なければなりません",
    "expression_romaji": "nakereba narimasen",
    "titre_fr": "il faut",
    "idee_cle": "Exprime une obligation : il faut faire quelque chose",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "nakute_mo_ii",
    "chapitre": "Demandes et obligations",
    "titre": "〜なくてもいいです — pas obligé de",
    "niveau": "A2",
    "explication": "Indique qu’il n’est pas nécessaire de faire quelque chose.",
    "exemples": [
      {
        "jp": "急がなくてもいいです。",
        "romaji": "Isoganakute mo ii desu.",
        "fr": "Ce n’est pas la peine de se dépêcher."
      },
      {
        "jp": "全部食べなくてもいいです。",
        "romaji": "Zenbu tabenakute mo ii desu.",
        "fr": "Vous n’êtes pas obligé de tout manger."
      }
    ],
    "pieges": "Très utile pour rassurer quelqu’un ou alléger une contrainte.",
    "lien_vocab": [
      "急ぐ",
      "全部",
      "食べる"
    ],
    "lien_interactions": [],
    "expression": "〜なくてもいいです",
    "expression_romaji": "nakute mo ii desu",
    "titre_fr": "ce n’est pas nécessaire",
    "idee_cle": "Indique qu’il n’est pas nécessaire de faire quelque chose",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "mashou",
    "chapitre": "Invitations",
    "titre": "〜ましょう — faisons",
    "niveau": "A1/A2",
    "explication": "〜ましょう propose de faire quelque chose ensemble ou annonce une action collective.",
    "exemples": [
      {
        "jp": "少し休みましょう。",
        "romaji": "Sukoshi yasumimashō.",
        "fr": "Reposons-nous un peu."
      },
      {
        "jp": "行きましょう。",
        "romaji": "Ikimashō.",
        "fr": "Allons-y."
      }
    ],
    "pieges": "Peut être directif selon le contexte. Pour inviter doucement, ませんか est souvent plus doux.",
    "lien_vocab": [
      "休む",
      "行く",
      "少し"
    ],
    "lien_interactions": [],
    "expression": "〜ましょう",
    "expression_romaji": "mashō",
    "titre_fr": "faisons",
    "idee_cle": "〜ましょう propose de faire quelque chose ensemble ou annonce une action collective",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "masen_ka",
    "chapitre": "Invitations",
    "titre": "〜ませんか — invitation douce",
    "niveau": "A1/A2",
    "explication": "Forme très utile pour proposer poliment une activité.",
    "exemples": [
      {
        "jp": "一緒にお茶を飲みませんか。",
        "romaji": "Issho ni ocha o nomimasen ka.",
        "fr": "Voulez-vous boire un thé ensemble ?"
      },
      {
        "jp": "少し歩きませんか。",
        "romaji": "Sukoshi arukimasen ka.",
        "fr": "On marche un peu ?"
      }
    ],
    "pieges": "C’est moins direct que ましょう. Très bon réflexe pour inviter sans forcer.",
    "lien_vocab": [
      "一緒に",
      "お茶",
      "歩く"
    ],
    "lien_interactions": [],
    "expression": "〜ませんか",
    "expression_romaji": "masen ka",
    "titre_fr": "voulez-vous faire ?",
    "idee_cle": "Forme très utile pour proposer poliment une activité",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "deshou",
    "chapitre": "Nuancer",
    "titre": "〜でしょう / 〜でしょうか — probablement, je me demande",
    "niveau": "A2/B1",
    "explication": "でしょう exprime une supposition polie. でしょうか rend une question plus douce.",
    "exemples": [
      {
        "jp": "明日は雨でしょう。",
        "romaji": "Ashita wa ame deshō.",
        "fr": "Il pleuvra probablement demain."
      },
      {
        "jp": "これは失礼でしょうか。",
        "romaji": "Kore wa shitsurei deshō ka.",
        "fr": "Est-ce que cela serait impoli ?"
      }
    ],
    "pieges": "でしょうか est très pratique pour éviter une question trop directe.",
    "lien_vocab": [
      "明日",
      "雨",
      "失礼"
    ],
    "lien_interactions": [],
    "expression": "〜でしょう / 〜でしょうか",
    "expression_romaji": "deshō / deshō ka",
    "titre_fr": "probablement / je me demande",
    "idee_cle": "でしょう exprime une supposition polie",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "sou_desu_hearsay",
    "chapitre": "Information rapportée",
    "titre": "〜そうです — on dit que",
    "niveau": "A2",
    "explication": "Après une phrase neutre, そうです rapporte une information entendue ou lue.",
    "exemples": [
      {
        "jp": "明日は雨だそうです。",
        "romaji": "Ashita wa ame da sō desu.",
        "fr": "Il paraît qu’il pleuvra demain."
      },
      {
        "jp": "この店は有名だそうです。",
        "romaji": "Kono mise wa yūmei da sō desu.",
        "fr": "On dit que ce restaurant est célèbre."
      }
    ],
    "pieges": "Ne pas confondre avec そうです d’apparence : おいしそうです = ça a l’air bon.",
    "lien_vocab": [
      "明日",
      "雨",
      "店",
      "有名"
    ],
    "lien_interactions": [],
    "expression": "〜そうです",
    "expression_romaji": "sō desu",
    "titre_fr": "il paraît que",
    "idee_cle": "Après une phrase neutre, そうです rapporte une information entendue ou lue",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "sou_desu_appearance",
    "chapitre": "Impressions",
    "titre": "〜そうです — ça a l’air",
    "niveau": "A2",
    "explication": "Attaché à un adjectif ou à un radical verbal, そうです exprime une impression visuelle ou intuitive.",
    "exemples": [
      {
        "jp": "おいしそうですね。",
        "romaji": "Oishisō desu ne.",
        "fr": "Ça a l’air bon."
      },
      {
        "jp": "雨が降りそうです。",
        "romaji": "Ame ga furisō desu.",
        "fr": "On dirait qu’il va pleuvoir."
      }
    ],
    "pieges": "Pour les adjectifs en い, on enlève い : おいしい → おいしそう. Exception : いい → よさそう.",
    "lien_vocab": [
      "おいしい",
      "雨",
      "降る"
    ],
    "lien_interactions": [],
    "expression": "おいしそうです",
    "expression_romaji": "oishisō desu",
    "titre_fr": "ça a l’air",
    "idee_cle": "Attaché à un adjectif ou à un radical verbal, そうです exprime une impression visuelle ou intuitive",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "mitai_desu",
    "chapitre": "Impressions",
    "titre": "〜みたいです — on dirait, semble",
    "niveau": "A2",
    "explication": "みたいです exprime une ressemblance ou une impression assez orale.",
    "exemples": [
      {
        "jp": "今日はお祭りみたいですね。",
        "romaji": "Kyō wa omatsuri mitai desu ne.",
        "fr": "On dirait qu’il y a un festival aujourd’hui."
      },
      {
        "jp": "この料理はフランス料理みたいです。",
        "romaji": "Kono ryōri wa Furansu ryōri mitai desu.",
        "fr": "Ce plat ressemble à de la cuisine française."
      }
    ],
    "pieges": "みたい est naturel à l’oral. ようです est plus soigné.",
    "lien_vocab": [
      "今日",
      "お祭り",
      "料理",
      "フランス"
    ],
    "lien_interactions": [],
    "expression": "〜みたいです",
    "expression_romaji": "mitai desu",
    "titre_fr": "on dirait",
    "idee_cle": "みたいです exprime une ressemblance ou une impression assez orale",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "you_desu",
    "chapitre": "Impressions",
    "titre": "〜ようです — il semble que",
    "niveau": "A2/B1",
    "explication": "ようです exprime une impression, une ressemblance ou une déduction polie.",
    "exemples": [
      {
        "jp": "少し疲れているようです。",
        "romaji": "Sukoshi tsukarete iru yō desu.",
        "fr": "Il semble un peu fatigué."
      },
      {
        "jp": "日本とは少し違うようです。",
        "romaji": "Nihon to wa sukoshi chigau yō desu.",
        "fr": "Il semble que ce soit un peu différent du Japon."
      }
    ],
    "pieges": "Plus poli et plus prudent que みたいです.",
    "lien_vocab": [
      "疲れる",
      "日本",
      "違う"
    ],
    "lien_interactions": [],
    "expression": "〜ようです",
    "expression_romaji": "yō desu",
    "titre_fr": "il semble",
    "idee_cle": "ようです exprime une impression, une ressemblance ou une déduction polie",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "tari_tari",
    "chapitre": "Actions et exemples",
    "titre": "〜たり〜たりします — faire des choses comme",
    "niveau": "A2",
    "explication": "〜たり〜たりします donne des exemples d’actions sans faire une liste complète.",
    "exemples": [
      {
        "jp": "週末は散歩したり、料理したりします。",
        "romaji": "Shūmatsu wa sanpo shitari, ryōri shitari shimasu.",
        "fr": "Le week-end, je me promène, je cuisine, etc."
      },
      {
        "jp": "旅行では写真を撮ったり、おいしいものを食べたりしました。",
        "romaji": "Ryokō de wa shashin o tottari, oishii mono o tabetari shimashita.",
        "fr": "En voyage, j’ai pris des photos, mangé de bonnes choses, etc."
      }
    ],
    "pieges": "La forme utilise le passé neutre en た + り, mais l’ensemble n’est pas forcément passé : le temps est porté par します / しました.",
    "lien_vocab": [
      "週末",
      "散歩",
      "料理",
      "旅行"
    ],
    "lien_interactions": [],
    "expression": "〜たり〜たりします",
    "expression_romaji": "tari tari shimasu",
    "titre_fr": "par exemple faire",
    "idee_cle": "〜たり〜たりします donne des exemples d’actions sans faire une liste complète",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "koto_ga_arimasu",
    "chapitre": "Expérience",
    "titre": "〜たことがあります — avoir déjà fait",
    "niveau": "A2",
    "explication": "Cette structure exprime l’expérience : avoir déjà fait quelque chose.",
    "exemples": [
      {
        "jp": "日本に行ったことがあります。",
        "romaji": "Nihon ni itta koto ga arimasu.",
        "fr": "Je suis déjà allé au Japon."
      },
      {
        "jp": "納豆を食べたことがありません。",
        "romaji": "Nattō o tabeta koto ga arimasen.",
        "fr": "Je n’ai jamais mangé de nattō."
      }
    ],
    "pieges": "Utiliser la forme en た avant ことがあります.",
    "lien_vocab": [
      "日本",
      "行く",
      "納豆",
      "食べる"
    ],
    "lien_interactions": [],
    "expression": "〜たことがあります",
    "expression_romaji": "ta koto ga arimasu",
    "titre_fr": "avoir déjà",
    "idee_cle": "Cette structure exprime l’expérience : avoir déjà fait quelque chose",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "koto_ni_suru",
    "chapitre": "Décision",
    "titre": "〜ことにします — décider de faire",
    "niveau": "A2/B1",
    "explication": "Indique une décision prise par le locuteur.",
    "exemples": [
      {
        "jp": "今日は早く寝ることにします。",
        "romaji": "Kyō wa hayaku neru koto ni shimasu.",
        "fr": "Aujourd’hui, j’ai décidé de me coucher tôt."
      },
      {
        "jp": "今回は電車で行くことにしました。",
        "romaji": "Konkai wa densha de iku koto ni shimashita.",
        "fr": "Cette fois, j’ai décidé d’y aller en train."
      }
    ],
    "pieges": "Ne pas confondre avec ことになります, qui indique une décision ou évolution extérieure.",
    "lien_vocab": [
      "今日",
      "早く",
      "寝る",
      "電車"
    ],
    "lien_interactions": [],
    "expression": "〜ことにします",
    "expression_romaji": "koto ni shimasu",
    "titre_fr": "décider de",
    "idee_cle": "Indique une décision prise par le locuteur",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "yotei_desu",
    "chapitre": "Projets",
    "titre": "〜予定です — il est prévu de",
    "niveau": "A2",
    "explication": "予定です indique un projet ou un programme prévu.",
    "exemples": [
      {
        "jp": "明日、京都に行く予定です。",
        "romaji": "Ashita, Kyōto ni iku yotei desu.",
        "fr": "Demain, j’ai prévu d’aller à Kyoto."
      },
      {
        "jp": "午後、友だちに会う予定です。",
        "romaji": "Gogo, tomodachi ni au yotei desu.",
        "fr": "L’après-midi, il est prévu que je voie un ami."
      }
    ],
    "pieges": "Avant 予定, le verbe est à la forme dictionnaire.",
    "lien_vocab": [
      "明日",
      "京都",
      "午後",
      "友だち"
    ],
    "lien_interactions": [],
    "expression": "〜予定です",
    "expression_romaji": "yotei desu",
    "titre_fr": "prévu de",
    "idee_cle": "予定です indique un projet ou un programme prévu",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "tsumori_desu",
    "chapitre": "Projets",
    "titre": "〜つもりです — avoir l’intention de",
    "niveau": "A2",
    "explication": "つもりです exprime une intention personnelle.",
    "exemples": [
      {
        "jp": "日本語を続けるつもりです。",
        "romaji": "Nihongo o tsuzukeru tsumori desu.",
        "fr": "J’ai l’intention de continuer le japonais."
      },
      {
        "jp": "今日は出かけないつもりです。",
        "romaji": "Kyō wa dekakenai tsumori desu.",
        "fr": "Aujourd’hui, je n’ai pas l’intention de sortir."
      }
    ],
    "pieges": "Plus personnel que 予定です. Peut sonner assez déterminé.",
    "lien_vocab": [
      "日本語",
      "続ける",
      "今日",
      "出かける"
    ],
    "lien_interactions": [],
    "expression": "〜つもりです",
    "expression_romaji": "tsumori desu",
    "titre_fr": "avoir l’intention",
    "idee_cle": "つもりです exprime une intention personnelle",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "hou_ga_suki",
    "chapitre": "Préférence",
    "titre": "〜ほうが好きです — préférer",
    "niveau": "A2",
    "explication": "のほうが好きです permet d’exprimer une préférence entre deux options.",
    "exemples": [
      {
        "jp": "私は静かな店のほうが好きです。",
        "romaji": "Watashi wa shizuka na mise no hō ga suki desu.",
        "fr": "Je préfère les restaurants calmes."
      },
      {
        "jp": "魚のほうが肉より好きです。",
        "romaji": "Sakana no hō ga niku yori suki desu.",
        "fr": "Je préfère le poisson à la viande."
      }
    ],
    "pieges": "Très utile pour exprimer ses goûts sans être trop catégorique.",
    "lien_vocab": [
      "静か",
      "店",
      "魚",
      "肉"
    ],
    "lien_interactions": [],
    "expression": "〜ほうが好きです",
    "expression_romaji": "hō ga suki desu",
    "titre_fr": "préférer",
    "idee_cle": "のほうが好きです permet d’exprimer une préférence entre deux options",
    "mode_emploi": "Cette fiche sert à donner une impression, un avis ou une comparaison. C’est très utile en conversation.",
    "reflexe_debutant": "Ajoute ちょっと ou とても pour nuancer : un peu / très.",
    "mini_exercice": "Refais l’exemple avec おいしい, 難しい, 面白い ou きれい."
  },
  {
    "id": "to_condition",
    "chapitre": "Conditions",
    "titre": "〜と — quand / si, résultat naturel",
    "niveau": "A2/B1",
    "explication": "と exprime un résultat naturel ou automatique : quand A se produit, B arrive.",
    "exemples": [
      {
        "jp": "このボタンを押すと、ドアが開きます。",
        "romaji": "Kono botan o osu to, doa ga akimasu.",
        "fr": "Quand on appuie sur ce bouton, la porte s’ouvre."
      },
      {
        "jp": "春になると、桜が咲きます。",
        "romaji": "Haru ni naru to, sakura ga sakimasu.",
        "fr": "Quand le printemps arrive, les cerisiers fleurissent."
      }
    ],
    "pieges": "Ne pas l’utiliser pour une invitation ou une volonté personnelle dans la conséquence.",
    "lien_vocab": [
      "ボタン",
      "押す",
      "春",
      "桜"
    ],
    "lien_interactions": [],
    "expression": "〜と",
    "expression_romaji": "to",
    "titre_fr": "si / quand",
    "idee_cle": "と exprime un résultat naturel ou automatique : quand A se produit, B arrive",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "tara_condition",
    "chapitre": "Conditions",
    "titre": "〜たら — si, quand",
    "niveau": "A2",
    "explication": "たら est une condition très pratique et souple : si, quand, une fois que.",
    "exemples": [
      {
        "jp": "時間があったら、行きたいです。",
        "romaji": "Jikan ga attara, ikitai desu.",
        "fr": "Si j’ai le temps, j’aimerais y aller."
      },
      {
        "jp": "日本に着いたら、連絡します。",
        "romaji": "Nihon ni tsuitara, renraku shimasu.",
        "fr": "Quand je serai arrivé au Japon, je vous contacterai."
      }
    ],
    "pieges": "Même si la forme ressemble au passé, elle exprime ici une condition.",
    "lien_vocab": [
      "時間",
      "行く",
      "着く",
      "連絡"
    ],
    "lien_interactions": [],
    "expression": "〜たら",
    "expression_romaji": "tara",
    "titre_fr": "si / quand",
    "idee_cle": "たら est une condition très pratique et souple : si, quand, une fois que",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "ba_condition",
    "chapitre": "Conditions",
    "titre": "〜ば — si",
    "niveau": "A2/B1",
    "explication": "ば exprime une condition de façon assez neutre. Utile dans les conseils ou les raisonnements.",
    "exemples": [
      {
        "jp": "分からなければ、聞いてください。",
        "romaji": "Wakaranakereba, kiite kudasai.",
        "fr": "Si vous ne comprenez pas, demandez."
      },
      {
        "jp": "時間があれば、少し話しましょう。",
        "romaji": "Jikan ga areba, sukoshi hanashimashō.",
        "fr": "Si nous avons le temps, parlons un peu."
      }
    ],
    "pieges": "Formation à apprendre séparément. Pour débuter, たら est souvent plus facile.",
    "lien_vocab": [
      "分かる",
      "聞く",
      "時間",
      "話す"
    ],
    "lien_interactions": [],
    "expression": "〜ば",
    "expression_romaji": "ba",
    "titre_fr": "si",
    "idee_cle": "ば exprime une condition de façon assez neutre",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "nara_condition",
    "chapitre": "Conditions",
    "titre": "〜なら — si c’est le cas de",
    "niveau": "A2/B1",
    "explication": "なら reprend un thème posé par l’interlocuteur : si on parle de…, dans ce cas…",
    "exemples": [
      {
        "jp": "京都なら、秋がきれいです。",
        "romaji": "Kyōto nara, aki ga kirei desu.",
        "fr": "Si on parle de Kyoto, l’automne est beau."
      },
      {
        "jp": "日本酒なら、少し分かります。",
        "romaji": "Nihonshu nara, sukoshi wakarimasu.",
        "fr": "Pour le saké japonais, je m’y connais un peu."
      }
    ],
    "pieges": "Très utile en conversation pour rebondir sur un sujet.",
    "lien_vocab": [
      "京都",
      "秋",
      "日本酒",
      "分かる"
    ],
    "lien_interactions": [],
    "expression": "〜なら",
    "expression_romaji": "nara",
    "titre_fr": "si, quant à",
    "idee_cle": "なら reprend un thème posé par l’interlocuteur : si on parle de…, dans ce cas…",
    "mode_emploi": "Cette fiche sert à enchaîner les idées : temps, cause, condition, nuance ou opposition douce.",
    "reflexe_debutant": "Construis d’abord deux phrases simples, puis relie-les avec cette forme.",
    "mini_exercice": "Écris mentalement : phrase A + connecteur + phrase B."
  },
  {
    "id": "passive_intro",
    "chapitre": "Voix passive",
    "titre": "Passif — être fait, subir",
    "niveau": "B1",
    "explication": "Le passif japonais sert à dire qu’une action est faite par quelqu’un, ou qu’on subit une action.",
    "exemples": [
      {
        "jp": "この本は多くの人に読まれています。",
        "romaji": "Kono hon wa ōku no hito ni yomarete imasu.",
        "fr": "Ce livre est lu par beaucoup de gens."
      },
      {
        "jp": "雨に降られました。",
        "romaji": "Ame ni furaremashita.",
        "fr": "Je me suis fait prendre par la pluie."
      }
    ],
    "pieges": "Le passif japonais peut exprimer un désagrément, pas seulement une voix passive grammaticale.",
    "lien_vocab": [
      "本",
      "読む",
      "雨"
    ],
    "lien_interactions": [],
    "expression": "〜られます / 〜れます",
    "expression_romaji": "raremasu / remasu",
    "titre_fr": "passif",
    "idee_cle": "Le passif japonais sert à dire qu’une action est faite par quelqu’un, ou qu’on subit une action",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "causative_intro",
    "chapitre": "Faire faire",
    "titre": "Causatif — faire faire, laisser faire",
    "niveau": "B1",
    "explication": "Le causatif indique que quelqu’un fait faire ou laisse faire une action à quelqu’un.",
    "exemples": [
      {
        "jp": "子どもに野菜を食べさせます。",
        "romaji": "Kodomo ni yasai o tabesasemasu.",
        "fr": "Je fais manger des légumes à l’enfant."
      },
      {
        "jp": "少し考えさせてください。",
        "romaji": "Sukoshi kangaesasete kudasai.",
        "fr": "Laissez-moi réfléchir un peu."
      }
    ],
    "pieges": "考えさせてください est une expression très utile et polie : laissez-moi réfléchir.",
    "lien_vocab": [
      "子ども",
      "野菜",
      "考える"
    ],
    "lien_interactions": [],
    "expression": "〜させます / 〜せます",
    "expression_romaji": "sasemasu / semasu",
    "titre_fr": "faire faire",
    "idee_cle": "Le causatif indique que quelqu’un fait faire ou laisse faire une action à quelqu’un",
    "mode_emploi": "Regarde surtout la fin de la phrase : c’est là que le verbe indique politesse, temps, négatif ou intention.",
    "reflexe_debutant": "Apprends l’expression avec un verbe très simple : 食べます, 行きます, 見ます, します.",
    "mini_exercice": "Refais l’exemple avec 食べます, 行きます ou 見ます pour sentir la structure."
  },
  {
    "id": "honorific_humble_intro",
    "chapitre": "Politesse",
    "titre": "尊敬語 / 謙譲語 — respectueux et humble",
    "niveau": "B1",
    "explication": "Le japonais distingue souvent le langage respectueux pour l’autre et le langage humble pour soi-même.",
    "exemples": [
      {
        "jp": "先生がいらっしゃいます。",
        "romaji": "Sensei ga irasshaimasu.",
        "fr": "Le professeur est là / vient / va."
      },
      {
        "jp": "私が参ります。",
        "romaji": "Watashi ga mairimasu.",
        "fr": "J’irai / je viendrai. (humble)"
      }
    ],
    "pieges": "Ne pas chercher à tout maîtriser au début. Mais reconnaître ces formes évite d’être perdu.",
    "lien_vocab": [
      "先生",
      "私"
    ],
    "lien_interactions": [],
    "expression": "尊敬語 / 謙譲語",
    "expression_romaji": "sonkeigo / kenjōgo",
    "titre_fr": "politesse avancée",
    "idee_cle": "Le japonais distingue souvent le langage respectueux pour l’autre et le langage humble pour soi-même",
    "mode_emploi": "C’est une base de construction : elle sert partout. Mieux vaut la maîtriser lentement que la survoler.",
    "reflexe_debutant": "Reste d’abord en style poli : です / ます. C’est le plus sûr.",
    "mini_exercice": "Produis une phrase affirmative, puis la même en question ou en négatif."
  },
  {
    "id": "itadakimasu_kudasaru",
    "chapitre": "Politesse",
    "titre": "いただく / くださる — recevoir avec politesse",
    "niveau": "A2/B1",
    "explication": "いただく est humble : recevoir de quelqu’un. くださる met en valeur ce que quelqu’un fait pour moi.",
    "exemples": [
      {
        "jp": "説明していただけますか。",
        "romaji": "Setsumei shite itadakemasu ka.",
        "fr": "Pourriez-vous m’expliquer ?"
      },
      {
        "jp": "友だちが手伝ってくださいました。",
        "romaji": "Tomodachi ga tetsudatte kudasaimashita.",
        "fr": "Mon ami m’a gentiment aidé."
      }
    ],
    "pieges": "Très utile pour comprendre la politesse japonaise, même si on l’utilise peu au début.",
    "lien_vocab": [
      "説明",
      "手伝う",
      "友だち"
    ],
    "lien_interactions": [],
    "expression": "いただく / くださる",
    "expression_romaji": "itadaku / kudasaru",
    "titre_fr": "recevoir / donner poliment",
    "idee_cle": "いただく est humble : recevoir de quelqu’un",
    "mode_emploi": "C’est une base de construction : elle sert partout. Mieux vaut la maîtriser lentement que la survoler.",
    "reflexe_debutant": "Reste d’abord en style poli : です / ます. C’est le plus sûr.",
    "mini_exercice": "Produis une phrase affirmative, puis la même en question ou en négatif."
  },
  {
    "id": "ageru_kureru_morau",
    "chapitre": "Don et réception",
    "titre": "あげる / くれる / もらう — donner et recevoir",
    "niveau": "A2/B1",
    "explication": "Ces verbes expriment la direction du don. くれる indique que quelqu’un donne vers moi ou mon groupe.",
    "exemples": [
      {
        "jp": "友だちにお土産をあげました。",
        "romaji": "Tomodachi ni omiyage o agemashita.",
        "fr": "J’ai donné un souvenir à un ami."
      },
      {
        "jp": "友だちがお土産をくれました。",
        "romaji": "Tomodachi ga omiyage o kuremashita.",
        "fr": "Un ami m’a donné un souvenir."
      }
    ],
    "pieges": "Le point de vue est essentiel. Ce n’est pas seulement « donner ».",
    "lien_vocab": [
      "友だち",
      "お土産"
    ],
    "lien_interactions": [],
    "expression": "あげる / くれる / もらう",
    "expression_romaji": "ageru / kureru / morau",
    "titre_fr": "donner / recevoir",
    "idee_cle": "Ces verbes expriment la direction du don",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "te_ageru_kureru_morau",
    "chapitre": "Don et réception",
    "titre": "〜てあげる / 〜てくれる / 〜てもらう",
    "niveau": "B1",
    "explication": "Ces formes indiquent qu’une action est faite pour quelqu’un, ou reçue comme service.",
    "exemples": [
      {
        "jp": "友だちが手伝ってくれました。",
        "romaji": "Tomodachi ga tetsudatte kuremashita.",
        "fr": "Un ami m’a aidé."
      },
      {
        "jp": "写真を撮ってもらえますか。",
        "romaji": "Shashin o totte moraemasu ka.",
        "fr": "Pourriez-vous prendre une photo pour moi ?"
      }
    ],
    "pieges": "〜てあげる peut parfois sonner condescendant si on insiste sur le service rendu.",
    "lien_vocab": [
      "手伝う",
      "写真",
      "撮る"
    ],
    "lien_interactions": [],
    "expression": "〜てあげる / 〜てくれる / 〜てもらう",
    "expression_romaji": "te ageru / te kureru / te morau",
    "titre_fr": "faire pour quelqu’un",
    "idee_cle": "Ces formes indiquent qu’une action est faite pour quelqu’un, ou reçue comme service",
    "mode_emploi": "Lis cette fiche comme un outil de phrase : repère l’expression japonaise, puis regarde dans les exemples ce qu’elle permet de faire concrètement.",
    "reflexe_debutant": "Essaie de refaire une phrase très courte avec un mot de ton vocabulaire.",
    "mini_exercice": "Remplace un seul élément dans un exemple : le lieu, le moment, le plat, la personne ou l’adjectif."
  },
  {
    "id": "nominalisation_no",
    "chapitre": "Nominalisation",
    "titre": "〜の — transformer un verbe en nom",
    "niveau": "A2",
    "explication": "の peut transformer une action en chose : le fait de faire. Très fréquent avec 好き, 上手, 見る, 聞く.",
    "exemples": [
      {
        "jp": "日本語を話すのは難しいです。",
        "romaji": "Nihongo o hanasu no wa muzukashii desu.",
        "fr": "Parler japonais est difficile."
      },
      {
        "jp": "料理するのが好きです。",
        "romaji": "Ryōri suru no ga suki desu.",
        "fr": "J’aime cuisiner."
      }
    ],
    "pieges": "こと est plus abstrait ; の est souvent plus concret ou personnel.",
    "lien_vocab": [
      "日本語",
      "話す",
      "料理"
    ],
    "lien_interactions": [],
    "expression": "〜の",
    "expression_romaji": "no",
    "titre_fr": "le fait de",
    "idee_cle": "の peut transformer une action en chose : le fait de faire",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "nominalisation_koto",
    "chapitre": "Nominalisation",
    "titre": "〜こと — action abstraite, expérience, règle",
    "niveau": "A2",
    "explication": "こと transforme une action en notion plus abstraite. Très utilisé dans les règles, expériences et projets.",
    "exemples": [
      {
        "jp": "毎日勉強することは大切です。",
        "romaji": "Mainichi benkyō suru koto wa taisetsu desu.",
        "fr": "Étudier tous les jours est important."
      },
      {
        "jp": "日本に行ったことがあります。",
        "romaji": "Nihon ni itta koto ga arimasu.",
        "fr": "Je suis déjà allé au Japon."
      }
    ],
    "pieges": "の et こと se recoupent, mais ne sont pas toujours interchangeables.",
    "lien_vocab": [
      "毎日",
      "勉強",
      "大切",
      "日本"
    ],
    "lien_interactions": [],
    "expression": "〜こと",
    "expression_romaji": "koto",
    "titre_fr": "le fait de",
    "idee_cle": "こと transforme une action en notion plus abstraite",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "relative_clause",
    "chapitre": "Subordonnée relative",
    "titre": "Nom qualifié par une phrase — 私が好きな店",
    "niveau": "A2/B1",
    "explication": "En japonais, la phrase qui qualifie un nom se place avant ce nom.",
    "exemples": [
      {
        "jp": "昨日行った店はおいしかったです。",
        "romaji": "Kinō itta mise wa oishikatta desu.",
        "fr": "Le restaurant où je suis allé hier était bon."
      },
      {
        "jp": "私が好きな場所です。",
        "romaji": "Watashi ga suki na basho desu.",
        "fr": "C’est un endroit que j’aime."
      }
    ],
    "pieges": "Il n’y a pas de pronom relatif comme « qui / que ». Toute la précision vient avant le nom.",
    "lien_vocab": [
      "昨日",
      "店",
      "好き",
      "場所"
    ],
    "lien_interactions": [],
    "expression": "私が好きな店",
    "expression_romaji": "watashi ga suki na mise",
    "titre_fr": "la boutique que j’aime",
    "idee_cle": "En japonais, la phrase qui qualifie un nom se place avant ce nom",
    "mode_emploi": "Cette fiche t’aide à organiser les noms : préciser, montrer, transformer une idée en groupe nominal.",
    "reflexe_debutant": "Cherche ce qui est qualifié ou précisé : ce mot est souvent juste après ou juste avant la structure.",
    "mini_exercice": "Remplace le nom de l’exemple par 店, 人, 日本語 ou 料理."
  },
  {
    "id": "plain_before_desu",
    "chapitre": "Style neutre et poli",
    "titre": "Forme neutre + です — parler simplement mais poliment",
    "niveau": "A2",
    "explication": "On peut parfois utiliser une forme neutre suivie de です pour rester simple et poli, surtout avec ない ou たい.",
    "exemples": [
      {
        "jp": "今日は行かないです。",
        "romaji": "Kyō wa ikanai desu.",
        "fr": "Aujourd’hui, je n’y vais pas."
      },
      {
        "jp": "少し休みたいです。",
        "romaji": "Sukoshi yasumitai desu.",
        "fr": "J’aimerais me reposer un peu."
      }
    ],
    "pieges": "Très courant à l’oral. Pour un style plus standard scolaire : 行きません.",
    "lien_vocab": [
      "今日",
      "行く",
      "休む"
    ],
    "lien_interactions": [],
    "expression": "普通形 + です",
    "expression_romaji": "futsūkei + desu",
    "titre_fr": "neutre poli",
    "idee_cle": "On peut parfois utiliser une forme neutre suivie de です pour rester simple et poli, surtout avec ない ou たい",
    "mode_emploi": "C’est une base de construction : elle sert partout. Mieux vaut la maîtriser lentement que la survoler.",
    "reflexe_debutant": "Reste d’abord en style poli : です / ます. C’est le plus sûr.",
    "mini_exercice": "Produis une phrase affirmative, puis la même en question ou en négatif."
  },
  {
    "id": "sentence_order",
    "chapitre": "Fondations",
    "titre": "Ordre de la phrase — thème, compléments, verbe final",
    "niveau": "A1",
    "explication": "Le japonais place souvent le verbe à la fin. Les particules indiquent le rôle des mots, donc l’ordre est plus souple qu’en français.",
    "exemples": [
      {
        "jp": "私は朝、コーヒーを飲みます。",
        "romaji": "Watashi wa asa, kōhī o nomimasu.",
        "fr": "Le matin, je bois du café."
      },
      {
        "jp": "明日、友だちと京都に行きます。",
        "romaji": "Ashita, tomodachi to Kyōto ni ikimasu.",
        "fr": "Demain, je vais à Kyoto avec un ami."
      }
    ],
    "pieges": "Ne pas calquer l’ordre français. Chercher d’abord le verbe final et les particules.",
    "lien_vocab": [
      "私",
      "朝",
      "コーヒー",
      "友だち"
    ],
    "lien_interactions": [],
    "expression": "A は B を Vます",
    "expression_romaji": "A wa B o V-masu",
    "titre_fr": "ordre de base",
    "idee_cle": "Le japonais place souvent le verbe à la fin",
    "mode_emploi": "C’est une base de construction : elle sert partout. Mieux vaut la maîtriser lentement que la survoler.",
    "reflexe_debutant": "Reste d’abord en style poli : です / ます. C’est le plus sûr.",
    "mini_exercice": "Produis une phrase affirmative, puis la même en question ou en négatif."
  },
  {
    "id": "omit_subject",
    "chapitre": "Fondations",
    "titre": "Sujet souvent omis — contexte d’abord",
    "niveau": "A1",
    "explication": "En japonais, le sujet est souvent omis quand il est évident dans le contexte.",
    "exemples": [
      {
        "jp": "行きます。",
        "romaji": "Ikimasu.",
        "fr": "J’y vais / il y va / nous y allons. (selon le contexte)"
      },
      {
        "jp": "分かりません。",
        "romaji": "Wakarimasen.",
        "fr": "Je ne comprends pas. / On ne sait pas."
      }
    ],
    "pieges": "Ne pas vouloir traduire systématiquement « je ». 私は répété trop souvent sonne lourd.",
    "lien_vocab": [
      "行く",
      "分かる",
      "私"
    ],
    "lien_interactions": [],
    "expression": "主語の省略",
    "expression_romaji": "shugo no shōryaku",
    "titre_fr": "sujet omis",
    "idee_cle": "En japonais, le sujet est souvent omis quand il est évident dans le contexte",
    "mode_emploi": "C’est une base de construction : elle sert partout. Mieux vaut la maîtriser lentement que la survoler.",
    "reflexe_debutant": "Reste d’abord en style poli : です / ます. C’est le plus sûr.",
    "mini_exercice": "Produis une phrase affirmative, puis la même en question ou en négatif."
  },
  {
    "id": "hai_iie",
    "chapitre": "Réponses",
    "titre": "はい / いいえ — oui, non, mais attention",
    "niveau": "A1",
    "explication": "はい confirme ce que l’autre dit. いいえ le nie. Avec une question négative, cela peut être déroutant pour un francophone.",
    "exemples": [
      {
        "jp": "寒くないですか。はい、寒くないです。",
        "romaji": "Samuku nai desu ka. Hai, samuku nai desu.",
        "fr": "Il ne fait pas froid ? Si / oui, il ne fait pas froid."
      },
      {
        "jp": "いいえ、寒いです。",
        "romaji": "Iie, samui desu.",
        "fr": "Non, il fait froid."
      }
    ],
    "pieges": "Répondre plutôt avec la phrase complète évite les malentendus.",
    "lien_vocab": [
      "はい",
      "いいえ",
      "寒い"
    ],
    "lien_interactions": [],
    "expression": "はい / いいえ",
    "expression_romaji": "hai / iie",
    "titre_fr": "oui / non",
    "idee_cle": "はい confirme ce que l’autre dit",
    "mode_emploi": "La question japonaise se comprend souvent à la fin : か, l’intonation, ou un mot interrogatif comme 何, どこ, いつ.",
    "reflexe_debutant": "Garde une question courte et polie : 〜ですか / 〜ますか.",
    "mini_exercice": "Transforme un exemple affirmatif en question en ajoutant か à la fin."
  }
];
