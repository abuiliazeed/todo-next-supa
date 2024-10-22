# TaskMaster

TaskMaster is a modern, responsive task management application built with Next.js, TypeScript, and Supabase. It allows users to create, manage, and track their tasks efficiently.

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete tasks
- Mark tasks as complete or incomplete
- Responsive design for mobile and desktop
- Real-time updates using Supabase

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building the user interface
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Supabase](https://supabase.io/) - Open source Firebase alternative for backend and authentication
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/taskmaster.git
   cd taskmaster
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Supabase URL and anon key:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - React components
- `src/utils/` - Utility functions and Supabase client
- `public/` - Static assets

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com/), the platform created by the creators of Next.js. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
