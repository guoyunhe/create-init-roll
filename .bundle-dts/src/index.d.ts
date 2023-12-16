export interface CreateProjectOptions {
    packageVersion?: string;
}
export declare function createProject(project: string | null, { packageVersion }: CreateProjectOptions): Promise<void>;
