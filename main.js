import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'
import process from 'node:process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Keep a global reference of the window object to prevent garbage collection
let mainWindow

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js') // Optional: for exposing APIs
    }
  })

  // Determine what to load based on the environment
  if (process.env.NODE_ENV === 'development') {
    // Load from Vite dev server
    mainWindow.loadURL('http://localhost:5173')
    // Open DevTools in development
    mainWindow.webContents.openDevTools()
  } else {
    // Load the built app in production
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'))
  }

  // When window is closed
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// Create window when app is ready
app.whenReady().then(createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})