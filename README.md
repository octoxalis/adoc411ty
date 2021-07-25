# adoc411ty
**Use AsciiDoc markup with Eleventy static site generator**

As most static site generators, [Eleventy](https://11ty.dev) doesn't support natively [AsciiDoc](https://asciidoc.org/) markup.
However it has all the required functions to let you use this powerful and versatile text document format very easily.

The simplest solution is to declare a `shortcode` for your template engine which invoques the `asciidoctor.js` node module to convert any AsciiDoc markup inside a Markdown file.
You can even mix (or alternate) Markdown sections and AsciiDoc section within the same file.
But if you want to use AsciiDoc only, all you have to do is to put, just after the front matter of your page, the AsciiDoc `shortcode`:
```
---js
// front matter is here!
---
{% _adoc %}
= AsciiDoc document is here!
{% end_adoc %}
```
and put inside this shortcode all your AsciiDoc markup.

The AsciiDoc shortcode is declared in the `.eleventy.js` file (`source/.eleventy.js`).

The AsciiDoc markup sample is declared in the `index.md` file (`source/index.md`).
