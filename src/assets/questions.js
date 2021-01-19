let questions = [
    {
      text: "Лица противоположного пола будут уважать вас больше, если вы не очень хорошо знакомы с ними.",
      categories: {
        libido: 0,
      },
      responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 }, 
        { text: 'Нет', value: 1 },
      ]
    },
    {
      text: "Секс без любви («обезличенный секс») не приносит абсолютно никакого удовлетворения.",
      categories: {
         libido: 0,
         impersonalSex: 0,
         MasculinityFemininity: 0,
        },
      responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 }, 
        { text: 'Нет', value: 1 },
      ]
    },
    {
      text: "Необходимы совершенно определенные условия, чтобы я почувствовал(а) сексуальное возбуждение.",
      categories: {
          excitability: 0,
          MasculinityFemininity: 0
      },
      responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 }, 
        { text: 'Нет', value: 1 },
      ]
    },
    {
        text: "В целом меня удовлетворяет моя сексуальная жизнь.",
        categories: {
            realization:0,
            satisfaction:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Девственность — это самое ценное достояние девушки.",
        categories: {
            permissiveness:0,
            libido:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Я редко думаю о сексе.",
        categories: {
            excitability:0,
            libido:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Иногда мне трудно контролировать свои сексуальные чувства.",
        categories: {
            neuroticism:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Мастурбация вредна для здоровья.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Если я люблю человека, то могу делать с ним все, что угодно.",
        categories: {
            excitability:0,
            aversion:1,
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я получаю приятные ощущения, когда кто-то прикасается к моим половым органам.",
        categories: {
            libido:0,   
            MasculinityFemininity:0,
            pornography:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я далек(а) от секса.",
        categories: {
            realization:0,
            satisfaction:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Вид животных, спаривающихся на улице, вызывает отвращение.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Мне не нужно уважать партнера или любить его для того, чтобы получать удовольствие от эротических ласк или сношения с ним.",
        categories: {
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я весьма непривлекателен(на) в сексуальном отношении.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Откровенно говоря, я предпочитаю людей своего пола.",
        categories: {
            satisfaction:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Половые контакты никогда не были для меня проблемой.",
        categories: {
            realization:1,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Неприятно наблюдать, как целуются на людях.",
        categories: {
            permissiveness:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Сексуальные переживания иногда мне неприятны.",
        categories: {
            neuroticism:1,
            satisfaction:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "В моей половой жизни чего-то не хватает.",
        categories: {
            realization:0,
            satisfaction:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Мое сексуальное поведение никогда не доставляло мне каких-либо проблем.",
        categories: {
            realization:0,
            satisfaction:0,
            neuroticism:0,
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Моя любовная жизнь—это полное разочарование.",
        categories: {
            realization:0,
            satisfaction:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "У меня никогда не было много свиданий.",
        categories: {
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я сознательно пытаюсь отделаться от мыслей о сексе.",
        categories: {
            neuroticism:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },  {
        text: "Я никогда не испытывал чувства вины за свои сексуальные приключения.",
        categories: {
            neuroticism:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Меня не беспокоит то, что человек, на котором я женюсь (за которого выйду замуж) не будет девственницей (девственником).",
        categories: {
            permissiveness: 0,
            libido: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Иногда я опасаюсь того, что могу оказаться несостоятельным в сексуальном отношении.",
        categories: {
            neuroticism: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Мне пришлось испытать сексуальное влечение к человеку моего пола.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "У меня много друзей противоположного пола.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я испытываю сильные сексуальные чувства, но, получив возможность, не могу достойно выразить себя.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Мне достаточно совсем немного, чтобы испытать сексуальное возбуждение.",
        categories: {
            excitability: 0,
            MasculinityFemininity: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },  {
        text: "Родительская опека тормозит мое сексуальное самовыражение.",
        categories: {
            physicalSex	: 0,
            satisfaction: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },{
        text: "Мысли о сексе слишком отвлекают меня.",
        categories: {
            neuroticism: 0,
            satisfaction: 1
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Меня часто привлекают люди одного со мной пола.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Есть вещи, которые я не стал(а) бы делать ни с кем.",
        categories: {
            aversion: 1,
            excitability: 0,
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Детей следует просвещать относительно секса.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Я понимаю гомосексуалистов.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я думаю о сексе почти ежедневно.",
        categories: {
        MasculinityFemininity: 0,
        excitability: 0,
        libido: 0
    },
    responses: [
    { text: 'Да', value: 1 },
    { text: 'Не уверен', value: 0.5 },
    { text: 'Нет', value: 0 },
]
},
    {
        text: "Люди не должны экспериментировать с сексом до брака.",
        categories: {
            permissiveness: 0,
            libido: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Я легко возбудим(а) в сексуальном отношении.",
        categories: {
            excitability:0,
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Мысль о сексуальной оргии для меня отвратительна.",
        categories: {
            impersonalSex: 0,
            libido: 0,
            MasculinityFemininity: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },{
        text: "Лучше не иметь сексуальных связей до брака.",
        categories: {
            permissiveness: 0,
            libido: 0,
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },{
        text: "Меня возбуждает мысль о сексуальном партнере другой расы.",
        categories: {
            MasculinityFemininity: 0,
            libido: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Мне нравится рассматривать порнографические снимки.",
        categories: {
            pornography:0,
            MasculinityFemininity: 0,
            libido: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Моя совесть слишком беспокоит меня.",
        categories: {
            neuroticism: 0,
            satisfaction: 1,
            MasculinityFemininity: 1
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Мои религиозные убеждения против секса.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Сексуальные чувства иногда преобладают над моей волей.",
        categories: {
            neuroticism: 0,
            libido: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я чувствую себя напряженно с людьми противоположного пола.",
        categories: {
            shyness: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Сексуальные мысли почти сводят меня с ума.",
        categories: {
            physicalSex: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Когда я возбуждаюсь, то не могу думать ни о чем другом, кроме сексуального удовлетворения.",
        categories: {
            physicalSex: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Я чувствую себя легко с людьми противоположного пола.",
        categories: {
            shyness: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Мне не нравится, когда меня целуют.",
        categories: {
            chastity: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },

    {
        text: "Очень сложно общаться с людьми противоположного пола.",
        categories: {
            shyness: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    }, {
        text: "Я не учился(лась) на чужих ошибках до тех пор, пока не стал(а) взрослым(ой).",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я чувствую себя более комфортно с людьми моего пола.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я получаю удовольствие от эротических ласк.",
        categories: {
            chastity: 0,
            MasculinityFemininity:1
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },{
        text: "Я слишком озабочен(а) сексом.",
        categories: {
            realization:0,
            satisfaction:0,
            neuroticism:1
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },{
        text: "Таблетки против беременности должны быть общедоступны.",
        categories: {
            permissiveness:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Мне не интересно видеть человека голым.",
        categories: {
            pornography:0,
            MasculinityFemininity:0,
            chastity:1
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },
    {
        text: "Иногда размышления о сексе приводят меня в крайнее волнение.",
        categories: {
            neuroticism: 0,
            shyness:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Меня иногда беспокоят мысли о половых извращениях.",
        categories: {
            neuroticism	:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Разговоры о сексе приводят меня в смущение.",
        categories: {
            shyness	:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Молодые люди должны получать знания о сексе из собственного опыта.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Женщина иногда должна быть сексуально агрессивной.",
        categories: {
            MasculinityFemininity	:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Шутки на сексуальные темы внушают мне отвращение.",
        categories: {
            permissiveness:0,
            MasculinityFemininity:0,
            chastity:1
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1 },
        ]
    },{
        text: "Я верю, что смогу получить удовольствие где угодно.",
        categories: {
            impersonalSex:0,
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Человек должен получать знания о сексе постепенно, путем проб.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Молодые люди должны иметь возможность свободно развлекаться по ночам без излишнего присмотра.",
        categories: {
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я иногда чувствую, что унижаю своего партнера по сексу.",
        categories: {
            aggressiveSex: 0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я постарался бы надежно оградить своих детей от всяких сексуальных контактов.",
        categories: {
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1},
        ]
    },
    {
        text: "Самоудовлетворение вовсе не опасно, если только оно не принимает нездоровых форм.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Я сильно возбуждаюсь, когда касаюсь своего партнера.",
        categories: {
            physicalSex:1,
            excitability:1,
            chastity:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1},
        ]
    },{
        text: "Я одновременно имел(а) несколько сексуальных партнеров.",
        categories: {
            libido:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },
    {
        text: "Для некоторых людей гомосексуализм — это нормально.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Нет ничего предосудительного в том, чтобы соблазнить взрослого человека, способного отдавать себе отчет в своих поступках.",
        categories: {
            libido:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    }, {
        text: "Я иногда испытываю чувство враждебности по отношению к своему партнеру по сексу.",
        categories: {
            aggressiveSex:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Мне нравится рассматривать фотографии обнаженных людей.",
        categories: {
            pornography	:0,
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Если бы у меня была возможность тайно наблюдать, как двое людей занимаются сексом, я воспользовался(лась) бы этим шансом.",
        categories: {
            pornography:0,
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Порнографические романы должны быть разрешены для свободной печати.",
        categories: {
            permissiveness:0,
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Проституция должна быть разрешена законом.",
        categories: {
            permissiveness:0,
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Решение об аборте должно приниматься не кем-то другим, а только самой женщиной, которая стоит перед этой проблемой.",
        categories: {
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1},
        ]
    },{
        text: "Телевидение демонстрирует слишком много неприличных фильмов.",
        categories: {
            permissiveness:0,
            libido:0,
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1},
        ]
    },
    {
        text: "Двойной стандарт о морали, который дает мужчинам больше свободы, чем женщинам – это явление естественное, поэтому надо следовать ему и далее.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Нам следует полностью отменить институт брака.",
        categories: {
            impersonalSex:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },
    {
        text: "У меня в молодости был неудачный сексуальный опыт.",
        categories: {
            neuroticism:0,
            MasculinityFemininity:1
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    }, {
        text: "Не должно быть никакой цензуры фильмов и пьес на сексуальные темы.",
        categories: {
            permissiveness:0,
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Секс для меня – самое большое удовольствие.",
        categories: {
            physicalSex:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Сексуальное попустительство угрожает подорвать все основы цивилизованного общества.",
        categories: {
            permissiveness:0,
            libido:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1},
        ]
    },
    {
        text: "Секс необходимо рассматривать только как способ размножения, а не как источник удовольствия.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Абсолютная преданность одному сексуальному партнеру в течение всей жизни – это такая же глупость, как и воздержание.",
        categories: {
            impersonalSex:0,
            MasculinityFemininity:0,
            libido:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },
    {
        text: "Я предпочитаю совершать половой акт под одеялом и в темноте.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Существующее чрезмерное внимание, которое уделяется сексу в нашем обществе, можно объяснить исключительно влиянием средств массовой информации.",
        categories: {
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1},
        ]
    },{
        text: "Мне доставило бы удовольствие наблюдать, как мой сексуальный партнер совокупляется с кем-нибудь другим.",
        categories: {
            impersonalSex:0,
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Сексуальные игры между маленькими детьми совершенно безвредны.",
        categories: {
            permissiveness:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Женщины не обладают таким сильным сексуальным влечением, как мужчины.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Я проголосовал(а) бы за закон, разрешающий полигамию.",
        categories: {
            impersonalSex:0,
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Даже если кто-то имеет половые сношения регулярно, мастурбация все же неплоха для разнообразия.",
        categories: {
            libido:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Я предпочел бы иметь нового сексуального партнера каждую ночь.",
        categories: {
            impersonalSex:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Я становлюсь сексуально активным исключительно по ночам и никогда — в дневное время.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Я предпочитаю иметь сексуальных партнеров, которые старше меня на несколько лет.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "В моих сексуальных фантазиях часто присутствует истязание плетью.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Во время полового акта я произвожу много шума.",
        categories: {
            MasculinityFemininity:0,
            aggressiveSex:1,
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1},
        ]
    },{
        text: "Секс возбуждает больше, если партнер мне незнаком.",
        categories: {
            impersonalSex:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Я никогда не смог(ла) бы обсуждать сексуальные темы с моими родителями.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Есть вещи, которые я делаю исключительно для того, чтобы удовлетворить своего полового партнера.",
        categories: {
            aversion:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Я не всегда знаю точно, испытал(а) ли я оргазм.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },
    {
        text: "Для меня существует совсем немного вещей, которые я считаю более важными, чем секс.",
        categories: {
            physicalSex:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Мне очень нравятся младенцы.",
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
    },{
        text: "Мой половой партнер полностью удовлетворяет все мои сексуальные потребности.",
        categories: {
            realization	:0,
            satisfaction:0
        },
        responses: [
            { text: 'Да', value: 1 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 0},
        ]
    },{
        text: "Секс для меня не так уж и важен.",
        categories: {
            physicalSex:0,
            MasculinityFemininity:0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0.5 },
            { text: 'Нет', value: 1},
        ]
    },
    {
    text: "Большинство мужчин просто с ума сходит по сексу.",
    categories: {
    empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},{
    text: "Моему(ей) супругу(е) совершенно необходимо быть умелым(ой) в постели.",
    categories: {
        physicalSex:0
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "Я получаю удовольствие от очень длительной прелюдии к половому акту.",
        categories: {
        chastity:0,
        aversion:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},{
    text: "Мне легко сказать своему партнеру по сексу, что мне нравится и что нет в ее поведении в постели.",
        categories: {
        realization	:0,
        MasculinityFemininity:0
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "Мне бы хотелось, чтобы мой сексуальный партнер(ша) был(а) более опытным(ой) и умелым(ой).",
        categories: {
        realization	:0,
        MasculinityFemininity:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},{
    text: "Психологические качества моего партнера по сексу для меня важнее, чем его физические достоинства.",
        categories: {
        empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},{
    text: "У меня возникает иногда желание укусить или оцарапать своего партнера во время полового акта.",
        categories: {
        aggressiveSex:0,
        MasculinityFemininity:1
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "Никому еще не удавалось удовлетворить меня в постели.",
        categories: {
        satisfaction:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},{
    text: "Я чувствую себя менее компетентным(ой) в сексуальном отношении, чем мои друзья.",
        categories: {
        realization	:0,
        satisfaction:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},{
    text: "Меня привлекает групповой секс.",
        categories: {
        impersonalSex:0,
        libido:0,
        MasculinityFemininity:0
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "Меня возбуждает мысль о внебрачной связи.",
        categories: {
        impersonalSex:0,
        libido:0,
        MasculinityFemininity:0
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "Я обычно чувствую агрессию по отношению к партнеру по сексу.",
        categories: {
        aggressiveSex:0
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "Я оцениваю уровень моей сексуальной активности как средний.",
        categories: {
        chastity:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},{
    text: "Меня приводят в смущение порнографические снимки.",
        categories: {
        empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},{
    text: "Я опасаюсь сексуальных связей.",
        categories: {
        shyness:0,
        satisfaction:1
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "Я часто испытываю желание, чтобы мой партнер был менее требовательным в сексуальном плане.",
        categories: {
        empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},
{
    text: "Я не выношу, когда люди прикасаются ко мне.",
        categories: {
    chastity:0
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},   {
    text: "Полноценный секс — это наиболее важная часть брака.",
    categories: {
        physicalSex:0
},
responses: [
    { text: 'Да', value: 1 },
    { text: 'Не уверен', value: 0.5 },
    { text: 'Нет', value: 0},
]
},{
    text: "Я предпочитаю, чтобы мой сексуальный партнер диктовал правила «игры».",
        categories: {
        MasculinityFemininity:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},
{
    text: "Я нахожу «простой секс» малопривлекательным.",
        categories: {empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},{
    text: "Я всегда занимаюсь любовью нагишом.",
        categories: {
        empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},{
    text: "Физическая привлекательность партнера чрезвычайно важна для меня.",
        categories: {
        physicalSex:0
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "В сексуальном союзе наиболее важное качество — это нежность.",
        categories: {
        aggressiveSex:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},{
    text: "Половые органы противоположного пола эстетически непривлекательны.",
        categories: {
        aversion:0,
        satisfaction:1
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "Я против использования неприличных выражений в смешанной компании.",
        categories: {
        permissiveness:0,
        libido:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value:1},
    ]
},{
    text: "Идея «обмена партнерами» мне чрезвычайно противна.",
        categories: {
        impersonalSex:0,
        libido:0,
        MasculinityFemininity:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},{
    text: "Романтическая любовь — это просто детская иллюзия.",
        categories: {
        empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},
{
    text: "Необходимость использовать противозачаточные средства нарушает мою сексуальную жизнь, поскольку секс становится слишком хладнокровным и рациональным актом.",
        categories: {
    empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},
{
    text: "Мне нравится ощущать физический контакт с людьми противоположного пола.",
        categories: {
    empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},{
    text: "Я не могу обсуждать сексуальные темы с моим постоянным партнером по сексу.",
        categories: {
        realization	:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},{
    text: "Люди, которые посещают шоу со стриптизом, ненормальные в сексуальном отношении.",
        categories: {
        empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},
{
    text: "Обнаженное человеческое тело — это приятное зрелище.",
        categories: {
    pornography:0,
    chastity:1
},
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},
{
    text: "Я могу заниматься сексом, а могу и не заниматься.",
        categories: {
    empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},
{
    text: "Я считаю, что принимать противозачаточные таблетки в течение длительного времени опасно для здоровья женщины.",
        categories: {
    empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},{
    text: "Меня не слишком бы беспокоило, если бы мой партнер по сексу имел половые отношения еще с кем-нибудь, лишь бы он вернулся ко мне.",
        categories: {
        impersonalSex:0
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},{
    text: "Женщины более эгоистичны в занятии любовью, чем мужчины.",
        categories: {
        MasculinityFemininity:0
    },
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},
{
    text: "Некоторые виды секса кажутся мне отвратительными.",
        categories: {
        aversion:1,
        excitability:0,
        MasculinityFemininity:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},
{
    text: "Я считаю, что мужчина должен быть лидером в сексуальных отношениях.",
        categories: {
        MasculinityFemininity:0
    },
    responses: [
        { text: 'Да', value: 0 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 1},
    ]
},
{
    text: "Женщины часто занимаются сексом исключительно с целью получить от этого какую-то выгоду.",
        categories: {
    empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},
{
    text: "Увлечение порнографическими журналами свидетельствует о неудачной попытке достичь «взрослого» отношения к сексу.",
        categories: {
    empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},
{
    text: "Сексуальные игры между маленькими детьми совершенно безвредны.",
    categories: {
        permissiveness:0
        
},
    responses: [
        { text: 'Да', value: 1 },
        { text: 'Не уверен', value: 0.5 },
        { text: 'Нет', value: 0},
    ]
},
{
    text: "В вопросах секса женщины всегда довольствуются вторым местом.",
        categories: {
    empty: 0
        },
        responses: [
            { text: 'Да', value: 0 },
            { text: 'Не уверен', value: 0 },
            { text: 'Нет', value: 0 },
        ]
},
{
    text: "Если бы вас пригласили на просмотр «голубого» фильма, вы бы:",
        categories: {
            libido: 0,
            pornography: 0
        },
        responses: [
            { text: 'Согласились', value: 1 },
            { text: 'Отказались', value: 0 },
        ]
},
{
    text: "Если бы вам предложили почитать откровенно порнографическую книгу, вы бы:",
        categories: {
            libido: 0,
            pornography: 0
        },
        responses: [
            { text: 'Согласились', value: 1 },
            { text: 'Отказались', value: 0 },
        ]
},
{
    text: "Если бы вам предложили принять участие в оргии, вы бы:",
        categories: {
            impersonalSex: 0,
            libido: 0
        },
        responses: [
            { text: 'Согласились', value: 1 },
            { text: 'Отказались', value: 0 },
        ]
},
{
    text: "Оптимально для вас заниматься любовью:",
        categories: {
            libido: 0
        },
        responses: [
            { text: 'Никогда', value: 0 },
            { text: 'один раз в месяц', value: 0 },
            { text: 'один раз в неделю', value: 0 },
            { text: 'два раза в неделю', value: 0 },
            { text: '##раз в неделю', value: 1 },
            { text: 'каждый день', value: 1 },
            { text: 'чаще одного раза в день', value: 1 },
        ]
},
{
    text: {
        man: "Вы когда-либо страдали от ранней эякуляции",
        woman: "Вы часто испытываете оргазм во время полового акта?",
    },
    
        categories: {
            empty: 0
        },
        responses: [
            { text: 'Очень часто', value: 0 },
            { text: 'часто', value: 0 },
            { text: 'время от времени', value: 0 },
            { text: 'не очень часто', value: 0 },
            { text: 'крайне редко', value: 0 },
            { text: 'никогда', value: 0 },
        ]
},


]
module.exports = questions