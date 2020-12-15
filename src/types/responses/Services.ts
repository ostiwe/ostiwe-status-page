interface ServiceIncidentsInterface {
    date: number,
    amount: number,
}

export interface Service {
    id: number,
    title: string,
    uptime: number,
    lastCheck: number,
    responseTime: number,
    incidents: ServiceIncidentsInterface[],
    status: 'online' | 'offline' | 'warning'
}

export interface ServicesResponseInterface {
    data: Service[]
}

export type ServicesResponse = ServicesResponseInterface