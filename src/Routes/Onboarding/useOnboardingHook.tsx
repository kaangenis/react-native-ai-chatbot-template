import { useNavigateHook } from "../../Hooks/useNavigateHook";

export const useOnboardingHook = () => {
    const { replace } = useNavigateHook();

    const navigateToHome = () => {
        replace('Home');
    };

    return {
        navigateToHome
    }
};