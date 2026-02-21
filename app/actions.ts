// Stub file for static export - server actions are not supported
export type State = {
    success: boolean;
    message: string | null;
    errors?: {
        name?: string[];
        email?: string[];
        interest?: string[];
        projectDetails?: string[];
    };
};

export async function submitProjectForm(prevState: State, formData: FormData): Promise<State> {
    // For static export, form submissions won't work
    // You can integrate with a third-party service like Formspree, Basin, or Netlify Forms
    return {
        success: false,
        message: 'Form submission is disabled in static mode. Please email us directly at contact@zenitholabs.com'
    };
}
