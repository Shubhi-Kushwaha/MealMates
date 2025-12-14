from fastapi import FastAPI, Header, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
import os

app = FastAPI(title="MealMates Order Service")

def verify_internal_token(authorization: Optional[str] = Header(None)):
    token = None
    if authorization and authorization.startswith("Bearer "):
        token = authorization.split(" ", 1)[1]
    env_token = os.getenv("FASTAPI_SERVICE_TOKEN")
    if env_token:
        if not token or token != env_token:
            raise HTTPException(status_code=401, detail="Unauthorized")
    # If no env token set allow local dev

class OrderStatusUpdate(BaseModel):
    orderId: int
    status: str

class NotificationPayload(BaseModel):
    userId: int
    title: str
    body: str

class AnalyticsQuery(BaseModel):
    from_ts: Optional[int]
    to_ts: Optional[int]

@app.post("/order/update-status")
async def update_status(payload: OrderStatusUpdate, auth: None = Depends(verify_internal_token)):
    # For production: replace placeholder with async DB or message queue (aiomysql / Celery / RabbitMQ)
    return {"success": True, "orderId": payload.orderId, "status": payload.status}

@app.post("/notifications/send")
async def send_notification(payload: NotificationPayload, auth: None = Depends(verify_internal_token)):
    # Async notification logic (push / email) goes here
    return {"accepted": True, "userId": payload.userId}

@app.post("/analytics/orders")
async def orders_analytics(query: AnalyticsQuery, auth: None = Depends(verify_internal_token)):
    # Async analytics/aggregation placeholder
    return {"success": True, "data": {"totalOrders": 0, "byStatus": {}}}