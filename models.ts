export interface UserModel {
    id: string
    name: string
    email: string
    password: string
    events: string[]
    inscriptions: string[]
    rewards: string[]
}

export interface EventModel {
    id: string
    organizer_id: string
    name: string
    description: string
    date: string
    location: string
    inscriptions: string[]
    rewards: string
}

export interface InscriptionModel {
    id: string
    user_id: string
    event_id: string
    date: string
    asistance_id: string | null
}

export interface AsistanceModel {
    id: string
    inscription_id: string
    date: string
}

export interface RewardModel {
    id: string
    event_id: string
    winner_id: string
}