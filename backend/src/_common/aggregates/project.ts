export class Project {
    issues: [Issue]

    constructor(
        public project_name: string) {
    }
}

export class Sprint {
    constructor(
        public name: string) {
    }
}


export class Issue {
    tasks = [Task]
    comments: [string]
    files: [] // not sure how to type this
    images: []

    constructor(
        public created_at: Date,
        public description: string,) {
    }
}

export class Task {
    status = new Map<Sprint, TaskStatus>()

    constructor(
        public description: string,
        private complete: Map<Sprint, boolean>) {
    }
}


export enum TaskStatus {
    OPEN, IN_PROGRES
}
