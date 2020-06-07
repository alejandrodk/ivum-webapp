# IVUM | Instituto Venezolano de Ultrasonido en Medicina
-----------------------------------------------------------------------------------
### API
|Collection     |Method  |Description           |Endpoint       |Options                                           |
|---------------|--------|----------------------|---------------|--------------------------------------------------|
|Usuarios       |GET     |Find all users        |/usuarios/     |Options                                           |
|Usuarios       |GET     |Find user by PK       |/usuarios/:id  |Options                                           |
|Usuarios       |POST    |Create new user       |/usuarios/     |Options                                           |
|Usuarios       |PATCH   |Update user info by PK|/usuarios/:id  |Options                                           |
|Usuarios       |DELETE  |Delete user by PK     |/usuarios/:id  |Options                                           |
|Pacientes      |GET     |Find all pacients     |/pacientes/    |Options                                           |
|Pacientes      |GET     |Find pacient by PK    |/pacientes/:id |Options                                           |
|Pacientes      |POST    |Create new pacient    |/pacientes/    |Options                                           |
|Pacientes      |PATCH   |Update pacient by PK  |/pacientes/:id |Options                                           |
|Pacientes      |DELETE  |Delete pacient by PK  |/pacientes/:id |Options                                           |
|Exámenes       |GET     |Find All services     |/examenes/     |search (str) / price_detail (bool) / limit (int)  |
|Exámenes       |GET     |Find service by PK    |/examenes/:id  |price_detail (bool)                               |
|Exámenes       |POST    |Create new service    |/examenes/     |                                                  |
|Exámenes       |PATCH   |Update Service info   |/examenes/:id  |                                                  |
|Exámenes       |DELETE  |Delete Service by PK  |/examenes/:id  |                                                  |
|Cotizaciones   |GET     |Find all Currents     |/cotizaciones  |                                                  |

