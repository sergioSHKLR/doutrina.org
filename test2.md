---
layout: blank
---

<head>
  <link rel="stylesheet" href="../framework/css/blockquote.css">
  <style>
   ul,
ol {
    list-style-type: none;
}
ul.spirit>li {
    border-left: 4px solid dodgerblue;
    padding: 10px;
    border-right: 1px solid gainsboro;
    margin-right: 40px;
}
ul.spirit>li:nth-child(1)::before {
    content: "👻 ▸ "
}
ul.spirit>li:nth-child(1) {
    border-right: 1px solid gainsboro;
    border-top: 1px solid gainsboro;
}
ul.spirit>li:nth-child(2) {
    text-align: right;
    padding-right: 10px;
    border-right: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
}
ol.bible>li {
    border-left: 4px solid orchid;
    padding: 10px;
    border-right: 1px solid gainsboro;
    margin-right: 40px;
}
ol.bible>li:nth-child(1)::before {
    content: "✝️ ▸ "
}
ol.bible>li:nth-child(1) {
    border-right: 1px solid gainsboro;
    border-top: 1px solid gainsboro;
}
ol.bible>li:nth-child(2) {
    text-align: right;
    padding-right: 10px;
    border-right: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
}
  </style>
</head>


> message
>
> Spirit  
> City 🇫🇷  
> Year
{:.spirit-multi}

> spirit one-line
{:.spirit}

---

> message *jesus* (italic)
>
> Livro, cap. X, vers. Y, ARC
{:.bible-multi}

> bible one-line
{:.bible}

---

1. ol
{:.bible}

---

1. message
2. Livro, cap. X, vers. Y, ARC
{:.bible}

- ul one-line
{:.spirit}
---

- message  
- Spirit  
City 🇫🇷  
Year
{:.spirit}

---


