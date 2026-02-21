// Stub file for static export - server actions are not supported
export type LoginState = {
    success: boolean;
    message: string | null;
};

export async function adminLogin(prevState: LoginState, formData: FormData): Promise<LoginState> {
    return { success: false, message: 'Admin features are disabled in static export' };
}

export async function adminLogout() {
    // No-op for static export
}

export async function checkAdminAuth(): Promise<boolean> {
    return false;
}

export async function getSubmissions() {
    return [];
}

export type Submission = {
    id: number;
    name: string;
    phone: string | null;
    email: string;
    company: string | null;
    interest: string | null;
    projectDetails: string | null;
    timeline: string | null;
    createdAt: Date;
};
