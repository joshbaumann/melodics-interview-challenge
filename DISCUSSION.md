The demo can be viewed here: https://rhythm-demo.vercel.app/ \
CI runs can be viewed here: https://github.com/joshbaumann/rhythm-demo/actions \
Code is here: https://github.com/joshbaumann/rhythm-demo

Only implemented the most basic of the scope (add/delete/view) to layout the app structure and direction.

My vision for the remaining scope for sharing, playlist management is inspired to be like Spotify's playlist design.
- 3 dot menus
- Playlist menu, options to create sharable links and enable/disable public sharing
- Playlist lesson menu, options to add and remove the lesson from the list

Vision for the playlist on the session page drawer, inspiration taken from youtube's playlist design
- View current playlist in context of session
- Controls to easily skip and change lesson
- Loop the playlist when it gets to the end

This was my first time using the Chakra UI component Library, was really easy to get started with and it's really feature packed.
Took a little time to get comfortable with their theming configuration. I'm fairly happy with the overall project structure to scale out,
but can easily adapt to change as the app grows in size.

This is my second time using Next.js and it is has been great to use here as well, it is fairly easy to understand and use (documentation is great
and helps with that). The builtin Server-side Rendering is an amazing feature to have by default.

I would improve the E2E Cypress tests by implementing Gherkin for BDD testing.
