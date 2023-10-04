import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import avatarLight from "@assets/avatar/default avatar light.svg";
import { cn } from "@utils/utils";

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  text?: string;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, children, text, ...props }, ref) => (
  <div className="flex flex-col items-center justify-center ">
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
    <span className="text-avatar-foreground">{text}</span>
  </div>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("object-cover aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const UserAvatar: React.FC<{ src?: string; className?: string }> = ({
  src,
  className,
}) => {
  const img = src ? src : avatarLight;
  return (
    <Avatar className={className}>
      <AvatarImage src={img} />
      <AvatarFallback>Avatar</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
