import { createElement, createHeader } from '../../script/layout'
const page = document.querySelector('.page')
const header = createHeader()
page.append(header)
const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

const TABS = [
  { text: 'База знань', isActive: false },
  { text: 'Інформація', isActive: true },
]
const createTabs = () => {
  const tabs = createElement('div', 'tabs')

  TABS.forEach((el) => {
    const tab = createElement('button', el.isActive ? 'tab__button active' : 'tab__button', el.text)
    tabs.append(tab)
  })
  return tabs
}

const tabs = createTabs()
page.append(tabs)

const createArticle = () => {
  const atricle = createElement('div', 'article')
  const image = createElement('img', 'article__image')
  image.src = 'svg/communiti.svg'
  const title = createElement('h2', 'article__title', 'Що таке база знань?')
  const text = createElement(
    'p',
    'article__text',
    'База знань - це база даних, що вміщує правила виводу та інформацію про людський досвід та знання в деякій предметній області. В самонавчаючихся системах база знань також вміщує інформацію, яка є результатом вірішення попередніх затач.',
  )
  const button = createElement('button', 'article__button', "Перейти до ком'юніті у Телеграм")
  atricle.append(image)
  atricle.append(title)
  atricle.append(text)
  atricle.append(button)
  return atricle
}
const article = createArticle()
page.append(article)
