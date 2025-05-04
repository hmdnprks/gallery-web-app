# 🖼️ Art Gallery App (Frontend Technical Test - H1 2025)

This is a frontend image gallery application built with **Next.js**, using the [Art Institute of Chicago API](https://api.artic.edu/docs/). The project follows **Clean Architecture** principles, separating domain logic, data handling, and UI layers for maintainability and scalability.

## 🚀 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State/Fetching**: React Query (TanStack Query)
- **Architecture**: Clean Architecture + Atomic Design

## 📁 Project Structure

src/
├── app/ # Pages & routing (Next.js App Router)
├── core/ # Domain logic (entities, usecases, repositories)
├── data/ # API & repository implementations
├── presentation/ # UI components, atomic design, custom hooks
│ ├── atomic/ # Atoms & molecules (Button, ImageCard, etc.)
│ ├── ui/ # Composite UI (GalleryGrid, ArtworkInfo)
│ ├── features/ # Logic-aware components (Gallery, SavedList)
│ └── hooks/ # Custom hooks for data fetching and state

## 🧩 Features

- Browse artworks with pagination.
- View full artwork details.
- Save favorite artworks to local storage.
- View and remove saved artworks (persistent after reload).

## 🔧 Getting Started

### 1. Install Dependencies

```bash
yarn install
# or
npm install
```

### 2. Run Development Server

```bash
yarn install
# or
npm install
```

App will be running at http://localhost:3000.

## 📦 Build for Production

```bash
# or
yarn build && yarn start
# or
npm run build && npm start
```

## 📑 API Reference

[Art Institute of Chicago API](https://api.artic.edu/docs/)

## 📄 User Guide

A user guide in PDF format is included in the /docs folder.

⸻

© 2025 – Built for technical assessment purposes.
