import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '@/app.globals';
import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${Globals.API_ENDPOINT}/users/list`);
    }

    getById(id: number) {
        return this.http.get(`${Globals.API_ENDPOINT}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${Globals.API_ENDPOINT}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${Globals.API_ENDPOINT}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${Globals.API_ENDPOINT}/users/${id}`);
    }
}
