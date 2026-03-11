<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# 🎨 Team Pixel

<div align="center">

![ORU 2026](https://img.shields.io/badge/ORU_2026-Compétition_Officielle-8b5cf6?style=for-the-badge)
![Équipe #3](https://img.shields.io/badge/Équipe-%233-8b5cf6?style=for-the-badge)
![EGEI](https://img.shields.io/badge/EGEI-8b5cf6?style=for-the-badge)
![UCAO-UUC](https://img.shields.io/badge/UCAO--UUC-Bénin-0057A8?style=for-the-badge)

> **« La vision naît d'un PIXEL, l'innovation naît de nous. »**

</div>

---

## 🏫 Présentation

**Team Pixel** est l'une des 6 équipes participantes à l'**Olympiade de Robotique UCAO 2026 (ORU 2026)**, compétition inter-facultés organisée à l'Université Catholique de l'Afrique de l'Ouest — Unité Universitaire du Bénin.

| Informations | Détails |
|---|---|
| Compétition | Olympiade de Robotique UCAO 2026 |
| Institution | UCAO-UUC Bénin |
| Catégorie | Suivi de ligne |
| Statut | Actif |

---

##  Ressources utiles

- 📖 [Guide Technique Officiel ORU 2026](https://github.com/Olympiades-de-Robotique-UCAO-Benin/guide-technique-officiel)
- 🧠 [Ressources de formation](https://github.com/Olympiades-de-Robotique-UCAO-Benin/ressources-formations)
- 🌐 [Site officiel de la compétition](https://olympiades-de-robotique-ucao-benin.github.io)
- 🏠 [Organisation GitHub ORU](https://github.com/Olympiades-de-Robotique-UCAO-Benin)

---

## 📞 Contact

Pour toute question concernant la compétition :
📧 [ucaotech@ucaobenin.org](mailto:ucaotech@ucaobenin.org)

---

<div align="center">

*ORU 2026 — Olympiade de Robotique UCAO-UUC Bénin*

</div>
>>>>>>> 2d9dd554a7af51abea47330d6e574f072bbd1268
