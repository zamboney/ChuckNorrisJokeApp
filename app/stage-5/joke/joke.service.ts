import { Injectable } from "@angular/core";
import { getJSON } from "http";

export interface Joke {
    id: number;
    text: string;
}

@Injectable()
export class JokeService {
    private jokes = new Array<Joke>()
    public get(firstName: string, lastName: string): Promise<Joke> {
        return getJSON(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
            .then((data: any) => {
                return (<Joke>{
                    id: data.value.id,
                    text: data.value.joke
                })
            })
    }

}