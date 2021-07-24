const ADOC_o =
  require( 'asciidoctor' )()

//-- For user-defined extensions (macros or templates), uncomment the following lines
// const registry_o = ADOC_o.Extensions.create()
// const templateDir_s = [ './path/to/templatesDir' ]


module
  .exports =
    config_o =>
    {
      config_o
        .addPairedShortcode  //: universal shortcode
        (
          '_adoc',           //: use a leading underscore for paired shortcodes
          content_s =>
              ADOC_o
                .convert
                (
                  content_s,
                  {                    //: Asciidoctor options
                    safe: 'safe',
                    backend: 'html5',
                    //-- For user-defined extensions, uncomment the following lines
                    //? template_dirs: templateDir_s,
                    //? extension_registry: registry_o
                  }
                )
        )

      return (
        {
          markdownTemplateEngine: 'njk',
          htmlTemplateEngine:     'njk',
          dataTemplateEngine:     'njk',
          templateFormats:        [ 'njk', 'md' ],
          passthroughFileCopy:    true,
          pathPrefix:             '/',
          dir:
            {
              input:    '.',              //: build from source dir
              output:   '../_site',
              includes: '_includes'
            }
        }
      )
    }