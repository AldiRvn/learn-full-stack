from typing import Optional
import uuid
from fastapi import APIRouter
from pydantic import BaseModel, PrivateAttr


class Book(BaseModel):
    id: str
    name: str
    description: str
    price: float


router = APIRouter(prefix="/book")


def upsert(book: Book, isUpdate: bool):
    if isUpdate == False:
        book.id = uuid.uuid4()
    return book


@router.post("/")
def create(book: Book):
    return upsert(book, False)


@router.get("/")
def read(page: int, size: int):
    return []


@router.put("/")
def update(book: Book):
    return upsert(book, True)


@router.delete("/")
def delete(id: str):
    return {}
