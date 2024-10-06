
# Blog App

A simple full-stack blog application built with **Node.js**, **Express**, **EJS**, **PostgreSQL**, and **Bootstrap**. This app allows users to create, edit, and delete blog posts, with all post details displayed directly on the home page.

## Features

- Create, read, update, and delete (CRUD) blog posts.
- Blog posts are stored in a PostgreSQL database.
- Blog posts are displayed with their full content on the homepage.
- Includes **About** and **Contact** pages.
<!-- - Form submissions on the Contact page can be sent via email (using Nodemailer). -->

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js.
- **EJS**: Embedded JavaScript templating engine for server-side rendering.
- **PostgreSQL**: Relational database used to store blog posts.
- **Bootstrap**: Frontend CSS framework for styling.
<!-- - **Nodemailer**: (Optional) Send email via the Contact page form. -->

## Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/your-username/blog-app.git
   cd blog-app
   \`\`\`

2. Install the dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:

   Create a \`.env\` file in the root of the project with the following variables:

   \`\`\`bash
   PORT=3000
   DATABASE_URL=postgresql://username:password@localhost:5432/blogdb
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   \`\`\`

4. Set up PostgreSQL database:

   - Create a PostgreSQL database (e.g., \`blogdb\`).
   - Update the connection string in \`.env\` with your PostgreSQL credentials.

5. Run database migrations to set up the blog posts table (if using migrations).

6. Start the app:

   \`\`\`bash
   npm start
   \`\`\`

   The app should now be running at \`http://localhost:3000\`.

## Usage

1. **Homepage**: Displays all blog posts with their full content.

2. **Create a Blog Post**: Click on the "Create Post" button to add a new post.

3. **Edit a Post**: Click on the "Update" button next to a post to update it.

4. **Delete a Post**: Click on the "Delete" button next to a post to remove it.

5. **About Page**: Learn more about the purpose of the blog.

6. **Contact Page**: Users can submit a form to contact the blog owner.

## Routes

- **GET /**: Displays all blog posts.
- **GET /posts/new**: Shows the form to create a new blog post.
- **POST /posts/new**: Submits a new blog post.
- **GET /posts/update/:id**: Shows the form to edit a blog post.
- **DELETE /posts/delete/:id**: Deletes a blog post.
- **GET /about**: Displays the About page.
- **GET /contact**: Displays the Contact page.
- **POST /contact**: Handles form submissions from the Contact page and sends an email.

## Email Setup (Optional)

To enable email sending via the Contact page, configure the following in your \`.env\` file:

\`\`\`bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
\`\`\`

If using **Gmail**, ensure you create an **App Password** (if two-factor authentication is enabled) or use your regular password otherwise.

## Future Features

- User authentication and authorization.
- Comments section for each blog post.
- Pagination for blog posts.
- Image uploads for blog posts.

## License

This project is licensed under the MIT License.
