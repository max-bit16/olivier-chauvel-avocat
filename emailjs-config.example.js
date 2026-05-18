// EmailJS configuration — copy this file to emailjs-config.js and fill in your keys.
// emailjs-config.js is in .gitignore — never commit live keys.
//
// 1. Create account at https://www.emailjs.com/
// 2. Add a Gmail service → copy the Service ID
// 3. Create a template (use template variables: {{from_name}}, {{reply_to}},
//    {{telephone}}, {{domaine}}, {{message}}) → copy the Template ID
// 4. Account → API Keys → copy the Public Key
// 5. Add the 3 values in Vercel dashboard → Settings → Environment Variables

window.EMAILJS_CONFIG = {
  serviceId:  'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey:  'YOUR_PUBLIC_KEY',
};
