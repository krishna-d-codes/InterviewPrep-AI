// ========== QUESTIONS DATABASE WITH MCQ OPTIONS ==========
const QUESTIONS_DB = {
    HTML: [
 // =============================
//        20 EASY QUESTIONS
// =============================
  {
    "q": "What does HTML stand for?",
    "a": "HTML stands for HyperText Markup Language.",
    "options": ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Markdown Language", "Hyper Tool Multi Language"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which tag represents the root of an HTML document?",
    "a": "The html element is the root element of the document.",
    "options": ["document", "root", "html", "page"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which element contains the visible webpage content?",
    "a": "The body element contains visible page content.",
    "options": ["head", "body", "meta", "title"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element is used to create a hyperlink?",
    "a": "The a element creates a hyperlink.",
    "options": ["link", "a", "href", "anchor"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which attribute holds the destination URL on a link?",
    "a": "href is the attribute that holds the link URL.",
    "options": ["src", "href", "link", "url"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element defines a paragraph?",
    "a": "The p element defines a paragraph.",
    "options": ["para", "p", "paragraph", "text"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element defines a list item?",
    "a": "The li element defines a list item.",
    "options": ["li", "item", "list", "entry"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "Which element creates an ordered (numbered) list?",
    "a": "ol creates an ordered list.",
    "options": ["ul", "ol", "list", "dl"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which attribute provides alternative text for images?",
    "a": "alt provides alternative text.",
    "options": ["title", "alt", "desc", "caption"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which attribute specifies the image file location?",
    "a": "src specifies the image source URL.",
    "options": ["href", "src", "link", "file"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element inserts a line break?",
    "a": "br inserts a single line break.",
    "options": ["break", "lb", "br", "nl"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which element defines a table row?",
    "a": "tr defines a table row.",
    "options": ["td", "tr", "th", "row"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element defines a table cell?",
    "a": "td defines a table cell.",
    "options": ["th", "td", "cell", "entry"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element adds a title shown on the browser tab?",
    "a": "title inside head sets the browser tab title.",
    "options": ["header", "title", "head", "meta"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element is used to group block-level content?",
    "a": "div groups block-level elements.",
    "options": ["span", "div", "inline", "group"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element displays emphasized text (typically italic)?",
    "a": "em is used for emphasis.",
    "options": ["i", "em", "strong", "mark"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element displays important text (typically bold)?",
    "a": "strong marks important text.",
    "options": ["b", "important", "strong", "big"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which element creates an inline container?",
    "a": "span is an inline container.",
    "options": ["div", "span", "section", "article"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element inserts a thematic break (horizontal rule)?",
    "a": "hr inserts a horizontal rule.",
    "options": ["rule", "hr", "line", "break"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which element is used to add comments in HTML?",
    "a": "Comments use the syntax <!-- comment -->.",
    "options": ["// comment", "/* comment */", "<!-- comment --> (escape in editors)", "# comment"],
    "correct": 2,
    "difficulty": "easy"
  },

  // =============================
  //        20 MEDIUM QUESTIONS
  // =============================

  {
    "q": "What is the role of the meta charset tag (for example charset=UTF-8)?",
    "a": "It declares the character encoding used by the document.",
    "options": ["Links CSS files", "Specifies encoding of the document", "Sets page title", "Provides meta keywords"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is the default HTTP method used when a form does not specify method attribute?",
    "a": "GET is the default method for form submission.",
    "options": ["POST", "GET", "PUT", "DELETE"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which attribute makes an input field mandatory?",
    "a": "required makes a form field mandatory.",
    "options": ["must", "required", "validate", "needed"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which element is used to embed audio files?",
    "a": "audio embeds audio content in HTML5.",
    "options": ["sound", "audio", "media", "music"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which element is used to embed video files?",
    "a": "video embeds video content in HTML5.",
    "options": ["movie", "video", "player", "media"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which attribute on an input limits acceptable values with a regular expression?",
    "a": "pattern uses a regex to validate input.",
    "options": ["regex", "pattern", "match", "rule"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which element should be used for site navigation links?",
    "a": "nav groups navigation links.",
    "options": ["menu", "links", "nav", "navigation"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which element defines a self-contained composition like a blog post?",
    "a": "article defines self-contained content.",
    "options": ["section", "article", "div", "aside"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which element provides a caption for a figure?",
    "a": "figcaption is used with figure to add captions.",
    "options": ["caption", "figcaption", "title", "label"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which attribute on the a element opens the link in a new browsing context (tab/window)?",
    "a": "target=\"_blank\" opens in a new tab/window.",
    "options": ["rel", "target=\"_blank\"", "download", "href"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What does the placeholder attribute do for input elements?",
    "a": "Shows hint text inside the input until user types a value.",
    "options": ["Validates input", "Sets default value permanently", "Shows hint text", "Makes input read-only"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which element is used to associate a text label with a form control?",
    "a": "label connects descriptive text to form controls.",
    "options": ["caption", "label", "title", "legend"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which element groups related form controls together?",
    "a": "fieldset groups related form fields.",
    "options": ["group", "fieldset", "formgroup", "section"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which element provides a visible caption for a fieldset?",
    "a": "legend provides a caption for fieldset elements.",
    "options": ["caption", "legend", "title", "label"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which input type launches a color picker in supporting browsers?",
    "a": "type=\"color\" opens a color picker.",
    "options": ["type=\"paint\"", "type=\"picker\"", "type=\"color\"", "type=\"rgb\""],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which element is used to present code samples maintaining whitespace?",
    "a": "pre preserves whitespace and line breaks.",
    "options": ["code", "pre", "samp", "kbd"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which element defines side content related to main content?",
    "a": "aside defines content tangential to main content.",
    "options": ["side", "aside", "section", "div"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which attribute sets a default selected option in a select element?",
    "a": "The selected attribute marks an option as chosen by default.",
    "options": ["value", "checked", "selected", "default"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which element contains metadata and links to styles/scripts (not visible)?",
    "a": "head holds metadata like title, meta, and link tags.",
    "options": ["header", "head", "meta", "top"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which form attribute allows file type filtering for file inputs?",
    "a": "accept restricts selectable file types.",
    "options": ["accept", "filter", "types", "format"],
    "correct": 0,
    "difficulty": "medium"
  },

  // =============================
  //         20 HARD QUESTIONS
  // =============================

  {
    "q": "What are ARIA attributes used for?",
    "a": "ARIA attributes improve accessibility for assistive technologies.",
    "options": ["Performance tuning", "Accessibility for assistive tech", "Search engine optimization", "CSS variables"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What does the sandbox attribute on an iframe do?",
    "a": "It applies extra security restrictions to the framed content.",
    "options": ["Adds styling to iframe", "Applies security restrictions", "Improves iframe speed", "Enables caching"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which attribute is used to specify cross-origin requests for media or images?",
    "a": "crossorigin controls CORS behavior for fetching resources.",
    "options": ["crossorigin", "crossdomain", "crossfetch", "corsmode"],
    "correct": 0,
    "difficulty": "hard"
  },
  {
    "q": "What is the purpose of the srcset attribute on img?",
    "a": "It supplies multiple image sources for different resolutions/devices.",
    "options": ["Specifies image caption", "Provides multiple image sources", "Defines lazy loading", "Links to CSS"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What does the defer attribute on a script do?",
    "a": "It defers script execution until after HTML parsing completes.",
    "options": ["Runs script immediately", "Defers execution until after parse", "Blocks other downloads", "Runs only on user action"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What does the async attribute do on a script?",
    "a": "It allows the script to download and execute asynchronously without blocking parsing.",
    "options": ["Blocks parsing until finished", "Executes after parsing only", "Downloads/executes asynchronously", "Preloads then never runs"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which element defines a template that is not rendered until used?",
    "a": "template holds inert DOM that can be cloned and activated by scripts.",
    "options": ["template", "fragment", "module", "slot"],
    "correct": 0,
    "difficulty": "hard"
  },
  {
    "q": "What is Shadow DOM used for?",
    "a": "Shadow DOM encapsulates an element's internal DOM and styles.",
    "options": ["Hiding images", "Encapsulating component DOM and styles", "Server-side rendering", "Legacy HTML only"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which element is used to provide multiple image sources and art direction?",
    "a": "picture element allows different sources for responsive art direction.",
    "options": ["imgset", "picture", "source-list", "responsive-img"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which attribute enables native lazy-loading of certain elements?",
    "a": "loading=\"lazy\" is supported on img and iframe to defer loading.",
    "options": ["defer", "lazyload", "loading=\"lazy\"", "data-lazy"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is the purpose of the integrity attribute on external scripts/styles?",
    "a": "Subresource Integrity (SRI) verifies the fetched file hasn't been tampered with.",
    "options": ["Compresses file", "Verifies file integrity using a hash", "Caches file", "Optimizes file size"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which element is used to declare a slot in Web Components?",
    "a": "slot defines a placeholder inside Shadow DOM where light DOM is projected.",
    "options": ["slot", "placeholder", "insert", "outlet"],
    "correct": 0,
    "difficulty": "hard"
  },
  {
    "q": "Which element is intended for marking up contact information?",
    "a": "address is used to mark contact details.",
    "options": ["contact", "details", "address", "info"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which element defines a scalar measurement within a known range (e.g., disk usage)?",
    "a": "meter represents a scalar measurement within a known range.",
    "options": ["progress", "meter", "gauge", "range"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which element represents the result of a calculation from a form or script?",
    "a": "output is for calculation results.",
    "options": ["result", "output", "calc", "value"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which element is used for mathematical markup in HTML?",
    "a": "math is used for MathML expressions.",
    "options": ["equation", "math", "formula", "calc"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which element provides a summary heading for a details element?",
    "a": "summary is the visible heading for a details element.",
    "options": ["caption", "summary", "title", "heading"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which attribute allows embedding a hint to prefetch a resource for future navigation?",
    "a": "rel=\"prefetch\" is used to hint the browser to fetch for future navigations.",
    "options": ["rel=\"preload\"", "rel=\"prefetch\"", "rel=\"dns-prefetch\"", "rel=\"prerender\""],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which attribute name pattern is used to store custom private data on elements?",
    "a": "data-* attributes store custom data on elements.",
    "options": ["private-*", "data-*", "meta-*", "custom-*"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which element allows authors to mark up text that the user can edit in place?",
    "a": "contenteditable enables in-place editing by the user.",
    "options": ["editable", "contenteditable", "useredit", "inplace"],
    "correct": 1,
    "difficulty": "hard"
  }
],
    CSS: [
  // =============================
  //        20 EASY QUESTIONS
  // =============================
  {
    "q": "What does CSS stand for?",
    "a": "CSS stands for Cascading Style Sheets.",
    "options": ["Creative Style System", "Cascading Style Sheets", "Colorful Styling Syntax", "Custom Styling Script"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which HTML tag is used to link an external CSS file?",
    "a": "The link tag is used to include external CSS.",
    "options": ["style", "css", "link", "script"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which property changes the text color?",
    "a": "The color property sets the text color.",
    "options": ["text-color", "color", "font-color", "textstyle"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which property sets the background color?",
    "a": "background-color sets the background color.",
    "options": ["back-color", "background", "background-color", "bgcolor"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which CSS unit represents relative size to the parent element?",
    "a": "em is relative to the parent font size.",
    "options": ["px", "em", "vh", "cm"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which property sets the size of text?",
    "a": "font-size controls text size.",
    "options": ["text-size", "font", "font-size", "size"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which property makes text bold?",
    "a": "font-weight is used for bold text.",
    "options": ["bold", "font-style", "font-weight", "text-bold"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which property is used to center text?",
    "a": "text-align can center the text.",
    "options": ["align", "text-style", "text-align", "center"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which selector targets all elements on a page?",
    "a": "The * selector selects all elements.",
    "options": ["all", "*", "element", "html"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which property adds space outside an element?",
    "a": "margin creates space outside the element.",
    "options": ["padding", "margin", "border", "spacing"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which property adds space inside an element?",
    "a": "padding creates space inside the element.",
    "options": ["margin", "padding", "border", "space"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which property defines the border width?",
    "a": "border-width controls border thickness.",
    "options": ["border-size", "border-thickness", "border-width", "border-style"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which property removes bullet points from lists?",
    "a": "list-style-type: none removes bullets.",
    "options": ["text-style", "bullet", "list-style", "list-style-type"],
    "correct": 3,
    "difficulty": "easy"
  },
  {
    "q": "Which selector selects an element by ID?",
    "a": "The # symbol is used for IDs.",
    "options": [".class", "#id", "id=", "element:id"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which selector selects elements by class?",
    "a": "The . symbol selects classes.",
    "options": ["*", ".class", "#class", "class="],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which property controls element width?",
    "a": "width sets the width.",
    "options": ["element-width", "size-width", "width", "max-width"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which property makes an element hide from the layout?",
    "a": "display: none removes it from layout.",
    "options": ["visibility: hidden", "display: none", "opacity: 0", "hide: true"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which property sets rounded corners?",
    "a": "border-radius creates rounded corners.",
    "options": ["radius", "border-round", "corner-radius", "border-radius"],
    "correct": 3,
    "difficulty": "easy"
  },
  {
    "q": "Which property controls shadows around elements?",
    "a": "box-shadow adds shadows.",
    "options": ["shadow", "element-shadow", "box-shadow", "border-shadow"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which property controls the transparency of an element?",
    "a": "opacity sets transparency.",
    "options": ["alpha", "opacity", "filter", "visibility"],
    "correct": 1,
    "difficulty": "easy"
  },

  // =============================
  //        20 MEDIUM QUESTIONS
  // =============================

  {
    "q": "Which display value places elements next to each other horizontally?",
    "a": "display: inline-block places elements side by side.",
    "options": ["block", "inline", "flex", "inline-block"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "Which property controls stacking order?",
    "a": "z-index controls stack order.",
    "options": ["stack", "layer", "z-index", "index"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which property positions an element relative to its normal position?",
    "a": "position: relative moves element relative to itself.",
    "options": ["absolute", "fixed", "relative", "sticky"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which property makes a flex container?",
    "a": "display: flex enables Flexbox.",
    "options": ["flexbox", "container: flex", "display: flex", "element-flex"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which property controls spacing between flex items?",
    "a": "gap controls spacing in flex and grid.",
    "options": ["margin", "padding", "space", "gap"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "Which property aligns flex items on the cross axis?",
    "a": "align-items controls cross-axis alignment.",
    "options": ["justify-content", "align-items", "align-content", "items-align"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which property aligns flex items on the main axis?",
    "a": "justify-content places items on the main axis.",
    "options": ["align-items", "justify-items", "justify-content", "content-align"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which property sets a maximum width for elements?",
    "a": "max-width restricts the width.",
    "options": ["width-limit", "max-width", "width-max", "limit-width"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which function is used to apply a CSS variable?",
    "a": "var(--name) uses a variable.",
    "options": ["use()", "var()", "css()", "get()"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which property sets background image repeating?",
    "a": "background-repeat controls tiling.",
    "options": ["bg-repeat", "background-repeat", "image-repeat", "repeat"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which property sets how background images fill an area?",
    "a": "background-size controls scaling.",
    "options": ["background-fill", "image-size", "background-size", "scale"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which property makes an element float?",
    "a": "float positions elements left or right.",
    "options": ["float", "position", "align", "justify"],
    "correct": 0,
    "difficulty": "medium"
  },
  {
    "q": "Which property clears floated elements?",
    "a": "clear stops wrapping around floats.",
    "options": ["float-stop", "cancel-float", "clear", "reset"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which selector targets direct children only?",
    "a": "The > selector matches direct children.",
    "options": ["*", ">", "+", "~"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which selector targets an element immediately after another?",
    "a": "The + selector selects adjacent siblings.",
    "options": ["*", "~", ">", "+"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "Which property controls text spacing vertically?",
    "a": "line-height controls vertical spacing.",
    "options": ["text-height", "space-lines", "line-height", "font-spacing"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which property prevents text from wrapping?",
    "a": "white-space: nowrap stops wrapping.",
    "options": ["no-wrap", "text-wrap", "wrap-none", "white-space"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "Which property adds a shadow to text?",
    "a": "text-shadow applies shadow to text.",
    "options": ["font-shadow", "shadow-text", "text-shadow", "letter-shadow"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which property controls cursor appearance?",
    "a": "cursor sets cursor style.",
    "options": ["mouse", "cursor", "pointer", "hover"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which property hides overflow content?",
    "a": "overflow controls hidden or scrollable content.",
    "options": ["scroll", "hidden", "overflow", "clip"],
    "correct": 2,
    "difficulty": "medium"
  },

  // =============================
  //         20 HARD QUESTIONS
  // =============================

  {
    "q": "Which property defines named grid areas in CSS Grid?",
    "a": "grid-template-areas defines layout regions.",
    "options": ["grid-areas", "template-areas", "grid-template-areas", "grid-layout"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which property controls the minimum and maximum size in one function?",
    "a": "minmax() sets min and max values.",
    "options": ["minmax()", "range()", "limit()", "flex()"],
    "correct": 0,
    "difficulty": "hard"
  },
  {
    "q": "Which CSS function repeats track sizes in Grid?",
    "a": "repeat() generates repeated tracks.",
    "options": ["cycle()", "repeat()", "loop()", "grid-repeat()"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which property enables smooth animation between states?",
    "a": "transition animates property changes.",
    "options": ["animate", "transition", "motion", "effect"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which rule defines keyframe animations?",
    "a": "@keyframes defines animation states.",
    "options": ["@animation", "@frames", "@keyframes", "@motion"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which property makes elements stick when scrolling?",
    "a": "position: sticky sticks the element.",
    "options": ["fixed", "sticky", "attach", "glue"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which property clips an element to a custom shape?",
    "a": "clip-path cuts shapes.",
    "options": ["shape", "clip", "clip-path", "mask"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which function converts colors between formats?",
    "a": "color-mix() blends colors.",
    "options": ["blend()", "mix()", "color-mix()", "rgb-convert()"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which property isolates a stacking context?",
    "a": "isolation: isolate creates a new stacking context.",
    "options": ["stack", "layer", "isolation", "context"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which property defines 3D transformations?",
    "a": "transform handles 2D and 3D transforms.",
    "options": ["perspective", "matrix", "transform", "translate3d"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which property defines perspective depth?",
    "a": "perspective controls 3D view distance.",
    "options": ["perspective", "depth", "view-depth", "distance"],
    "correct": 0,
    "difficulty": "hard"
  },
  {
    "q": "Which property blends overlapping elements?",
    "a": "mix-blend-mode blends layers.",
    "options": ["blend-layer", "color-blend", "mix-blend-mode", "overlay-mode"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which property applies effects like blur?",
    "a": "filter applies visual effects.",
    "options": ["effects", "blur", "filter", "visual"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which function defines custom CSS variables?",
    "a": "--var-name defines a custom property.",
    "options": ["define()", "--var-name", "set()", "property()"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which property controls scroll snapping?",
    "a": "scroll-snap-type defines snapping behavior.",
    "options": ["snap-type", "scroll-snap", "scroll-snap-type", "snap-scroll"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which media feature detects user theme preference?",
    "a": "prefers-color-scheme detects dark/light mode.",
    "options": ["color-mode", "theme-mode", "prefers-theme", "prefers-color-scheme"],
    "correct": 3,
    "difficulty": "hard"
  },
  {
    "q": "Which media feature detects reduced animations?",
    "a": "prefers-reduced-motion detects reduced animation preference.",
    "options": ["motion", "animation", "reduce-motion", "prefers-reduced-motion"],
    "correct": 3,
    "difficulty": "hard"
  },
  {
    "q": "Which at-rule loads external fonts?",
    "a": "@font-face loads custom fonts.",
    "options": ["@font", "@font-load", "@font-face", "@import-font"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which property controls how replaced elements fit their box?",
    "a": "object-fit defines how media scales.",
    "options": ["fit", "object-fit", "media-fit", "scale-fit"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which property allows masking parts of elements?",
    "a": "mask-image applies an image mask.",
    "options": ["mask", "mask-image", "clip-image", "image-mask"],
    "correct": 1,
    "difficulty": "hard"
  }
],

    JavaScript: [
  // =============================
  //        20 EASY QUESTIONS
  // =============================
  {
    "q": "What is JavaScript primarily used for?",
    "a": "JavaScript is used to add interactivity to web pages.",
    "options": ["Styling web pages", "Structuring web pages", "Adding interactivity", "Database management"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which keyword declares a variable in JavaScript?",
    "a": "You can declare variables using var, let, or const.",
    "options": ["variable", "var", "make", "newvar"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which symbol is used for comments in JavaScript?",
    "a": "// is used for single-line comments.",
    "options": ["<!-- -->", "//", "/* */", "#"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which method prints output to the browser console?",
    "a": "console.log() prints to the console.",
    "options": ["print()", "console.log()", "write()", "log.print()"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What data type is true or false in JavaScript?",
    "a": "Boolean represents true or false.",
    "options": ["String", "Number", "Boolean", "Array"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which of these is NOT a JavaScript data type?",
    "a": "Character is not a JS data type.",
    "options": ["Boolean", "Undefined", "Character", "Object"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which symbol is used for string concatenation?",
    "a": "The + operator concatenates strings.",
    "options": ["-", "*", "+", "="],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which keyword stops a loop?",
    "a": "The break keyword stops a loop.",
    "options": ["exit", "stop", "break", "close"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "How do you write an array in JavaScript?",
    "a": "Arrays use square brackets [].",
    "options": ["{1,2,3}", "(1,2,3)", "[1,2,3]", "<1,2,3>"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which operator checks both value and type?",
    "a": "=== checks value and type.",
    "options": ["=", "==", "===", "!"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which function shows an alert popup?",
    "a": "alert() opens an alert box.",
    "options": ["prompt()", "alert()", "popup()", "show()"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which loop runs at least once?",
    "a": "do...while runs at least once.",
    "options": ["for", "while", "do...while", "foreach"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "How do you write an object in JavaScript?",
    "a": "Objects use curly brackets {}.",
    "options": ["[]", "{}", "<>", "()"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which keyword defines a constant?",
    "a": "const creates a constant variable.",
    "options": ["let", "var", "constant", "const"],
    "correct": 3,
    "difficulty": "easy"
  },
  {
    "q": "Which method converts a string to an integer?",
    "a": "parseInt() converts strings to integers.",
    "options": ["toInteger()", "number()", "parseInt()", "int()"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which symbol is used for AND operator?",
    "a": "&& is the logical AND operator.",
    "options": ["&", "&&", "and", "++"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which symbol is used for OR operator?",
    "a": "|| is the OR operator.",
    "options": ["||", "|", "or", "/"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "What is the type of NaN?",
    "a": "NaN is of type number.",
    "options": ["undefined", "object", "number", "null"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which method joins array elements into a string?",
    "a": "join() converts array to string.",
    "options": ["combine()", "merge()", "join()", "stringify()"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which method removes the last element of an array?",
    "a": "pop() removes the last element.",
    "options": ["remove()", "delete()", "pop()", "shift()"],
    "correct": 2,
    "difficulty": "easy"
  },

  // =============================
  //       20 MEDIUM QUESTIONS
  // =============================
  {
    "q": "Which method adds an element to the end of an array?",
    "a": "push() appends an element.",
    "options": ["push()", "append()", "add()", "insert()"],
    "correct": 0,
    "difficulty": "medium"
  },
  {
    "q": "What is the purpose of the map() function?",
    "a": "map() creates a new array by applying a function.",
    "options": ["Modify array", "Filter array", "Sort array", "Create new array with transformation"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "Which method is used to filter array elements?",
    "a": "filter() returns elements matching condition.",
    "options": ["where()", "find()", "filter()", "select()"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What does JSON stand for?",
    "a": "JSON stands for JavaScript Object Notation.",
    "options": ["JavaScript Online Network", "Java Syntax Object Notation", "JavaScript Object Notation", "Java Style Object Name"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which operator spreads elements of an array?",
    "a": "The ... spread operator expands data.",
    "options": ["**", "...", "++", "--"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which statement handles errors in JavaScript?",
    "a": "try...catch is used for error handling.",
    "options": ["try...catch", "catch...throw", "error...catch", "throw...try"],
    "correct": 0,
    "difficulty": "medium"
  },
  {
    "q": "Which method converts JSON to a JavaScript object?",
    "a": "JSON.parse() converts JSON string to object.",
    "options": ["JSON.convert()", "JSON.object()", "JSON.parse()", "JSON.toObject()"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which method converts a JavaScript object to JSON?",
    "a": "JSON.stringify() converts objects to JSON string.",
    "options": ["JSON.write()", "JSON.encode()", "JSON.stringify()", "JSON.objectify()"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which keyword refers to the current object?",
    "a": "this refers to current context.",
    "options": ["self", "this", "current", "object"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What will typeof null return?",
    "a": "typeof null returns object.",
    "options": ["null", "undefined", "object", "string"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which loop is best for iterating object properties?",
    "a": "for...in iterates over object keys.",
    "options": ["for", "for...of", "for...in", "while"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which keyword creates a class?",
    "a": "class keyword declares classes.",
    "options": ["function", "class", "object", "createClass"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which method returns the first matching array element?",
    "a": "find() returns first match.",
    "options": ["filter()", "find()", "search()", "match()"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which method checks if an array includes a value?",
    "a": "includes() checks existence.",
    "options": ["contains()", "has()", "exists()", "includes()"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "Which built-in method delays execution?",
    "a": "setTimeout() delays execution.",
    "options": ["delay()", "setTimeout()", "pause()", "wait()"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which method repeats a function at intervals?",
    "a": "setInterval() runs repeatedly.",
    "options": ["repeat()", "loop()", "setInterval()", "timer()"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which comparison is NOT allowed in strict mode?",
    "a": "Strict mode disallows using undeclared variables.",
    "options": ["Using const", "Comparing numbers", "Using undeclared variables", "Using let"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which function returns the type of a variable?",
    "a": "typeof returns type.",
    "options": ["type()", "typeof()", "check()", "valueType()"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which method adds an element at the beginning of an array?",
    "a": "unshift() adds at start.",
    "options": ["push()", "insert()", "shift()", "unshift()"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "Which statement stops further function execution?",
    "a": "return stops function execution.",
    "options": ["end", "break", "stop", "return"],
    "correct": 3,
    "difficulty": "medium"
  },

  // =============================
  //         20 HARD QUESTIONS
  // =============================
  {
    "q": "What is a closure in JavaScript?",
    "a": "A closure gives access to outer function scope from an inner function.",
    "options": ["A loop function", "A function without return", "A function inside another function with preserved scope", "A class method"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is the event loop responsible for?",
    "a": "The event loop handles asynchronous callbacks.",
    "options": ["Memory allocation", "CSS rendering", "Async callback handling", "DOM creation"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What does 'use strict' do?",
    "a": "It enables strict mode which catches errors and prevents unsafe actions.",
    "options": ["Makes code faster", "Enables secure mode", "Activates strict mode", "Compiles JavaScript"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which concept allows functions to be passed as arguments?",
    "a": "Higher-order functions accept functions as arguments.",
    "options": ["Class functions", "Prototype functions", "Higher-order functions", "Async functions"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is the prototype chain?",
    "a": "The prototype chain is used for inheritance in JavaScript.",
    "options": ["A security model", "A data structure", "The inheritance mechanism", "A type of loop"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which method binds a function to a specific object?",
    "a": "bind() sets 'this' value.",
    "options": ["apply()", "call()", "bind()", "attach()"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is a promise?",
    "a": "A promise represents a future asynchronous result.",
    "options": ["A loop", "A callback", "An async result placeholder", "A rejection handler"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which method handles promise errors?",
    "a": "catch() handles errors in promises.",
    "options": ["error()", "catch()", "throw()", "fail()"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is async/await used for?",
    "a": "It simplifies working with promises.",
    "options": ["DOM manipulation", "Styling", "Promise handling", "Object creation"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which function schedules microtasks?",
    "a": "queueMicrotask() adds microtasks.",
    "options": ["setTimeout()", "setInterval()", "queueMicrotask()", "nextTick()"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What does Symbol() create?",
    "a": "Symbol creates a unique identifier.",
    "options": ["String", "Unique ID", "Number", "Object"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which of these is NOT a valid JavaScript loop?",
    "a": "repeat...until is not valid.",
    "options": ["for", "while", "for...of", "repeat...until"],
    "correct": 3,
    "difficulty": "hard"
  },
  {
    "q": "What is NaN === NaN?",
    "a": "false, because NaN is never equal to itself.",
    "options": ["true", "false", "undefined", "error"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is debouncing used for?",
    "a": "Debouncing limits how often a function runs.",
    "options": ["Speed up code", "Avoid multiple calls", "Slow down execution", "Convert functions"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is throttling?",
    "a": "Throttling ensures a function executes at fixed intervals.",
    "options": ["Stops execution", "Removes delay", "Executes at a fixed interval", "Converts code"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is hoisting?",
    "a": "Hoisting moves declarations to the top of the scope.",
    "options": ["Moving code down", "Copying code", "Moving declarations to top", "Optimizing memory"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which method returns an iterator for arrays?",
    "a": "entries() returns an iterator.",
    "options": ["iterator()", "entries()", "loop()", "keys()"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is a generator function?",
    "a": "A generator yields multiple values using function* syntax.",
    "options": ["A loop", "A template", "A yielding function", "An async function"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What does Object.freeze() do?",
    "a": "It prevents modification of object properties.",
    "options": ["Deletes object", "Makes object private", "Prevents modifications", "Clones object"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What does deep copy mean?",
    "a": "Deep copy duplicates all nested objects.",
    "options": ["Shallow clone", "Copy references", "Duplicate all nested objects", "Overwrite memory"],
    "correct": 2,
    "difficulty": "hard"
  }
],  


    DBMS: [

  // -------------------- 20 EASY QUESTIONS --------------------
  {
    "q": "What does DBMS stand for?",
    "a": "Database Management System",
    "options": ["Data Backup Memory System", "Database Management System", "Data Base Manual System", "Data Buffer Machine Service"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "A DBMS is used to ___ data.",
    "a": "store and manage",
    "options": ["delete", "store and manage", "copy", "compile"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which of the following is NOT a DBMS?",
    "a": "Python",
    "options": ["MySQL", "Oracle", "Python", "SQL Server"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is a table in a database?",
    "a": "A collection of rows and columns",
    "options": ["A single row", "A file", "A collection of rows and columns", "A query result"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "A row in a table is also known as:",
    "a": "Tuple",
    "options": ["Attribute", "Field", "Tuple", "Domain"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "A column in a table is called:",
    "a": "Attribute",
    "options": ["Tuple", "Attribute", "Domain", "Key"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which key uniquely identifies records?",
    "a": "Primary Key",
    "options": ["Foreign Key", "Candidate Key", "Primary Key", "Secondary Key"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is a database?",
    "a": "An organized collection of data",
    "options": ["A random data file", "Only numeric data", "An organized collection of data", "A webpage"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What language is used to query databases?",
    "a": "SQL",
    "options": ["HTML", "CSS", "SQL", "C++"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which SQL command is used to retrieve data?",
    "a": "SELECT",
    "options": ["UPDATE", "DELETE", "INSERT", "SELECT"],
    "correct": 3,
    "difficulty": "easy"
  },
  {
    "q": "What does SQL stand for?",
    "a": "Structured Query Language",
    "options": ["Simple Query Language", "Structured Query Language", "Standard Quick Language", "System Query Logic"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which of the following is a type of database key?",
    "a": "Foreign Key",
    "options": ["Blue Key", "Foreign Key", "Soft Key", "Hard Key"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which of these is a DBMS example?",
    "a": "MySQL",
    "options": ["Java", "MySQL", "HTML", "React"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is the full form of RDBMS?",
    "a": "Relational Database Management System",
    "options": ["Random Database Machine System", "Real Data Management System", "Relational Database Management System", "Rapid Data Machine Service"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which constraint ensures uniqueness?",
    "a": "UNIQUE",
    "options": ["NULL", "UNIQUE", "DEFAULT", "CHECK"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which key refers to another table’s primary key?",
    "a": "Foreign Key",
    "options": ["Super Key", "Alternate Key", "Foreign Key", "Local Key"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is normalization?",
    "a": "A process to reduce redundancy",
    "options": ["Data deletion", "Data backup", "A process to reduce redundancy", "A query execution process"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which SQL keyword removes a table?",
    "a": "DROP",
    "options": ["DELETE", "REMOVE", "DROP", "CLEAR"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which command inserts data?",
    "a": "INSERT",
    "options": ["SELECT", "INSERT", "UPDATE", "TRUNCATE"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which SQL command deletes all records but keeps the structure?",
    "a": "TRUNCATE",
    "options": ["DROP", "TRUNCATE", "REMOVE", "CLEAR"],
    "correct": 1,
    "difficulty": "easy"
  },

  
  // -------------------- 20 MEDIUM QUESTIONS --------------------
  {
    "q": "What is a candidate key?",
    "a": "A key that can uniquely identify a record",
    "options": ["A temporary key", "A key used for sorting", "A key that can uniquely identify a record", "A foreign key"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which SQL clause is used to filter rows?",
    "a": "WHERE",
    "options": ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which clause groups rows based on a column?",
    "a": "GROUP BY",
    "options": ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "ACID properties are related to:",
    "a": "Transactions",
    "options": ["Indexes", "Forms", "Transactions", "Queries"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which join returns matching rows from both tables?",
    "a": "INNER JOIN",
    "options": ["LEFT JOIN", "RIGHT JOIN", "OUTER JOIN", "INNER JOIN"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "Which join returns all rows from left table?",
    "a": "LEFT JOIN",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "OUTER JOIN"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is a composite key?",
    "a": "A key made of multiple attributes",
    "options": ["A foreign key", "A random key", "A key made of multiple attributes", "A unique key"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which normal form removes partial dependencies?",
    "a": "2NF",
    "options": ["1NF", "2NF", "3NF", "BCNF"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which SQL command modifies existing records?",
    "a": "UPDATE",
    "options": ["UPDATE", "CHANGE", "ALTER", "MODIFY"],
    "correct": 0,
    "difficulty": "medium"
  },
  {
    "q": "What is a view?",
    "a": "A virtual table",
    "options": ["A real table", "A file", "A virtual table", "An index"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which SQL clause sorts records?",
    "a": "ORDER BY",
    "options": ["GROUP BY", "ORDER BY", "SORT", "WHERE"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which SQL operator checks a range?",
    "a": "BETWEEN",
    "options": ["IN", "BETWEEN", "LIKE", "ANY"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Wildcard symbol in SQL LIKE?",
    "a": "%",
    "options": ["#", "%", "@", "$"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is a trigger?",
    "a": "A procedure that executes automatically",
    "options": ["A key", "A constraint", "A procedure that executes automatically", "A join"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which SQL statement creates a table?",
    "a": "CREATE TABLE",
    "options": ["NEW TABLE", "MAKE TABLE", "CREATE TABLE", "ADD TABLE"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What is indexing?",
    "a": "Improving search performance",
    "options": ["Deleting records", "Improving search performance", "Securing data", "Removing duplicates"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "BCNF is stricter than?",
    "a": "3NF",
    "options": ["1NF", "2NF", "3NF", "5NF"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which dependency exists when A → B and B → C?",
    "a": "Transitive dependency",
    "options": ["Normal dependency", "Transitive dependency", "Partial dependency", "Key dependency"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is schema?",
    "a": "Structure of a database",
    "options": ["Stored data", "Query results", "Structure of a database", "Backup file"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What does DDL stand for?",
    "a": "Data Definition Language",
    "options": ["Data Delete Language", "Data Definition Language", "Data Direct Language", "Data Derived Logic"],
    "correct": 1,
    "difficulty": "medium"
  },


  // -------------------- 20 HARD QUESTIONS --------------------
  {
    "q": "Which normal form eliminates multivalued dependencies?",
    "a": "4NF",
    "options": ["2NF", "3NF", "4NF", "BCNF"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which algorithm avoids deadlock by ordering resources?",
    "a": "Wait-die / Wound-wait",
    "options": ["FIFO", "Wait-die / Wound-wait", "Round Robin", "Priority Scheduling"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is a clustered index?",
    "a": "Index that determines the physical order of table data",
    "options": ["Index stored separately", "Temporary memory index", "Index that determines the physical order of table data", "Index created automatically"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is a deadlock?",
    "a": "A situation where transactions wait indefinitely",
    "options": ["A query error", "A failure in database", "A situation where transactions wait indefinitely", "A storage overflow"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Shadow paging is used in:",
    "a": "Recovery",
    "options": ["Join operations", "Backup", "Recovery", "Indexing"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What does serializability ensure?",
    "a": "Correctness of concurrent transactions",
    "options": ["Fast execution", "Correctness of concurrent transactions", "Data deletion", "Foreign key mapping"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which technique ensures atomicity?",
    "a": "Undo logging",
    "options": ["Redo logging", "Undo logging", "Checkpoints", "File system logs"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which normal form solves anomalies left after BCNF?",
    "a": "5NF",
    "options": ["3NF", "4NF", "5NF", "2NF"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is a phantom read?",
    "a": "New rows appear during transaction",
    "options": ["Unexpected null values", "Duplicate records shown", "New rows appear during transaction", "Rows disappear randomly"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is join dependency?",
    "a": "A condition where a table can be recreated by joining its projections",
    "options": ["Key mismatch", "Null condition", "A condition where a table can be recreated by joining its projections", "Index problem"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Two-phase commit is used for:",
    "a": "Distributed transactions",
    "options": ["Local backups", "Simple queries", "Distributed transactions", "Data formatting"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is a heuristic query optimizer?",
    "a": "Optimizer using rule-based decisions",
    "options": ["Random optimizer", "Optimizer using rule-based decisions", "Hardware-based optimizer", "Binary-based optimizer"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which isolation level prevents dirty reads?",
    "a": "Read Committed",
    "options": ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which structure stores data summaries?",
    "a": "Data warehouse",
    "options": ["Database", "Cache", "Data warehouse", "Index file"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is multiversion concurrency control?",
    "a": "Keeping multiple versions of data for concurrency",
    "options": ["Data security method", "Query optimization", "Keeping multiple versions of data for concurrency", "Indexing strategy"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is functional dependency?",
    "a": "Attribute determines another attribute",
    "options": ["Key determines table", "Record determines schema", "Attribute determines another attribute", "Index determines query"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which file organization gives fastest access?",
    "a": "Hashed",
    "options": ["Sequential", "Indexed", "Hashed", "Mixed"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What does star schema use?",
    "a": "Fact and dimension tables",
    "options": ["Only fact tables", "Only dimension tables", "Fact and dimension tables", "Stored procedures"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is decomposition?",
    "a": "Breaking a table into smaller tables while preserving dependencies",
    "options": ["Deleting columns", "Adding constraints", "Breaking a table into smaller tables while preserving dependencies", "Removing keys"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which anomaly does 3NF remove?",
    "a": "Transitive dependency",
    "options": ["Functional dependency", "Partial dependency", "Transitive dependency", "Join dependency"],
    "correct": 2,
    "difficulty": "hard"
  }

], 


    OS: [

  // -------------------- 20 EASY QUESTIONS --------------------
  {
    "q": "What does OS stand for?",
    "a": "Operating System",
    "options": ["Open Software", "Operating System", "Optical Storage", "Online Service"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which of the following is an Operating System?",
    "a": "Windows",
    "options": ["Google", "Intel", "Windows", "Chrome"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which OS is used in smartphones?",
    "a": "Android",
    "options": ["Windows", "Linux", "Android", "MS-DOS"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which part of the OS manages hardware?",
    "a": "Kernel",
    "options": ["Shell", "Kernel", "Compiler", "Processor"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is a process?",
    "a": "A program in execution",
    "options": ["A file", "A memory block", "A program in execution", "A command"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is multitasking?",
    "a": "Running multiple programs at the same time",
    "options": ["Installing programs", "Running multiple programs at the same time", "Copying files", "Deleting data"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which memory is volatile?",
    "a": "RAM",
    "options": ["ROM", "RAM", "Hard disk", "SSD"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What does GUI stand for?",
    "a": "Graphical User Interface",
    "options": ["General User Input", "Graphical User Interface", "Global Unit Interface", "Generate User Info"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which OS is open-source?",
    "a": "Linux",
    "options": ["Windows", "MacOS", "Linux", "Android"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which of these is a function of OS?",
    "a": "Memory management",
    "options": ["Typing documents", "Memory management", "Internet browsing", "Printing papers"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which component provides an interface to the user?",
    "a": "Shell",
    "options": ["Kernel", "Shell", "Driver", "Scheduler"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Firmware is stored in:",
    "a": "ROM",
    "options": ["RAM", "ROM", "Cache", "Registers"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which memory is the fastest?",
    "a": "Registers",
    "options": ["Registers", "RAM", "Cache", "SSD"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "Which scheduling algorithm executes the shortest job first?",
    "a": "SJF",
    "options": ["FCFS", "Round Robin", "SJF", "LIFO"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which is an example of real-time OS?",
    "a": "VxWorks",
    "options": ["Windows", "VxWorks", "Linux Mint", "Ubuntu"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "A thread is:",
    "a": "A lightweight process",
    "options": ["A file", "Memory block", "A lightweight process", "A kernel mode"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which operation loads OS into memory?",
    "a": "Booting",
    "options": ["Formatting", "Booting", "Installing", "Copying"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which scheduling algorithm uses time slices?",
    "a": "Round Robin",
    "options": ["FCFS", "SJF", "Round Robin", "Priority"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which is a type of OS?",
    "a": "Distributed OS",
    "options": ["Google OS", "Distributed OS", "Text OS", "RAM OS"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "MS-DOS is a ___ OS.",
    "a": "Single-tasking",
    "options": ["Multi-user", "Single-tasking", "Distributed", "Real-time"],
    "correct": 1,
    "difficulty": "easy"
  },


  // -------------------- 20 MEDIUM QUESTIONS --------------------
  {
    "q": "What is thrashing?",
    "a": "Excessive paging causing performance drop",
    "options": ["Deleting files", "CPU overheating", "Excessive paging causing performance drop", "Low memory warning"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What is a semaphore?",
    "a": "A synchronization tool",
    "options": ["A type of memory", "A scheduling algorithm", "A synchronization tool", "A file type"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Page replacement occurs in:",
    "a": "Virtual memory",
    "options": ["Cache memory", "Virtual memory", "Hard disk", "Registers"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which algorithm suffers from starvation?",
    "a": "Priority Scheduling",
    "options": ["FCFS", "Priority Scheduling", "Round Robin", "SJF"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "FCFS stands for:",
    "a": "First Come First Serve",
    "options": ["First Cache First System", "First Come First Serve", "Fast CPU File System", "Fetch Code File Service"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Producer-consumer problem is related to:",
    "a": "Synchronization",
    "options": ["Deadlock", "Memory allocation", "Synchronization", "Paging"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What is context switching?",
    "a": "Switching CPU from one process to another",
    "options": ["Changing memory", "Deallocating pages", "Switching CPU from one process to another", "Formatting storage"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which memory manages local variables?",
    "a": "Stack",
    "options": ["Stack", "Heap", "Cache", "ROM"],
    "correct": 0,
    "difficulty": "medium"
  },
  {
    "q": "Deadlock occurs when processes are:",
    "a": "Waiting indefinitely for each other",
    "options": ["Running fast", "Waiting indefinitely for each other", "Deleting memory", "Using cache"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Banker's algorithm is used for:",
    "a": "Deadlock avoidance",
    "options": ["Deadlock detection", "Deadlock avoidance", "Scheduling", "Memory allocation"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which allocation method uses linked blocks?",
    "a": "Linked allocation",
    "options": ["Contiguous", "Indexed", "Linked", "Direct"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "LRU stands for:",
    "a": "Least Recently Used",
    "options": ["Low Random Unit", "Least Recently Used", "Last Read Unit", "Lower Resource Usage"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "The ready queue stores:",
    "a": "Processes waiting for CPU",
    "options": ["Completed processes", "Waiting for I/O", "Processes waiting for CPU", "Zombie processes"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Internal fragmentation occurs in:",
    "a": "Fixed partition allocation",
    "options": ["Paging", "Fixed partition allocation", "Segmentation", "Swapping"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "DMA stands for:",
    "a": "Direct Memory Access",
    "options": ["Dynamic Memory Allocation", "Direct Memory Access", "Data Machine Adapter", "Digital Memory Area"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which of these is NOT a scheduling algorithm?",
    "a": "FIFO (files only)",
    "options": ["FCFS", "Round Robin", "FIFO (files only)", "SJF"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What is a zombie process?",
    "a": "A terminated process waiting for parent to read exit status",
    "options": ["Infinite loop process", "Corrupted process", "A terminated process waiting for parent to read exit status", "A sleeping process"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What is paging?",
    "a": "Memory management where memory is divided into fixed blocks",
    "options": ["Deleting files", "CPU scheduling", "Memory divided into fixed blocks", "Virtualization"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Segmentation divides memory based on:",
    "a": "Logical divisions",
    "options": ["Fixed size", "Logical divisions", "Page table", "CPU cycles"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which system call terminates a process?",
    "a": "exit()",
    "options": ["start()", "kill()", "exit()", "stop()"],
    "correct": 2,
    "difficulty": "medium"
  },


  // -------------------- 20 HARD QUESTIONS --------------------
  {
    "q": "Belady’s anomaly occurs in which algorithm?",
    "a": "FIFO page replacement",
    "options": ["LRU", "Optimal", "FIFO", "Clock"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which structure contains the information needed for process management?",
    "a": "Process Control Block (PCB)",
    "options": ["Kernel stack", "Buffer cache", "Process Control Block (PCB)", "Page table"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What does the Optimal page replacement algorithm do?",
    "a": "Replaces the page that will not be used for the longest period",
    "options": ["Replaces random page", "Replaces smallest page", "Replaces page not used for longest period", "Replaces first page loaded"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is starvation?",
    "a": "Process not getting CPU for a long time",
    "options": ["CPU overload", "Memory leak", "Process not getting CPU for long time", "I/O failure"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is a monitor in OS?",
    "a": "High-level synchronization construct",
    "options": ["Memory device", "Scheduling algorithm", "High-level synchronization construct", "Storage unit"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Inverted page table stores one entry per ___",
    "a": "Frame",
    "options": ["Page", "Frame", "Segment", "Instruction"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Working set model helps in:",
    "a": "Preventing thrashing",
    "options": ["Deadlock removal", "Scheduling", "Preventing thrashing", "Interrupt handling"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Dirty bit is used to:",
    "a": "Reduce page writes",
    "options": ["Speed up CPU", "Reduce page writes", "Increase cache", "Detect segmentation fault"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is DMA controller responsible for?",
    "a": "Handling memory transfers without CPU",
    "options": ["Handling interrupts", "Parsing files", "Memory transfers without CPU", "Allocating RAM"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is two-level paging?",
    "a": "Paging where page table is divided into levels",
    "options": ["Paging with large pages", "Paging with small pages", "Page table split into levels", "Paging with segments"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which scheduling method is used in real-time OS?",
    "a": "Rate Monotonic Scheduling",
    "options": ["FCFS", "RR", "Rate Monotonic", "SJF"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What does TLB stand for?",
    "a": "Translation Lookaside Buffer",
    "options": ["Total Load Buffer", "Translation Lookaside Buffer", "Temporary Logic Base", "Transfer Load Bus"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is a soft real-time system?",
    "a": "Missed deadlines degrade performance but not fail",
    "options": ["Deadlines must always be met", "No timing constraints", "Missed deadlines degrade performance but system continues", "System stops on missed deadline"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Critical section problem is solved using:",
    "a": "Mutual exclusion",
    "options": ["Shared memory", "Mutual exclusion", "Cache", "Forking"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "The fork() call creates:",
    "a": "A new child process",
    "options": ["A thread", "A file", "A new child process", "A new kernel"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which page replacement algorithm uses a reference string?",
    "a": "Optimal",
    "options": ["FIFO", "Optimal", "LRU", "Clock"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is a trap?",
    "a": "A software-generated interrupt",
    "options": ["Hardware failure", "Software-generated interrupt", "Deadlock", "Memory overload"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is a system call?",
    "a": "A request to kernel for a service",
    "options": ["Hardware signal", "Request to kernel for service", "Compiler warning", "Bootloader function"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which memory allocation suffers from external fragmentation?",
    "a": "Segmentation",
    "options": ["Paging", "Segmentation", "Cache memory", "TLB"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is interrupt latency?",
    "a": "Time taken to respond to interrupt",
    "options": ["Time to execute program", "Time to load OS", "Time taken to respond to interrupt", "Time to allocate memory"],
    "correct": 2,
    "difficulty": "hard"
  }

], 


    Networking: [
  // =============================
  //        20 EASY QUESTIONS
  // =============================
  {
    "q": "What does LAN stand for?",
    "a": "LAN stands for Local Area Network.",
    "options": ["Large Area Network", "Local Area Network", "Long Access Network", "Local Active Node"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What device is used to connect multiple devices in a network?",
    "a": "A switch connects multiple devices in a network.",
    "options": ["Modem", "Switch", "Repeater", "Firewall"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What does IP stand for?",
    "a": "IP stands for Internet Protocol.",
    "options": ["Internal Program", "Internet Protocol", "Internet Process", "Intranet Path"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which device connects a local network to the internet?",
    "a": "A router connects a local network to the internet.",
    "options": ["Hub", "Router", "Switch", "Repeater"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What does WAN stand for?",
    "a": "WAN stands for Wide Area Network.",
    "options": ["World Area Network", "Wide Area Network", "Wireless Access Network", "Wired Area Node"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is the purpose of a modem?",
    "a": "A modem modulates and demodulates signals for internet connectivity.",
    "options": ["Amplify signals", "Store data", "Convert digital to analog signals", "Filter network traffic"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which protocol is used to browse websites?",
    "a": "HTTP is used to browse websites.",
    "options": ["FTP", "SMTP", "HTTP", "SNMP"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is the full form of Wi-Fi?",
    "a": "Wi-Fi stands for Wireless Fidelity.",
    "options": ["Wired Finder", "Wireless Fidelity", "Wide Frequency", "Wireless Field"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which layer of the OSI model is responsible for physical connection?",
    "a": "The Physical layer manages the hardware transmission of data.",
    "options": ["Application", "Network", "Physical", "Transport"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is the unit of data at the network layer?",
    "a": "Packets are the unit of data at the network layer.",
    "options": ["Frames", "Packets", "Bits", "Segments"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which protocol is used for secure web communication?",
    "a": "HTTPS is used for secure communication.",
    "options": ["HTTP", "FTP", "HTTPS", "TELNET"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is the default port for HTTP?",
    "a": "HTTP runs on port 80.",
    "options": ["21", "80", "110", "443"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What does MAC address identify?",
    "a": "It uniquely identifies a device on a network.",
    "options": ["IP Location", "Device Hardware", "ISP", "Subnet"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which topology connects all devices in a straight line?",
    "a": "Bus topology connects devices in a line.",
    "options": ["Star", "Bus", "Ring", "Mesh"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which device boosts network signal?",
    "a": "A repeater boosts network signals.",
    "options": ["Router", "Switch", "Repeater", "Hub"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What does ISP stand for?",
    "a": "ISP stands for Internet Service Provider.",
    "options": ["Internal Service Provider", "Internet Service Provider", "International Signal Point", "Integrated Server Protocol"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which protocol is used for email sending?",
    "a": "SMTP is used to send emails.",
    "options": ["POP3", "SMTP", "IMAP", "FTP"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which protocol transfers files?",
    "a": "FTP is used to transfer files.",
    "options": ["SMTP", "DNS", "FTP", "TELNET"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which IP class supports the most hosts?",
    "a": "Class A supports the highest number of hosts.",
    "options": ["Class A", "Class B", "Class C", "Class D"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "What is the purpose of DNS?",
    "a": "DNS converts domain names to IP addresses.",
    "options": ["Send email", "Assign MAC address", "Convert names to IP", "Encrypt data"],
    "correct": 2,
    "difficulty": "easy"
  },

  // =============================
  //        20 MEDIUM QUESTIONS
  // =============================
  {
    "q": "Which protocol resolves IP addresses to MAC addresses?",
    "a": "ARP resolves IP addresses to MAC addresses.",
    "options": ["RARP", "ARP", "DNS", "DHCP"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which OSI layer handles error detection?",
    "a": "The Data Link layer handles error detection.",
    "options": ["Network", "Transport", "Data Link", "Session"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which command is used to test network connectivity?",
    "a": "ping checks connectivity using ICMP.",
    "options": ["ping", "netstat", "ipconfig", "tracert"],
    "correct": 0,
    "difficulty": "medium"
  },
  {
    "q": "What is the size of an IPv4 address?",
    "a": "IPv4 uses 32 bits.",
    "options": ["16-bit", "32-bit", "64-bit", "128-bit"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which protocol automatically assigns IP addresses?",
    "a": "DHCP assigns IP addresses dynamically.",
    "options": ["DNS", "DHCP", "FTP", "SNMP"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which layer is responsible for routing?",
    "a": "The Network layer is responsible for routing.",
    "options": ["Transport", "Session", "Network", "Physical"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What is subnetting used for?",
    "a": "Subnetting divides networks to improve efficiency.",
    "options": ["Encrypt data", "Divide networks", "Boost speed", "Assign MAC"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which device works on the physical layer?",
    "a": "Hub operates at the physical layer.",
    "options": ["Router", "Hub", "Switch", "Firewall"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which port does HTTPS use?",
    "a": "HTTPS uses port 443.",
    "options": ["8080", "21", "80", "443"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "What is the function of NAT?",
    "a": "NAT translates private IPs to public IPs.",
    "options": ["Assigns MAC", "Converts private to public IP", "Encrypts data", "Routes packets"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which layer manages end-to-end communication?",
    "a": "The Transport layer manages end-to-end communication.",
    "options": ["Transport", "Network", "Data Link", "Physical"],
    "correct": 0,
    "difficulty": "medium"
  },
  {
    "q": "What is the default port for SMTP?",
    "a": "SMTP uses port 25 by default.",
    "options": ["21", "25", "110", "143"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which protocol is used to retrieve email?",
    "a": "POP3 retrieves emails from the server.",
    "options": ["POP3", "SMTP", "IMAP", "FTP"],
    "correct": 0,
    "difficulty": "medium"
  },
  {
    "q": "Which device connects different networks?",
    "a": "A router connects multiple networks.",
    "options": ["Hub", "Switch", "Router", "Repeater"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which protocol provides secure remote login?",
    "a": "SSH provides secure remote access.",
    "options": ["Telnet", "FTP", "SSH", "HTTP"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which device stores and forwards frames based on MAC addresses?",
    "a": "A switch forwards frames using MAC addresses.",
    "options": ["Router", "Switch", "Hub", "Repeater"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which protocol resolves domain names to IP addresses?",
    "a": "DNS resolves domain names to IP addresses.",
    "options": ["ARP", "DHCP", "DNS", "FTP"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which layer of OSI provides encryption?",
    "a": "Presentation layer handles encryption and compression.",
    "options": ["Application", "Presentation", "Session", "Transport"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which protocol is connectionless?",
    "a": "UDP is connectionless.",
    "options": ["TCP", "UDP", "FTP", "HTTP"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which protocol ensures reliable delivery of data?",
    "a": "TCP ensures reliable delivery.",
    "options": ["TCP", "UDP", "ICMP", "ARP"],
    "correct": 0,
    "difficulty": "medium"
  },

  // =============================
  //        20 HARD QUESTIONS
  // =============================
  {
    "q": "What is the purpose of ICMP?",
    "a": "ICMP is used for error reporting and diagnostic functions in networks.",
    "options": ["Encrypt data", "Routing", "Error reporting and diagnostics", "File transfer"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is the difference between TCP and UDP?",
    "a": "TCP is reliable and connection-oriented; UDP is connectionless and faster.",
    "options": ["TCP is faster than UDP", "UDP is reliable, TCP is not", "TCP reliable and connection-oriented; UDP connectionless", "No difference"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which subnet mask allows 254 hosts per subnet?",
    "a": "255.255.255.0 allows 254 hosts per subnet.",
    "options": ["255.255.0.0", "255.255.255.0", "255.0.0.0", "255.255.255.128"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which protocol provides file transfer over a secure channel?",
    "a": "SFTP provides secure file transfer over SSH.",
    "options": ["FTP", "SFTP", "TFTP", "HTTP"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is the maximum number of hosts in a Class B network?",
    "a": "A Class B network can have 65,534 hosts.",
    "options": ["254", "65,534", "16,382", "128"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is the role of VLAN?",
    "a": "VLAN segments a network into logical groups for security and efficiency.",
    "options": ["Encrypt data", "Segment networks logically", "Boost speed", "Connect ISPs"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which routing protocol uses distance vector?",
    "a": "RIP uses distance vector routing.",
    "options": ["OSPF", "RIP", "BGP", "EIGRP"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which routing protocol uses link state?",
    "a": "OSPF uses link-state routing.",
    "options": ["RIP", "OSPF", "BGP", "EIGRP"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which protocol prevents broadcast storms in networks?",
    "a": "STP (Spanning Tree Protocol) prevents loops and broadcast storms.",
    "options": ["ARP", "STP", "ICMP", "DHCP"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which layer of OSI is responsible for end-to-end error control?",
    "a": "The Transport layer ensures end-to-end error control.",
    "options": ["Network", "Transport", "Data Link", "Session"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which protocol is used for email retrieval securely?",
    "a": "IMAPS retrieves emails securely over SSL/TLS.",
    "options": ["POP3", "IMAP", "IMAPS", "SMTP"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which protocol is used for network management?",
    "a": "SNMP is used for network management.",
    "options": ["SMTP", "SNMP", "FTP", "HTTP"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which IP version supports 128-bit addressing?",
    "a": "IPv6 supports 128-bit addresses.",
    "options": ["IPv4", "IPv5", "IPv6", "IPX"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which tunneling protocol is used for VPN?",
    "a": "PPTP is a VPN tunneling protocol.",
    "options": ["FTP", "PPTP", "HTTP", "SMTP"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which wireless standard provides 1 Gbps speeds?",
    "a": "Wi-Fi 6 (802.11ax) provides up to 1 Gbps speeds.",
    "options": ["802.11b", "802.11g", "802.11n", "802.11ax"],
    "correct": 3,
    "difficulty": "hard"
  },
  {
    "q": "What is the main purpose of DMZ in networking?",
    "a": "DMZ isolates public-facing servers from the internal network.",
    "options": ["Increase speed", "Provide VPN", "Isolate public servers", "Filter DNS queries"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which layer encrypts data for secure transmission?",
    "a": "Presentation layer handles encryption for secure transmission.",
    "options": ["Transport", "Network", "Session", "Presentation"],
    "correct": 3,
    "difficulty": "hard"
  },
  {
  "q": "Which layer of the OSI model is responsible for end-to-end delivery and error checking?",
  "a": "The Transport layer ensures end-to-end communication, reliability, and error checking.",
  "options": ["Network", "Transport", "Data Link", "Session"],
  "correct": 1,
  "difficulty": "hard"
},
{
  "q": "What is the primary purpose of a subnet mask in networking?",
  "a": "A subnet mask separates the network portion from the host portion of an IP address.",
  "options": ["Encrypts data", "Separates network and host portions", "Routes packets", "Assigns MAC addresses"],
  "correct": 1,
  "difficulty": "hard"
},

  {
    "q": "Which protocol is used to synchronize time across networks?",
    "a": "NTP synchronizes time in networks.",
    "options": ["SNTP", "FTP", "NTP", "SMTP"],
    "correct": 2,
    "difficulty": "hard"
  }
], 


    Aptitude: [
  // =============================
  //        20 EASY QUESTIONS
  // =============================
  {
    "q": "What is 25% of 200?",
    "a": "25% of 200 is 50.",
    "options": ["25", "50", "75", "100"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "If the cost of 5 pens is $10, what is the cost of 1 pen?",
    "a": "Cost of 1 pen = 10/5 = $2.",
    "options": ["$1", "$2", "$5", "$10"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is the next number in the series: 2, 4, 6, 8, ...?",
    "a": "The series increases by 2. Next number is 10.",
    "options": ["9", "10", "12", "14"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "If a triangle has angles 50° and 60°, what is the third angle?",
    "a": "Sum of angles = 180°, so third = 180 - 50 - 60 = 70°.",
    "options": ["60°", "70°", "80°", "90°"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is 15 + 27?",
    "a": "15 + 27 = 42.",
    "options": ["42", "41", "43", "45"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "If a number is multiplied by 0, the result is?",
    "a": "Any number × 0 = 0.",
    "options": ["0", "1", "Number itself", "Undefined"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "What is the square of 9?",
    "a": "9² = 81.",
    "options": ["72", "81", "91", "99"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "If a = 5 and b = 3, what is a + b?",
    "a": "5 + 3 = 8.",
    "options": ["7", "8", "9", "10"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is 10% of 500?",
    "a": "10% of 500 = 50.",
    "options": ["50", "100", "500", "10"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "Which is the smallest prime number?",
    "a": "2 is the smallest prime number.",
    "options": ["1", "2", "3", "5"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is the value of 7 × 6?",
    "a": "7 × 6 = 42.",
    "options": ["36", "42", "48", "56"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "If 3 pencils cost $6, the cost of 1 pencil is?",
    "a": "Cost of 1 pencil = 6/3 = $2.",
    "options": ["$1", "$2", "$3", "$4"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is the result of 100 ÷ 25?",
    "a": "100 ÷ 25 = 4.",
    "options": ["2", "4", "5", "25"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which is an even number?",
    "a": "8 is even because divisible by 2.",
    "options": ["7", "8", "9", "11"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "If x = 10, what is x²?",
    "a": "10² = 100.",
    "options": ["10", "20", "100", "50"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is 50 – 25?",
    "a": "50 – 25 = 25.",
    "options": ["20", "25", "30", "35"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "If a bag has 4 red balls and 6 blue balls, total balls?",
    "a": "4 + 6 = 10 balls.",
    "options": ["8", "9", "10", "11"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is 7 + 8?",
    "a": "7 + 8 = 15.",
    "options": ["14", "15", "16", "17"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which of these is a factor of 12?",
    "a": "3 divides 12 exactly.",
    "options": ["2", "3", "5", "7"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "If 1 dozen = 12, how many are in 3 dozen?",
    "a": "3 × 12 = 36.",
    "options": ["24", "30", "36", "40"],
    "correct": 2,
    "difficulty": "easy"
  },

  // =============================
  //        20 MEDIUM QUESTIONS
  // =============================
  {
    "q": "If 5x + 3 = 23, what is x?",
    "a": "5x = 20 → x = 4.",
    "options": ["3", "4", "5", "6"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "A train travels 60 km in 1.5 hours. Speed?",
    "a": "Speed = distance/time = 60/1.5 = 40 km/h.",
    "options": ["30 km/h", "40 km/h", "45 km/h", "50 km/h"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is the LCM of 4 and 6?",
    "a": "LCM of 4 and 6 = 12.",
    "options": ["10", "12", "14", "16"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is the HCF of 18 and 24?",
    "a": "HCF of 18 and 24 = 6.",
    "options": ["4", "5", "6", "8"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "If 3x = 12, then 2x + 5 = ?",
    "a": "x = 4 → 2*4+5 = 13.",
    "options": ["11", "12", "13", "14"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "If a box has 10 red, 15 green, 5 blue balls, probability of red?",
    "a": "P = 10/(10+15+5) = 0.333.",
    "options": ["0.25", "0.33", "0.4", "0.5"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "If a = 2, b = 3, evaluate a³ + b²",
    "a": "2³ + 3² = 8 + 9 = 17.",
    "options": ["14", "15", "16", "17"],
    "correct": 3,
    "difficulty": "medium"
  },
  {
    "q": "The sum of first 10 natural numbers?",
    "a": "Sum = n(n+1)/2 = 10*11/2 = 55.",
    "options": ["50", "55", "60", "65"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "If 20% of a number is 10, number = ?",
    "a": "x*0.2=10 → x = 50.",
    "options": ["40", "45", "50", "55"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "If a man covers 60% of a distance, remaining 40 km, total distance?",
    "a": "0.4D = 40 → D = 100 km.",
    "options": ["80 km", "90 km", "100 km", "110 km"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "If x² = 49, x = ?",
    "a": "x = ±7.",
    "options": ["7", "-7", "±7", "0"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "If 5y – 15 = 0, y = ?",
    "a": "5y = 15 → y = 3.",
    "options": ["2", "3", "4", "5"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "A car travels 180 km in 3 hours, speed?",
    "a": "Speed = 180/3 = 60 km/h.",
    "options": ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "If 1/2 of a number = 25, number = ?",
    "a": "x/2 = 25 → x = 50.",
    "options": ["45", "50", "55", "60"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "If 3 coins are tossed, probability of 2 heads?",
    "a": "P = 3/8 = 0.375.",
    "options": ["0.25", "0.375", "0.5", "0.75"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "If 8 ÷ 0.25 = ?",
    "a": "8 ÷ 0.25 = 32.",
    "options": ["30", "32", "34", "36"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "If a:b = 3:4 and a+b = 28, find a?",
    "a": "3x + 4x = 28 → x=4 → a=12.",
    "options": ["10", "12", "14", "16"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
  "q": "A shop offers a discount of 20% on a shirt priced at $50. What is the selling price?",
  "a": "Discount = 20% of 50 = 10 → Selling price = 50 – 10 = $40.",
  "options": ["$35", "$40", "$45", "$50"],
  "correct": 1,
  "difficulty": "medium"
},
{
  "q": "If the ratio of two numbers is 4:5 and their sum is 36, the numbers are?",
  "a": "4x + 5x = 36 → 9x = 36 → x = 4 → Numbers: 16 and 20.",
  "options": ["14 and 22", "16 and 20", "18 and 18", "15 and 21"],
  "correct": 1,
  "difficulty": "medium"
},

  {
    "q": "The average of 10, 20, 30, 40, 50?",
    "a": "Sum = 150 → avg = 150/5 = 30.",
    "options": ["25", "30", "35", "40"],
    "correct": 1,
    "difficulty": "medium"
  },

  // =============================
  //        20 HARD QUESTIONS
  // =============================
  {
    "q": "If x + y = 10 and xy = 21, find x² + y²?",
    "a": "x² + y² = (x+y)² – 2xy = 100 – 42 = 58.",
    "options": ["50", "52", "58", "60"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "The sum of squares of first 5 natural numbers?",
    "a": "1²+2²+3²+4²+5² = 55.",
    "options": ["50", "55", "60", "65"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "If 2x + 3y = 12 and x + y = 5, find x and y?",
    "a": "x + y =5, 2x+3y=12 → x=3, y=2.",
    "options": ["x=2,y=3", "x=3,y=2", "x=4,y=1", "x=1,y=4"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "A train 120 m long passes a pole in 6 sec. Speed?",
    "a": "Speed = 120/6 = 20 m/s.",
    "options": ["15 m/s", "20 m/s", "25 m/s", "30 m/s"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "If a:b:c = 2:3:5 and sum = 100, find b?",
    "a": "Total parts = 10 → each =10 → b=30.",
    "options": ["20", "25", "30", "35"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "If a number is increased by 20% and decreased by 20%, net change?",
    "a": "Net = (1.2*0.8 –1)*100 = –4%.",
    "options": ["0%", "4%", "–4%", "–2%"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "A bag has 5 red and 7 green balls, 2 drawn randomly, probability both red?",
    "a": "P = (5/12)*(4/11) = 20/132 = 5/33.",
    "options": ["1/3", "5/33", "1/4", "5/12"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "If 3^x = 81, x = ?",
    "a": "3^4 = 81 → x = 4.",
    "options": ["3", "4", "5", "6"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Solve: 2x² – 5x + 3 = 0",
    "a": "x = (5±√(25–24))/4 = 1 or 1.5.",
    "options": ["1 & 2", "1 & 1.5", "2 & 3", "0 & 1.5"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Average of first 20 natural numbers?",
    "a": "Sum = 210 → avg = 210/20 = 10.5.",
    "options": ["10", "10.5", "11", "11.5"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "If 5x – 3 = 2x + 6, x = ?",
    "a": "5x–2x =6+3 → x=3.",
    "options": ["2", "3", "4", "5"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "The sum of first n odd numbers = n². Find sum of first 15 odd numbers.",
    "a": "15² = 225.",
    "options": ["200", "210", "225", "230"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "If 12 men can build a wall in 16 days, 8 men in?",
    "a": "Work ∝ men*days → 12*16=8*x → x=24 days.",
    "options": ["20", "22", "24", "26"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "If a box contains 6 red, 4 green, 5 blue balls, probability of blue?",
    "a": "P = 5/(6+4+5) = 5/15 = 1/3.",
    "options": ["1/3", "2/5", "1/4", "1/2"],
    "correct": 0,
    "difficulty": "hard"
  },
  {
    "q": "If x/2 + y/3 = 5 and x=y, find x?",
    "a": "x/2 + x/3=5 → 5x/6=5 → x=6.",
    "options": ["5", "6", "7", "8"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "If a man borrows $1000 at 5% simple interest per year for 3 years, interest?",
    "a": "SI = 1000*5*3/100 = $150.",
    "options": ["$100", "$150", "$200", "$250"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Solve: (x – 1)(x + 3) = 0",
    "a": "x = 1 or x = –3.",
    "options": ["1 & 3", "–1 & 3", "1 & –3", "–1 & –3"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "If 60% of a number is 36, number = ?",
    "a": "0.6x =36 → x=60.",
    "options": ["54", "56", "60", "62"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "If a:b=7:5, sum=60, find a?",
    "a": "Total parts=12 → 1 part=5 → a=7*5=35.",
    "options": ["30", "32", "35", "36"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "If 2x + 3y = 12, x – y = 2, find x and y?",
    "a": "x=3, y=1.5.",
    "options": ["x=2,y=2", "x=3,y=1.5", "x=4,y=1", "x=1,y=3"],
    "correct": 1,
    "difficulty": "hard"
  }
],


    HR:[
  // =============================
  //        20 EASY QUESTIONS
  // =============================
  {
    "q": "What is the primary role of HR in an organization?",
    "a": "HR manages employee relations, recruitment, and workplace policies.",
    "options": ["Finance management", "Employee relations and recruitment", "IT support", "Sales and marketing"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What does the abbreviation 'KRA' stand for?",
    "a": "Key Result Areas define main responsibilities of a role.",
    "options": ["Key Result Areas", "Knowledge Resource Assignment", "Key Role Allocation", "Knowledge Result Analysis"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "What is an annual performance appraisal?",
    "a": "It is a yearly review of an employee's performance and achievements.",
    "options": ["Monthly salary increment", "Yearly performance review", "Employee exit process", "Recruitment process"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which document contains company rules and employee responsibilities?",
    "a": "Employee handbook contains company policies and responsibilities.",
    "options": ["Payslip", "Employee handbook", "Offer letter", "Resume"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is onboarding in HR context?",
    "a": "Onboarding is the process of integrating a new employee into the organization.",
    "options": ["Firing an employee", "Employee training", "Integrating a new employee", "Salary discussion"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which HR process deals with hiring new employees?",
    "a": "Recruitment is the process of attracting and hiring candidates.",
    "options": ["Payroll", "Recruitment", "Training", "Performance appraisal"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What does 'exit interview' mean?",
    "a": "An interview conducted when an employee leaves to understand reasons and feedback.",
    "options": ["Salary negotiation", "Exit clearance process", "Interview before hiring", "Exit interview for feedback"],
    "correct": 3,
    "difficulty": "easy"
  },
  {
    "q": "Which HR activity tracks employee attendance?",
    "a": "Attendance management tracks employee presence and absence.",
    "options": ["Payroll", "Attendance management", "Recruitment", "Training"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is the purpose of HR training programs?",
    "a": "To improve skills, knowledge, and productivity of employees.",
    "options": ["To recruit new employees", "To conduct exit interviews", "To improve employee skills", "To manage payroll"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "Which HR metric measures employee satisfaction?",
    "a": "Employee engagement surveys measure satisfaction and motivation.",
    "options": ["Revenue growth", "Employee engagement", "Training hours", "Recruitment rate"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What does 'probation period' refer to?",
    "a": "Initial period to assess employee performance before confirmation.",
    "options": ["Termination period", "Initial assessment period", "Salary review", "Leave policy period"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which HR activity manages employee salaries?",
    "a": "Payroll handles salaries, taxes, and deductions.",
    "options": ["Payroll", "Recruitment", "Training", "Attendance"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "Which HR document defines job roles and responsibilities?",
    "a": "Job description specifies responsibilities and skills required.",
    "options": ["Offer letter", "Job description", "Payslip", "Resume"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is the role of HR in conflict resolution?",
    "a": "HR mediates disputes between employees to maintain workplace harmony.",
    "options": ["Ignore conflicts", "Terminate employees", "Mediate disputes", "Change policies only"],
    "correct": 2,
    "difficulty": "easy"
  },
  {
    "q": "What is the main focus of HR compliance?",
    "a": "Ensuring the organization follows labor laws and regulations.",
    "options": ["Marketing strategies", "Compliance with labor laws", "Software management", "Customer service"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which HR process deals with employee rewards and recognition?",
    "a": "Performance management includes appraisal and recognition.",
    "options": ["Recruitment", "Performance management", "Payroll", "Training"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "What is the difference between HR and HRM?",
    "a": "HRM is Human Resource Management, the strategic function of HR.",
    "options": ["HR is IT department", "HRM is management of employees", "HR is finance", "HRM is sales"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which HR activity tracks leaves and absences?",
    "a": "Leave management tracks employee vacations and sick leaves.",
    "options": ["Recruitment", "Leave management", "Training", "Payroll"],
    "correct": 1,
    "difficulty": "easy"
  },
  {
    "q": "Which HR document is provided when an employee joins?",
    "a": "Offer letter specifies role, salary, and joining terms.",
    "options": ["Offer letter", "Payslip", "Resume", "Exit form"],
    "correct": 0,
    "difficulty": "easy"
  },
  {
    "q": "What is the purpose of exit clearance in HR?",
    "a": "To ensure all company property and obligations are cleared when leaving.",
    "options": ["Recruitment", "Exit clearance", "Performance review", "Training completion"],
    "correct": 1,
    "difficulty": "easy"
  },

  // =============================
  //        20 MEDIUM QUESTIONS
  // =============================
  {
    "q": "What is behavioral interviewing?",
    "a": "A method where past behavior predicts future performance.",
    "options": ["Interview about hobbies", "Focus on past behavior examples", "Technical skill test", "Salary negotiation"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which HR metric measures employee turnover?",
    "a": "Turnover rate tracks employees leaving an organization.",
    "options": ["Recruitment rate", "Turnover rate", "Absenteeism rate", "Engagement score"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is competency mapping?",
    "a": "Identifying skills and abilities required for a role.",
    "options": ["Mapping salaries", "Identifying skills for a role", "Planning office space", "Employee survey"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which HR activity deals with succession planning?",
    "a": "Succession planning ensures leadership continuity.",
    "options": ["Payroll management", "Succession planning", "Training delivery", "Recruitment"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is the purpose of a 360-degree feedback?",
    "a": "Gather feedback from peers, managers, and subordinates for holistic performance review.",
    "options": ["Top-down appraisal", "Peer-only review", "Feedback from all directions", "Customer survey"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What is the difference between mentor and coach?",
    "a": "Mentor guides long-term career; coach focuses on specific skills.",
    "options": ["Mentor trains skills, coach advises career", "Mentor advises career, coach trains skills", "Both same", "Both external only"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which HR software module tracks employee performance?",
    "a": "Performance management system tracks KPIs and appraisals.",
    "options": ["Payroll", "Attendance", "Performance management", "Recruitment"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "Which HR strategy improves employee retention?",
    "a": "Engagement programs, recognition, and career growth improve retention.",
    "options": ["Only higher salaries", "Engagement and growth programs", "Firing underperformers", "Flexible IT tools"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which HR report shows absenteeism patterns?",
    "a": "Attendance or absentee report tracks leaves and patterns.",
    "options": ["Payroll report", "Recruitment report", "Attendance report", "Engagement report"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
    "q": "What is the purpose of job rotation?",
    "a": "Expose employees to different roles for skill development.",
    "options": ["Reduce pay", "Expose employees to different roles", "Hire new staff", "Audit HR policies"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is HR analytics?",
    "a": "Using data to make strategic HR decisions.",
    "options": ["Financial analysis", "Employee data-driven insights", "Software testing", "Compliance checking"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which HR metric measures training effectiveness?",
    "a": "Training ROI or assessment scores measure effectiveness.",
    "options": ["Turnover rate", "Training ROI", "Salary hike", "Recruitment cost"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is a skill gap analysis?",
    "a": "Identifying difference between current and required skills.",
    "options": ["Salary analysis", "Skill gap identification", "Performance rating", "Attendance analysis"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which HR process ensures workplace diversity?",
    "a": "Diversity and inclusion programs ensure equal opportunities.",
    "options": ["Payroll", "Diversity & Inclusion programs", "Recruitment only", "Training only"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is the role of HR in employee engagement?",
    "a": "HR organizes programs to keep employees motivated and productive.",
    "options": ["Only payroll", "Programs for motivation", "Exit clearance", "Only recruitment"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which HR metric tracks employee grievances?",
    "a": "Grievance tracking records complaints and resolutions.",
    "options": ["Recruitment rate", "Grievance tracking", "Training score", "Attendance rate"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "Which interview type evaluates problem-solving and logic skills?",
    "a": "Case interviews assess problem-solving and analytical abilities.",
    "options": ["Behavioral interview", "Case interview", "Technical test", "Group discussion"],
    "correct": 1,
    "difficulty": "medium"
  },
  {
    "q": "What is the purpose of exit interviews?",
    "a": "Understand reasons for leaving and collect feedback for improvement.",
    "options": ["Salary negotiation", "Recruitment", "Understand leaving reasons", "Train new hires"],
    "correct": 2,
    "difficulty": "medium"
  },
  {
  "q": "Which HR metric measures the average time it takes to fill a vacant position?",
  "a": "Time to hire measures the average duration from job posting to candidate acceptance.",
  "options": ["Employee turnover rate", "Time to hire", "Absenteeism rate", "Performance rating"],
  "correct": 1,
  "difficulty": "medium"
},
  {
    "q": "Which HR tool helps in succession planning?",
    "a": "Talent management software tracks skills and potential leaders.",
    "options": ["Payroll software", "Talent management software", "Attendance tracker", "Recruitment portal"],
    "correct": 1,
    "difficulty": "medium"
  },

  // =============================
  //        20 HARD QUESTIONS
  // =============================
  {
    "q": "What is strategic HRM?",
    "a": "Aligning HR strategies with business goals to enhance performance.",
    "options": ["Daily attendance tracking", "Align HR with business goals", "Payroll processing", "Recruitment only"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is the role of HR in organizational change management?",
    "a": "HR facilitates communication, training, and support during changes.",
    "options": ["Technical support", "Financial planning", "Facilitates change and support", "Marketing strategies"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "Which HR metric predicts future turnover risk?",
    "a": "Predictive analytics uses data to forecast employees likely to leave.",
    "options": ["Salary report", "Predictive analytics", "Recruitment cost", "Training hours"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is HR’s role in employer branding?",
    "a": "HR creates a positive image to attract and retain talent.",
    "options": ["Only payroll", "Employer branding", "Attendance management", "Compliance only"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which HR practice uses gamification for engagement?",
    "a": "Gamification uses game elements to improve motivation and learning.",
    "options": ["Recruitment only", "Gamification", "Payroll automation", "Compliance training"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which HR metric measures overall workforce productivity?",
    "a": "Productivity metrics compare output to employee input or time.",
    "options": ["Recruitment rate", "Workforce productivity metric", "Payroll report", "Engagement survey"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is talent pooling?",
    "a": "Building a database of potential candidates for future hiring.",
    "options": ["Payroll database", "Talent pool of candidates", "Attendance database", "Training records"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is HR’s role in risk management?",
    "a": "HR identifies and mitigates risks related to employees and compliance.",
    "options": ["IT risk only", "Payroll audit", "Mitigate HR-related risks", "Marketing risk management"],
    "correct": 2,
    "difficulty": "hard"
  },
  {
    "q": "What is the purpose of organizational capability mapping?",
    "a": "Assess the skills and resources needed for strategic goals.",
    "options": ["Recruitment only", "Mapping skills/resources for strategy", "Salary mapping", "Attendance mapping"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which HR practice evaluates leadership potential?",
    "a": "Leadership assessment identifies high-potential employees.",
    "options": ["Attendance tracking", "Leadership assessment", "Payroll review", "Recruitment only"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is HR’s role in organizational culture?",
    "a": "HR defines, communicates, and maintains workplace culture.",
    "options": ["Payroll only", "Defines and maintains culture", "Recruitment only", "Compliance only"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which analytics helps identify skill gaps in the workforce?",
    "a": "HR analytics identifies current vs required skills.",
    "options": ["Financial analytics", "HR analytics for skill gaps", "Recruitment analytics", "Marketing analytics"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which HR strategy focuses on employee experience?",
    "a": "Employee experience strategy improves satisfaction and retention.",
    "options": ["Payroll optimization", "Employee experience strategy", "Recruitment only", "Compliance tracking"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is a high-potential (HiPo) program?",
    "a": "Program to develop employees with leadership potential.",
    "options": ["Payroll audit", "HiPo development program", "Training attendance", "Recruitment tracking"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "What is HR’s role in digital transformation?",
    "a": "HR enables adoption of digital tools for employee management.",
    "options": ["IT implementation", "HR enables digital adoption", "Finance tracking", "Marketing only"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which HR metric assesses employee engagement ROI?",
    "a": "Engagement ROI measures impact of engagement initiatives on performance.",
    "options": ["Recruitment cost", "Engagement ROI", "Payroll audit", "Training cost"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
    "q": "Which HR practice supports knowledge management?",
    "a": "Documenting and sharing knowledge to retain expertise.",
    "options": ["Payroll processing", "Knowledge management", "Attendance tracking", "Recruitment only"],
    "correct": 1,
    "difficulty": "hard"
  },
  {
  "q": "What is HR’s role in workforce planning for future business needs?",
  "a": "HR forecasts talent requirements and develops strategies to meet future workforce demands.",
  "options": ["Only handles recruitment", "Forecasts talent needs and plans workforce", "Manages payroll only", "Conducts exit interviews only"],
  "correct": 1,
  "difficulty": "hard"
},
{
  "q": "Which HR practice uses predictive analytics to improve employee retention?",
  "a": "Predictive retention analytics identifies employees at risk of leaving and suggests interventions.",
  "options": ["Attendance tracking", "Predictive retention analytics", "Payroll automation", "Training schedule planning"],
  "correct": 1,
  "difficulty": "hard"
},
  {
    "q": "What is the role of HR in mergers and acquisitions?",
    "a": "HR manages integration of employees, culture, and policies.",
    "options": ["IT integration", "HR manages employee integration", "Marketing integration", "Finance integration"],
    "correct": 1,
    "difficulty": "hard"
  }
]
};
// ========== STATE MANAGEMENT ==========
let state = {
    currentPage: 'home',
    theme: 'light',
    favorites: [],
    analytics: {
        totalQuestions: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        topicPerformance: {}
    },
    quiz: {
        questions: [],
        currentIndex: 0,
        score: 0,
        startTime: null,
        userAnswers: []
    },
    mock: {
        questions: [],
        currentIndex: 0,
        duration: 30,
        timeRemaining: 0,
        timerInterval: null,
        answers: []
    },
    flashcards: {
        questions: [],
        currentIndex: 0,
        topic: ''
    },
    streak: {
        count: 0,
        lastCompletedDate: null
    }
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    initializeEventListeners();
    initializeTheme();
    renderPracticeQuestions();
    updateAnalytics();
    updateStreakCounter();
});

// ========== LOCAL STORAGE FUNCTIONS ==========
function loadFromStorage() {
    const saved = localStorage.getItem('interviewPrepData');
    if (saved) {
        const data = JSON.parse(saved);
        state.favorites = data.favorites || [];
        state.analytics = data.analytics || state.analytics;
        state.theme = data.theme || 'light';
        state.streak = data.streak || state.streak;
    }
}

function saveToStorage() {
    const data = {
        favorites: state.favorites,
        analytics: state.analytics,
        theme: state.theme,
        streak: state.streak
    };
    localStorage.setItem('interviewPrepData', JSON.stringify(data));
}

// ========== EVENT LISTENERS ==========
function initializeEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateToPage(page);
        });
    });

    // Feature cards navigation
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            const page = card.dataset.page;
            if (page) navigateToPage(page);
        });
    });

    // Mobile menu toggle
    document.getElementById('mobileMenuToggle')?.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    });


    // Home page buttons
    document.getElementById('startQuizBtn')?.addEventListener('click', () => navigateToPage('quiz'));
    document.getElementById('startMockBtn')?.addEventListener('click', () => navigateToPage('mock'));
    document.getElementById('startDailyChallengeBtn')?.addEventListener('click', startDailyChallenge);

    // Quiz page
    document.getElementById('startQuizBtnPage')?.addEventListener('click', startQuiz);
    document.getElementById('nextQuizBtn')?.addEventListener('click', nextQuizQuestion);
    document.getElementById('retakeQuizBtn')?.addEventListener('click', retakeQuiz);
    document.getElementById('reviewAnswersBtn')?.addEventListener('click', reviewQuizAnswers);
    document.getElementById('newQuizBtn')?.addEventListener('click', () => {
        document.getElementById('quizResults').style.display = 'none';
        document.querySelector('.quiz-setup').parentElement.style.display = 'block';
    });

    // Practice page
    document.getElementById('searchInput')?.addEventListener('input', filterPracticeQuestions);
    document.getElementById('practiceTopicFilter')?.addEventListener('change', filterPracticeQuestions);
    document.getElementById('randomPracticeBtn')?.addEventListener('click', showRandomPracticeQuestion);

    // Flashcards
    document.getElementById('startFlashcardsBtn')?.addEventListener('click', startFlashcards);
    document.getElementById('flashcard')?.addEventListener('click', flipFlashcard);
    document.getElementById('flipFlashcard')?.addEventListener('click', flipFlashcard);
    document.getElementById('prevFlashcard')?.addEventListener('click', () => navigateFlashcard(-1));
    document.getElementById('nextFlashcard')?.addEventListener('click', () => navigateFlashcard(1));

    // Mock test
    document.getElementById('startMockTestBtn')?.addEventListener('click', startMockTest);
    document.getElementById('mockSkipBtn')?.addEventListener('click', skipMockQuestion);
    document.getElementById('mockEndBtn')?.addEventListener('click', endMockTest);

    // Resources (PDF)
    document.getElementById('downloadTopicPDFBtn')?.addEventListener('click', () => {
        const topic = document.getElementById('pdfTopicSelect').value;
        if (topic) generatePDF(topic);
        else alert('Please select a topic');
    });
    document.getElementById('downloadReportBtn')?.addEventListener('click', downloadPerformanceReport);

    // Settings
    document.getElementById('exportDataBtn')?.addEventListener('click', exportData);
    document.getElementById('importDataInput')?.addEventListener('change', importData);
    document.getElementById('resetDataBtn')?.addEventListener('click', resetAllData);
}

// ========== NAVIGATION ==========
function navigateToPage(pageName) {
    // Update active states
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    // Show selected page
    const page = document.getElementById(pageName);
    if (page) {
        page.classList.add('active');
        state.currentPage = pageName;
    }

    // Update active nav link
    const activeLink = document.querySelector(`.nav-link[data-page="${pageName}"]`);
    if (activeLink) activeLink.classList.add('active');

    // Close mobile menu
    document.querySelector('.nav-links')?.classList.remove('active');

    // Update page-specific content
    if (pageName === 'favorites') renderFavorites();
    if (pageName === 'analytics') updateAnalytics();

    // Scroll to top
    window.scrollTo(0, 0);
}

// ========== THEME MANAGEMENT (Fixed) ==========

// Apply theme and icon based on current mode
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.classList.remove('fa-sun', 'fa-moon');
        icon.classList.add(theme === 'dark' ? 'fa-moon' : 'fa-sun');
    }
}

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
}

// Toggle theme when user clicks
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Run when page loads
initializeTheme();

// Add event listener
document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
document.getElementById('settingsDarkModeToggle')?.addEventListener('change', toggleTheme);



// ========== QUIZ FUNCTIONALITY ==========
function startQuiz() {
    const topic = document.getElementById('quizTopicSelect').value;
    const count = parseInt(document.getElementById('quizCountSelect').value);
    const difficulty = document.getElementById('quizDifficultySelect').value;

    let questions = [];
    
    if (topic) {
        questions = [...QUESTIONS_DB[topic]];
    } else {
        // Mix all topics
        Object.values(QUESTIONS_DB).forEach(topicQuestions => {
            questions.push(...topicQuestions);
        });
    }

    // Filter by difficulty
    if (difficulty !== 'all') {
        questions = questions.filter(q => q.difficulty === difficulty);
    }

    // Shuffle and select
    questions = shuffleArray(questions).slice(0, count);

    if (questions.length === 0) {
        alert('No questions available for selected criteria');
        return;
    }

    state.quiz = {
        questions,
        currentIndex: 0,
        score: 0,
        startTime: Date.now(),
        userAnswers: []
    };

    // Hide setup, show quiz
    document.querySelector('.quiz-setup').parentElement.style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';

    renderQuizQuestion();
}

function renderQuizQuestion() {
    const { questions, currentIndex, score } = state.quiz;
    const question = questions[currentIndex];
    const topic = getQuestionTopic(question);

    document.getElementById('currentQuestionNum').textContent = currentIndex + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    document.getElementById('quizScore').textContent = score;
    document.getElementById('quizTotal').textContent = questions.length;
    document.getElementById('quizTopicBadge').textContent = topic;
    document.getElementById('quizQuestionText').textContent = question.q;

    // Progress bar
    const progress = ((currentIndex) / questions.length) * 100;
    document.getElementById('quizProgressBar').style.width = progress + '%';

    // Render options
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
        `;
        optionDiv.addEventListener('click', () => selectQuizOption(index, optionDiv));
        optionsContainer.appendChild(optionDiv);
    });

    // Hide feedback and next button
    document.getElementById('quizFeedback').style.display = 'none';
    document.getElementById('nextQuizBtn').style.display = 'none';
}

function selectQuizOption(selectedIndex, optionElement) {
    const { questions, currentIndex } = state.quiz;
    const question = questions[currentIndex];
    const isCorrect = selectedIndex === question.correct;

    // Disable all options
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    // Mark correct and wrong
    document.querySelectorAll('.quiz-option').forEach((opt, idx) => {
        if (idx === question.correct) {
            opt.classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
            opt.classList.add('wrong');
        }
    });

    // Update score
    if (isCorrect) {
        state.quiz.score++;
        document.getElementById('quizScore').textContent = state.quiz.score;
    }

    // Store answer
    state.quiz.userAnswers.push({
        question: question.q,
        topic: getQuestionTopic(question),
        selected: selectedIndex,
        correct: question.correct,
        isCorrect
    });

    // Update analytics
    updateQuizAnalytics(getQuestionTopic(question), isCorrect);

    // Show feedback
    showQuizFeedback(isCorrect, question.a);

    // Show next button
    document.getElementById('nextQuizBtn').style.display = 'inline-flex';
}

function showQuizFeedback(isCorrect, answer) {
    const feedback = document.getElementById('quizFeedback');
    feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
    feedback.innerHTML = `
        <h4>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</h4>
        <p><strong>Explanation:</strong> ${answer}</p>
    `;
    feedback.style.display = 'block';
}

function nextQuizQuestion() {
    state.quiz.currentIndex++;
    
    if (state.quiz.currentIndex >= state.quiz.questions.length) {
        showQuizResults();
    } else {
        renderQuizQuestion();
    }
}

function showQuizResults() {
    const { score, questions, startTime, userAnswers } = state.quiz;
    const percentage = Math.round((score / questions.length) * 100);
    const timeTaken = Math.round((Date.now() - startTime) / 1000);

    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    document.getElementById('finalScore').textContent = percentage;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('wrongAnswers').textContent = questions.length - score;
    document.getElementById('timeTaken').textContent = timeTaken;

    // Score message
    let message = '';
    if (percentage >= 90) message = '🎉 Outstanding! You\'re an expert!';
    else if (percentage >= 75) message = '🌟 Great job! Keep it up!';
    else if (percentage >= 60) message = '👍 Good effort! Room for improvement!';
    else message = '📚 Keep practicing! You\'ll get better!';
    
    document.getElementById('scoreMessage').textContent = message;

    saveToStorage();
}

function retakeQuiz() {
    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    state.quiz.startTime = Date.now();
    state.quiz.userAnswers = [];
    
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    renderQuizQuestion();
}

function reviewQuizAnswers() {
    const { questions, userAnswers } = state.quiz;

    if (!userAnswers || userAnswers.length === 0) {
        alert('No answers to review');
        return;
    }

    // Hide results, show review
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('reviewContainer').style.display = 'block';

    // Generate review content
    renderSimpleReview(questions, userAnswers);
}

function renderSimpleReview(questions, userAnswers) {
    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = '';

    userAnswers.forEach((answer, index) => {
        const question = questions[index];
        const isCorrect = answer.isCorrect;

        const reviewItem = document.createElement('div');
        reviewItem.className = `simple-review-item ${isCorrect ? 'correct' : 'wrong'}`;

        reviewItem.innerHTML = `
            <div class="review-q-number">
                Q${index + 1}. ${isCorrect ? '✓' : '✗'}
            </div>
            <div class="review-q-text">${question.q}</div>
            <div class="review-q-your-answer">
                <strong>Your Answer:</strong> ${question.options[answer.selected]}
            </div>
            ${!isCorrect ? `
                <div class="review-q-correct-answer">
                    <strong>Correct Answer:</strong> ${question.options[question.correct]}
                </div>
            ` : ''}
            <div class="review-q-explanation">
                <strong>Explanation:</strong> ${question.a}
            </div>
        `;

        reviewContent.appendChild(reviewItem);
    });
}

function closeReview() {
    document.getElementById('reviewContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
}

// ========== PRACTICE MODE ==========
function renderPracticeQuestions(filter = { search: '', topic: '' }) {
    const container = document.getElementById('practiceContainer');
    container.innerHTML = '';

    let allQuestions = [];
    Object.entries(QUESTIONS_DB).forEach(([topic, questions]) => {
        questions.forEach(q => {
            allQuestions.push({ ...q, topic });
        });
    });

    // Apply filters
    if (filter.topic) {
        allQuestions = allQuestions.filter(q => q.topic === filter.topic);
    }
    if (filter.search) {
        const searchLower = filter.search.toLowerCase();
        allQuestions = allQuestions.filter(q => 
            q.q.toLowerCase().includes(searchLower) || 
            q.a.toLowerCase().includes(searchLower)
        );
    }

    allQuestions.forEach((question, index) => {
        const isFavorite = state.favorites.some(fav => fav.q === question.q);
        const item = document.createElement('div');
        item.className = 'practice-item';
        item.innerHTML = `
            <div class="practice-item-header">
                <span class="question-badge">${question.topic}</span>
                <button class="btn-icon" onclick="toggleFavorite(${index}, '${question.topic}')" title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                    <i class="fas fa-heart" style="color: ${isFavorite ? '#e53e3e' : '#cbd5e0'}"></i>
                </button>
            </div>
            <div class="practice-question">${question.q}</div>
            <div class="practice-answer" id="answer-${index}">${question.a}</div>
            <button class="btn btn-primary" style="margin-top: 1rem;" onclick="toggleAnswer(${index})">
                <i class="fas fa-eye"></i> <span id="btn-text-${index}">Show Answer</span>
            </button>
        `;
        container.appendChild(item);
    });

    if (allQuestions.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No questions found</p></div>';
    }
}

function filterPracticeQuestions() {
    const search = document.getElementById('searchInput').value;
    const topic = document.getElementById('practiceTopicFilter').value;
    renderPracticeQuestions({ search, topic });
}

function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const btnText = document.getElementById(`btn-text-${index}`);
    
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        btnText.textContent = 'Show Answer';
    } else {
        answer.classList.add('show');
        btnText.textContent = 'Hide Answer';
    }
}

function showRandomPracticeQuestion() {
    const allQuestions = [];
    Object.values(QUESTIONS_DB).forEach(questions => {
        allQuestions.push(...questions);
    });
    
    const randomQ = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    const search = document.getElementById('searchInput');
    search.value = randomQ.q.substring(0, 20);
    filterPracticeQuestions();
    search.scrollIntoView({ behavior: 'smooth' });
}

// ========== FLASHCARDS ==========
function startFlashcards() {
    const topic = document.getElementById('flashcardTopicSelect').value;
    
    if (!topic) {
        alert('Please select a topic');
        return;
    }

    state.flashcards = {
        questions: shuffleArray([...QUESTIONS_DB[topic]]),
        currentIndex: 0,
        topic
    };

    document.querySelector('.flashcard-setup').parentElement.style.display = 'none';
    document.getElementById('flashcardContainer').style.display = 'block';

    renderFlashcard();
}

function renderFlashcard() {
    const { questions, currentIndex } = state.flashcards;
    const question = questions[currentIndex];

    document.getElementById('flashcardNum').textContent = currentIndex + 1;
    document.getElementById('flashcardTotal').textContent = questions.length;
    document.getElementById('flashcardQuestion').textContent = question.q;
    document.getElementById('flashcardAnswer').textContent = question.a;

    // Remove flipped state
    document.getElementById('flashcard').classList.remove('flipped');

    // Disable/enable navigation
    document.getElementById('prevFlashcard').disabled = currentIndex === 0;
    document.getElementById('nextFlashcard').disabled = currentIndex === questions.length - 1;
}

function flipFlashcard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function navigateFlashcard(direction) {
    state.flashcards.currentIndex += direction;
    renderFlashcard();
}

// ========== MOCK TEST ==========
function startMockTest() {
    const duration = parseInt(document.getElementById('mockDurationSelect').value);
    const selectedTopics = Array.from(document.querySelectorAll('.checkbox-group input:checked'))
        .map(cb => cb.value);

    if (selectedTopics.length === 0) {
        alert('Please select at least one topic');
        return;
    }

    let questions = [];
    selectedTopics.forEach(topic => {
        if (QUESTIONS_DB[topic]) {
            questions.push(...QUESTIONS_DB[topic]);
        }
    });

    const questionCount = Math.floor(duration / 1.5); // ~1.5 min per question
    questions = shuffleArray(questions).slice(0, questionCount);

    state.mock = {
        questions,
        currentIndex: 0,
        duration,
        timeRemaining: duration * 60,
        answers: new Array(questions.length).fill(null)
    };

    document.querySelector('.mock-setup').parentElement.style.display = 'none';
    document.getElementById('mockTestContainer').style.display = 'block';

    startMockTimer();
    renderMockQuestion();
}

function startMockTimer() {
    state.mock.timerInterval = setInterval(() => {
        state.mock.timeRemaining--;
        updateMockTimer();

        if (state.mock.timeRemaining <= 0) {
            endMockTest();
        }
    }, 1000);
}

function updateMockTimer() {
    const minutes = Math.floor(state.mock.timeRemaining / 60);
    const seconds = state.mock.timeRemaining % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function renderMockQuestion() {
    const { questions, currentIndex } = state.mock;
    const question = questions[currentIndex];
    const topic = getQuestionTopic(question);

    document.getElementById('mockQuestionNum').textContent = currentIndex + 1;
    document.getElementById('mockTotalQuestions').textContent = questions.length;
    document.getElementById('mockTopicBadge').textContent = topic;
    document.getElementById('mockQuestionText').textContent = question.q;

    const optionsContainer = document.getElementById('mockOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        if (state.mock.answers[currentIndex] === index) {
            optionDiv.classList.add('selected');
        }
        optionDiv.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
        `;
        optionDiv.addEventListener('click', () => selectMockOption(index));
        optionsContainer.appendChild(optionDiv);
    });
}

function selectMockOption(index) {
    state.mock.answers[state.mock.currentIndex] = index;
    
    // Update selected state
    document.querySelectorAll('#mockOptions .quiz-option').forEach((opt, idx) => {
        opt.classList.toggle('selected', idx === index);
    });
    
    // Auto-advance after short delay
    setTimeout(() => {
        if (state.mock.currentIndex < state.mock.questions.length - 1) {
            state.mock.currentIndex++;
            renderMockQuestion();
        } else {
            endMockTest();
        }
    }, 500);
}

function skipMockQuestion() {
    if (state.mock.currentIndex < state.mock.questions.length - 1) {
        state.mock.currentIndex++;
        renderMockQuestion();
    }
}

function endMockTest() {
    clearInterval(state.mock.timerInterval);
    
    let score = 0;
    state.mock.questions.forEach((q, idx) => {
        if (state.mock.answers[idx] === q.correct) {
            score++;
        }
    });

    const percentage = Math.round((score / state.mock.questions.length) * 100);
    
    alert(`Mock Test Complete!\n\nScore: ${score}/${state.mock.questions.length} (${percentage}%)\n\nGreat effort! Review your answers to improve.`);
    
    document.getElementById('mockTestContainer').style.display = 'none';
    document.querySelector('.mock-setup').parentElement.style.display = 'block';
}

// ========== FAVORITES ==========
function toggleFavorite(index, topic) {
    const allQuestions = [];
    Object.entries(QUESTIONS_DB).forEach(([t, questions]) => {
        questions.forEach(q => allQuestions.push({ ...q, topic: t }));
    });

    const question = allQuestions[index];
    const favIndex = state.favorites.findIndex(fav => fav.q === question.q);

    if (favIndex > -1) {
        state.favorites.splice(favIndex, 1);
    } else {
        state.favorites.push(question);
    }

    saveToStorage();
    filterPracticeQuestions();
    renderFavorites();
}

function renderFavorites() {
    const container = document.getElementById('favoritesContainer');
    const count = document.getElementById('favoriteCount');
    
    count.textContent = state.favorites.length;

    if (state.favorites.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart empty-icon"></i>
                <h3>No favorites yet</h3>
                <p>Start practicing and mark questions you want to revisit!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';
    state.favorites.forEach((question, index) => {
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.innerHTML = `
            <div class="favorite-header">
                <span class="question-badge">${question.topic}</span>
                <button class="btn-icon" onclick="removeFavorite(${index})">
                    <i class="fas fa-heart" style="color: #e53e3e"></i>
                </button>
            </div>
            <div class="favorite-question">${question.q}</div>
            <div class="favorite-answer">${question.a}</div>
        `;
        container.appendChild(item);
    });
}

function removeFavorite(index) {
    state.favorites.splice(index, 1);
    saveToStorage();
    renderFavorites();
    filterPracticeQuestions();
}

// ========== ANALYTICS ==========
function updateQuizAnalytics(topic, isCorrect) {
    state.analytics.totalQuestions++;
    
    if (isCorrect) {
        state.analytics.correctAnswers++;
    } else {
        state.analytics.wrongAnswers++;
    }

    if (!state.analytics.topicPerformance[topic]) {
        state.analytics.topicPerformance[topic] = { correct: 0, total: 0 };
    }
    
    state.analytics.topicPerformance[topic].total++;
    if (isCorrect) {
        state.analytics.topicPerformance[topic].correct++;
    }

    saveToStorage();
}

function updateAnalytics() {
  state.analytics.totalQuestions = 
    state.analytics.correctAnswers + state.analytics.wrongAnswers;

    const { totalQuestions, correctAnswers, wrongAnswers, topicPerformance } = state.analytics;
    
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('wrongCount').textContent = wrongAnswers;
    
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    document.getElementById('accuracyRate').textContent = accuracy + '%';

    // Render topics progress
    const topicsContainer = document.getElementById('topicsProgress');
    topicsContainer.innerHTML = '';

    Object.entries(topicPerformance).forEach(([topic, data]) => {
        const percentage = Math.round((data.correct / data.total) * 100);
        const item = document.createElement('div');
        item.className = 'topic-progress-item';
        item.innerHTML = `
            <div class="progress-header">
                <span class="progress-topic">${topic}</span>
                <span class="progress-count">${data.correct}/${data.total} (${percentage}%)</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
        `;
        topicsContainer.appendChild(item);
    });

    // Render chart
    renderPerformanceChart();
}

function renderPerformanceChart() {
    const canvas = document.getElementById('performanceChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { correctAnswers, wrongAnswers } = state.analytics;

    // Destroy existing chart if any
    if (window.performanceChartInstance) {
        window.performanceChartInstance.destroy();
    }

    window.performanceChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Wrong'],
            datasets: [{
                data: [correctAnswers, wrongAnswers],
                backgroundColor: ['#48bb78', '#e53e3e'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// ========== DAILY CHALLENGE ==========
function startDailyChallenge() {
    const today = new Date().toDateString();
    
    // Check if already completed today
    if (state.streak.lastCompletedDate === today) {
        alert('You\'ve already completed today\'s challenge! Come back tomorrow! 🎉');
        return;
    }

    // Get 5 random questions
    const allQuestions = [];
    Object.values(QUESTIONS_DB).forEach(questions => {
        allQuestions.push(...questions);
    });
    
    const challengeQuestions = shuffleArray(allQuestions).slice(0, 5);

    // Set up quiz with challenge questions
    state.quiz = {
        questions: challengeQuestions,
        currentIndex: 0,
        score: 0,
        startTime: Date.now(),
        userAnswers: []
    };

    // Navigate to quiz
    navigateToPage('quiz');
    document.querySelector('.quiz-setup').parentElement.style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    renderQuizQuestion();

    // Update streak
    updateStreak();
}

function updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (state.streak.lastCompletedDate === yesterday) {
        state.streak.count++;
    } else if (state.streak.lastCompletedDate !== today) {
        state.streak.count = 1;
    }
    
    state.streak.lastCompletedDate = today;
    saveToStorage();
    updateStreakCounter();
}

function updateStreakCounter() {
    document.getElementById('streakCount').textContent = state.streak.count;
}

// ========== PDF GENERATION ==========
function generatePDF(type) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let questions = [];
    let title = '';

    switch(type) {
        case 'all':
            Object.values(QUESTIONS_DB).forEach(qs => questions.push(...qs));
            title = 'Complete Question Bank';
            break;
        case 'top50':
            Object.values(QUESTIONS_DB).forEach(qs => questions.push(...qs));
            questions = questions.slice(0, 50);
            title = 'Top 50 Important Questions';
            break;
        case 'favorites':
            questions = state.favorites;
            title = 'My Favorite Questions';
            break;
        default:
            questions = QUESTIONS_DB[type] || [];
            title = `${type} Questions`;
    }

    if (questions.length === 0) {
        alert('No questions available for PDF generation');
        return;
    }

    // Add title
    doc.setFontSize(20);
    doc.text(title, 20, 20);
    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);
    doc.text(`Total Questions: ${questions.length}`, 20, 38);

    let y = 50;
    
    questions.forEach((q, index) => {
        // Check if we need a new page
        if (y > 250) {
            doc.addPage();
            y = 20;
        }

        // Question number and text
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.text(`Q${index + 1}. ${q.q}`, 20, y, { maxWidth: 170 });
        y += 10;

        // Answer
        doc.setFont(undefined, 'normal');
        doc.setFontSize(10);
        const answerLines = doc.splitTextToSize(`Answer: ${q.a}`, 170);
        doc.text(answerLines, 20, y);
        y += answerLines.length * 6 + 10;
    });

    doc.save(`${title.replace(/\s+/g, '_')}.pdf`);
    alert('PDF downloaded successfully!');
}

function downloadPerformanceReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const { totalQuestions, correctAnswers, wrongAnswers, topicPerformance } = state.analytics;
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    // Title
    doc.setFontSize(20);
    doc.text('Performance Report', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 30);
    
    // Overall Stats
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Overall Performance', 20, 45);
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(`Total Questions Attempted: ${totalQuestions}`, 30, 55);
    doc.text(`Correct Answers: ${correctAnswers}`, 30, 63);
    doc.text(`Wrong Answers: ${wrongAnswers}`, 30, 71);
    doc.text(`Accuracy Rate: ${accuracy}%`, 30, 79);

    // Topic Performance
    let y = 95;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Topic-wise Performance', 20, y);
    y += 10;

    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    
    Object.entries(topicPerformance).forEach(([topic, data]) => {
        const percentage = Math.round((data.correct / data.total) * 100);
        doc.text(`${topic}: ${data.correct}/${data.total} (${percentage}%)`, 30, y);
        y += 8;
    });

    // Streak info
    y += 10;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Daily Challenge', 20, y);
    y += 10;
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text(`Current Streak: ${state.streak.count} days`, 30, y);

    doc.save('Performance_Report.pdf');
    alert('Performance report downloaded successfully!');
}

// ========== DATA MANAGEMENT ==========
function exportData() {
    const dataStr = JSON.stringify(state, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `interview_prep_backup_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    alert('Data exported successfully!');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Validate data structure
            if (importedData.favorites && importedData.analytics) {
                state.favorites = importedData.favorites;
                state.analytics = importedData.analytics;
                state.streak = importedData.streak || state.streak;
                
                saveToStorage();
                updateAnalytics();
                renderFavorites();
                updateStreakCounter();
                
                alert('Data imported successfully!');
            } else {
                alert('Invalid backup file format');
            }
        } catch (error) {
            alert('Error importing data: ' + error.message);
        }
    };
    reader.readAsText(file);
}

function resetAllData() {
    if (confirm('Are you sure you want to reset all data? This action cannot be undone!')) {
        if (confirm('This will delete all your progress, favorites, and settings. Continue?')) {
            localStorage.removeItem('interviewPrepData');
            
            state = {
                currentPage: 'home',
                theme: 'light',
                favorites: [],
                analytics: {
                    totalQuestions: 0,
                    correctAnswers: 0,
                    wrongAnswers: 0,
                    topicPerformance: {}
                },
                quiz: {
                    questions: [],
                    currentIndex: 0,
                    score: 0,
                    startTime: null,
                    userAnswers: []
                },
                mock: {
                    questions: [],
                    currentIndex: 0,
                    duration: 30,
                    timeRemaining: 0,
                    timerInterval: null,
                    answers: []
                },
                flashcards: {
                    questions: [],
                    currentIndex: 0,
                    topic: ''
                },
                streak: {
                    count: 0,
                    lastCompletedDate: null
                }
            };
            
            document.documentElement.setAttribute('data-theme', 'light');
            updateAnalytics();
            renderFavorites();
            updateStreakCounter();
            renderPracticeQuestions();
            
            alert('All data has been reset!');
            navigateToPage('home');
        }
    }
}

// ========== UTILITY FUNCTIONS ==========
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getQuestionTopic(question) {
    for (const [topic, questions] of Object.entries(QUESTIONS_DB)) {
        if (questions.some(q => q.q === question.q)) {
            return topic;
        }
    }
    return 'Unknown';
}

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener('keydown', (e) => {
    // Quiz shortcuts
    if (state.currentPage === 'quiz' && document.getElementById('quizContainer').style.display === 'block') {
        if (e.key >= '1' && e.key <= '4') {
            const index = parseInt(e.key) - 1;
            const options = document.querySelectorAll('.quiz-option');
            if (options[index] && options[index].style.pointerEvents !== 'none') {
                options[index].click();
            }
        }
        if (e.key === 'Enter' && document.getElementById('nextQuizBtn').style.display !== 'none') {
            document.getElementById('nextQuizBtn').click();
        }
    }

    // Flashcard shortcuts
    if (state.currentPage === 'flashcards' && document.getElementById('flashcardContainer').style.display === 'block') {
        if (e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            flipFlashcard();
        }
        if (e.key === 'ArrowLeft') {
            document.getElementById('prevFlashcard').click();
        }
        if (e.key === 'ArrowRight') {
            document.getElementById('nextFlashcard').click();
        }
    }

    // Global shortcuts
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'h':
                e.preventDefault();
                navigateToPage('home');
                break;
            case 'q':
                e.preventDefault();
                navigateToPage('quiz');
                break;
            case 'p':
                e.preventDefault();
                navigateToPage('practice');
                break;
            case 'f':
                e.preventDefault();
                navigateToPage('favorites');
                break;
        }
    }
});

// ========== WELCOME MESSAGE ==========
console.log('%c🎓 Interview Prep AI Portal', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cWelcome! Practice 100+ interview questions across multiple topics.', 'color: #718096; font-size: 14px;');
console.log('%cKeyboard Shortcuts:', 'color: #667eea; font-size: 14px; font-weight: bold; margin-top: 10px;');
console.log('%cCtrl+H: Home | Ctrl+Q: Quiz | Ctrl+P: Practice | Ctrl+F: Favorites', 'color: #718096;');
console.log('%cQuiz: Press 1-4 to select options, Enter for next question', 'color: #718096;');
console.log('%cFlashcards: Space to flip, Arrow keys to navigate', 'color: #718096;');

// ========== SERVICE WORKER (OPTIONAL - FOR PWA) ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable PWA functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ========== NOTIFICATION PERMISSION (OPTIONAL) ==========
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted');
            }
        });
    }
}

// ========== DAILY REMINDER (OPTIONAL) ==========
function checkDailyReminder() {
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
        localStorage.setItem('lastVisitDate', today);
        
        // Show welcome back message
        if (lastVisit) {
            console.log('Welcome back! Don\'t forget to complete your daily challenge! 🔥');
        }
    }
}

// Initialize daily reminder check
checkDailyReminder();

// ========== PERFORMANCE MONITORING ==========
window.addEventListener('load', () => {
    const loadTime = performance.now();
    if (loadTime < 1000) {
        console.log(`%c⚡ Page loaded in ${Math.round(loadTime)}ms`, 'color: #48bb78; font-weight: bold;');
    }
});

// ========== ERROR HANDLING ==========
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    // Could log to analytics service in production
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // Could log to analytics service in production
});

// ========== SMOOTH SCROLL POLYFILL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ========== LAZY LOADING IMAGES (IF NEEDED) ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== AUTO-SAVE FUNCTIONALITY ==========
let autoSaveTimeout;
function autoSave() {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        saveToStorage();
    }, 1000); // Save after 1 second of inactivity
}

// ========== DETECT MOBILE DEVICE ==========
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
    console.log('Mobile device detected - optimized experience enabled');
}

// ========== ONLINE/OFFLINE DETECTION ==========
window.addEventListener('online', () => {
    console.log('✅ Back online');
    // Could sync data when back online
});

window.addEventListener('offline', () => {
    console.log('⚠️ You are offline - data will be saved locally');
});

// ========== TOUCH GESTURES FOR MOBILE ==========
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 100;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        // Swipe right - go to previous flashcard
        if (swipeDistance > 0 && state.currentPage === 'flashcards') {
            const prevBtn = document.getElementById('prevFlashcard');
            if (prevBtn && !prevBtn.disabled) {
                prevBtn.click();
            }
        }
        // Swipe left - go to next flashcard
        else if (swipeDistance < 0 && state.currentPage === 'flashcards') {
            const nextBtn = document.getElementById('nextFlashcard');
            if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            }
        }
    }
}

// ========== CONFETTI ANIMATION (FOR HIGH SCORES) ==========
function celebrateHighScore() {
    // Simple celebration effect
    const celebration = document.createElement('div');
    celebration.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 100px;
        z-index: 10000;
        animation: celebrate 1s ease-out;
    `;
    celebration.textContent = '🎉';
    document.body.appendChild(celebration);
    
    setTimeout(() => {
        celebration.remove();
    }, 1000);
}

// Add celebration animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrate {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ========== INITIALIZE TOOLTIPS (IF NEEDED) ==========
function initializeTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const text = e.target.dataset.tooltip;
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 14px;
        z-index: 1000;
        pointer-events: none;
    `;
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    
    e.target._tooltip = tooltip;
}

function hideTooltip(e) {
    if (e.target._tooltip) {
        e.target._tooltip.remove();
        delete e.target._tooltip;
    }
}

// ========== PRINT FUNCTIONALITY ==========
function printQuestions() {
    window.print();
}

// Add print styles
const printStyles = document.createElement('style');
printStyles.textContent = `
    @media print {
        .navbar, .footer, .btn, .nav-links { display: none !important; }
        .page { display: block !important; page-break-after: always; }
        body { background: white !important; }
        .card { box-shadow: none !important; border: 1px solid #ddd; }
    }
`;
document.head.appendChild(printStyles);

// ========== ACCESSIBILITY IMPROVEMENTS ==========
document.addEventListener('keydown', (e) => {
    // Tab focus improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add accessibility CSS
const a11yStyles = document.createElement('style');
a11yStyles.textContent = `
    .keyboard-nav *:focus {
        outline: 3px solid #667eea !important;
        outline-offset: 2px;
    }
    
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(a11yStyles);

// ========== FINAL INITIALIZATION ==========
console.log('%c✅ Interview Prep AI Portal Ready!', 'color: #48bb78; font-size: 16px; font-weight: bold;');
console.log(`%c📊 Loaded ${Object.values(QUESTIONS_DB).reduce((sum, qs) => sum + qs.length, 0)} questions across ${Object.keys(QUESTIONS_DB).length} topics`, 'color: #667eea;');

// Auto-update analytics on page visibility change
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        updateAnalytics();
    }
});



// ========== CLOSE QUIZ FUNCTION ==========
function closeQuiz() {
    if (confirm('Close quiz? Progress will be lost.')) {
        state.quiz = {
            questions: [],
            currentIndex: 0,
            score: 0,
            startTime: null,
            userAnswers: []
        };
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
        document.querySelector('.quiz-setup').parentElement.style.display = 'block';
    }
}



// ========== CONTACT FORM MODAL FUNCTIONALITY ==========

// Get modal elements
const contactModal = document.getElementById('contactModal');
const contactLink = document.getElementById('contactLink');
const contactModalClose = document.getElementById('contactModalClose');
const contactFormCancel = document.getElementById('contactFormCancel');
const contactForm = document.getElementById('contactForm');
const contactModalBackdrop = document.querySelector('.contact-modal-backdrop');
const formMessage = document.getElementById('formMessage');
const contactSubmitBtn = document.getElementById('contactSubmitBtn');

// Get success modal elements
const successModal = document.getElementById('successModal');
const successModalClose = document.getElementById('successModalClose');
const successModalBackdrop = document.querySelector('.success-modal-backdrop');

// Get subject dropdown and custom input
const subjectSelect = document.getElementById('contactSubject');
const customSubjectInput = document.getElementById('customSubject');

// ========== OPEN CONTACT MODAL ==========
function openContactModal(e) {
    if (e) e.preventDefault();
    contactModal.classList.add('active');
    document.body.classList.add('contact-modal-open');
    
    // Focus on first input for accessibility
    setTimeout(() => {
        document.getElementById('contactName').focus();
    }, 100);
}

// ========== CLOSE CONTACT MODAL ==========
function closeContactModal() {
    contactModal.classList.remove('active');
    document.body.classList.remove('contact-modal-open');
    resetContactForm();
}

// ========== OPEN SUCCESS MODAL ==========
function openSuccessModal() {
    successModal.classList.add('active');
    document.body.classList.add('contact-modal-open');
}

// ========== CLOSE SUCCESS MODAL ==========
function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.classList.remove('contact-modal-open');
    
    // Navigate to home page after closing success modal
    setTimeout(() => {
        if (typeof navigateToPage === 'function') {
            navigateToPage('home');
        }
    }, 300);
}

// ========== RESET FORM ==========
function resetContactForm() {
    contactForm.reset();
    formMessage.style.display = 'none';
    formMessage.textContent = '';
    formMessage.className = 'form-message';
    contactForm.classList.remove('loading');
    contactSubmitBtn.disabled = false;
    contactSubmitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    
    // Hide custom subject input
    customSubjectInput.style.display = 'none';
    customSubjectInput.required = false;
}

// ========== EVENT LISTENERS ==========

// Open modal on contact link click
if (contactLink) {
    contactLink.addEventListener('click', openContactModal);
}

// Close contact modal on close button click
contactModalClose.addEventListener('click', closeContactModal);

// Close contact modal on cancel button click
contactFormCancel.addEventListener('click', closeContactModal);

// Close contact modal on backdrop click (click outside)
contactModalBackdrop.addEventListener('click', closeContactModal);

// Prevent closing when clicking inside the modal container
document.querySelector('.contact-modal-container').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close success modal
successModalClose.addEventListener('click', closeSuccessModal);
successModalBackdrop.addEventListener('click', closeSuccessModal);

// Prevent closing when clicking inside success modal
document.querySelector('.success-modal-container').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (contactModal.classList.contains('active')) {
            closeContactModal();
        }
        if (successModal.classList.contains('active')) {
            closeSuccessModal();
        }
    }
});

// ========== SUBJECT DROPDOWN HANDLING ==========

subjectSelect.addEventListener('change', (e) => {
    if (e.target.value === 'Other') {
        // Show custom subject input
        customSubjectInput.style.display = 'block';
        customSubjectInput.required = true;
        customSubjectInput.focus();
    } else {
        // Hide custom subject input
        customSubjectInput.style.display = 'none';
        customSubjectInput.required = false;
        customSubjectInput.value = '';
    }
});

// ========== CHARACTER COUNTER ==========

const messageInput = document.getElementById('contactMessage');
const charCountElement = document.querySelector('.char-count');

messageInput.addEventListener('input', () => {
    const count = messageInput.value.length;
    charCountElement.textContent = `${count} characters`;
    
    if (count < 10) {
        charCountElement.style.color = '#ea580c';
    } else if (count >= 10 && count < 50) {
        charCountElement.style.color = '#16a34a';
    } else {
        charCountElement.style.color = 'var(--text-muted)';
    }
});

// ========== REAL-TIME VALIDATION ==========

document.getElementById('contactName').addEventListener('blur', (e) => {
    validateInput(e.target);
});

document.getElementById('contactEmail').addEventListener('blur', (e) => {
    validateInput(e.target);
});

function validateInput(input) {
    if (input.value.trim() === '') {
        input.style.borderColor = '#dc2626';
    } else {
        input.style.borderColor = 'var(--border-color)';
    }
}

// ========== FORM SUBMISSION ==========

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!contactForm.checkValidity()) {
        showFormMessage('error', '❌ Please fill in all required fields correctly.');
        return;
    }
    
    // Add loading state
    contactSubmitBtn.disabled = true;
    const originalText = contactSubmitBtn.innerHTML;
    contactSubmitBtn.innerHTML = '<span style="display: inline-block;">⋯</span> Sending';
    
    try {
        // Get form data
        const formData = new FormData(contactForm);
        
        // If custom subject is provided, use it instead of the dropdown value
        if (subjectSelect.value === 'Other' && customSubjectInput.value.trim()) {
            formData.set('subject', customSubjectInput.value.trim());
        }
        
        // Get form action URL
        const formAction = contactForm.getAttribute('action');
        
        // Validate form action
        if (!formAction || formAction.includes('YOUR_FORM_ID')) {
            showFormMessage(
                'error',
                '❌ Error: Form is not configured. Please contact the administrator.'
            );
            console.error('Formspree form ID not configured');
            resetFormState(originalText);
            return;
        }
        
        // Send to Formspree
        const response = await fetch(formAction, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success - Close contact modal and show success modal
            closeContactModal();
            
            // Wait a moment before showing success modal
            setTimeout(() => {
                openSuccessModal();
            }, 300);
            
            // Store submission data (optional)
            const submissionData = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                timestamp: new Date().toISOString()
            };
            
            // Save to localStorage for future reference
            localStorage.setItem('lastContactSubmission', JSON.stringify(submissionData));
            
            // Log success (optional analytics)
            console.log('Contact form submitted successfully:', submissionData);
            
        } else {
            // Error from server
            const data = await response.json();
            showFormMessage(
                'error',
                `❌ Error: ${data.error || 'Failed to send message. Please try again.'}`
            );
            resetFormState(originalText);
        }
    } catch (error) {
        // Network or other errors
        console.error('Form submission error:', error);
        showFormMessage(
            'error',
            '❌ Network error: Unable to send message. Please check your connection and try again.'
        );
        resetFormState(originalText);
    }
});

// ========== HELPER FUNCTIONS ==========

function showFormMessage(type, message) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Scroll message into view
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

function resetFormState(originalText) {
    contactSubmitBtn.disabled = false;
    contactSubmitBtn.innerHTML = originalText;
}

// ========== FORM PERSISTENCE (DRAFT SAVING) ==========

function saveFormDraft() {
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: subjectSelect.value,
        customSubject: customSubjectInput.value,
        message: document.getElementById('contactMessage').value
    };
    localStorage.setItem('contactFormDraft', JSON.stringify(formData));
}

function restoreFormDraft() {
    const draft = localStorage.getItem('contactFormDraft');
    if (draft) {
        try {
            const formData = JSON.parse(draft);
            document.getElementById('contactName').value = formData.name || '';
            document.getElementById('contactEmail').value = formData.email || '';
            subjectSelect.value = formData.subject || '';
            
            // Trigger subject change event
            if (formData.subject === 'Other' && formData.customSubject) {
                customSubjectInput.value = formData.customSubject;
                customSubjectInput.style.display = 'block';
                customSubjectInput.required = true;
            }
            
            document.getElementById('contactMessage').value = formData.message || '';
            
            // Update character count
            if (formData.message) {
                charCountElement.textContent = `${formData.message.length} characters`;
            }
        } catch (error) {
            console.error('Error restoring form draft:', error);
        }
    }
}

// Update draft on input changes
const contactInputs = contactForm.querySelectorAll('input, textarea, select');
contactInputs.forEach(input => {
    input.addEventListener('input', saveFormDraft);
});

// Restore draft when modal opens
const originalOpenContactModal = openContactModal;
openContactModal = function(e) {
    originalOpenContactModal(e);
    restoreFormDraft();
};

// Clear draft on successful submission
const originalCloseContactModal = closeContactModal;
closeContactModal = function() {
    originalCloseContactModal();
    // Don't clear draft immediately - only clear after successful submission
};

// Clear draft when success modal is shown
const originalOpenSuccessModal = openSuccessModal;
openSuccessModal = function() {
    originalOpenSuccessModal();
    localStorage.removeItem('contactFormDraft');
};

// ========== FORM ANALYTICS (Optional) ==========

// Track when user opens the contact form
if (contactLink) {
    contactLink.addEventListener('click', () => {
        console.log('Contact form opened');
        // Uncomment if using Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'contact_form_opened', {
        //         'event_category': 'engagement',
        //         'event_label': 'Contact Form Modal'
        //     });
        // }
    });
}

// Track form submission
contactForm.addEventListener('submit', () => {
    console.log('Contact form submitted');
    // Uncomment if using Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'contact_form_submitted', {
    //         'event_category': 'engagement',
    //         'event_label': 'Contact Form Modal'
    //     });
    // }
});

// ========== AUTO-FILL USER DATA ==========

function autoFillUserData() {
    // Check if user has previously submitted the form
    const lastSubmission = localStorage.getItem('lastContactSubmission');
    if (lastSubmission) {
        try {
            const data = JSON.parse(lastSubmission);
            // Pre-fill name and email if available
            if (data.name) document.getElementById('contactName').value = data.name;
            if (data.email) document.getElementById('contactEmail').value = data.email;
        } catch (error) {
            console.error('Error loading previous submission data:', error);
        }
    }
}

// Call autofill when modal opens (if no draft exists)
const originalOpen2 = openContactModal;
openContactModal = function(e) {
    originalOpen2(e);
    const draft = localStorage.getItem('contactFormDraft');
    if (!draft) {
        autoFillUserData();
    }
};

// ========== ERROR HANDLING ==========

window.addEventListener('error', (event) => {
    if (event.message && event.message.includes('contact')) {
        console.error('Contact form error:', event.error);
    }
});

// ========== INITIALIZATION LOG ==========

console.log('%c📧 Enhanced Contact Form Initialized!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cFeatures: Subject dropdown, draft saving, success modal', 'color: #16a34a;');
console.log('%cForm Action: ' + contactForm.getAttribute('action'), 'color: #667eea;');



// ========== PROFILE PAGE FUNCTIONALITY ==========

let profileData = {
    name: 'Krishna Dighe',
    email: 'krishna@example.com',
    bio: '',
    joinedDate: 'January 2025'
};

// ========== LOAD PROFILE DATA ==========
function loadProfileData() {
    const customProfile = localStorage.getItem('userProfile');
    if (customProfile) {
        try {
            const profile = JSON.parse(customProfile);
            profileData.name = profile.name || profileData.name;
            profileData.email = profile.email || profileData.email;
            profileData.bio = profile.bio || profileData.bio;
            profileData.profilePic = profile.profilePic || null;
        } catch (error) {
            console.error('Error loading profile:', error);
        }
    }
}

// ========== RENDER PROFILE PAGE ==========
function renderProfilePage() {
    if (state.currentPage !== 'profile') return;
    
    loadProfileData();
    
    // Update profile info
    document.getElementById('profileName').textContent = profileData.name;
    document.getElementById('profileEmail').textContent = profileData.email;
    
    // Update avatar
    const avatarElement = document.getElementById('profileAvatar');
    const initialsSpan = document.getElementById('avatarInitials');
    
    const initials = profileData.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    
    if (profileData.profilePic) {
        initialsSpan.style.display = 'none';
        avatarElement.style.backgroundImage = `url('${profileData.profilePic}')`;
        avatarElement.style.backgroundSize = 'cover';
        avatarElement.style.backgroundPosition = 'center';
    } else {
        initialsSpan.style.display = 'block';
        initialsSpan.textContent = initials;
        avatarElement.style.background = 'linear-gradient(135deg, #2b42a7, #8365d5)';
        avatarElement.style.backgroundImage = 'none';
    }
    
    // Update stats
    const { analytics, streak, favorites } = state;
    document.getElementById('profileTotalQuestions').textContent = analytics.totalQuestions;
    
    const accuracy = analytics.totalQuestions > 0 
        ? Math.round((analytics.correctAnswers / analytics.totalQuestions) * 100) 
        : 0;
    document.getElementById('profileAccuracyRate').textContent = accuracy + '%';
    document.getElementById('profileStudyStreak').textContent = streak.count + ' days';
    document.getElementById('profileFavoritesCount').textContent = favorites.length;
    
    // Update streak display
    document.getElementById('profileStreakNumber').textContent = streak.count;
    
    // Render topic progress
    renderProfileTopicProgress();
    
    // Update goals
    updateProfileGoals();
    
    // Render recent activity
    renderRecentActivity();
    
    // Update achievements
    updateProfileAchievements();
}

// ========== RENDER TOPIC PROGRESS ==========
function renderProfileTopicProgress() {
    const container = document.getElementById('profileTopicProgressList');
    container.innerHTML = '';
    
    const topics = state.analytics.topicPerformance;
    
    if (Object.keys(topics).length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book-open empty-icon"></i>
                <h3>No progress yet</h3>
                <p>Start practicing to see your topic progress!</p>
            </div>
        `;
        return;
    }
    
    // Define topic icons
    const topicIcons = {
        'HTML': 'fab fa-html5',
        'CSS': 'fab fa-css3-alt',
        'JavaScript': 'fab fa-js',
        'DBMS': 'fas fa-database',
        'OS': 'fas fa-laptop-code',
        'Networking': 'fas fa-network-wired',
        'Aptitude': 'fas fa-brain',
        'HR': 'fas fa-users'
    };
    
    Object.entries(topics).forEach(([topic, data]) => {
        const percentage = Math.round((data.correct / data.total) * 100);
        const icon = topicIcons[topic] || 'fas fa-book';
        
        const item = document.createElement('div');
        item.className = 'topic-progress-item';
        item.innerHTML = `
            <div class="topic-header">
                <span class="topic-name">
                    <i class="${icon}" style="color: var(--primary-color);"></i>
                    ${topic}
                </span>
                <span class="topic-percentage">${percentage}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">
                ${data.correct} correct out of ${data.total} questions
            </p>
        `;
        container.appendChild(item);
    });
}

// ========== UPDATE PROFILE GOALS ==========
function updateProfileGoals() {
    const { analytics, streak } = state;
    
    // Goal 1: Complete 20 quizzes (assuming 10 questions per quiz)
    const quizzesCompleted = Math.floor(analytics.totalQuestions / 10);
    const quizProgress = Math.min(quizzesCompleted, 20);
    const quizPercentage = (quizProgress / 20) * 100;
    
    document.getElementById('goalQuizProgress').textContent = quizProgress;
    document.getElementById('goalQuizBar').style.width = quizPercentage + '%';
    
    // Goal 2: Master JavaScript
    const jsData = analytics.topicPerformance['JavaScript'];
    const jsProgress = jsData ? jsData.total : 0;
    const jsPercentage = (Math.min(jsProgress, 30) / 30) * 100;
    
    document.getElementById('goalJSProgress').textContent = Math.min(jsProgress, 30);
    document.getElementById('goalJSBar').style.width = jsPercentage + '%';
    
    // Goal 3: 7-Day Streak
    const streakProgress = Math.min(streak.count, 7);
    const streakPercentage = (streakProgress / 7) * 100;
    
    document.getElementById('goalStreakProgress').textContent = streakProgress;
    document.getElementById('goalStreakBar').style.width = streakPercentage + '%';
    
    const streakStatus = document.getElementById('goalStreakStatus');
    if (streakProgress >= 7) {
        streakStatus.textContent = 'Completed';
        streakStatus.className = 'goal-status active';
    } else {
        streakStatus.textContent = 'Pending';
        streakStatus.className = 'goal-status pending';
    }
}

// ========== RENDER RECENT ACTIVITY ==========
function renderRecentActivity() {
    const container = document.getElementById('profileActivityList');
    
    // Get recent activity from state
    const activities = [];
    
    // Add quiz completion activities (limited to last 5)
    if (state.analytics.totalQuestions > 0) {
        activities.push({
            icon: 'fas fa-check',
            color: 'var(--primary-color)',
            title: 'Completed Quizzes',
            desc: `Answered ${state.analytics.totalQuestions} questions total`,
            time: 'Recently'
        });
    }
    
    // Add streak activity
    if (state.streak.count > 0) {
        activities.push({
            icon: 'fas fa-fire',
            color: 'var(--warning-color)',
            title: 'Study Streak Active',
            desc: `Maintained ${state.streak.count}-day streak`,
            time: 'Today'
        });
    }
    
    // Add favorites activity
    if (state.favorites.length > 0) {
        activities.push({
            icon: 'fas fa-heart',
            color: 'var(--danger-color)',
            title: 'Saved Favorites',
            desc: `${state.favorites.length} questions bookmarked`,
            time: 'Recently'
        });
    }
    
    if (activities.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-history empty-icon"></i>
                <h3>No activity yet</h3>
                <p>Start practicing to see your activity here!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    activities.forEach(activity => {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `
            <div class="activity-icon" style="background: ${activity.color}">
                <i class="${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-desc">${activity.desc}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `;
        container.appendChild(item);
    });
}

// ========== UPDATE ACHIEVEMENTS ==========
function updateProfileAchievements() {
    const badges = document.querySelectorAll('.achievement-badge');
    const { analytics, streak, favorites } = state;
    
    const achievements = {
        firstSteps: analytics.totalQuestions > 0,
        quizMaster: analytics.totalQuestions >= 100,
        perfectionist: false, // Needs special tracking
        dedicated: streak.count >= 7,
        explorer: Object.keys(analytics.topicPerformance).length >= 8,
        collector: favorites.length >= 50
    };
    
    const achievementKeys = ['firstSteps', 'quizMaster', 'perfectionist', 'dedicated', 'explorer', 'collector'];
    
    badges.forEach((badge, index) => {
        if (achievements[achievementKeys[index]]) {
            badge.classList.remove('locked');
            badge.classList.add('unlocked');
        } else {
            badge.classList.remove('unlocked');
            badge.classList.add('locked');
        }
    });
}

// ========== OPEN EDIT MODAL ==========
function openEditModal() {
    const modal = document.getElementById('editProfileModal');
    modal.classList.add('active');
    
    // Populate form
    document.getElementById('editName').value = profileData.name;
    document.getElementById('editEmail').value = profileData.email;
    document.getElementById('editBio').value = profileData.bio;
    
    // Update initials in preview
    const initials = profileData.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    document.getElementById('profilePicInitials').textContent = initials;
    
    // Handle profile pic upload
    const profilePicInput = document.getElementById('profilePicInput');
    profilePicInput.removeEventListener('change', handleProfilePicUpload);
    profilePicInput.addEventListener('change', handleProfilePicUpload);
    
    // Load existing profile pic if available
    const preview = document.getElementById('profilePicPreview');
    if (profileData.profilePic) {
        preview.innerHTML = `<img src="${profileData.profilePic}" alt="Profile">`;
        document.getElementById('removePicBtn').style.display = 'inline-flex';
    } else {
        preview.innerHTML = `<span id="profilePicInitials">${initials}</span>`;
        document.getElementById('removePicBtn').style.display = 'none';
    }
}

// ========== CLOSE EDIT MODAL ==========
function closeEditModal() {
    const modal = document.getElementById('editProfileModal');
    modal.classList.remove('active');
}


// ========== SAVE PROFILE ==========
function saveProfile(event) {
    event.preventDefault();
    
    const name = document.getElementById('editName').value.trim();
    const email = document.getElementById('editEmail').value.trim();
    const bio = document.getElementById('editBio').value.trim();
    
    if (!name || !email) {
        alert('Name and email are required!');
        return;
    }
    
    profileData.name = name;
    profileData.email = email;
    profileData.bio = bio;
    
    // Save to localStorage (including profile pic)
    const customProfile = {
        name: name,
        email: email,
        bio: bio,
        profilePic: profileData.profilePic || null,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('userProfile', JSON.stringify(customProfile));
    
    renderProfilePage();
    closeEditModal();
    showProfileNotification('Profile updated successfully! ✅', 'success');
}

// ========== HANDLE PROFILE PICTURE UPLOAD ==========
function handleProfilePicUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        event.target.value = '';
        return;
    }
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file');
        event.target.value = '';
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const preview = document.getElementById('profilePicPreview');
        preview.innerHTML = `<img src="${e.target.result}" alt="Profile">`;
        profileData.profilePic = e.target.result;
        document.getElementById('removePicBtn').style.display = 'inline-flex';
    };
    reader.onerror = () => {
        alert('Error reading file. Please try again.');
    };
    reader.readAsDataURL(file);
}

// ========== REMOVE PROFILE PICTURE ==========
function removeProfilePic() {
    profileData.profilePic = null;
    const preview = document.getElementById('profilePicPreview');
    const initials = profileData.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    preview.innerHTML = `<span id="profilePicInitials">${initials}</span>`;
    document.getElementById('removePicBtn').style.display = 'none';
    document.getElementById('profilePicInput').value = '';
}

// ========== NOTIFICATION SYSTEM ==========
function showProfileNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success-color)' : 'var(--danger-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== INTEGRATE WITH NAVIGATION ==========
// Modify the existing navigateToPage function to render profile
const originalNavigateToPage = navigateToPage;
navigateToPage = function(pageName) {
    originalNavigateToPage(pageName);
    
    // Render profile page when navigated to
    if (pageName === 'profile') {
        setTimeout(() => {
            renderProfilePage();
        }, 100);
    }
};

// ========== AUTO-UPDATE PROFILE DATA ==========
// Update profile whenever state changes
const originalSaveToStorage = saveToStorage;
saveToStorage = function() {
    originalSaveToStorage();
    
    // Update profile if on profile page
    if (state.currentPage === 'profile') {
        renderProfilePage();
    }
};

// ========== KEYBOARD SHORTCUTS FOR PROFILE ==========
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + P to open profile (only when not in input)
    if ((e.ctrlKey || e.metaKey) && e.key === 'p' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        navigateToPage('profile');
    }
    
    // Escape to close edit modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('editProfileModal');
        if (modal && modal.classList.contains('active')) {
            closeEditModal();
        }
    }
});

// ========== INITIAL PROFILE LOAD ==========
// Load profile data when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProfileData();
    
    // Render profile if starting on profile page
    if (state.currentPage === 'profile') {
        renderProfilePage();
    }
});

console.log('%c👤 Profile System Loaded!', 'color: #2b42a7; font-size: 16px; font-weight: bold;');
console.log('%cKeyboard Shortcut: Ctrl/Cmd + P to open Profile', 'color: #7a67c8;');


// ---- Single reliable updateAnalytics() — paste exactly once at end of script.js ----
function updateAnalytics() {
    // safety: ensure analytics object exists
    state.analytics = state.analytics || { totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0, topicPerformance: {} };

    // Ensure numeric values
    const correct = Number(state.analytics.correctAnswers || 0);
    const wrong   = Number(state.analytics.wrongAnswers || 0);

    // Prefer authoritative total if available, otherwise derive from correct+wrong
    // (This avoids resetting total to 0 before storage restores it.)
    let total = Number(state.analytics.totalQuestions || 0);
    if (!total && (correct || wrong)) {
        total = correct + wrong;
        // only set if analytics.totalQuestions is missing/0 so we don't overwrite a valid saved total
        state.analytics.totalQuestions = total;
    }

    // Update DOM safely (works whether IDs appear in multiple pages or are scoped)
    const analyticsRoot = document.getElementById('analytics') || document;

    const setText = (selector, value) => {
        const el = typeof selector === 'string' ? analyticsRoot.querySelector('#' + selector) || document.getElementById(selector) : selector;
        if (el) el.textContent = value;
    };

    setText('totalQuestions', total);
    setText('correctCount', correct);
    setText('wrongCount', wrong);

    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    setText('accuracyRate', accuracy + '%');

    // Render topics progress; guard against missing container or empty data
    const topicsContainer = analyticsRoot.querySelector('#topicsProgress') || document.getElementById('topicsProgress');
    if (topicsContainer) {
        topicsContainer.innerHTML = '';
        const topicPerformance = state.analytics.topicPerformance || {};
        Object.entries(topicPerformance).forEach(([topic, data]) => {
            const tCorrect = Number((data && data.correct) || 0);
            const tTotal   = Number((data && data.total) || 0);
            const percent  = tTotal ? Math.round((tCorrect / tTotal) * 100) : 0;

            const item = document.createElement('div');
            item.className = 'topic-progress-item';
            item.innerHTML = `
                <div class="progress-header">
                    <span class="progress-topic">${topic}</span>
                    <span class="progress-count">${tCorrect}/${tTotal} (${percent}%)</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                </div>
            `;
            topicsContainer.appendChild(item);
        });
    }

    // Finally render/update the chart (renderPerformanceChart must exist)
    try {
        if (typeof renderPerformanceChart === 'function') renderPerformanceChart();
    } catch (e) {
        console.warn('renderPerformanceChart failed:', e);
    }

    // Save state (keeps storage consistent in case something changed)
    try { saveToStorage(); } catch (e) { /* ignore if saveToStorage not available at this point */ }
}
