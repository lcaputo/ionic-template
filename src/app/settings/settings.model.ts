import { Usuario } from '../services/usuario';

export class Settings {
    constructor(
                public usuario:Usuario,
                public authenticated: boolean,
                ) { }
}