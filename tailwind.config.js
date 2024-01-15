/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Logo': "url('/img/Logo.svg')",
        'hire': "url('/img/hire.svg')",
        'lead': "url('/img/lead.svg')",
        'train': "url('/img/train.svg')",
        'community': "url('/img/community.svg')",
        'search': "url('/img/search.svg')",
        'Ellipse': "url('/img/Ellipse.svg')",
        'fram-job': "url('/img/fram-job.png')",
        "ic_avatar": "url('/img/ic_avatar.png')",
        "ic_submit": "url('/img/ic_submit.png')"
      }
    },
  },
  plugins: [],
}

