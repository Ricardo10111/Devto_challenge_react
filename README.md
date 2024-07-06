# My Dev Community Clone

This project is a clone of a social media platform for developers, inspired by DEV Community. It allows users to create accounts, log in, create and view posts, react with emojis, and see reaction counts in real-time.

## Features

- **Create and View Posts:** Users can create new posts and view existing ones with images, titles, and hashtags.
- **Emoji Reactions:** Users can react to posts with emojis. The reaction counts are updated in real-time and displayed alongside the posts.
- **User Authentication:** Users can create accounts and log in to access personalized features.
- **Responsive Design:** Mobile-first design that adjusts to different screen sizes using Tailwind CSS.
- **User Interface:** Clean, intuitive interface designed for an optimal user experience.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or later)
- npm (version 6 or later) or yarn (version 1.22 or later)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/Devto_challenge_react.git
   cd Devto_challenge_react

2. **Install dependencies:**

```sh
npm install
# or
pnpm install
```
## Running the Project

### To start the development server:

```sh
npm run dev
# or
pnpm dev
```

#### Open http://localhost:3000 with your browser to see the application.
#### If you want to open the project in the web the URL is https://devto.lorr.lat

##
## Usage

### Creating an Account

Navigate to the “Sign Up” page, fill in the required details (name, username, email, password, profile picture), and click “Create Account” to register.

### Logging In

Navigate to the “Login” page, enter your email and password, and click “Login” to access your account.

### Creating Posts

Navigate to the “Create Post” page, fill in the post details including title, image, and hashtags, and click “Submit” to create a new post.

### Viewing Posts

The homepage displays a list of posts. Click on any post to view its details, including images, title, hashtags, and the author’s information.

### Reacting with Emojis

Hover over the heart icon to reveal the emoji reaction menu. Click on any emoji to react to the post. The reaction count will update immediately and be reflected on the post.

##
## Project Structure

```sh
/components
  ├── IdxAsideL.js       # Sidebar with reaction buttons
  ├── CenterPost.js      # Main post content
  ├── MainComponent.js   # Main component managing state
/pages
  ├── index.js           # Home page
  ├── login.js           # Login page
  ├── signup.js          # Sign Up page
  └── _app.js            # Custom App component for Next.js
/styles
  ├── globals.css        # Global styles
  └── tailwind.css       # Tailwind CSS configuration

  ```
 ##

## API Integration

#### This project integrates with an external API to fetch post data. 