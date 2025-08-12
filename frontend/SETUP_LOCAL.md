# Running the Project Locally

Follow these steps to set up and run this project on your local machine.

---

## 1️⃣ Prerequisites

Make sure you have **Node.js** installed.

Check your Node.js and npm versions:
```powershell
node -v
npm -v
```
If you don’t see version numbers, download and install **Node.js LTS** from:
[https://nodejs.org](https://nodejs.org)

---

## 2️⃣ Clone the Repository

```powershell
git clone https://github.com/ginobar17/RentIT-BackDevs.git
```

---

## 3️⃣ Navigate to the Frontend Folder

```powershell
cd RentIT-BackDevs/frontend
```

---

## 4️⃣ Install Dependencies

```powershell
npm install
```
This command will install all required packages as listed in `package.json`.

---

## 5️⃣ Start the Development Server

```powershell
npm run dev
```
After starting, you will see a URL like:

```
Local: http://localhost:5173/
```
Open it in your browser to view the project.

---

## 6️⃣ Troubleshooting

If you encounter issues after renaming folders or moving files, try:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

---

✅ You’re now ready to develop and test the project locally.
