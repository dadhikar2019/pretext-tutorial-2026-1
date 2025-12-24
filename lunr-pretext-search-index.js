var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "chapter1-section1",
  "level": "1",
  "url": "chapter1-section1.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is an ordinary differential equation?",
  "body": " What is an ordinary differential equation?  This is a test page      Same figure, different formats.    "
},
{
  "id": "fig-multi-format",
  "level": "2",
  "url": "chapter1-section1.html#fig-multi-format",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Same figure, different formats.   "
},
{
  "id": "chapter1-section2",
  "level": "1",
  "url": "chapter1-section2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter1-section3",
  "level": "1",
  "url": "chapter1-section3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter2-section1",
  "level": "1",
  "url": "chapter2-section1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter2-section2",
  "level": "1",
  "url": "chapter2-section2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter2-section3",
  "level": "1",
  "url": "chapter2-section3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter3-section1",
  "level": "1",
  "url": "chapter3-section1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter3-section2",
  "level": "1",
  "url": "chapter3-section2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter3-section3",
  "level": "1",
  "url": "chapter3-section3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter4-section1",
  "level": "1",
  "url": "chapter4-section1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter4-section2",
  "level": "1",
  "url": "chapter4-section2.html",
  "type": "Section",
  "number": "4.2",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "chapter4-section3",
  "level": "1",
  "url": "chapter4-section3.html",
  "type": "Section",
  "number": "4.3",
  "title": "Introduction",
  "body": " Introduction  Text of section.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
