import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Settings } from './settings.model';
import { Usuario } from '../services/usuario';

@Injectable()
export class AppSettings {
    public usuario:Usuario;
    constructor(private auth: AuthService) { 
        this.usuario = this.auth.obtenerDatosUser();
    }
    public settings = new Settings(
        this.usuario,
        false
    )
}

