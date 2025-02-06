"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useSubscriptionModal } from "@/features/subscriptions/store/use-subscription-modal";
import { Dialog, DialogTitle, DialogFooter, DialogHeader, DialogContent, DialogDescription } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const SubscriptionModal = () => {
    const { isOpen, onClose } = useSubscriptionModal();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader className="flex items-center space-y-4">
                    <Image src="/logo.svg" alt="Logo" width={36} height={36} />
                    <DialogTitle className="text-center">Subscribe to unlock premium features</DialogTitle>
                    <DialogDescription className="text-center">Unlock premium features to get access to exclusive content.</DialogDescription>
                </DialogHeader>
                <Separator />
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <CheckCircle2 className="size-5 mr-2 fill-blue-500 text-white" />
                        <p className="text-sm text-muted-foreground">Unlimited projects</p>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle2 className="size-5 mr-2 fill-blue-500 text-white" />
                        <p className="text-sm text-muted-foreground">Unlimited templates</p>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle2 className="size-5 mr-2 fill-blue-500 text-white" />
                        <p className="text-sm text-muted-foreground">AI Background removal</p>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle2 className="size-5 mr-2 fill-blue-500 text-white" />
                        <p className="text-sm text-muted-foreground">AI Image generation</p>
                    </li>
                </ul>
                <DialogFooter className="pt-2 mt-4 gap-y-2">
                    <Button className="w-full" onClick={() => {}} disabled={false}>Upgrade</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};