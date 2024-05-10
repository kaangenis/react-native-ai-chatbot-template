import { useState } from "react";
import { useNavigateHook } from "../../Hooks/useNavigateHook";

export const useHomeHook = () => {
    const [loadingPercentage, setLoadingPercentage] = useState(0)
    const [loadingModalOpen, setLoadingModalOpen] = useState(false)
    const { replace } = useNavigateHook();

    const navigateToLoading = () => {
        replace('LoadingPage')
    };

    return {
        loadingPercentage,
        loadingModalOpen,
        navigateToLoading,
    }

};