# 📄 Flexume – AI-Powered Multi-Language CV Builder

**Flexume** is a smart CV-building tool that helps users design professional resumes and export them in multiple languages—powered by **AI**.  
The platform combines modern UI design with intelligent automation, making it easier than ever to create personalized CVs tailored for global opportunities.

## 🚀 Why Flexume?

In today’s competitive job market, your CV needs to stand out—**in any language**.  
Flexume is more than a template editor: it’s a **career companion** that uses AI to format, translate, and structure CVs so users can focus on what really matters—landing the job.

## 🛠️ Tech Stack

## 📂 Project Structure

```bash
flexume/
├── frontend/          # Vue.js application
├── backend/           # NestJS GraphQL API
├── ai/                # AI integration layer for translations & suggestions
├── exports/           # Generated CV files (PDF, DOCX, etc.)
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites

- **Node.js (>=16)**
- **npm** or **yarn**
- API key for the AI provider (e.g., OpenAI)

### Installation

```bash
# Clone the repo
git clone https://github.com/asharp97/flexume.git

cd flexume

# Install dependencies
npm install
# or
yarn install

# Run backend
npm run start:dev

# Run frontend
npm run dev
```

## 🎯 How It Works

1. **Design Your CV**
   Choose from modern, customizable templates.

2. **Enhance with AI**
   Get smart phrasing suggestions, tone adjustments, and structure improvements.

3. **Export in Multiple Languages**
   Generate PDFs in different languages instantly, ready for global applications.

## 🌟 Highlights

- ✨ **AI-powered resume builder** – helps craft compelling CVs
- 🌍 **Global-ready** – translate and export CVs in multiple languages
- 🎨 **Design-first approach** – resumes that look professional and modern
- 🧑‍💻 **Scalable architecture** – built with best practices in backend + frontend

## 🔮 Future Improvements

- 📊 **LinkedIn / GitHub import** – build a CV automatically from existing profiles
- 🏢 **Job-specific tailoring** – AI-generated CVs optimized per job description
- ☁️ **Cloud storage & sharing** – save CVs online and share via unique links
- 🖼️ **More templates** – expanding design options

## 📜 License

This project is licensed under the **MIT License**.

## ✨ Author

Designed & developed by **Ali Elsayed**
🔗 [GitHub: asharp97](https://github.com/asharp97)

```
# 📄 Flexum – AI-Powered Multi-Language CV Builder

**Flexum** is a modern, AI-assisted CV builder that enables users to design, preview, and export professional resumes in multiple languages. Built with Nuxt 3 (Vue.js), it features a clean UI, customizable templates, and instant PDF export—all in a single, unified app.

---

## 🚀 Features

- 🌍 **Multi-language export** – Generate CVs in English, Turkish, and Arabic
- 🤖 **AI-ready architecture** – Designed for future integration with AI/LLM APIs for smart phrasing and translation
- 🎨 **Custom design** – Modern, responsive layouts with SCSS styling
- ⚡ **Instant PDF export** – Print or save your CV as a PDF with one click
- 🧑‍💻 **Component-based** – Easily extend or modify sections (skills, experience, education, etc.)

---

## 🛠️ Tech Stack

- **Frontend**: Nuxt 3 (Vue.js), TypeScript, SCSS
- **PDF Export**: Native browser print, html2pdf.js, Puppeteer (for server-side PDF)
- **AI Integration**: (Planned) OpenAI/LLM APIs
- **No backend required for basic use** (API endpoints can be added for advanced features)

---

## 📂 Project Structure

```

Flexum-
├── app.vue # Main app entry
├── content.js # CV content (profile, skills, experience, etc.)
├── components/ # Vue components (Header, SectionTitle, etc.)
├── pages/ # Nuxt pages (index.vue = main CV page)
├── assets/styles/ # SCSS styles
├── composables/ # Utility functions (e.g., printPdf.js)
├── server/api/ # (Optional) API endpoints for PDF export, AI, etc.
├── cvs/ # Exported CVs (PDF)
├── public/ # Static assets
├── nuxt.config.ts # Nuxt configuration
└── package.json # Project metadata & scripts

````

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js (>=16)**
- **pnpm** (recommended), **npm**, or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/asharp97/flexume.git
cd flexume

# Install dependencies
pnpm install
# or
npm install
# or
yarn install

# Start the development server
pnpm dev
# or
npm run dev
# or
yarn dev
````

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🎯 Usage

1. **Edit your CV content**
   - Update `content.js` with your profile, skills, experience, etc.
2. **Preview your CV**
   - The main page (`/`) shows a live preview with all sections.
3. **Export as PDF**
   - Click the export/print button to save your CV as a PDF in any supported language.

---

## 🌟 Customization

- **Add/Remove Sections**: Edit `components/` and `content.js` to change CV structure.
- **Change Styles**: Modify SCSS in `assets/styles/design.scss`.
- **Add Languages**: Extend the language array in `content.js` and update UI as needed.
- **Integrate AI**: (Planned) Add API keys and endpoints for AI-powered suggestions and translation.

---

## 🔮 Roadmap

- [ ] AI-powered phrasing and translation (OpenAI/LLM integration)
- [ ] More design templates
- [ ] Import from LinkedIn/GitHub
- [ ] Cloud storage & sharing

---

## 📜 License

MIT License

---

## ✨ Author

Designed & developed by **Ali Elsayed**
[GitHub: asharp97](https://github.com/asharp97)
