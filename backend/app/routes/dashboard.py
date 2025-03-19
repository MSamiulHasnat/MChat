from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_dashboard_info():
    return {"dashboard": "Dashboard route working!"}
