import { useSubscriptionModal } from "@/features/subscriptions/store/use-subscription-modal";

export const usePaywall = () => {
    const subscriptionModal = useSubscriptionModal();

    const shouldBlock = true; // TODO: Implement paywall logic

    return {
        isLoading: false, // TODO: Implement loading state
        shouldBlock,
        triggerPaywall: () => {
            subscriptionModal.onOpen();
        }
    };
};