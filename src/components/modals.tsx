"use client";

import { useState, useEffect } from "react";
import { SubscriptionModal } from "@/features/subscriptions/components/subscription-modal";
import { SuccessModal } from "@/features/subscriptions/components/success-modal";
import { FailModal } from "@/features/subscriptions/components/fail-modal";

export const Modals = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return (
        <>
            <FailModal />
            <SuccessModal />
            <SubscriptionModal />
        </>
    );
}