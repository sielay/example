export interface Graph {
    data: any;
    links: {
        self?: string;
        next?: string;
        previous?: string;
    }
}