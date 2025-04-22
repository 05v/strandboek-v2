# Strandboek V2 - Reddingsbrigade Zandvoort

Een modern informatieplatform voor leden van de Reddingsbrigade Zandvoort, gebouwd met Next.js.

## Functionaliteiten

- Moderne, responsieve gebruikersinterface
- Snelle laadtijden door statische pagina's en optimalisatie
- Consistent ontwerp met gedeelde header en footer
- Blog-achtige structuur voor de informatiepagina
- OOP-principes voor JavaScript-organisatie
- Goed georganiseerde CSS-structuur

## Technologieën

- **Frontend Framework**: Next.js 14 met TypeScript
- **Styling**: CSS modules en variabelen
- **Icons**: Font Awesome 6
- **Deployment**: Vercel of statische hosting

## Ontwikkeling

### Vereisten

- Node.js 18+ en npm

### Installatie

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev
```

### Bouwen voor productie

```bash
# Bouw de productie-versie
npm run build

# Draai de productieversie lokaal
npm run start
```

## Projectstructuur

```
strandboek-v2/
├── app/                   # Next.js app folder
│   ├── components/        # Herbruikbare UI-componenten
│   ├── layouts/           # Layout componenten
│   ├── styles/            # CSS-bestanden
│   │   ├── components/    # Component-specifieke stijlen
│   │   ├── layouts/       # Layout-specifieke stijlen
│   │   ├── pages/         # Pagina-specifieke stijlen
│   │   └── globals.css    # Globale stijlen en variabelen
│   └── utils/             # Hulpfuncties en utilities
├── public/                # Statische bestanden
└── README.md              # Project documentatie
```

## Licentie

Alle rechten voorbehouden © Reddingsbrigade Zandvoort 