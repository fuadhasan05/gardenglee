**GARDENGLEE: A COMMUNITY GARDENING PLATFORM**

A comprehensive platform for gardening enthusiasts to share tips, connect with local gardeners, ask plant care questions, and participate in gardening events. GardenGlee fosters a vibrant community around shared interests such as composting, hydroponics, balcony gardening, and more.

---
## 🌐 Live Site URL

- [GardenGlee](https://gardenglee25.web.app/)

## Preview

![GardenGlee Screenshot](public/screenshot.png)

---

## 🌟 Project Purpose
The purpose of GardenGlee is to provide a collaborative space for gardeners of all levels to learn, share, and grow together. The platform encourages knowledge exchange, local networking, and community-driven gardening activities.

## 💡 Key Features
- **Responsive Design:** Fully responsive across mobile, tablet, and desktop.
- **Authentication System:** Secure login with email/password and Google authentication.
- **Tip Management:** Add, update, delete, and view gardening tips.
- **Search & Filters:** Search tips by title, filter by category or difficulty.
- **User Profiles:** Showcase your garden, achievements, and contributions.
- **Error Handling:** User-friendly error messages and loading indicators.
- **Session Management:** Secure session management with Firebase Auth.

## 🖌️ Application Pages
**Public Pages**
- **Home Page (/):** Highlights featured tips, events, and community stats.
- **Browse Tips (/tips):** View all public gardening tips with filters and search.
- **Tip Details (/tips/:id):** Detailed view of each gardening tip.

**Protected Pages**
- **My Tips (/my-tips):** Manage your submitted tips (edit, delete, view).
- **Add Tip (/add-tip):** Submit new gardening tips with images and details.
- **Profile (/profile):** View and edit your user profile and garden showcase.


## 🛠️ Technologies Used
- **Frontend:** React.js, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js 
- **Database:** MongoDB (for tips/gradeners info), Firebase Firestore (for user data)
- **Authentication:** Firebase Auth, Google Authentication
- **Deployment:** Firebase Hosting, Backend - Varcel
- **Version Control:** GitHub

## 🚀 Getting Started Locally

Follow these steps to run GardenGlee on your local machine:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/gardenglee.git
   cd gardenglee
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`.
   - Fill in your Firebase, MongoDB, and other required credentials in `.env.local`.

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Open the app in your browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

6. **(Optional) Build for production:**
   ```sh
   npm run build
   ```


