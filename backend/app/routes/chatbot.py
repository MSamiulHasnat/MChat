from fastapi import APIRouter
from app.models import Message

router = APIRouter()

@router.get("/")
async def get_chatbot_message():
    return {"message": "Chatbot route working!"}

@router.post("/")
async def post_chatbot_message(msg: Message):
    return {"response": f"Received message from {msg.sender}: {msg.content}"}
