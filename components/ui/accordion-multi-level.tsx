"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Mountain, BookOpen, Flower2, RotateCcw, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Primitives ---

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-primary-bg/20", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionHeader = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Header>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Header
    ref={ref}
    className={cn("flex", className)}
    {...props}
  />
));
AccordionHeader.displayName = AccordionPrimitive.Header.displayName;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { hideChevron?: boolean }
>(({ className, children, hideChevron, ...props }, ref) => (
  <AccordionHeader className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-accent-red [&[data-state=open]>svg.default-chevron]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      {!hideChevron && (
        <ChevronDown className="default-chevron h-4 w-4 shrink-0 transition-transform duration-200" />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionHeader>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// --- Multi-Level Implementation ---

const data = [
  {
    id: "item-1",
    title: "الأرض",
    icon: Mountain,
    children: [
      {
        id: "sub-1-1",
        title: "علاقة الإنسان بالأرض",
        content: "ينطلق الفيلم من علاقة الإنسان بأرضه، لا بوصفها مكانًا للسكن فقط، بل كجزء من الذاكرة والهوية والانتماء."
      },
      {
        id: "sub-1-2",
        title: "بلدة طيبة",
        content: "تظهر الطيبة كمساحة تختصر حكاية الإنسان الجنوبي، حيث تتداخل الأرض مع الحكايات والبيوت والطرقات والوجوه."
      }
    ]
  },
  {
    id: "item-2",
    title: "الذاكرة",
    icon: BookOpen,
    children: [
      {
        id: "sub-2-1",
        title: "ما يبقى",
        content: "حين يبتعد الإنسان عن أرضه، لا تختفي البلدة من داخله. تبقى في الصور، والقصص، والأصوات، والتفاصيل الصغيرة التي تحمل المكان معه."
      },
      {
        id: "sub-2-2",
        title: "الوجوه والحكايات",
        content: "يعتمد الفيلم على شهادات الناس وذكرياتهم ليجعل الذاكرة مساحة حية تستعيد المكان حتى في لحظات الغياب."
      }
    ]
  },
  {
    id: "item-3",
    title: "التضحية",
    icon: Flower2,
    children: [
      {
        id: "sub-3-1",
        title: "الأمهات",
        content: "تأخذ شهادات الأمهات مساحة أساسية في الفيلم، لتكشف كيف تتقاطع الفقدان والتضحية والانتماء في حكاية واحدة."
      },
      {
        id: "sub-3-2",
        title: "شقائق النعمان",
        content: "تتحول شقائق النعمان إلى رمز بصري متكرر في الفيلم، تربط بين الأرض والدم والذاكرة واستمرار الحياة."
      }
    ]
  },
  {
    id: "item-4",
    title: "العودة",
    icon: RotateCcw,
    children: [
      {
        id: "sub-4-1",
        title: "من الغياب إلى الرجوع",
        content: "لا يتعامل الفيلم مع الابتعاد بوصفه نهاية الحكاية، بل كمرحلة مؤقتة ضمن علاقة أعمق بين الإنسان وأرضه."
      },
      {
        id: "sub-4-2",
        title: "الأرض لا تُنسى",
        content: "تصل الحكاية إلى فكرة العودة بوصفها امتدادًا طبيعيًا للانتماء، حيث يبقى الارتباط بالأرض أقوى من المسافة."
      }
    ]
  }
];

export function AccordionMultiLevel() {
  return (
    <div className="w-full max-w-2xl mx-auto font-body" dir="rtl">
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-text-secondary/20 rounded-lg bg-surface/50 overflow-hidden transition-colors hover:bg-surface/80 data-[state=open]:bg-surface/80"
          >
            <AccordionTrigger 
              hideChevron 
              className="px-6 py-5 hover:no-underline hover:text-primary-text group"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-deep-green/5 text-deep-green transition-colors group-data-[state=open]:bg-deep-green group-data-[state=open]:text-primary-bg">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 text-right">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-text transition-colors group-hover:text-accent-red group-data-[state=open]:text-deep-green">
                    {item.title}
                  </h3>
                </div>
                <div className="relative flex h-6 w-6 items-center justify-center text-text-secondary group-data-[state=open]:text-deep-green transition-colors">
                  <Plus className="absolute h-5 w-5 transition-all duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                  <Minus className="absolute h-5 w-5 -rotate-90 opacity-0 transition-all duration-300 group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100" />
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="px-6 pb-6 pt-2">
              <Accordion type="multiple" className="w-full space-y-3">
                {item.children.map((child) => (
                  <AccordionItem 
                    key={child.id} 
                    value={child.id} 
                    className="border-none rounded-md bg-primary-bg/50 px-4 py-1"
                  >
                    <AccordionTrigger className="hover:no-underline py-3">
                      <h4 className="font-heading text-lg font-semibold text-primary-text/90 hover:text-accent-red transition-colors text-right flex-1">
                        {child.title}
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary/90 text-base leading-relaxed pb-3">
                      {child.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
