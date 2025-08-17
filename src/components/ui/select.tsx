"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex h-10 gap-4 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <FontAwesomeIcon icon={faChevronDown} className="h-4 opacity-50" />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            sideOffset={4}
            className={cn(
                "relative z-50 overflow-hidden rounded-md border bg-card text-card-foreground shadow-md animate-in fade-in-80",
                position === "popper" && "translate-y-1",
                className
            )}
            position={position}
            {...props}
        >
            <SelectPrimitive.Viewport
                className={cn(
                    "p-1",
                    position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-[var(--radix-select-trigger-width)]"
                )}
            >
                {children}
            </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 ps-2 pe-8 text-sm outline-none focus:bg-muted focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        {...props}
    >
        <span className="absolute right-2 flex h-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <FontAwesomeIcon icon={faCheck} className="h-4" />
            </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
};