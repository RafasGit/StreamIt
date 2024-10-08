 # [streamit](https://stream-it-lake.vercel.app/)

## Table Of Content

   - [Features](#Features)
   - [Technologies](#Stack-and-Technologies-Used)
   - [Getting started](#Getting-Started)
   - [Contributing](#Contributing)
   - [License](#License)
   - [Contributors](#Contributors)


 ## Features
![Image1](https://github.com/RafasGit/StreamIt/blob/main/public/streamithome.png)

 A Live-streaming application with RTMP and WHIP protocols integrated. Streamit enables you to provide live video to your audience, along with realtime communication features enabling you to connect with your audience. 

- 🎛️ Streamer / Creator Dashboard: Access your stream keys, edit your chat settings as well as manage your followers community through one convenient dashboard.
- 🌐 Generating Ingress and connect your Next.js application to either OBS studio or your preferred streaming tool: Simplify your streaming setup with easy ingress generation and integration with streaming applications.
- 👥 Following System: Build a community with a robust following system.
- 🤝 Stream and followers recommendation tabs: Discover users you might want to follow and live streams you may want to tune in to.
- 🚫 Blocking System: Maintain a positive environment by blocking users who will be prohibited from viewing your stream or appearing in your recommendations.
- 🚦 Status tracking and syncing using Livekit webhooks: Display current offline or live statuses with real-time data syncinng. 
- 💬 Real-time Chat Using Sockets: Engage with your audience in realtime through live chatrooms.
- 🎨 Unique Color for Each Viewer in Chat: Personalize the chat experience with unique colors for each viewer name.
- 🔽 Collapsible Layout: Customize your viewing experience with hideable sidebars and chat, theatre mode, and more.
- 🔐 Authentication provided by Clerk: Secure data access and user authentication.



 ## Stack and Technologies Used
   - Front-End: NextJs, Zustand, 🎨TailwindCSS and Shadcn UI, 📹Livekit-react components.
   - Back-End: 🟦 TypeScript, Axios, 📡livekit-server and svix . 
   - Database: 💾 PostgreSQL, Neon db and 🗄️ Prisma ORM

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
bun run dev
# or
yarn dev
# or
pnpm dev
# or
npm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To generate a stream, navigate to the [keys tab in the creators dashboard](https://github.com/RafasGit/StreamIt/tree/main/app/(dashboard)/u/%5Busername%5D/keys) and generate a connection. Copy both the server url and stream key and paste them in the stream settings of your preferred streaming application.

![Image1](https://github.com/RafasGit/StreamIt/blob/main/public/connectstream.png)


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contributing

We welcome contributions from the community to enhance DecisionHub. Feel free to submit bug reports, feature requests, or pull requests through the GitHub repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Contributors

For any questions or inquiries, please reach out to the development team at [streamit](mailto:joshraphael424@gmail.com)
  
   - GitHub: [@github](https://github.com/RafasGit)
   - Twitter: [@twitter](https://x.com/rafa_codes22)
   - LinkedIn: [LinkedIn](https://www.linkedin.com/in/joshua-ng-ang-a-13158120a)
 
 Enjoy using streamit!
