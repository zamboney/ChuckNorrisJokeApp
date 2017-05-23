import { Injectable } from "@angular/core";
import { getJSON } from "http";
import { decodeHTML } from "entities";
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
                let joke: Joke = {
                    id: data.value.id,
                    text: decodeHTML(data.value.joke)
                }
                this.jokes.push(joke);
                return joke;
            })
    }
    public getJokes(): Array<Joke> {
        return this.jokes
    }

}