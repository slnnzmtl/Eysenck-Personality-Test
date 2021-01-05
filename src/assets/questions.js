let questions = [
    {
      text: "Лица противоположного пола будут уважать вас больше, если вы не очень хорошо знакомы с ними.",
      categories: {
        libido: 0,
      },
      responses: [
        { text: 'Да', value: 1 },
        { text: '?', value: 0.5 }, 
        { text: 'Нет', value: 0 }, 
      ]
    }, {
      text: "Секс без любви («обезличенный секс») не приносит абсолютно никакого удовлетворения.",
      categories: {
         libido: 0,
         impersonalSex: 0,
        },
      responses: [
        { text: 'Да', value: 1 },
        { text: '?', value: 0.5 }, 
        { text: 'Нет', value: 0 }, 
      ]
    },
    {
      text: "Необходимы совершенно определенные условия, чтобы я почувствовал(а) сексуальное возбуждение.",
      categories: {
        realization: 0,
        MasculinityFemininity: 1,
      },
      responses: [
        { text: 'Да', value: 1 },
        { text: '?', value: 0.5 }, 
        { text: 'Нет', value: 0 }, 
      ]
    },
    {
      text: "Половые контакты никогда не были для меня проблемой.",
      categories: {
         excitability: 0
        },
      responses: [
        { text: 'Да', value: 1 },
        { text: '?', value: 0.5 }, 
        { text: 'Нет', value: 0 }, 
      ]
    },
    {
      text: "Необходимы совершенно определенные условия, чтобы я почувствовал(а) сексуальное возбуждение. 3",
      categories: {
         excitability: 0
        },
      responses: [
        { text: 'Да', value: 1 },
        { text: '?', value: 0.5 }, 
        { text: 'Нет', value: 0 }, 
      ]
    },
  ]

  module.exports = questions 