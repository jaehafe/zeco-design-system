import * as React from "react";
import * as RadixHoverCard from "@radix-ui/react-hover-card";
import * as S from "./style";

export interface HoverCardProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

export default function HoverCard({ children, content }: HoverCardProps) {
  return (
    <RadixHoverCard.Root openDelay={300}>
      <RadixHoverCard.Trigger>{children}</RadixHoverCard.Trigger>
      <RadixHoverCard.Portal>
        <S.HoverCardContainer>
          <RadixHoverCard.Content className="RadixHoverCardContent" sideOffset={5}>
            {content}
          </RadixHoverCard.Content>
        </S.HoverCardContainer>
      </RadixHoverCard.Portal>
    </RadixHoverCard.Root>
  );
}
