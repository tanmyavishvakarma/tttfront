Given the time limit, I chose to construct the app using socket-io since it would be more easier to create a multiplayer game with private sessions than to use browser sessions.

The functionality of a programme, in my opinion, comes before the UI/UX. As a result, rather than focusing on the game's layout and logic, I spent the majority of my time designing the board.

However, because I was a beginner with socket IO, making the app usable required a lot of effort. To understand how socket IO functions, I had to watch several videos, read numerous articles, and consult several repos.

Creating private session for players to play the game. Real-time state management of pieces, turns, and outcomes, as well as rooms and ids, were all new concepts for me.

Another issue that I faced and will be prominent is the delay or lag between steps. As the socket io and Node JS server is deployed on a free hosting web service , the request and response times take major hit.
 
To build the front end, I utilised ReactJS. Making a functional game was not a difficult effort for me because I have worked with ReactJS for a long time. In order to devote the majority of my effort to creating the game logic, I made the layout as straightforward as I could.