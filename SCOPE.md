## Practice Playlist

#### Customer ACs
- A user can `add` and `remove` songs from the playlist (Implemented)
- A user can `reorder` songs in the playlist
- A user can view the playlist from the session view (Implemented)
- The next song will start automatically playing when the current song is finished (if AUTO turned ON)
- The user will be prompted to replay or play the next song when the current song is finished (if AUTO turned OFF)
- The user is able to share their playlist on social media
- The user is able to disable sharing of their playlist

#### Data & Insights ACs
- When a song is `removed` from the playlist, a feedback form with a list of reasons
- When a song is `added` or `removed` from the playlist, an event is sent to our analytic system

#### Marketing ACs
- When a playlist share is created, send an event to our analytic system
- Share links are deep linked to the App, depending on what system the user is on (Mobile, Desktop)
- Share links contain UTM values for tracking and attribution in our analytic system (Google Analytics)

### Tech

The focus will primarily be on the UI/UX for this exercise.

- React App using the NextJS framework with built-in typescript, bundling, routing and easy hosting on Vercel
- Component Library used is Chakra UI for the building primary component building blocks and theming
- Forms would have used react-hook-form and yup for validation rules
- Cypress for E2E testing
