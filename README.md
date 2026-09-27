# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Contact Form

The contact form sends messages through EmailJS from the browser. Create an EmailJS service and email template, set the template recipient to `muhammadaqib.3641@gmail.com`, and include these template variables in the email body: `{{name}}`, `{{email}}`, `{{project_type}}`, `{{budget}}`, and `{{message}}`. Set the template's Reply-To field to `{{reply_to}}`.

Copy `.env.example` to `.env.local` and fill in the service ID, template ID, and public key from the EmailJS dashboard. The public key is intended for browser use; restrict allowed domains in EmailJS and enable its abuse protections. Restart the dev server after changing environment values.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
