"use client";

import { useTransition } from "react";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { onBlock, onUnblock } from "@/actions/block";
interface ActionsProps {
    isFollowing: boolean
    userId: string
}  

export const Actions = ({
    isFollowing,
    userId,
}: ActionsProps) => {

    const [isPending, startTransition] = useTransition();

    const handleFollow = () => {
        startTransition(() => {
        onFollow(userId)
            .then((data) => toast.success(`You followed ${data.following.username}`))
            .catch(() => toast.error("Something went wrong"));
        });
    };

    const handleUnfollow = () => {
        startTransition(() => {
        onUnfollow(userId)
            .then((data) => toast.success(`You unfollowed ${data.following.username}`))
            .catch(() => toast.error("Something went wrong"));
        });
    };

    const onClick = () => {
        if (isFollowing) {
          handleUnfollow();
        } else {
          handleFollow();
        }
      }

    const handleBlock = () => {
      startTransition(() =>{
        onBlock(userId)
        .then((data) => toast.success(`You blocked ${data.blocked.username}`))
        .catch(() => toast.error("Something went wrong"));
    
      })
    }  

    const handleUnblock = () => {
      startTransition(() =>{
        onUnblock(userId)
        .then((data) => toast.success(`You unblocked ${data.blocked.username}`))
        .catch(() => toast.error("Something went wrong"));
    
      })
    }  

    
    return (
      <>
        <Button 
      onClick={onClick} 
      disabled={isPending} 
      variant="primary"
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>

    <Button
      onClick={handleUnblock}
      disabled={isPending}
      >
      Block
    </Button>
    </>
    );
};