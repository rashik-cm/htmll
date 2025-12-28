
import { Module } from './types';

export const APP_NAME = "HTML Master Academy";
export const SUBSCRIPTION_PRICE = "₹2/month";

export const HTML_MODULES: Module[] = [
  {
    id: 'foundations',
    title: '1. Foundations',
    lessons: [
      {
        id: 'f-1',
        title: 'What is HTML?',
        description: 'The skeleton of the web.',
        content: 'HTML (HyperText Markup Language) provides the structure for web pages. It uses "tags" to tell the browser what content is (like a heading or a paragraph).',
        initialCode: '<h1>Welcome to HTML</h1>\n<p>HTML is the foundation of every website.</p>',
        isPremium: false
      },
      {
        id: 'f-2',
        title: 'Document Skeleton',
        description: 'The essential boilerplate.',
        content: 'Every HTML file needs a specific structure: <!DOCTYPE html>, <html>, <head>, and <body>.',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Site</title>\n</head>\n<body>\n  <h1>Inside the Body</h1>\n</body>\n</html>',
        isPremium: false
      },
      {
        id: 'f-3',
        title: 'The Head Element',
        description: 'Hidden but powerful.',
        content: 'The <head> contains metadata about the page, like the title, character set, and links to CSS files.',
        initialCode: '<head>\n  <meta charset="UTF-8">\n  <title>The title appears in the browser tab!</title>\n</head>',
        isPremium: false
      },
      {
        id: 'f-4',
        title: 'Headings (h1-h6)',
        description: 'Hierarchy of content.',
        content: 'HTML has six levels of headings. <h1> is the most important, <h6> is the least.',
        initialCode: '<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>',
        isPremium: false
      },
      {
        id: 'f-5',
        title: 'Paragraphs (p)',
        description: 'Writing blocks of text.',
        content: 'The <p> tag is used for blocks of text. Browsers automatically add some space before and after each paragraph.',
        initialCode: '<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>',
        isPremium: false
      }
    ]
  },
  {
    id: 'text-mastery',
    title: '2. Text Mastery',
    lessons: [
      {
        id: 'tm-1',
        title: 'Bold & Strong',
        description: 'Emphasizing text.',
        content: 'Use <b> for visual bolding and <strong> for semantic importance.',
        initialCode: '<p>This is <b>bold</b>. This is <strong>important!</strong></p>',
        isPremium: false
      },
      {
        id: 'tm-2',
        title: 'Italic & Emphasis',
        description: 'Subtle stress.',
        content: 'Use <i> for visual italics and <em> for semantic emphasis.',
        initialCode: '<p>This is <i>italic</i>. This is <em>emphasized</em>.</p>',
        isPremium: false
      },
      {
        id: 'tm-3',
        title: 'Underlining (u)',
        description: 'Visual underline.',
        content: 'The <u> tag underlines text. Use sparingly to avoid confusion with links.',
        initialCode: '<p>This is <u>underlined</u>.</p>',
        isPremium: false
      },
      {
        id: 'tm-4',
        title: 'Line Breaks (br)',
        description: 'Force a new line.',
        content: 'The <br> tag is an "empty" tag that creates a line break without starting a new paragraph.',
        initialCode: '<p>Line one<br>Line two<br>Line three</p>',
        isPremium: false
      },
      {
        id: 'tm-5',
        title: 'Horizontal Rules (hr)',
        description: 'Section breaks.',
        content: 'The <hr> tag creates a horizontal line, usually representing a thematic break.',
        initialCode: '<h2>Section 1</h2>\n<hr>\n<h2>Section 2</h2>',
        isPremium: false
      },
      {
        id: 'tm-6',
        title: 'Comments',
        description: 'Notes for developers.',
        content: 'Comments are ignored by browsers. Format: <!-- comment -->',
        initialCode: '<!-- This won\'t show up in the browser -->\n<p>Visible content.</p>',
        isPremium: true
      },
      {
        id: 'tm-7',
        title: 'Subscript & Superscript',
        description: 'Chemicals and Math.',
        content: 'Use <sub> for subscript (H2O) and <sup> for superscript (X2).',
        initialCode: '<p>H<sub>2</sub>O</p>\n<p>E = mc<sup>2</sup></p>',
        isPremium: true
      },
      {
        id: 'tm-8',
        title: 'Deleted & Inserted',
        description: 'Tracking changes.',
        content: 'The <del> tag represents deleted text, and <ins> represents inserted text.',
        initialCode: '<p>The price is <del>₹10</del> <ins>₹2</ins>!</p>',
        isPremium: true
      },
      {
        id: 'tm-9',
        title: 'Blockquotes',
        description: 'Long citations.',
        content: 'The <blockquote> tag defines a section that is quoted from another source.',
        initialCode: '<blockquote>\n  For over 50 years, the web has changed the world.\n</blockquote>',
        isPremium: true
      },
      {
        id: 'tm-10',
        title: 'Small Text',
        description: 'Fine print.',
        content: 'The <small> tag makes text one size smaller, often used for legal disclaimers.',
        initialCode: '<p>Regular text.</p>\n<p><small>Copyright 2024</small></p>',
        isPremium: true
      }
    ]
  },
  {
    id: 'links-lists',
    title: '3. Lists & Links',
    lessons: [
      {
        id: 'll-1',
        title: 'Unordered Lists',
        description: 'Bullet points.',
        content: 'Use <ul> for lists where the order doesn\'t matter.',
        initialCode: '<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>',
        isPremium: true
      },
      {
        id: 'll-2',
        title: 'Ordered Lists',
        description: 'Numbered lists.',
        content: 'Use <ol> for lists that require numerical order.',
        initialCode: '<ol>\n  <li>Wake up</li>\n  <li>Code</li>\n</ol>',
        isPremium: true
      },
      {
        id: 'll-3',
        title: 'Description Lists',
        description: 'Terms and definitions.',
        content: 'Uses <dl>, <dt> (term), and <dd> (description).',
        initialCode: '<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>',
        isPremium: true
      },
      {
        id: 'll-4',
        title: 'Hyperlinks Basics',
        description: 'Connecting pages.',
        content: 'The <a> (anchor) tag with "href" creates a link.',
        initialCode: '<a href="https://google.com">Go to Google</a>',
        isPremium: true
      },
      {
        id: 'll-5',
        title: 'Opening in New Tab',
        description: 'The target attribute.',
        content: 'Use target="_blank" to open a link in a new window/tab.',
        initialCode: '<a href="https://google.com" target="_blank">Open in new tab</a>',
        isPremium: true
      },
      {
        id: 'll-6',
        title: 'Email Links',
        description: 'Contact triggers.',
        content: 'Use mailto: in the href to open the user\'s email client.',
        initialCode: '<a href="mailto:support@example.com">Email Us</a>',
        isPremium: true
      },
      {
        id: 'll-7',
        title: 'Internal Links',
        description: 'Jumping within a page.',
        content: 'Link to an element using its "id" with a # prefix.',
        initialCode: '<a href="#footer">Jump to Footer</a>\n<div style="height: 1000px"></div>\n<p id="footer">The Footer</p>',
        isPremium: true
      },
      {
        id: 'll-8',
        title: 'Image Links',
        description: 'Clickable images.',
        content: 'Wrap an <img> tag inside an <a> tag.',
        initialCode: '<a href="https://google.com">\n  <img src="https://via.placeholder.com/50" alt="Logo">\n</a>',
        isPremium: true
      }
    ]
  },
  {
    id: 'multimedia',
    title: '4. Multimedia',
    lessons: [
      {
        id: 'm-1',
        title: 'Images (img)',
        description: 'Visual content.',
        content: 'The <img> tag needs a "src" (source) and "alt" (alternative text).',
        initialCode: '<img src="https://picsum.photos/200" alt="Random Image">',
        isPremium: true
      },
      {
        id: 'm-2',
        title: 'Image Sizing',
        description: 'Controlling dimensions.',
        content: 'Use width and height attributes or CSS.',
        initialCode: '<img src="https://picsum.photos/200" width="100" height="100">',
        isPremium: true
      },
      {
        id: 'm-3',
        title: 'The Figure Element',
        description: 'Images with captions.',
        content: 'Use <figure> and <figcaption> for better semantics.',
        initialCode: '<figure>\n  <img src="https://picsum.photos/200" alt="Landscape">\n  <figcaption>A beautiful view.</figcaption>\n</figure>',
        isPremium: true
      },
      {
        id: 'm-4',
        title: 'Video Element',
        description: 'Native video player.',
        content: 'The <video> tag supports controls, autoplay, and loop.',
        initialCode: '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n  Browser not supported.\n</video>',
        isPremium: true
      },
      {
        id: 'm-5',
        title: 'Audio Element',
        description: 'Native music player.',
        content: 'The <audio> tag lets you play sound files.',
        initialCode: '<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>',
        isPremium: true
      },
      {
        id: 'm-6',
        title: 'IFrames',
        description: 'Embedding websites.',
        content: 'The <iframe> tag displays a webpage within a webpage.',
        initialCode: '<iframe src="https://example.com" width="100%" height="300"></iframe>',
        isPremium: true
      },
      {
        id: 'm-7',
        title: 'Favicons',
        description: 'Browser tab icons.',
        content: 'Placed in the <head>, favicons represent your site icon.',
        initialCode: '<link rel="icon" type="image/x-icon" href="/favicon.ico">',
        isPremium: true
      }
    ]
  },
  {
    id: 'tables',
    title: '5. Tables',
    lessons: [
      {
        id: 't-1',
        title: 'Basic Tables',
        description: 'Rows and columns.',
        content: 'Uses <table>, <tr> (row), and <td> (data cell).',
        initialCode: '<table>\n  <tr><td>A1</td><td>B1</td></tr>\n</table>',
        isPremium: true
      },
      {
        id: 't-2',
        title: 'Table Headers',
        description: 'Bold label cells.',
        content: 'Use <th> instead of <td> for header cells.',
        initialCode: '<table>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Joe</td><td>25</td></tr>\n</table>',
        isPremium: true
      },
      {
        id: 't-3',
        title: 'Table Captions',
        description: 'Titles for tables.',
        content: 'The <caption> tag provides a heading for the entire table.',
        initialCode: '<table>\n  <caption>User Stats</caption>\n  <tr><th>Points</th></tr>\n</table>',
        isPremium: true
      },
      {
        id: 't-4',
        title: 'Colspan',
        description: 'Merging columns.',
        content: 'The colspan attribute makes a cell span multiple columns.',
        initialCode: '<table>\n  <tr><th colspan="2">Full Width</th></tr>\n  <tr><td>A</td><td>B</td></tr>\n</table>',
        isPremium: true
      },
      {
        id: 't-5',
        title: 'Table Structure',
        description: 'Thead, Tbody, Tfoot.',
        content: 'Organize your table semantically using these three parts.',
        initialCode: '<table>\n  <thead><tr><th>Header</th></tr></thead>\n  <tbody><tr><td>Data</td></tr></tbody>\n  <tfoot><tr><td>Footer</td></tr></tfoot>\n</table>',
        isPremium: true
      }
    ]
  },
  {
    id: 'forms',
    title: '6. Interactive Forms',
    lessons: [
      {
        id: 'fo-1',
        title: 'Form Basics',
        description: 'The container.',
        content: 'The <form> element wraps all interactive controls.',
        initialCode: '<form action="/submit">\n  <!-- Inputs go here -->\n</form>',
        isPremium: true
      },
      {
        id: 'fo-2',
        title: 'Text Inputs',
        description: 'Collecting text.',
        content: 'The <input type="text"> is the most common input.',
        initialCode: '<input type="text" placeholder="Your name">',
        isPremium: true
      },
      {
        id: 'fo-3',
        title: 'Labels',
        description: 'Accessibility and UX.',
        content: 'Always link labels to inputs using the "for" and "id" attributes.',
        initialCode: '<label for="name">Name:</label>\n<input id="name" type="text">',
        isPremium: true
      },
      {
        id: 'fo-4',
        title: 'Password & Email',
        description: 'Special input types.',
        content: 'Use type="password" to hide characters and type="email" for validation.',
        initialCode: '<input type="email" placeholder="Email">\n<input type="password" placeholder="Pass">',
        isPremium: true
      },
      {
        id: 'fo-5',
        title: 'Radio Buttons',
        description: 'Single choice.',
        content: 'Inputs of type="radio" with the same name allow only one selection.',
        initialCode: '<input type="radio" name="g" value="1"> Male\n<input type="radio" name="g" value="2"> Female',
        isPremium: true
      },
      {
        id: 'fo-6',
        title: 'Checkboxes',
        description: 'Multiple choice.',
        content: 'Inputs of type="checkbox" allow multiple selections.',
        initialCode: '<input type="checkbox"> Agree to terms',
        isPremium: true
      },
      {
        id: 'fo-7',
        title: 'Select Dropdowns',
        description: 'Pick lists.',
        content: 'The <select> and <option> tags create a dropdown.',
        initialCode: '<select>\n  <option>India</option>\n  <option>USA</option>\n</select>',
        isPremium: true
      },
      {
        id: 'fo-8',
        title: 'Textarea',
        description: 'Multi-line text.',
        content: 'The <textarea> tag allows for long-form text input.',
        initialCode: '<textarea rows="4" cols="50">Enter message...</textarea>',
        isPremium: true
      },
      {
        id: 'fo-9',
        title: 'Fieldset & Legend',
        description: 'Grouping inputs.',
        content: 'Use <fieldset> to group related inputs and <legend> for a title.',
        initialCode: '<fieldset>\n  <legend>Personal Info</legend>\n  <input type="text">\n</fieldset>',
        isPremium: true
      },
      {
        id: 'fo-10',
        title: 'Submit Buttons',
        description: 'Sending the data.',
        content: 'Use <button type="submit"> to send the form data.',
        initialCode: '<button type="submit">Send Form</button>',
        isPremium: true
      }
    ]
  },
  {
    id: 'semantics',
    title: '7. Advanced Semantics',
    lessons: [
      {
        id: 's-1',
        title: 'Header & Footer',
        description: 'Top and bottom.',
        content: 'Semantic tags for the top and bottom of a page or section.',
        initialCode: '<header>Logo & Nav</header>\n<footer>Contact info</footer>',
        isPremium: true
      },
      {
        id: 's-2',
        title: 'Main & Section',
        description: 'Main content.',
        content: 'The <main> tag holds unique page content; <section> groups related info.',
        initialCode: '<main>\n  <section>About Us</section>\n</main>',
        isPremium: true
      },
      {
        id: 's-3',
        title: 'Article & Aside',
        description: 'Stories and sidebars.',
        content: 'Use <article> for self-contained pieces and <aside> for secondary info.',
        initialCode: '<article>Breaking News</article>\n<aside>Ads here</aside>',
        isPremium: true
      },
      {
        id: 's-4',
        title: 'Nav Element',
        description: 'Navigation links.',
        content: 'The <nav> tag helps search engines identify navigation menus.',
        initialCode: '<nav>\n  <a href="/">Home</a> | <a href="/blog">Blog</a>\n</nav>',
        isPremium: true
      },
      {
        id: 's-5',
        title: 'Details & Summary',
        description: 'Accordions.',
        content: 'Create a native "click to reveal" UI without JavaScript.',
        initialCode: '<details>\n  <summary>Click for more info</summary>\n  <p>Here is the secret content!</p>\n</details>',
        isPremium: true
      },
      {
        id: 's-6',
        title: 'Time Tag',
        description: 'Machine-readable dates.',
        content: 'The <time> tag helps search engines understand dates.',
        initialCode: '<p>Posted on <time datetime="2024-05-20">May 20</time></p>',
        isPremium: true
      },
      {
        id: 's-7',
        title: 'Address Tag',
        description: 'Contact info.',
        content: 'The <address> tag provides contact information for a person or organization.',
        initialCode: '<address>\n  Box 564, Disneyland<br>\n  USA\n</address>',
        isPremium: true
      },
      {
        id: 's-8',
        title: 'HTML Entities',
        description: 'Special characters.',
        content: 'Use codes for characters like &copy; (copyright) or &lt; (less than).',
        initialCode: '<p>Copyright &copy; 2024</p>\n<p>2 &lt; 5</p>',
        isPremium: true
      }
    ]
  }
];
