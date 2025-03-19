from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import chatbot, dashboard

app = FastAPI(title="MChat API")

# Allow CORS for local testing; update as needed
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the chatbot and dashboard routes
app.include_router(chatbot.router, prefix="/chatbot")
app.include_router(dashboard.router, prefix="/dashboard")

@app.get("/")
async def root():
    return {"message": "Welcome to MChat API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("run:app", host="127.0.0.1", port=8000, reload=True)
