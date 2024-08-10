from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


people = [
    {"name": "Sam"},
    {"name": "Tim"},
    {"name": "Ant"},
    {"name": "Claire"},
    {"name": "Nate"},
]


###########################################################


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/people")
def get_people():
    return people
