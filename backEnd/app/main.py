from fastapi import FastAPI
from routers import book

app = FastAPI()

app.include_router(book.router)
