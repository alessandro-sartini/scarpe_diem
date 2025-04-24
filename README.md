# Scarpe Diem

Scarpe Diem è un progetto e-commerce dedicato alla vendita di scarpe di alta qualità. Il progetto è stato sviluppato con un'architettura full-stack, utilizzando tecnologie moderne per garantire un'esperienza utente fluida e funzionale. Questo progetto è ideale per essere presentato come portfolio, evidenziando le competenze in sviluppo web, integrazione di chatbot con intelligenza artificiale e gestione di database.

## Funzionalità principali

### 1. Catalogo prodotti

- Visualizzazione di un'ampia gamma di scarpe con immagini, descrizioni e prezzi.
- Filtri per categoria, taglia e disponibilità.
- Sistema di gestione delle taglie e delle quantità in tempo reale.

### 2. Carrello e Checkout

- Aggiunta di prodotti al carrello con selezione della taglia e quantità.
- Validazione in tempo reale della disponibilità dei prodotti.
- Procedura di checkout con inserimento dei dati di spedizione e pagamento.

### 3. Wishlist

- Possibilità di salvare i prodotti preferiti in una lista dei desideri.
- Gestione della wishlist con salvataggio locale.

### 4. ChatBot con IA Gemini

- Integrazione di un chatbot basato sull'intelligenza artificiale Gemini.
- Il chatbot è collegato al database e fornisce risposte personalizzate sui prodotti disponibili.
- Funzionalità di assistenza per ordini, informazioni sui prodotti e promozioni.

### 5. Backend robusto

- API RESTful per la gestione dei prodotti, ordini e utenti.
- Connessione a un database MySQL per la gestione dei dati.
- Middleware per la gestione degli errori e delle immagini.

### 6. Frontend moderno

- Interfaccia utente sviluppata con React e Vite per un'esperienza veloce e reattiva.
- Design responsivo per garantire la compatibilità con dispositivi mobili e desktop.

## Tecnologie utilizzate

### Frontend

- **React**: Libreria per la creazione di interfacce utente.
- **Vite**: Strumento di build per un rapido sviluppo.
- **CSS**: Stile personalizzato per un design moderno e accattivante.

### Backend

- **Node.js**: Ambiente di runtime per JavaScript.
- **Express**: Framework per la creazione di API RESTful.
- **MySQL**: Database relazionale per la gestione dei dati.
- **Nodemailer**: Per l'invio di email di conferma ordine.

### Intelligenza Artificiale

- **Gemini AI**: Modello generativo per il chatbot, integrato con il database per risposte personalizzate.

## Struttura del progetto

### Backend

- **Controllers**: Contiene la logica per la gestione dei prodotti, ordini e chatbot.
- **Middlewares**: Gestione degli errori e delle immagini.
- **Public**: Contiene le immagini dei prodotti.
- **Routers**: Definizione delle rotte API.

### Frontend

- **Components**: Componenti riutilizzabili come carrello, wishlist e chatbot.
- **Pages**: Pagine principali come catalogo, checkout e homepage.
- **Contexts**: Gestione dello stato globale con React Context.
- **Style**: File CSS per lo stile dell'applicazione.

## Come eseguire il progetto

### Prerequisiti

- Node.js
- MySQL

### Istruzioni

1. Clonare il repository.
2. Installare le dipendenze con `npm install` sia nella cartella `backend` che `frontend`.
3. Configurare il database MySQL utilizzando il file `scarpeDiemDB.sql`.
4. Avviare il backend con `npm start` nella cartella `backend`.
5. Avviare il frontend con `npm run dev` nella cartella `frontend`.
6. Accedere all'applicazione su `http://localhost:5173`.

## Contatti

Per ulteriori informazioni, contattami all'indirizzo email: ale.sartini.98@gmail.com.
