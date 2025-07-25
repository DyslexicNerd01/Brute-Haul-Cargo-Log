# Brute Haul Cargo Log Backend

## Setup Instructions

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Environment Variables
Create a `.env` file in the project root with:
```
DISCORD_TOKEN=your_discord_bot_token_here
```

### 3. Google Sheets Credentials
Place your `brute-haul-bot.json` Google Service Account credentials file in the project root.

### 4. Run the Server
```bash
python backend.py
```

The server will start on `http://localhost:10478`

## Endpoints

- `GET /health` - Health check endpoint
- `POST /send-discord` - Send manifest to Discord

## Security Notes

- Never commit `.env` files or credentials to version control
- The Discord token should be set as an environment variable on your server
- Google Sheets credentials should be securely stored on the server

## Deployment

When deploying to your server:
1. Set the `DISCORD_TOKEN` environment variable
2. Upload the Google Sheets credentials file
3. Install dependencies with `pip install -r requirements.txt`
4. Run the application
