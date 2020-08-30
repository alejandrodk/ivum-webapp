# IVUM | Instituto Venezolano de Ultrasonido en Medicina

---

### API

| Collection   | Method | Description              | Endpoint                    | Options                                          |
| ------------ | ------ | ------------------------ | --------------------------- | ------------------------------------------------ |
| Usuarios     | GET    | Find all users           | /usuarios/                  |                                                  |
| Usuarios     | GET    | Find user by PK          | /usuarios/:id               |                                                  |
| Usuarios     | POST   | Create new user          | /usuarios/                  |                                                  |
| Usuarios     | PATCH  | Update user info by PK   | /usuarios/:id               |                                                  |
| Usuarios     | DELETE | Delete user by PK        | /usuarios/:id               |                                                  |
| Pacientes    | GET    | Find all pacients        | /pacientes/                 |                                                  |
| Pacientes    | GET    | Find pacient by PK       | /pacientes/:id              |                                                  |
| Pacientes    | POST   | Create new pacient       | /pacientes/                 |                                                  |
| Pacientes    | PATCH  | Update pacient by PK     | /pacientes/:id              |                                                  |
| Pacientes    | DELETE | Delete pacient by PK     | /pacientes/:id              |                                                  |
| Exámenes     | GET    | Find All services        | /examenes/                  | search (str) / price_detail (bool) / limit (int) |
| Exámenes     | GET    | Find service by PK       | /examenes/:id               | price_detail (bool)                              |
| Exámenes     | GET    | Find doctors associates  | /examenes/:id/especialistas |                                                  |
| Exámenes     | POST   | Create new service       | /examenes/                  |                                                  |
| Exámenes     | PATCH  | Update Service info      | /examenes/:id               |                                                  |
| Exámenes     | DELETE | Delete Service by PK     | /examenes/:id               |                                                  |
| Cotizaciones | GET    | Find all Currents        | /cotizaciones               |                                                  |
| Medicos      | GET    | Find all doctors         | /medicos/                   |                                                  |
| Medicos      | GET    | Find doctor by PK        | /medicos/:id                |                                                  |
| Medicos      | POST   | Create new doctor        | /medicos/                   |                                                  |
| Medicos      | PATCH  | Update doctor info by PK | /medicos/:id                |                                                  |
| Medicos      | DELETE | Delete doctor by PK      | /medicos/:id                |                                                  |
